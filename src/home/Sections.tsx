import { useRef } from 'react'
import { ArrowRight, ArrowUpRight, FileText } from 'lucide-react'
import { architectProfile as profile } from '../data/profile'
import type { Project } from '../types'
import { range, useFrameLoop } from '../lib/scroll'

const MARKS = ['EiABC', 'Addis Ababa University', 'Revit', 'Rhino + Grasshopper', 'ClimateStudio', 'V-Ray', 'AutoCAD', 'Hand drafting', 'Model making']

export function CredentialBand() {
  return (
    <section
      className="relative -mt-[8vh] z-10 bg-[#2A2927] text-[#F3F2EE] py-16 md:py-20"
      style={{ clipPath: 'polygon(0 14%, 100% 0, 100% 86%, 0 100%)' }}
      aria-label="Training and tools"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16 px-4 md:px-10">
        <p className="shrink-0 max-w-[15rem] font-mono text-[11px] uppercase leading-relaxed tracking-[0.16em] text-[#F3F2EE]/70">
          Where architecture meets climate, craft and light
        </p>
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track flex w-max gap-14">
            {[...MARKS, ...MARKS].map((m, i) => (
              <span key={i} className={`whitespace-nowrap text-2xl md:text-3xl ${i % 3 === 1 ? 'font-serif italic' : 'font-display text-[1.6rem] md:text-[2rem] uppercase'}`}>
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function AboutIntro({ projects, onAbout }: { projects: Project[]; onAbout: () => void }) {
  const gradYear = profile.education[0]?.period.split(/\D+/).filter(Boolean).pop() ?? '2024'
  const collage = useRef<HTMLDivElement>(null)

  // Gentle depth: the portrait card and the big image drift at different speeds
  useFrameLoop(() => {
    const el = collage.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const t = range(r.top + r.height / 2, window.innerHeight * 1.2, -window.innerHeight * 0.2) - 0.5
    el.style.setProperty('--d', String(t))
  })

  return (
    <section className="px-4 md:px-10 pt-24 pb-24 md:pt-36 md:pb-32" aria-labelledby="about-heading">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#6B6862]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#121211]" /> About
          </div>
          <h2 id="about-heading" className="font-display mt-4 text-5xl md:text-6xl uppercase">
            Quiet buildings, made of the ground they stand on.
          </h2>
          <p className="mt-6 max-w-md font-sans text-[15px] leading-relaxed text-[#3A3936]">
            {profile.bioParagraphs[0]}
          </p>
          <button onClick={onAbout} className="mt-8 inline-flex items-center gap-2 border-b border-[#121211] pb-1 font-sans text-xs font-semibold uppercase tracking-wider cursor-pointer">
            More about me <ArrowUpRight size={14} />
          </button>
        </div>

        <div ref={collage} className="lg:col-span-6 relative h-[440px] md:h-[560px]" style={{ ['--d' as string]: 0 }}>
          <span aria-hidden className="font-display absolute -left-4 top-1/2 -translate-y-1/2 select-none text-[340px] md:text-[460px] text-[#121211]/[0.05]">H</span>
          <div
            className="absolute right-0 top-0 h-[82%] w-[68%] overflow-hidden rounded-sm bg-[#E9E7E1]"
            style={{ transform: 'translate3d(0, calc(var(--d) * -50px), 0)' }}
          >
            <img src={projects[0]?.heroImage} alt={projects[0]?.title} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div
            className="absolute bottom-0 left-[6%] flex h-[58%] w-[36%] items-end justify-center overflow-hidden rounded-sm bg-[#DEDBD3]"
            style={{ transform: 'translate3d(0, calc(var(--d) * 70px), 0)' }}
          >
            <img
              src={`${import.meta.env.BASE_URL}hermella.png`}
              alt={`Portrait of ${profile.name}`}
              loading="lazy"
              className="h-[92%] w-auto object-contain"
            />
            <span className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-wider text-[#6B6862]">Scale 1:1</span>
          </div>
        </div>

        <dl className="lg:col-span-2 grid grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-10">
          {[
            [gradYear, 'B.Arch, EiABC'],
            ['Addis', 'Ababa, Ethiopia'],
            ['Open', 'To studio roles and collaborations'],
          ].map(([big, small]) => (
            <div key={small}>
              <dt className="font-display text-4xl md:text-5xl uppercase">{big}</dt>
              <dd className="mt-1 font-sans text-xs leading-snug text-[#6B6862]">{small}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export function Philosophy() {
  const el = useRef<HTMLDivElement>(null)
  const words = profile.signatureQuote.split(/\s+/)
  useFrameLoop(() => {
    const node = el.current
    if (!node) return
    const r = node.getBoundingClientRect()
    const p = range(window.innerHeight * 0.85 - r.top, 0, r.height + window.innerHeight * 0.1)
    const lit = Math.floor(p * words.length * 1.15)
    node.querySelectorAll<HTMLSpanElement>('[data-w]').forEach((w, i) => {
      w.style.color = i < lit ? '#121211' : 'rgba(18,18,17,0.16)'
    })
  })
  return (
    <section className="px-4 md:px-10 py-24 md:py-40 border-t border-[#121211]/10" aria-label="Design philosophy">
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#6B6862]">Position</div>
      <div ref={el} className="mt-8 max-w-6xl">
        <blockquote className="font-serif text-[2.1rem] leading-[1.12] md:text-7xl md:leading-[1.02]">
          {words.map((w, i) => (
            <span key={i} data-w className="reveal-word" style={{ color: 'rgba(18,18,17,0.16)' }}>
              {w}{' '}
            </span>
          ))}
        </blockquote>
        <p className="mt-10 font-mono text-xs uppercase tracking-[0.18em] text-[#6B6862]">{profile.name}</p>
      </div>
    </section>
  )
}

const STEPS = [
  { no: '01', t: 'Sketch', d: 'Every project starts by hand: site walks, sun paths and quick section studies before any software opens.' },
  { no: '02', t: 'Model', d: 'Physical massing models in basswood and plaster to test proportion and light at the scale of the hand.' },
  { no: '03', t: 'Simulate', d: 'Daylight and solar radiation runs in ClimateStudio shape overhangs, openings and wall thickness.' },
  { no: '04', t: 'Detail', d: 'Working drawings down to 1:5, because a building is only as honest as its joints.' },
]

export function Process() {
  return (
    <section className="px-4 md:px-10 pb-24 md:pb-36" aria-labelledby="process-heading">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-[#121211]/10 pt-16">
        <h2 id="process-heading" className="font-display text-5xl md:text-7xl uppercase">How a project<br />takes shape</h2>
        <p className="max-w-sm font-sans text-[15px] leading-relaxed text-[#3A3936]">{profile.bioParagraphs[1]?.split('. ')[0]}.</p>
      </div>
      <ol className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s) => (
          <li key={s.no} className="group border-t border-[#121211]/15 py-8 sm:pr-8 transition-colors hover:border-[#121211]">
            <div className="font-mono text-xs text-[#A4532C]">{s.no}</div>
            <h3 className="font-display mt-10 text-4xl uppercase transition-transform duration-500 group-hover:translate-x-2">{s.t}</h3>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-[#3A3936]">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function ClosingCta({ onContact, onPdf }: { onContact: () => void; onPdf: () => void }) {
  return (
    <section className="bg-[#121211] text-[#F3F2EE] px-4 md:px-10 py-24 md:py-36" aria-labelledby="cta-heading">
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F3F2EE]/60">{profile.statusAvailability}</div>
      <h2 id="cta-heading" className="font-display mt-6 text-[15vw] md:text-[11vw] uppercase">
        Let's build<br />
        <span className="font-serif normal-case italic font-normal tracking-normal text-[#D08A62]">something quiet.</span>
      </h2>
      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <button
          onClick={onContact}
          className="group inline-flex items-center justify-between gap-6 rounded-full bg-[#F3F2EE] py-2 pl-6 pr-2 font-sans text-sm font-semibold uppercase tracking-wider text-[#121211] cursor-pointer"
        >
          Start a conversation
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#121211] text-[#F3F2EE] transition-transform duration-300 group-hover:rotate-[-45deg]">
            <ArrowRight size={16} />
          </span>
        </button>
        <button
          onClick={onPdf}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F3F2EE]/30 px-6 py-3.5 font-sans text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-[#F3F2EE]/10 cursor-pointer"
        >
          <FileText size={16} /> Portfolio PDF
        </button>
      </div>
      <a href={`mailto:${profile.email}`} className="mt-16 block font-serif text-3xl md:text-5xl italic underline decoration-1 underline-offset-8 hover:text-[#D08A62] transition-colors break-all">
        {profile.email}
      </a>
    </section>
  )
}
