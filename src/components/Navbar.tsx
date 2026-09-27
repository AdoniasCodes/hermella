import { useState } from 'react'
import { architectProfile } from '../data/profile'
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react'

interface NavbarProps {
  currentTab: string
  setCurrentTab: (tab: string) => void
  onOpenPdfMode: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab, onOpenPdfMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { id: 'works', label: 'Selected Works' },
    { id: 'archive', label: 'Index / Archive' },
    { id: 'about', label: 'Profile & CV' },
    { id: 'contact', label: 'Inquiries' },
  ]

  const handleNav = (tabId: string) => {
    setCurrentTab(tabId)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-black/[0.06] transition-all">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand / Name */}
        <button
          onClick={() => handleNav('works')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <div className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors">
            {architectProfile.name}
          </div>
          <div className="text-[11px] font-mono tracking-widest uppercase text-neutral-600 mt-0.5 flex items-center gap-2">
            <span>Architecture</span>
            <span className="w-1 h-1 rounded-full bg-neutral-400"></span>
            <span>Spatial Design</span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-wider uppercase">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`relative py-1 cursor-pointer transition-colors ${
                  isActive
                    ? 'text-neutral-950 font-semibold'
                    : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-neutral-900 rounded-full" />
                )}
              </button>
            )
          })}
        </nav>

        {/* Actions: PDF Lookbook Export & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onOpenPdfMode}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 border border-neutral-300 text-xs font-mono uppercase tracking-wider text-neutral-800 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all rounded-sm cursor-pointer shadow-xs"
            title="Open printable architectural monograph view"
          >
            <FileText size={13} />
            <span>PDF Lookbook</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-800 hover:text-black focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-neutral-200 px-6 py-6 space-y-4 font-mono text-sm tracking-widest uppercase">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`block w-full text-left py-2.5 transition-colors ${
                currentTab === link.id ? 'text-black font-bold pl-2 border-l-2 border-black' : 'text-neutral-600'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 border-t border-neutral-200">
            <button
              onClick={() => {
                onOpenPdfMode()
                setMobileMenuOpen(false)
              }}
              className="flex items-center justify-between w-full py-2.5 text-neutral-900 font-semibold"
            >
              <span className="flex items-center gap-2">
                <FileText size={15} />
                <span>Export / View PDF Lookbook</span>
              </span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
