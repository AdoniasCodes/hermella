import * as THREE from 'three'

function canvasTexture(w: number, h: number, draw: (ctx: CanvasRenderingContext2D) => void, repeat: [number, number]) {
  const c = document.createElement('canvas')
  c.width = w
  c.height = h
  const ctx = c.getContext('2d')!
  draw(ctx)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.repeat.set(...repeat)
  t.anisotropy = 4
  return t
}

// Deterministic noise so the model looks the same on every load
function rng(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }
}

/** Horizontal compacted strata, the signature of rammed earth. */
export function rammedEarthTexture() {
  const r = rng(7)
  return canvasTexture(256, 256, (ctx) => {
    let y = 0
    while (y < 256) {
      const h = 6 + r() * 16
      const tone = 150 + r() * 40
      ctx.fillStyle = `rgb(${tone + 22}, ${tone - 18}, ${tone - 58})`
      ctx.fillRect(0, y, 256, h)
      ctx.fillStyle = 'rgba(80, 40, 20, 0.18)'
      ctx.fillRect(0, y + h - 1, 256, 1)
      y += h
    }
    for (let i = 0; i < 900; i++) {
      ctx.fillStyle = `rgba(60, 30, 15, ${r() * 0.12})`
      ctx.fillRect(r() * 256, r() * 256, 1 + r() * 2, 1)
    }
  }, [2, 1])
}

/** Vertical cedar boards with slight tonal drift. */
export function timberTexture() {
  const r = rng(11)
  return canvasTexture(256, 256, (ctx) => {
    const board = 16
    for (let x = 0; x < 256; x += board) {
      const t = r()
      ctx.fillStyle = `rgb(${128 + t * 30}, ${80 + t * 20}, ${48 + t * 12})`
      ctx.fillRect(x, 0, board, 256)
      for (let g = 0; g < 6; g++) {
        ctx.fillStyle = `rgba(60, 32, 16, ${0.08 + r() * 0.1})`
        ctx.fillRect(x + r() * board, 0, 1, 256)
      }
      ctx.fillStyle = 'rgba(35, 20, 10, 0.55)'
      ctx.fillRect(x, 0, 1, 256)
    }
  }, [3, 1])
}

export function createMaterials() {
  const earthMap = rammedEarthTexture()
  const timberMap = timberTexture()
  return {
    concrete: new THREE.MeshStandardMaterial({ color: '#ECEAE4', roughness: 0.88 }),
    plinth: new THREE.MeshStandardMaterial({ color: '#DAD6CC', roughness: 0.95 }),
    basalt: new THREE.MeshStandardMaterial({ color: '#35332F', roughness: 0.92 }),
    earth: new THREE.MeshStandardMaterial({ map: earthMap, roughness: 1 }),
    timber: new THREE.MeshStandardMaterial({ map: timberMap, roughness: 0.75 }),
    timberSolid: new THREE.MeshStandardMaterial({ color: '#8A5733', roughness: 0.7 }),
    glass: new THREE.MeshPhysicalMaterial({
      color: '#A9BEC2',
      roughness: 0.04,
      metalness: 0.15,
      transparent: true,
      opacity: 0.32,
      envMapIntensity: 1.4,
      depthWrite: false,
    }),
    steel: new THREE.MeshStandardMaterial({ color: '#1F1E1C', roughness: 0.5, metalness: 0.4 }),
    fabric: new THREE.MeshStandardMaterial({ color: '#CFC7B6', roughness: 1 }),
    water: new THREE.MeshStandardMaterial({ color: '#27383D', roughness: 0.06, metalness: 0.35 }),
    grass: new THREE.MeshStandardMaterial({ color: '#8C9464', roughness: 1 }),
    canopy: new THREE.MeshStandardMaterial({ color: '#6D7843', roughness: 1, flatShading: true }),
    bark: new THREE.MeshStandardMaterial({ color: '#4A3A2C', roughness: 1 }),
    clay: new THREE.MeshStandardMaterial({ color: '#EFEDE8', roughness: 0.9 }),
    clayAccent: new THREE.MeshStandardMaterial({ color: '#B8663D', roughness: 0.9 }),
    clayDark: new THREE.MeshStandardMaterial({ color: '#4A4843', roughness: 0.9 }),
  }
}

export type Materials = ReturnType<typeof createMaterials>
