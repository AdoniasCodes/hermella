import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../types'
import { sectionProgress, useFrameLoop } from '../lib/scroll'

/**
 * Pinned horizontal gallery. Vertical scroll moves the track on desktop;
 * on touch screens the track is a native swipeable scroll-snap row.
 * Either way each card tilts in 3D by its distance from the screen centre.
 */
export function WorksGallery({ projects, onSelectProject }: {
  projects: Project[]
  onSelectProject: (p: Project) => void
}) {
  const section = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const cards = useRef<(HTMLDivElement | null)[]>([])
  const counter = useRef<HTMLSpanElement>(null)

  useFrameLoop(() => {
    const el = section.current
    const tr = track.current
    if (!el || !tr) return
    const desktop = window.innerWidth >= 768
    if (desktop) {
      const p = sectionProgress(el)
      const first = cards.current[0]
      const last = cards.current[cards.current.length - 1]
      // Travel from first card centred to last card centred
      const max = first && last ? last.offsetLeft + last.offsetWidth / 2 - (first.offsetLeft + first.offsetWidth / 2) : 0
      tr.style.transform = `translate3d(${-p * max}px, 0, 0)`
    } else {
      tr.style.transform = ''
    }
    const vw = window.innerWidth
    let nearest = 0
    let best = Infinity
    cards.current.forEach((c, i) => {
      if (!c) return
      const r = c.getBoundingClientRect()
      const d = (r.left + r.width / 2 - vw / 2) / vw // -1..1 roughly
      const inner = c.firstElementChild as HTMLElement | null
      if (inner) {
        const rot = Math.max(-40, Math.min(40, -d * 38))
        const z = -Math.abs(d) * 220
        inner.style.transform = `perspective(1400px) translateZ(${z}px) rotateY(${rot}deg)`
        inner.style.opacity = String(1 - Math.min(0.55, Math.abs(d) * 0.5))
      }
      if (Math.abs(d) < best) {
        best = Math.abs(d)
        nearest = i
      }
    })
    if (counter.current) counter.current.textContent = String(nearest + 1).padStart(2, '0')
  })

  return (
    <section ref={section} id="work" className="relative md:h-[300vh]" aria-labelledby="works-heading">
      <div className="md:sticky md:top-0 md:flex md:h-svh md:flex-col md:justify-center overflow-hidden py-20 md:py-0">
        <div className="flex items-end justify-between gap-6 px-4 md:px-10">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#6B6862]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#121211]" /> Portfolio
            </div>
            <h2 id="works-heading" className="font-display mt-3 text-[13vw] md:text-[7.5vw] uppercase">
              Selected<br className="md:hidden" /> work
            </h2>
          </div>
          <div className="hidden md:flex flex-col items-end gap-3 pb-2">
            <div className="font-mono text-sm">
              <span ref={counter}>01</span>
              <span className="text-[#6B6862]"> / {String(projects.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        <div
          ref={track}
          className="no-scrollbar mt-10 md:mt-12 flex gap-5 md:gap-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none px-[12vw] md:px-[30vw] will-change-transform"
        >
          {projects.map((p, i) => (
            <div key={p.id} ref={(el) => { cards.current[i] = el }} className="shrink-0 snap-center">
              <button
                onClick={() => onSelectProject(p)}
                className="group block w-[76vw] md:w-[38vw] lg:w-[34vw] text-left cursor-pointer will-change-transform"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative aspect-[4/5] md:aspect-[5/4] overflow-hidden rounded-sm bg-[#E9E7E1]">
                  <img
                    src={p.heroImage}
                    alt={`${p.title}, ${p.typology.toLowerCase()} project in ${p.location}`}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-[#F3F2EE] px-3 py-1 font-mono text-[10px] uppercase tracking-wider">
                    {p.typology}
                  </div>
                  <div className="absolute bottom-3 right-3 grid h-11 w-11 place-items-center rounded-full bg-[#F3F2EE] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
                <div className="mt-4 flex items-baseline gap-4">
                  <span className="font-mono text-xs text-[#A4532C]">{p.id}</span>
                  <div>
                    <h3 className="font-display text-2xl md:text-4xl uppercase leading-none">{p.title}</h3>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-[#6B6862]">
                      {p.location} · {p.year}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
        <p className="mt-6 px-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[#6B6862] md:hidden">Swipe to browse</p>
      </div>
    </section>
  )
}
