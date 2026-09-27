import { forwardRef, useMemo, useRef, useImperativeHandle } from 'react'
import * as THREE from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import type { Materials } from './materials'

type V3 = [number, number, number]

function B({ p, s, m, shadow = true }: { p: V3; s: V3; m: THREE.Material; shadow?: boolean }) {
  return (
    <mesh position={p} material={m} castShadow={shadow} receiveShadow>
      <boxGeometry args={s} />
    </mesh>
  )
}

/** Flat-topped umbrella acacia, the tree of the Rift Valley. */
function Acacia({ p, scale = 1, m }: { p: V3; scale?: number; m: Materials }) {
  return (
    <group position={p} scale={scale}>
      <mesh position={[0, 1.2, 0]} rotation={[0, 0, 0.08]} material={m.bark} castShadow>
        <cylinderGeometry args={[0.07, 0.13, 2.4, 6]} />
      </mesh>
      <mesh position={[0.35, 2.05, 0.1]} rotation={[0.2, 0, -0.5]} material={m.bark} castShadow>
        <cylinderGeometry args={[0.04, 0.07, 1.2, 5]} />
      </mesh>
      <mesh position={[0.15, 2.7, 0]} scale={[2.1, 0.42, 1.7]} material={m.canopy} castShadow>
        <icosahedronGeometry args={[1, 1]} />
      </mesh>
      <mesh position={[0.9, 2.5, 0.4]} scale={[1.1, 0.3, 0.9]} material={m.canopy} castShadow>
        <icosahedronGeometry args={[1, 1]} />
      </mesh>
    </group>
  )
}

function Label({ position, index, title, spec, labelRef }: {
  position: V3
  index: string
  title: string
  spec: string
  labelRef: (el: HTMLDivElement | null) => void
}) {
  return (
    <Html position={position} zIndexRange={[20, 0]} style={{ pointerEvents: 'none' }}>
      <div ref={labelRef} className="flex items-center gap-3 whitespace-nowrap" style={{ opacity: 0 }}>
        <span className="block h-px w-10 bg-[#121211]" />
        <div className="rounded-sm bg-[#F3F2EE]/90 px-2.5 py-1.5 backdrop-blur-sm">
          <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#A4532C]">{index}</div>
          <div className="font-sans text-[13px] font-semibold leading-tight text-[#121211]">{title}</div>
          <div className="font-mono text-[10px] text-[#6B6862]">{spec}</div>
        </div>
      </div>
    </Html>
  )
}

export interface HouseHandles {
  layers: (THREE.Group | null)[]
  labels: (HTMLDivElement | null)[]
}

export const HouseModel = forwardRef<HouseHandles, { m: Materials; figureUrl: string }>(function HouseModel({ m, figureUrl }, ref) {
  const layers = useRef<(THREE.Group | null)[]>([])
  const labels = useRef<(HTMLDivElement | null)[]>([])
  useImperativeHandle(ref, () => ({ layers: layers.current, labels: labels.current }))

  const loaded = useLoader(THREE.TextureLoader, figureUrl)
  const figure = useMemo(() => {
    const t = loaded.clone()
    t.colorSpace = THREE.SRGBColorSpace
    t.needsUpdate = true
    return t
  }, [loaded])

  const mullions = useMemo(() => Array.from({ length: 7 }, (_, i) => -4 + i * 1.33), [])
  const fins = useMemo(() => Array.from({ length: 16 }, (_, i) => 2.9 + i * 0.165), [])

  // Scale figure turns to face the camera, like a cut-out in a physical model
  const person = useRef<THREE.Mesh>(null)
  useFrame(({ camera }) => {
    const f = person.current
    if (!f) return
    const w = f.getWorldPosition(new THREE.Vector3())
    f.rotation.y = Math.atan2(camera.position.x - w.x, camera.position.z - w.z)
  })

  const setLayer = (i: number) => (g: THREE.Group | null) => { layers.current[i] = g }
  const setLabel = (i: number) => (el: HTMLDivElement | null) => { labels.current[i] = el }

  return (
    <group>
      {/* 00 Site: plinth, pool, planting, path */}
      <group>
        <B p={[0.5, -0.25, 0]} s={[19, 0.5, 13]} m={m.plinth} />
        <B p={[-5.2, 0.02, 4.4]} s={[5.6, 0.04, 2.6]} m={m.water} shadow={false} />
        <B p={[-5.2, 0.005, 4.4]} s={[6, 0.02, 3]} m={m.basalt} shadow={false} />
        <B p={[6.6, 0.03, -3.8]} s={[4.4, 0.06, 3.6]} m={m.grass} shadow={false} />
        <B p={[-6.8, 0.03, -3.6]} s={[3.6, 0.06, 4]} m={m.grass} shadow={false} />
        {[0, 1, 2, 3].map((i) => (
          <B key={i} p={[1.6 + i * 0.25, 0.02, 4.1 + i * 0.75]} s={[1.3, 0.04, 0.5]} m={m.concrete} shadow={false} />
        ))}
        <Acacia p={[6.8, 0, -4]} m={m} scale={1.25} />
        <Acacia p={[-7.2, 0, -3.4]} m={m} />
        <Acacia p={[7.8, 0, 3.6]} m={m} scale={0.8} />
      </group>

      {/* 01 Ground pavilion: basalt spine, rammed-earth wall, glass */}
      <group ref={setLayer(0)}>
        <B p={[0.5, 0.125, 0]} s={[11.4, 0.25, 7.6]} m={m.concrete} />
        <B p={[-4.7, 1.75, 0]} s={[0.5, 3, 7.4]} m={m.basalt} />
        <B p={[0.3, 1.75, -3.45]} s={[9.6, 3, 0.5]} m={m.earth} />
        <B p={[0.4, 1.75, -0.55]} s={[8.3, 2.95, 5.3]} m={m.glass} shadow={false} />
        {mullions.map((x) => (
          <B key={x} p={[x + 0.4, 1.75, 2.1]} s={[0.05, 2.95, 0.05]} m={m.steel} />
        ))}
        <B p={[-1.6, 0.7, -1.4]} s={[2.4, 0.9, 0.9]} m={m.timberSolid} />
        <B p={[2.1, 0.48, 0.2]} s={[2.3, 0.45, 0.95]} m={m.fabric} />
        <B p={[2.1, 0.8, -0.2]} s={[2.3, 0.35, 0.2]} m={m.fabric} />
        {[-2.6, 2.6].map((z) => (
          <mesh key={z} position={[6.2, 1.75, z]} material={m.steel} castShadow>
            <cylinderGeometry args={[0.07, 0.07, 3, 8]} />
          </mesh>
        ))}
        <mesh ref={person} position={[3.4, 1.08, 3.3]}>
            <planeGeometry args={[0.57, 1.65]} />
          <meshBasicMaterial map={figure} transparent alphaTest={0.4} toneMapped={false} side={THREE.DoubleSide} />
        </mesh>
        <Label position={[6.6, 1.2, 0]} index="01 / Ground" title="Open pavilion" spec="Basalt spine + 450 mm rammed earth" labelRef={setLabel(0)} />
      </group>

      {/* 02 Floor slab with the cantilever */}
      <group ref={setLayer(1)}>
        <B p={[0.9, 3.4, 0]} s={[12, 0.3, 7.6]} m={m.concrete} />
        <B p={[0.9, 3.56, 3.05]} s={[11.8, 0.03, 1.5]} m={m.timberSolid} shadow={false} />
        <B p={[0.9, 4.05, 3.76]} s={[11.8, 1, 0.04]} m={m.glass} shadow={false} />
        {[-3.8, -1.2, 5.6].map((x) => (
          <B key={x} p={[x, 3.8, 2.6]} s={[1.2, 0.45, 0.45]} m={m.grass} />
        ))}
        <Label position={[7.2, 3.4, 0]} index="02 / Slab" title="Terrace plate" spec="300 mm concrete, 3.5 m cantilever" labelRef={setLabel(1)} />
      </group>

      {/* 03 Timber volume */}
      <group ref={setLayer(2)}>
        <B p={[1.4, 5, -2.05]} s={[8, 2.9, 3]} m={m.timber} />
        <B p={[-1.85, 5, 0.75]} s={[1.5, 2.9, 2.6]} m={m.timber} />
        <B p={[2.4, 5, 0.75]} s={[6, 2.85, 2.6]} m={m.glass} shadow={false} />
        {fins.map((x) => (
          <B key={x} p={[x, 5, 2.12]} s={[0.07, 2.9, 0.22]} m={m.timberSolid} />
        ))}
        <Label position={[6.2, 5, 0]} index="03 / Upper" title="Timber volume" spec="Cedar fins filter west light" labelRef={setLabel(2)} />
      </group>

      {/* 04 Roof plate */}
      <group ref={setLayer(3)}>
        <B p={[1.4, 6.41, -0.3]} s={[9.2, 0.08, 6.2]} m={m.basalt} />
        <B p={[1.4, 6.6, -0.3]} s={[9.6, 0.3, 6.6]} m={m.concrete} />
        <B p={[-0.4, 6.86, -1.1]} s={[2.2, 0.22, 1.2]} m={m.glass} shadow={false} />
        <Label position={[6.4, 6.6, 0]} index="04 / Roof" title="Floating roof" spec="1.2 m overhang shades the glass" labelRef={setLabel(3)} />
      </group>
    </group>
  )
})
