import { useState } from 'react'
import type { Project } from '../types'
import { ProjectCard } from '../components/ProjectCard'
import { architectProfile } from '../data/profile'
import { LayoutGrid, List } from 'lucide-react'

interface WorksPageProps {
  projects: Project[]
  onSelectProject: (project: Project) => void
}

export const WorksPage: React.FC<WorksPageProps> = ({ projects, onSelectProject }) => {
  const [selectedTypology, setSelectedTypology] = useState<string>('All')
  const [layoutMode, setLayoutMode] = useState<'grid' | 'editorial'>('grid')

  const typologies = ['All', 'Residential', 'Cultural', 'Adaptive Reuse', 'Institutional', 'Prefab & Research']

  const filteredProjects = selectedTypology === 'All'
    ? projects
    : projects.filter((p) => p.typology === selectedTypology)

  return (
    <div className="animate-in fade-in duration-300">
      {/* Editorial Hero Header */}
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-black/[0.08] max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-neutral-100 border border-neutral-200/80 rounded-full font-mono text-[11px] text-neutral-700 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>B.Arch Honors • Spatial Practice & Built Form</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight text-neutral-900 font-normal leading-[1.02]">
            Architecture of quietude, mass, and unadorned light.
          </h1>

          <p className="font-sans text-base sm:text-xl text-neutral-600 leading-relaxed max-w-2xl font-light">
            Selected architectural projects, bioclimatic studies, and construction detailing by{' '}
            <span className="text-neutral-900 font-medium">{architectProfile.name}</span>. Grounded in tectonic honesty, local materiality, and passive thermodynamics.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-6 font-mono text-xs text-neutral-500">
            <div>
              <span className="text-neutral-900 font-semibold">{projects.length}</span> Built & Speculative Works
            </div>
            <span>•</span>
            <div>
              <span className="text-neutral-900 font-semibold">2023 — 2025</span> Selected Portfolio
            </div>
            <span>•</span>
            <div className="text-neutral-700">
              EiABC Graduate Honors
            </div>
          </div>
        </div>
      </section>

      {/* Filter and View Mode Switcher */}
      <section className="sticky top-20 z-30 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-black/[0.06] py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Typology Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            {typologies.map((typ) => {
              const count = typ === 'All' ? projects.length : projects.filter((p) => p.typology === typ).length
              const isSelected = selectedTypology === typ
              return (
                <button
                  key={typ}
                  onClick={() => setSelectedTypology(typ)}
                  className={`px-3 py-1.5 rounded-full font-mono text-xs whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-neutral-900 text-white font-medium shadow-2xs'
                      : 'bg-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                >
                  {typ} <span className="opacity-60 text-[10px]">({count})</span>
                </button>
              )
            })}
          </div>

          {/* Grid vs Editorial Toggle */}
          <div className="hidden sm:flex items-center space-x-1 border border-neutral-200 rounded-sm p-0.5 bg-white">
            <button
              onClick={() => setLayoutMode('grid')}
              className={`p-1.5 rounded-xs transition-colors cursor-pointer ${
                layoutMode === 'grid' ? 'bg-neutral-900 text-white' : 'text-neutral-500 hover:text-neutral-900'
              }`}
              title="Grid layout view"
            >
              <LayoutGrid size={15} />
            </button>
            <button
              onClick={() => setLayoutMode('editorial')}
              className={`p-1.5 rounded-xs transition-colors cursor-pointer ${
                layoutMode === 'editorial' ? 'bg-neutral-900 text-white' : 'text-neutral-500 hover:text-neutral-900'
              }`}
              title="Editorial list layout view"
            >
              <List size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 sm:py-16">
        {layoutMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
                layoutMode="grid"
              />
            ))}
          </div>
        ) : (
          <div className="divide-y divide-black/[0.08]">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
                layoutMode="editorial"
              />
            ))}
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="py-24 text-center space-y-3 font-mono text-sm text-neutral-400">
            <p>No projects match the selected typology.</p>
            <button
              onClick={() => setSelectedTypology('All')}
              className="text-neutral-900 underline cursor-pointer"
            >
              View all works
            </button>
          </div>
        )}
      </section>

      {/* Philosophy Callout Banner */}
      <section className="border-t border-black/[0.08] bg-[#F4F1EA] py-20 px-6 lg:px-12 my-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            Design Philosophy & Rigor
          </div>
          <blockquote className="font-serif text-2xl sm:text-4xl text-neutral-900 leading-tight italic">
            "A building should not fight its climate or pretend to be weightless. When we honor the raw weight of stone and the movement of the sun, architecture achieves quiet permanence."
          </blockquote>
          <div className="font-mono text-xs text-neutral-600">
            — {architectProfile.name}, Architectural Statement
          </div>
        </div>
      </section>
    </div>
  )
}
