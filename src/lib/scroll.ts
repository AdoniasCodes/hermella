import Lenis from 'lenis'
import { useEffect } from 'react'

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

let lenis: Lenis | null = null

export function initSmoothScroll() {
  if (lenis || prefersReducedMotion()) return lenis
  lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 0.9, autoRaf: true })
  return lenis
}

export function scrollToTop(immediate = true) {
  if (lenis) lenis.scrollTo(0, { immediate })
  else window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' })
}

export function scrollToElement(el: HTMLElement | null) {
  if (!el) return
  if (lenis) lenis.scrollTo(el, { offset: -40 })
  else el.scrollIntoView({ behavior: 'smooth' })
}

/** 0 when the section's top hits the viewport top, 1 when its bottom hits the viewport bottom. */
export function sectionProgress(el: HTMLElement) {
  const r = el.getBoundingClientRect()
  const travel = r.height - window.innerHeight
  if (travel <= 0) return 0
  return Math.min(1, Math.max(0, -r.top / travel))
}

export const clamp01 = (v: number) => Math.min(1, Math.max(0, v))
/** Maps v from [a,b] to [0,1], clamped. */
export const range = (v: number, a: number, b: number) => clamp01((v - a) / (b - a))
export const smooth = (t: number) => t * t * (3 - 2 * t)

/** Runs cb every animation frame while mounted. */
export function useFrameLoop(cb: () => void, deps: unknown[] = []) {
  useEffect(() => {
    let id = 0
    const tick = () => {
      cb()
      id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
