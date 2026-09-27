import { ArrowUp } from 'lucide-react'
import { architectProfile } from '../data/profile'
import { scrollToTop } from '../lib/scroll'

interface FooterProps {
  onNavigateTab: (tab: string) => void
}

const LINKS = [
  { id: 'work', label: 'Selected work' },
  { id: 'about', label: 'About and CV' },
  { id: 'contact', label: 'Contact' },
]

export const Footer: React.FC<FooterProps> = ({ onNavigateTab }) => (
  <footer className="bg-[#121211] text-[#F3F2EE] px-4 md:px-10 pt-16 pb-8 border-t border-[#F3F2EE]/10">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
      <div className="md:col-span-6">
        <div className="font-display text-3xl uppercase">{architectProfile.name}</div>
        <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-[#F3F2EE]/60">
          Architectural designer. Climate-led, material-first work from Addis Ababa.
        </p>
      </div>
      <nav className="md:col-span-3 flex flex-col gap-2 font-sans text-sm" aria-label="Footer">
        {LINKS.map((l) => (
          <button key={l.id} onClick={() => onNavigateTab(l.id)} className="w-fit text-[#F3F2EE]/70 hover:text-[#F3F2EE] cursor-pointer">
            {l.label}
          </button>
        ))}
      </nav>
      <div className="md:col-span-3 flex flex-col gap-2 font-sans text-sm text-[#F3F2EE]/70">
        <a href={`mailto:${architectProfile.email}`} className="hover:text-[#F3F2EE]">{architectProfile.email}</a>
        <span>Addis Ababa, Ethiopia</span>
        <span className="font-mono text-xs text-[#F3F2EE]/50">9°01′N 38°45′E</span>
      </div>
    </div>
    <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#F3F2EE]/10 pt-6 font-mono text-[11px] text-[#F3F2EE]/50">
      <span>© {new Date().getFullYear()} {architectProfile.name}. All drawings and images belong to their authors.</span>
      <button onClick={() => scrollToTop(false)} className="back-to-top inline-flex items-center gap-2 hover:text-[#F3F2EE] cursor-pointer">
        Back to top <ArrowUp size={13} />
      </button>
    </div>
  </footer>
)
