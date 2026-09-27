import type { Project } from '../types'
import { architectProfile } from '../data/profile'
import { Printer, ArrowLeft } from 'lucide-react'

interface PdfLookbookPageProps {
  projects: Project[]
  onBack: () => void
}

export const PdfLookbookPage: React.FC<PdfLookbookPageProps> = ({ projects, onBack }) => {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="bg-neutral-100 min-h-screen py-8 print:py-0 print:bg-white text-neutral-900">
      {/* Floating Action Header (Hidden during print) */}
      <div className="no-print max-w-5xl mx-auto px-6 mb-8 flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-700 hover:text-black transition-colors cursor-pointer"
        >
          <ArrowLeft size={15} />
          <span>Exit PDF Monograph View</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-neutral-500 hidden sm:inline">
            A4 Monograph Layout • Print-ready
          </span>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider rounded-xs hover:bg-neutral-800 transition-colors shadow-md cursor-pointer"
          >
            <Printer size={15} />
            <span>Print or Save to PDF</span>
          </button>
        </div>
      </div>

      {/* Printable Book Pages Container */}
      <div className="max-w-5xl mx-auto space-y-12 print:space-y-0 print:max-w-none">
        {/* ================= SPREAD 01: COVER PAGE ================= */}
        <section className="page-break bg-white p-12 sm:p-20 shadow-lg print:shadow-none min-h-[1100px] flex flex-col justify-between border border-neutral-200 print:border-none">
          {/* Top metadata */}
          <div className="flex items-center justify-between font-mono text-xs text-neutral-500 uppercase tracking-widest border-b border-black pb-4">
            <span>SELECTED ARCHITECTURAL WORKS</span>
            <span>2023 — 2025</span>
          </div>

          {/* Central Title */}
          <div className="my-auto space-y-6 max-w-2xl">
            <div className="font-mono text-sm tracking-widest uppercase text-neutral-400">
              PORTFOLIO MONOGRAPH
            </div>
            <h1 className="font-serif text-6xl sm:text-8xl tracking-tight text-neutral-950 font-normal leading-none">
              {architectProfile.name}
            </h1>
            <p className="font-sans text-xl text-neutral-600 font-light tracking-wide">
              {architectProfile.title}
            </p>
            <div className="w-16 h-[2px] bg-black mt-8"></div>
          </div>

          {/* Bottom Coordinates */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 border-t border-black font-mono text-xs">
            <div>
              <div className="text-neutral-400 text-[10px] uppercase">Education</div>
              <div className="font-semibold text-neutral-900">B.Arch (Honors)</div>
              <div className="text-neutral-500">EiABC 2024</div>
            </div>
            <div>
              <div className="text-neutral-400 text-[10px] uppercase">Specialization</div>
              <div className="font-semibold text-neutral-900">Minimalist & Bioclimatic</div>
              <div className="text-neutral-500">Spatial Practice</div>
            </div>
            <div>
              <div className="text-neutral-400 text-[10px] uppercase">Studio Location</div>
              <div className="font-semibold text-neutral-900">Addis Ababa</div>
              <div className="text-neutral-500">Available Globally</div>
            </div>
            <div>
              <div className="text-neutral-400 text-[10px] uppercase">Direct Inquiries</div>
              <div className="font-semibold text-neutral-900">{architectProfile.email}</div>
              <div className="text-neutral-500">{architectProfile.phone}</div>
            </div>
          </div>
        </section>

        {/* ================= SPREAD 02: PHILOSOPHY & CV ================= */}
        <section className="page-break bg-white p-12 sm:p-20 shadow-lg print:shadow-none min-h-[1100px] flex flex-col justify-between border border-neutral-200 print:border-none">
          <div className="flex items-center justify-between font-mono text-xs text-neutral-400 uppercase tracking-widest border-b border-neutral-200 pb-3">
            <span>{architectProfile.name}</span>
            <span>CURRICULUM VITAE & MANIFESTO</span>
            <span>02</span>
          </div>

          <div className="my-auto grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5 space-y-6">
              <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                Architectural Stance
              </div>
              <blockquote className="font-serif text-2xl text-neutral-900 leading-snug italic border-l-2 border-black pl-4">
                "{architectProfile.philosophyStatement}"
              </blockquote>
              <div className="space-y-3 font-sans text-xs text-neutral-700 leading-relaxed pt-4">
                {architectProfile.bioParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="md:col-span-7 space-y-8">
              {/* Experience */}
              <div className="space-y-4">
                <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 pb-1 border-b border-neutral-200">
                  Professional Practice
                </div>
                {architectProfile.experience.map((exp, idx) => (
                  <div key={idx} className="space-y-1 font-sans text-xs">
                    <div className="flex justify-between font-semibold text-neutral-900">
                      <span>{exp.role} — {exp.studio}</span>
                      <span className="font-mono text-neutral-500">{exp.period}</span>
                    </div>
                    <p className="text-neutral-600">{exp.description}</p>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="space-y-3">
                <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 pb-1 border-b border-neutral-200">
                  Academic Credentials
                </div>
                {architectProfile.education.map((edu, idx) => (
                  <div key={idx} className="space-y-0.5 font-sans text-xs">
                    <div className="flex justify-between font-semibold text-neutral-900">
                      <span>{edu.degree}</span>
                      <span className="font-mono text-neutral-500">{edu.period}</span>
                    </div>
                    <div className="text-neutral-600">{edu.institution}, {edu.location} ({edu.honors})</div>
                  </div>
                ))}
              </div>

              {/* Core Competencies */}
              <div className="space-y-2">
                <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 pb-1 border-b border-neutral-200">
                  Technical Proficiencies
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs font-mono text-neutral-700">
                  <div>
                    <div className="font-bold text-neutral-900 mb-1">BIM & 3D</div>
                    <div>Autodesk Revit (BIM Level 2)</div>
                    <div>Rhinoceros 7/8 & Grasshopper</div>
                    <div>AutoCAD Architectural</div>
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900 mb-1">Visualization & Detailing</div>
                    <div>Chaos V-Ray & Enscape</div>
                    <div>1:10 Construction Detailing</div>
                    <div>ClimateStudio Daylight Simulation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-3 text-right font-mono text-[10px] text-neutral-400">
            PORTFOLIO MONOGRAPH • CURRICULUM VITAE
          </div>
        </section>

        {/* ================= SPREAD 03+: PROJECT CASE STUDIES ================= */}
        {projects.map((project, idx) => (
          <section
            key={project.id}
            className="page-break bg-white p-12 sm:p-20 shadow-lg print:shadow-none min-h-[1100px] flex flex-col justify-between border border-neutral-200 print:border-none"
          >
            {/* Header */}
            <div className="flex items-center justify-between font-mono text-xs text-neutral-400 uppercase tracking-widest border-b border-neutral-200 pb-3">
              <span>{project.typology}</span>
              <span>PROJECT {project.id} / {String(projects.length).padStart(2, '0')}</span>
              <span>PAGE {String(idx + 3).padStart(2, '0')}</span>
            </div>

            {/* Content Body */}
            <div className="my-auto space-y-8">
              {/* Title & Specs */}
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-black pb-4">
                <div>
                  <h2 className="font-serif text-4xl sm:text-5xl text-neutral-900 tracking-tight font-normal">
                    {project.title}
                  </h2>
                  <p className="font-serif text-lg text-neutral-600 italic mt-1">
                    {project.subtitle}
                  </p>
                </div>
                <div className="font-mono text-xs text-neutral-700 text-left md:text-right shrink-0">
                  <div>{project.location}</div>
                  <div>{project.year} • {project.area} • {project.status}</div>
                </div>
              </div>

              {/* Main Visual & Drawing Duo */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Visual */}
                <div className="md:col-span-6 space-y-2">
                  <div className="aspect-4/3 overflow-hidden bg-neutral-100 rounded-xs border border-neutral-200">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-mono text-[10px] text-neutral-400">
                    Fig {project.id}.1 — Exterior Spatial Perspective
                  </div>
                </div>

                {/* Technical Drawing */}
                <div className="md:col-span-6 space-y-2">
                  <div className="aspect-4/3 bg-[#FAFAF8] rounded-xs border border-neutral-300 p-4 flex items-center justify-center overflow-hidden">
                    {project.drawings[0]?.svgCode && (
                      <div
                        className="w-full"
                        dangerouslySetInnerHTML={{ __html: project.drawings[0].svgCode }}
                      />
                    )}
                  </div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-neutral-400">
                    <span>Fig {project.id}.2 — {project.drawings[0]?.title}</span>
                    <span className="font-semibold text-neutral-800">{project.drawings[0]?.scale}</span>
                  </div>
                </div>
              </div>

              {/* Narrative & Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
                <div className="md:col-span-8 space-y-3 font-sans text-xs text-neutral-700 leading-relaxed">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                    Architectural Strategy & Tectonics
                  </div>
                  <p>{project.overview}</p>
                  <p><strong className="text-neutral-900">Bioclimatic Strategy:</strong> {project.environmentalStrategy}</p>
                </div>

                <div className="md:col-span-4 space-y-2 font-mono text-[11px] bg-neutral-50 p-4 rounded-xs border border-neutral-200">
                  <div className="font-bold text-neutral-900 uppercase text-[10px]">
                    Material Palette & Role
                  </div>
                  <div className="text-neutral-600 text-[10px] space-y-1">
                    <div><strong>ROLE:</strong> {project.role}</div>
                    {project.materials.map((m, mIdx) => (
                      <div key={mIdx}>
                        <strong>• {m.name}:</strong> {m.finish}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-neutral-200 pt-3 flex items-center justify-between font-mono text-[10px] text-neutral-400">
              <span>{architectProfile.name} • PORTFOLIO</span>
              <span>{project.title}</span>
            </div>
          </section>
        ))}

        {/* ================= SPREAD: CLOSING & INQUIRIES ================= */}
        <section className="page-break bg-white p-12 sm:p-20 shadow-lg print:shadow-none min-h-[1100px] flex flex-col justify-between border border-neutral-200 print:border-none">
          <div className="flex items-center justify-between font-mono text-xs text-neutral-400 uppercase tracking-widest border-b border-neutral-200 pb-3">
            <span>CONCLUSION & INQUIRIES</span>
            <span>END OF MONOGRAPH</span>
          </div>

          <div className="my-auto max-w-xl space-y-8">
            <h2 className="font-serif text-5xl sm:text-6xl text-neutral-900 tracking-tight font-normal leading-tight">
              Looking Forward
            </h2>
            <p className="font-sans text-neutral-600 leading-relaxed text-sm">
              Thank you for reviewing this portfolio. I am dedicated to joining an ambitious architecture studio where material rigor, environmental intelligence, and spatial quietude are foundational values.
            </p>
            <div className="space-y-3 font-mono text-xs text-neutral-800 pt-4 border-t border-black">
              <div><strong>DIRECT EMAIL:</strong> {architectProfile.email}</div>
              <div><strong>TELEPHONE:</strong> {architectProfile.phone}</div>
              <div><strong>LOCATION:</strong> {architectProfile.location}</div>
              <div><strong>PORTFOLIO CAD REVISION:</strong> 2025.2 (CONFIDENTIAL)</div>
            </div>
          </div>

          <div className="border-t border-black pt-4 font-mono text-[10px] text-neutral-500 flex justify-between">
            <span>© {new Date().getFullYear()} {architectProfile.name}</span>
            <span>PRODUCED WITH MINIMALIST PRECISION</span>
          </div>
        </section>
      </div>
    </div>
  )
}
