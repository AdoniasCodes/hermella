import type { Project } from '../types'
import { ArrowUpRight, MapPin } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
  layoutMode?: 'grid' | 'editorial'
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  layoutMode = 'grid',
}) => {
  if (layoutMode === 'editorial') {
    return (
      <article
        onClick={() => onSelect(project)}
        className="group cursor-pointer border-b border-black/[0.08] py-8 sm:py-12 transition-all hover:bg-neutral-50/50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Metadata Col */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-3 font-mono text-xs text-neutral-400">
              <span className="font-bold text-neutral-900">{project.id}</span>
              <span>/</span>
              <span className="uppercase">{project.typology}</span>
              <span>/</span>
              <span>{project.year}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-neutral-900 group-hover:text-neutral-600 transition-colors">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans line-clamp-3">
              {project.subtitle}
            </p>

            <div className="pt-2 flex items-center justify-between text-xs font-mono text-neutral-500">
              <span className="flex items-center gap-1.5">
                <MapPin size={12} />
                {project.location}
              </span>
              <span className="font-semibold text-neutral-900">{project.area}</span>
            </div>

            <div className="pt-2 inline-flex items-center gap-1 text-xs font-mono tracking-wider uppercase text-neutral-900 group-hover:underline">
              <span>View Case Study</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Image Col */}
          <div className="lg:col-span-8 overflow-hidden rounded-xs bg-neutral-100 aspect-16/10">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              loading="lazy"
            />
          </div>
        </div>
      </article>
    )
  }

  // Default Grid Mode
  return (
    <article
      onClick={() => onSelect(project)}
      className="group cursor-pointer flex flex-col justify-between space-y-4"
    >
      <div className="relative overflow-hidden rounded-xs bg-neutral-100 aspect-4/3 sm:aspect-16/11">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-neutral-800 rounded-xs">
          {project.typology}
        </div>
        <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-xs text-white px-2 py-0.5 font-mono text-[10px] tracking-wider rounded-xs">
          {project.year}
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between font-mono text-[11px] text-neutral-400">
          <span>PROJECT {project.id}</span>
          <span>{project.area}</span>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl text-neutral-900 group-hover:text-neutral-600 transition-colors flex items-center justify-between">
          <span>{project.title}</span>
          <ArrowUpRight
            size={16}
            className="text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
          />
        </h3>

        <p className="text-xs text-neutral-600 font-sans line-clamp-2 leading-relaxed">
          {project.subtitle}
        </p>

        <div className="font-mono text-[11px] text-neutral-500 pt-1">
          {project.location}
        </div>
      </div>
    </article>
  )
}
