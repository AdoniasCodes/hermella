import { Suspense, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import { createMaterials } from './materials'
import { HouseModel, type HouseHandles } from './HouseModel'
import { range, smooth } from '../lib/scroll'

// Camera keyframes along the scroll: [progress, azimuth°, polar°, radius, targetY]
const KEYS: [number, number, number, number, number][] = [
  [0.0, 34, 76, 36, 3.4],
  [0.3, 92, 70, 34, 3.6],
  [0.55, 146, 64, 44, 6.6],
  [0.72, 205, 58, 40, 3.2],
  [0.96, 360, 1.5, 36, 0],
]

function cameraAt(p: number) {
  let i = 0
  while (i < KEYS.length - 2 && p > KEYS[i + 1][0]) i++
  const a = KEYS[i]
  const b = KEYS[i + 1]
  const t = smooth(range(p, a[0], b[0]))
  return a.map((v, k) => (k === 0 ? p : v + (b[k] - v) * t)) as typeof a
}

function Rig({ progress, reduced }: { progress: React.RefObject<number>; reduced: boolean }) {
  const house = useRef<HouseHandles>(null)
  const smoothed = useRef(0)
  const m = useMemo(() => createMaterials(), [])
  const { camera, size } = useThree()
  const target = useMemo(() => new THREE.Vector3(), [])
  const right = useMemo(() => new THREE.Vector3(), [])

  useFrame((state, dt) => {
    const raw = progress.current ?? 0
    smoothed.current = reduced ? raw : THREE.MathUtils.damp(smoothed.current, raw, 5, dt)
    const p = smoothed.current
    const portrait = size.width < size.height

    const [, az, pol, rad, ty] = cameraAt(p)
    const idle = reduced ? 0 : Math.sin(state.clock.elapsedTime * 0.25) * 3 * (1 - range(p, 0, 0.15))
    const mouse = reduced ? 0 : state.pointer.x * 6 * (1 - range(p, 0.7, 0.9))
    const azR = THREE.MathUtils.degToRad(az + idle + mouse)
    const polR = THREE.MathUtils.degToRad(pol - (reduced ? 0 : state.pointer.y * 3))
    const r = rad * (portrait ? 1.55 : 1)

    // On phones the name sits high, so drop the model below it until the orbit starts
    const drop = portrait ? 5.5 * (1 - range(p, 0.12, 0.32)) : 0
    target.set(0.6, ty + drop, 0)
    camera.position.set(
      target.x + r * Math.sin(polR) * Math.sin(azR),
      target.y + r * Math.cos(polR),
      target.z + r * Math.sin(polR) * Math.cos(azR),
    )
    camera.lookAt(target)

    // Push the model right of centre on wide screens so the copy can breathe on the left
    const shift = portrait ? 0 : -5.2 * (1 - range(p, 0.2, 0.45) * 0.6)
    right.setFromMatrixColumn(camera.matrix, 0).multiplyScalar(shift)
    camera.position.add(right)
    target.add(right)
    camera.lookAt(target)

    // Explode the layers apart, then lift the upper floors away to reveal the plan
    const explode = smooth(range(p, 0.36, 0.56)) * (1 - smooth(range(p, 0.66, 0.78)))
    const lift = smooth(range(p, 0.7, 0.86))
    const h = house.current
    if (!h) return
    h.layers.forEach((g, i) => {
      if (!g) return
      const upper = i >= 1
      g.position.y = explode * i * 2.3 + (upper ? lift * (6 + i * 2) : 0)
      g.position.x = upper ? lift * (18 + i * 4) : 0
      g.visible = !(upper && lift > 0.98)
    })
    const labelOpacity = smooth(range(explode, 0.55, 1))
    h.labels.forEach((el) => {
      if (el) el.style.opacity = String(labelOpacity)
    })
  })

  return (
    <>
      <hemisphereLight args={['#fffaf0', '#bdb6a8', 0.7]} />
      <directionalLight
        position={[-12, 20, 10]}
        intensity={2.3}
        color="#fff4e2"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0004}
        shadow-camera-left={-14}
        shadow-camera-right={14}
        shadow-camera-top={14}
        shadow-camera-bottom={-14}
        shadow-camera-far={60}
      />
      <Environment resolution={256} frames={1}>
        <Lightformer intensity={2} position={[0, 8, 6]} scale={[14, 4, 1]} color="#ffffff" />
        <Lightformer intensity={1.2} position={[-8, 3, -4]} rotation-y={Math.PI / 2} scale={[10, 3, 1]} color="#ffe9d0" />
        <Lightformer intensity={0.8} position={[8, 2, 4]} rotation-y={-Math.PI / 2} scale={[10, 2, 1]} color="#dfe8ea" />
      </Environment>
      <HouseModel ref={house} m={m} figureUrl={`${import.meta.env.BASE_URL}hermella.png`} />
    </>
  )
}

export default function HeroScene({ progress, active, reduced }: {
  progress: React.RefObject<number>
  active: boolean
  reduced: boolean
}) {
  return (
    <Canvas
      shadows="percentage"
      dpr={[1, 1.75]}
      frameloop={active ? 'always' : 'never'}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      camera={{ fov: 30, near: 0.5, far: 200, position: [20, 10, 20] }}
      style={{ background: 'transparent' }}
      aria-hidden
    >
      <Suspense fallback={null}>
        <Rig progress={progress} reduced={reduced} />
      </Suspense>
    </Canvas>
  )
}
