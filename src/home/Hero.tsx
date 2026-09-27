import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { prefersReducedMotion, range, sectionProgress, smooth, useFrameLoop } from '../lib/scroll'

const HeroScene = lazy(() => import('../three/HeroScene'))

const CHAPTERS = [
  { from: 0.2, to: 0.38, no: '01', title: 'Walk around it', body: 'Every face of the house answers a different sun. The glass opens east, the earth wall takes the west.' },
  { from: 0.42, to: 0.66, no: '02', title: 'Take it apart', body: 'Four layers, each with one job: a heavy ground, a thin plate, a timber box, a roof that throws shade.' },
  { from: 0.74, to: 1.01, no: '03', title: 'Read the plan', body: 'Lift the upper floors away and what is left is the plan, where daily life actually happens.' },
]

export function Hero({ onExplore, onContact }: { onExplore: () => void; onContact: () => void }) {
  const section = useRef<HTMLElement>(null)
  const progress = useRef(0)
  const title = useRef<HTMLDivElement>(null)
  const titleFront = useRef<HTMLDivElement>(null)
  const intro = useRef<HTMLDivElement>(null)
  const rail = useRef<HTMLDivElement>(null)
  const hint = useRef<HTMLDivElement>(null)
  const planTag = useRef<HTMLDivElement>(null)
  const chapters = useRef<(HTMLDivElement | null)[]>([])
  const [active, setActive] = useState(true)
  const [reduced] = useState(prefersReducedMotion)

  useEffect(() => {
    const el = section.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), { rootMargin: '100px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useFrameLoop(() => {
    const el = section.current
    if (!el) return
    const p = sectionProgress(el)
    progress.current = p

    const out = smooth(range(p, 0.08, 0.3))
    for (const t of [title.current, titleFront.current]) {
      if (!t) continue
      t.style.transform = `translate3d(0, calc(-50% - ${out * 18}vh), 0)`
      t.style.opacity = String(1 - out)
    }
    if (intro.current) {
      const o = smooth(range(p, 0.03, 0.14))
      intro.current.style.opacity = String(1 - o)
      intro.current.style.transform = `translate3d(0, ${-o * 40}px, 0)`
      intro.current.style.pointerEvents = o > 0.5 ? 'none' : 'auto'
    }
    if (hint.current) hint.current.style.opacity = String(1 - range(p, 0, 0.05))
    if (rail.current) rail.current.style.transform = `scaleY(${p})`
    if (planTag.current) planTag.current.style.opacity = String(smooth(range(p, 0.86, 0.95)))
    chapters.current.forEach((c, i) => {
      if (!c) return
      const ch = CHAPTERS[i]
      const o = Math.min(smooth(range(p, ch.from, ch.from + 0.05)), 1 - smooth(range(p, ch.to - 0.04, ch.to)))
      c.style.opacity = String(o)
      c.style.transform = `translate3d(0, ${(1 - o) * 24}px, 0)`
    })
  })

  return (
    <section ref={section} className="relative h-[340vh]" aria-label="Introduction">
      <div className="sticky top-0 h-svh overflow-hidden">
        {/* Giant name sits behind the model, like lettering on a wall behind a building */}
        <div ref={title} className="absolute inset-x-0 top-[41%] md:top-[50%] select-none will-change-transform">
          <h1 className="font-display text-center text-[22vw] md:text-[19.5vw] uppercase text-[#121211] whitespace-nowrap">
            Hermella
          </h1>
          <div className="mt-3 md:mt-5 flex justify-between px-4 md:px-10 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#6B6862]">
            <span>Araya Manaye</span>
            <span className="hidden sm:inline">Architectural Designer</span>
            <span>Addis Ababa, ET</span>
          </div>
        </div>

        <div className="absolute inset-0">
          <Suspense fallback={null}>
            <HeroScene progress={progress} active={active} reduced={reduced} />
          </Suspense>
        </div>

        {/* Outline copy in front of the model: the name reads through the house like a hidden line */}
        <div ref={titleFront} aria-hidden className="pointer-events-none absolute inset-x-0 top-[41%] md:top-[50%] select-none mix-blend-difference will-change-transform">
          <div className="font-display text-center text-[22vw] md:text-[19.5vw] uppercase whitespace-nowrap text-transparent [-webkit-text-stroke:1.5px_#F3F2EE]">
            Hermella
          </div>
          <div className="invisible mt-3 md:mt-5 font-mono text-[10px] md:text-xs">&nbsp;</div>
        </div>

        {/* Intro copy, top left, as in a studio monograph cover */}
        <div ref={intro} className="absolute left-4 md:left-10 top-24 md:top-32 max-w-[17rem] md:max-w-xs">
          <p className="font-sans text-[15px] md:text-base leading-snug text-[#121211]">
            From first sketch to the 1:20 detail, I design buildings that answer to climate, material and light.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={onExplore}
              className="group inline-flex items-center gap-3 rounded-full bg-[#121211] py-2 pl-5 pr-2 font-sans text-xs font-semibold uppercase tracking-wider text-[#F3F2EE] cursor-pointer"
            >
              Explore the work
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#F3F2EE] text-[#121211] transition-transform duration-300 group-hover:rotate-[-45deg]">
                <ArrowRight size={14} />
              </span>
            </button>
            <button onClick={onContact} className="font-sans text-xs font-semibold uppercase tracking-wider underline underline-offset-4 cursor-pointer">
              Get in touch
            </button>
          </div>
        </div>

        {/* Scroll chapters */}
        <div className="absolute left-4 md:left-10 bottom-10 md:bottom-14 w-[min(22rem,calc(100vw-2rem))]">
          {CHAPTERS.map((c, i) => (
            <div
              key={c.no}
              ref={(el) => { chapters.current[i] = el }}
              className="absolute bottom-0 left-0 w-full rounded-sm bg-[#F3F2EE]/80 p-4 backdrop-blur-sm md:bg-transparent md:p-0 md:backdrop-blur-none"
              style={{ opacity: 0 }}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A4532C]">{c.no} / 03</div>
              <h2 className="font-display mt-2 text-4xl md:text-6xl uppercase">{c.title}</h2>
              <p className="mt-3 font-sans text-sm md:text-[15px] leading-relaxed text-[#3A3936]">{c.body}</p>
            </div>
          ))}
        </div>

        <div ref={planTag} className="absolute right-4 md:right-16 top-24 md:top-28 text-right font-mono text-[10px] md:text-xs uppercase tracking-[0.18em] text-[#6B6862]" style={{ opacity: 0 }}>
          Ground floor plan<br />Cut at +1.20 m<br />Scale 1:100
        </div>

        {/* Progress rail */}
        <div className="absolute right-4 md:right-8 top-1/2 hidden h-40 w-px -translate-y-1/2 bg-[#121211]/15 md:block">
          <div ref={rail} className="h-full w-full origin-top bg-[#121211]" style={{ transform: 'scaleY(0)' }} />
        </div>

        <div ref={hint} className="absolute bottom-6 right-4 md:right-10 flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.18em] text-[#6B6862]">
          Scroll to take the house apart <ArrowDown size={14} className="animate-bounce" />
        </div>
      </div>
    </section>
  )
}
