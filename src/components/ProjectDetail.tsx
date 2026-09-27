import { useState } from 'react'
import type { Project } from '../types'
import { DrawingViewer } from './DrawingViewer'
import { MaterialPalette } from './MaterialPalette'
import { Lightbox } from './Lightbox'
import { ArrowLeft, ArrowRight, Maximize2, Share2, Check } from 'lucide-react'

interface ProjectDetailProps {
  project: Project
  allProjects: Project[]
  onBack: () => void
  onSelectProject: (project: Project) => void
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  allProjects,
  onBack,
  onSelectProject,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [copied, setCopied] = useState(false)

  // Combined image list: Hero + Gallery
  const allImages = [
    { url: project.heroImage, caption: `${project.title} — Primary Exterior Perspective` },
    ...project.galleryImages,
  ]

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const currentIndex = allProjects.findIndex((p) => p.id === project.id)
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1]
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0]

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-6 lg:px-12 animate-in fade-in duration-300">
      {/* Top action bar */}
      <div className="flex items-center justify-between pb-8 border-b border-black/[0.08]">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-600 hover:text-black transition-colors cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>Return to Selected Works</span>
        </button>

        <div className="flex items-center gap-4 font-mono text-xs text-neutral-400">
          <span>PROJECT {project.id} OF {String(allProjects.length).padStart(2, '0')}</span>
          <button
            onClick={handleCopyLink}
            className="p-1.5 hover:text-black transition-colors cursor-pointer border border-neutral-200 rounded-xs"
            title="Share project link"
          >
            {copied ? <Check size={14} className="text-emerald-600" /> : <Share2 size={14} />}
          </button>
        </div>
      </div>

      {/* Project Title & Lead */}
      <div className="pt-10 pb-8 space-y-4">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-neutral-500">
          <span className="px-2 py-0.5 border border-neutral-300 rounded-xs text-neutral-800">
            {project.typology}
          </span>
          <span>•</span>
          <span>{project.year}</span>
          <span>•</span>
          <span>{project.location}</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-neutral-900 tracking-tight font-normal leading-[1.08]">
          {project.title}
        </h1>

        <p className="font-serif text-xl sm:text-2xl text-neutral-600 italic max-w-3xl leading-relaxed">
          "{project.subtitle}"
        </p>
      </div>

      {/* Full-bleed Hero Visual */}
      <div
        onClick={() => handleOpenLightbox(0)}
        className="group relative cursor-pointer overflow-hidden rounded-xs bg-neutral-200 aspect-16/9 my-8 shadow-xs"
      >
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="bg-white/90 text-neutral-900 px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-xs flex items-center gap-2 shadow-lg">
            <Maximize2 size={14} /> Expand High-Resolution View
          </span>
        </div>
      </div>

      {/* Project Metadata Grid (The Architectural Data Box) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 py-8 border-y border-black/[0.08] font-mono text-xs bg-neutral-50/50 p-6 rounded-xs my-10">
        <div>
          <div className="text-neutral-600 uppercase tracking-wider text-[10px] mb-1">Typology</div>
          <div className="font-semibold text-neutral-900">{project.typology}</div>
        </div>
        <div>
          <div className="text-neutral-600 uppercase tracking-wider text-[10px] mb-1">Location</div>
          <div className="font-semibold text-neutral-900">{project.location}</div>
          <div className="text-[10px] text-neutral-600">{project.coordinates}</div>
        </div>
        <div>
          <div className="text-neutral-600 uppercase tracking-wider text-[10px] mb-1">Gross Built Area</div>
          <div className="font-semibold text-neutral-900">{project.area}</div>
        </div>
        <div>
          <div className="text-neutral-600 uppercase tracking-wider text-[10px] mb-1">Project Phase</div>
          <div className="font-semibold text-neutral-900">{project.status}</div>
        </div>
        <div className="col-span-2">
          <div className="text-neutral-600 uppercase tracking-wider text-[10px] mb-1">Architectural Role</div>
          <div className="font-semibold text-neutral-900 leading-snug">{project.role}</div>
          {project.collaborators && (
            <div className="text-[10px] text-neutral-600 mt-1">{project.collaborators}</div>
          )}
        </div>
      </div>

      {/* Architectural Narrative Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-16">
        {/* Left Manifesto Quote */}
        <div className="lg:col-span-4 lg:border-r lg:border-black/[0.08] lg:pr-12">
          <div className="sticky top-28 space-y-6">
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-600">
              Architectural Intent
            </div>
            <blockquote className="font-serif text-2xl text-neutral-900 leading-relaxed italic border-l-2 border-neutral-900 pl-4">
              "{project.architecturalManifesto}"
            </blockquote>

            <div className="space-y-3 pt-4">
              <div className="font-mono text-xs uppercase tracking-widest text-neutral-600">
                Key Technical Metrics
              </div>
              <ul className="space-y-2 text-xs font-sans text-neutral-700">
                {project.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-mono text-neutral-600 text-[10px] mt-0.5">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Prose Narrative */}
        <div className="lg:col-span-8 space-y-10 text-neutral-700 font-sans leading-relaxed text-sm sm:text-base">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-600 mb-3">
              01. Project Brief & Site Context
            </h3>
            <p className="text-neutral-800 leading-relaxed font-sans">{project.overview}</p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-600 mb-3">
              02. Topographic & Spatial Challenge
            </h3>
            <p className="text-neutral-800 leading-relaxed font-sans">{project.designChallenge}</p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-600 mb-3">
              03. Spatial Configuration & Circulation
            </h3>
            <p className="text-neutral-800 leading-relaxed font-sans">{project.spatialStrategy}</p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-600 mb-3">
              04. Bioclimatic & Environmental Performance
            </h3>
            <p className="text-neutral-800 leading-relaxed font-sans">{project.environmentalStrategy}</p>
          </div>
        </div>
      </div>

      {/* Gallery of Renders and Architectural Photography */}
      {project.galleryImages.length > 0 && (
        <div className="my-16 space-y-6">
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-600">
            Spatial Imagery & Visual Documentation
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.galleryImages.map((img, idx) => (
              <figure
                key={idx}
                onClick={() => handleOpenLightbox(idx + 1)}
                className="group cursor-pointer space-y-2"
              >
                <div className="overflow-hidden rounded-xs bg-neutral-100 aspect-4/3 relative">
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Maximize2 size={20} className="text-white drop-shadow-md" />
                  </div>
                </div>
                <figcaption className="text-xs text-neutral-500 font-sans italic">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}

      {/* Technical Drawings Section */}
      <div className="my-20 space-y-6">
        <div className="flex items-center justify-between">
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-600">
            Architectural Drawings & Construction Documentation
          </div>
          <div className="font-mono text-[11px] text-neutral-600">
            Interactive Vector CAD Plans
          </div>
        </div>

        <DrawingViewer drawings={project.drawings} projectTitle={project.title} />
      </div>

      {/* Materiality & Tectonics */}
      <div className="my-20">
        <MaterialPalette materials={project.materials} />
      </div>

      {/* Bottom Project Pagination */}
      <div className="pt-16 mt-20 border-t border-black/[0.08] flex items-center justify-between font-mono text-xs">
        <button
          onClick={() => {
            onSelectProject(prevProject)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="group inline-flex items-center gap-2 hover:text-black transition-colors cursor-pointer text-left"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <div>
            <div className="text-[10px] text-neutral-600 uppercase">Previous Work</div>
            <div className="font-serif text-base text-neutral-900 group-hover:underline">
              {prevProject.title}
            </div>
          </div>
        </button>

        <button
          onClick={() => {
            onSelectProject(nextProject)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="group inline-flex items-center gap-2 hover:text-black transition-colors cursor-pointer text-right"
        >
          <div>
            <div className="text-[10px] text-neutral-600 uppercase">Next Work</div>
            <div className="font-serif text-base text-neutral-900 group-hover:underline">
              {nextProject.title}
            </div>
          </div>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        imageUrl={allImages[lightboxIndex]?.url}
        caption={allImages[lightboxIndex]?.caption}
        currentIndex={lightboxIndex}
        totalCount={allImages.length}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : allImages.length - 1))}
        onNext={() => setLightboxIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : 0))}
      />
    </div>
  )
}
