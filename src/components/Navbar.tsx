import { useEffect, useState } from 'react'
import { ArrowUpRight, FileText, Menu, X } from 'lucide-react'
import { architectProfile } from '../data/profile'

interface NavbarProps {
  currentTab: string
  setCurrentTab: (tab: string) => void
  onOpenPdfMode: () => void
}

const LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab, onOpenPdfMode }) => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
  }, [open])

  const go = (id: string) => {
    setOpen(false)
    setCurrentTab(id)
  }

  const solid = scrolled || currentTab !== 'home'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid && !open ? 'bg-[#F3F2EE]/85 backdrop-blur-md border-b border-[#121211]/[0.07]' : 'bg-transparent'
      }`}
    >
      <div className="flex h-16 md:h-20 items-center justify-between px-4 md:px-10">
        <div className="flex items-center gap-10">
          <button onClick={() => go('home')} className="flex items-center gap-2 cursor-pointer" aria-label="Home">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#121211] font-display text-[15px] text-[#F3F2EE]">H</span>
            <span className="font-display text-lg uppercase tracking-tight">Hermella.</span>
          </button>
          <nav className="hidden md:flex items-center gap-7 font-sans text-sm" aria-label="Main">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                aria-current={currentTab === l.id ? 'page' : undefined}
                className={`cursor-pointer transition-colors ${
                  currentTab === l.id ? 'text-[#121211] font-semibold' : 'text-[#6B6862] hover:text-[#121211]'
                }`}
              >
                {l.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={onOpenPdfMode} className="inline-flex items-center gap-2 font-sans text-sm text-[#6B6862] hover:text-[#121211] cursor-pointer">
            <FileText size={15} /> Portfolio PDF
          </button>
          <button onClick={() => go('contact')} className="group flex items-center gap-3 cursor-pointer">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#121211] text-[#F3F2EE] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </span>
            <span className="text-left leading-tight">
              <span className="block font-sans text-[11px] text-[#6B6862]">Open to studio roles</span>
              <span className="block font-sans text-sm font-semibold">{architectProfile.email}</span>
            </span>
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-full bg-[#121211] text-[#F3F2EE] cursor-pointer"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-[#F3F2EE] px-4 pt-6 pb-10 flex flex-col justify-between">
          <nav className="flex flex-col" aria-label="Mobile">
            {LINKS.map((l, i) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="flex items-baseline gap-4 border-b border-[#121211]/10 py-3 text-left cursor-pointer"
              >
                <span className="font-mono text-xs text-[#A4532C]">0{i + 1}</span>
                <span className="font-display text-5xl uppercase">{l.label}</span>
              </button>
            ))}
          </nav>
          <button
            onClick={() => { setOpen(false); onOpenPdfMode() }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#121211] py-4 font-sans text-sm font-semibold uppercase tracking-wider text-[#F3F2EE] cursor-pointer"
          >
            <FileText size={16} /> Portfolio PDF
          </button>
        </div>
      )}
    </header>
  )
}
