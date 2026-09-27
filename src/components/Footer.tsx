import { architectProfile } from '../data/profile'
import { ArrowUp, Mail, MapPin } from 'lucide-react'

interface FooterProps {
  onNavigateTab: (tab: string) => void
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-black/[0.08] bg-[#FAF9F6] text-neutral-800 py-16 px-6 lg:px-12 mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-black/[0.06]">
          {/* Col 1: Studio identity */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl text-neutral-900 tracking-tight">
              {architectProfile.name}
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed font-sans max-w-md">
              Selected architectural designs, spatial interventions, and construction detailing. Rooted in materiality, light studies, and climate-responsive reduction.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-600 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Open to studio positions & commissions</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs tracking-wider uppercase">
            <div className="text-neutral-600 font-bold mb-4">Navigation</div>
            <div>
              <button
                onClick={() => onNavigateTab('works')}
                className="hover:text-black transition-colors cursor-pointer"
              >
                01. Selected Works
              </button>
            </div>
            <div>
              <button
                onClick={() => onNavigateTab('archive')}
                className="hover:text-black transition-colors cursor-pointer"
              >
                02. Complete Archive
              </button>
            </div>
            <div>
              <button
                onClick={() => onNavigateTab('about')}
                className="hover:text-black transition-colors cursor-pointer"
              >
                03. Profile & Curriculum Vitae
              </button>
            </div>
            <div>
              <button
                onClick={() => onNavigateTab('contact')}
                className="hover:text-black transition-colors cursor-pointer"
              >
                04. Contact & Inquiries
              </button>
            </div>
          </div>

          {/* Col 3: Direct contact */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <div className="text-neutral-600 font-bold uppercase tracking-wider mb-4">Direct Contact</div>
            <div className="flex items-center gap-2.5 text-neutral-700">
              <Mail size={14} className="text-neutral-400" />
              <a href={`mailto:${architectProfile.email}`} className="hover:underline">
                {architectProfile.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-neutral-700">
              <MapPin size={14} className="text-neutral-400" />
              <span>{architectProfile.location}</span>
            </div>
            <div className="text-neutral-600 pt-2 text-[11px] leading-relaxed">
              Inquiries regarding residential, commercial, or institutional projects welcome.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-600">
          <div>
            © {new Date().getFullYear()} {architectProfile.name}. All drawings, plans, and photographs protected by copyright.
          </div>
          <button
            onClick={scrollToTop}
            className="back-to-top inline-flex items-center gap-2 text-neutral-800 hover:text-black hover:underline cursor-pointer transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  )
}
