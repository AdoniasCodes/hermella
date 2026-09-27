import { useState } from 'react'
import type { Project } from '../types'
import { ArrowUpRight, Search } from 'lucide-react'

interface ArchivePageProps {
  projects: Project[]
  onSelectProject: (project: Project) => void
}

export const ArchivePage: React.FC<ArchivePageProps> = ({ projects, onSelectProject }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const filteredProjects = projects.filter((p) => {
    const q = searchTerm.toLowerCase()
    return (
      p.title.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q) ||
      p.typology.toLowerCase().includes(q) ||
      p.year.toString().includes(q) ||
      p.status.toLowerCase().includes(q)
    )
  })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="max-w-7xl mx-auto px-6 lg:px-12 py-12 sm:py-20 animate-in fade-in duration-300 relative"
    >
      {/* Floating Hover Thumbnail (Architectural studio style) */}
      {hoveredProject && (
        <div
          className="fixed pointer-events-none z-50 w-64 h-44 rounded-xs overflow-hidden shadow-2xl border border-white/20 transition-transform duration-75 ease-out hidden lg:block"
          style={{
            left: `${mousePos.x + 24}px`,
            top: `${mousePos.y - 80}px`,
          }}
        >
          <img
            src={hoveredProject.heroImage}
            alt={hoveredProject.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 bg-black/75 backdrop-blur-xs p-2 text-white font-mono text-[10px]">
            <div className="font-bold">{hoveredProject.title}</div>
            <div className="text-neutral-300">{hoveredProject.location} • {hoveredProject.area}</div>
          </div>
        </div>
      )}

      {/* Page Header */}
      <div className="border-b border-black/[0.08] pb-10 mb-12">
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-3">
          Chronological Index & Project Directory
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="font-serif text-5xl sm:text-7xl text-neutral-900 tracking-tight font-normal">
              Archive Catalog
            </h1>
            <p className="font-sans text-sm text-neutral-500 mt-2">
              Comprehensive list of academic, speculative, and built spatial interventions.
            </p>
          </div>

          {/* Search filter input */}
          <div className="relative w-full md:w-72">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search by typology, location, year..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-neutral-300 rounded-xs font-mono text-xs bg-white focus:outline-none focus:border-neutral-900 transition-colors shadow-2xs"
            />
          </div>
        </div>
      </div>

      {/* Table view */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse font-sans">
          <thead>
            <tr className="border-b border-black/15 font-mono text-[11px] uppercase tracking-wider text-neutral-400">
              <th className="py-4 pr-4">No.</th>
              <th className="py-4 px-4">Project Title</th>
              <th className="py-4 px-4 hidden md:table-cell">Typology</th>
              <th className="py-4 px-4 hidden sm:table-cell">Location</th>
              <th className="py-4 px-4 hidden lg:table-cell">Area (m²)</th>
              <th className="py-4 px-4 hidden sm:table-cell">Year</th>
              <th className="py-4 px-4 hidden lg:table-cell">Status</th>
              <th className="py-4 pl-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/[0.06] text-sm">
            {filteredProjects.map((p) => (
              <tr
                key={p.id}
                onClick={() => onSelectProject(p)}
                onMouseEnter={() => setHoveredProject(p)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group cursor-pointer hover:bg-neutral-100/70 transition-colors"
              >
                <td className="py-5 pr-4 font-mono text-xs text-neutral-400 group-hover:text-black">
                  {p.id}
                </td>
                <td className="py-5 px-4 font-serif text-lg sm:text-xl text-neutral-900 group-hover:underline">
                  <div>{p.title}</div>
                  <div className="font-sans text-xs text-neutral-500 font-normal line-clamp-1 sm:hidden">
                    {p.typology} • {p.year}
                  </div>
                </td>
                <td className="py-5 px-4 font-mono text-xs text-neutral-600 hidden md:table-cell">
                  <span className="px-2 py-0.5 border border-neutral-200 rounded-xs bg-white">
                    {p.typology}
                  </span>
                </td>
                <td className="py-5 px-4 font-sans text-xs text-neutral-600 hidden sm:table-cell">
                  {p.location}
                </td>
                <td className="py-5 px-4 font-mono text-xs text-neutral-700 hidden lg:table-cell">
                  {p.area}
                </td>
                <td className="py-5 px-4 font-mono text-xs text-neutral-500 hidden sm:table-cell">
                  {p.year}
                </td>
                <td className="py-5 px-4 font-mono text-xs text-neutral-600 hidden lg:table-cell">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                    <span>{p.status}</span>
                  </span>
                </td>
                <td className="py-5 pl-4 text-right">
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-neutral-400 group-hover:text-neutral-900">
                    <span className="hidden sm:inline">Details</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredProjects.length === 0 && (
          <div className="py-16 text-center font-mono text-xs text-neutral-400">
            No projects matched "{searchTerm}".
          </div>
        )}
      </div>
    </div>
  )
}
