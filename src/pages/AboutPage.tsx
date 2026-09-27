import { architectProfile } from '../data/profile'
import { Award, GraduationCap, Briefcase, Cpu, FileText, CheckCircle2 } from 'lucide-react'

interface AboutPageProps {
  onOpenPdfMode: () => void
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenPdfMode }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 sm:py-20 animate-in fade-in duration-300">
      {/* Page Header */}
      <div className="border-b border-black/[0.08] pb-12 mb-16">
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-3">
          Curriculum Vitae & Spatial Stance
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="font-serif text-5xl sm:text-7xl text-neutral-900 tracking-tight font-normal">
              Profile & Practice
            </h1>
            <p className="font-mono text-xs sm:text-sm text-neutral-600 mt-2">
              {architectProfile.title} • {architectProfile.location}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPdfMode}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider rounded-xs hover:bg-neutral-800 transition-colors cursor-pointer shadow-xs"
            >
              <FileText size={14} />
              <span>Full Portfolio Lookbook (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Portrait representation & Statement */}
        <div className="lg:col-span-5 space-y-12">
          {/* Portrait Image */}
          <div className="space-y-3">
            <div className="overflow-hidden rounded-xs bg-[#EFECE6] border border-neutral-200 aspect-3/4 relative shadow-xs flex items-end justify-center pt-6 px-4">
              <img
                src={`${import.meta.env.BASE_URL}hermella.png`}
                alt={architectProfile.name}
                className="max-h-[95%] w-auto object-contain object-bottom drop-shadow-md select-none"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 font-mono text-[10px] text-neutral-800 rounded-xs border border-neutral-200/80 shadow-2xs">
                ARCHITECTURAL DESIGNER
              </div>
            </div>
            <div className="flex items-center justify-between font-mono text-[11px] text-neutral-600 pt-1">
              <span>Hermella Araya Manaye</span>
              <span>EiABC Graduate</span>
            </div>
          </div>

          {/* Architectural Manifesto */}
          <div className="p-8 bg-[#F4F1EA] rounded-xs space-y-4 border border-neutral-200/60">
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              Architectural Manifesto
            </div>
            <blockquote className="font-serif text-xl sm:text-2xl text-neutral-900 leading-snug italic">
              "{architectProfile.philosophyStatement}"
            </blockquote>
          </div>

          {/* Availability Box */}
          <div className="border border-neutral-300 p-6 rounded-xs space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-700 font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Current Status</span>
            </div>
            <p className="text-sm font-sans text-neutral-700 leading-relaxed">
              {architectProfile.statusAvailability}
            </p>
            <div className="pt-2 font-mono text-xs text-neutral-600">
              Direct: <a href={`mailto:${architectProfile.email}`} className="text-neutral-900 underline font-medium">{architectProfile.email}</a>
            </div>
          </div>
        </div>

        {/* Right Column: Bio, Experience, Education, Software, Awards */}
        <div className="lg:col-span-7 space-y-16">
          {/* Biography Narrative */}
          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-600 pb-2 border-b border-black/[0.06]">
              01. Background & Stance
            </h2>
            <div className="space-y-4 font-sans text-neutral-700 text-sm sm:text-base leading-relaxed">
              {architectProfile.bioParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>

          {/* Professional Experience */}
          <section className="space-y-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-600 pb-2 border-b border-black/[0.06] flex items-center justify-between">
              <span>02. Professional Experience</span>
              <Briefcase size={14} className="text-neutral-400" />
            </h2>
            <div className="space-y-8">
              {architectProfile.experience.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="font-serif text-xl sm:text-2xl text-neutral-900">
                      {exp.role} <span className="font-sans text-sm text-neutral-500 font-normal">at {exp.studio}</span>
                    </h3>
                    <span className="font-mono text-xs text-neutral-500">{exp.period}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="pt-2 space-y-1.5">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-sans text-neutral-700">
                        <span className="font-mono text-neutral-400 text-[10px] mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-600 pb-2 border-b border-black/[0.06] flex items-center justify-between">
              <span>03. Education & Credentials</span>
              <GraduationCap size={14} className="text-neutral-400" />
            </h2>
            <div className="space-y-6">
              {architectProfile.education.map((edu, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="font-serif text-xl text-neutral-900">
                      {edu.degree}
                    </h3>
                    <span className="font-mono text-xs text-neutral-500">{edu.period}</span>
                  </div>
                  <div className="font-mono text-xs text-neutral-700">
                    {edu.institution}, {edu.location}
                  </div>
                  {edu.honors && (
                    <div className="inline-block bg-neutral-100 text-neutral-800 text-[11px] font-mono px-2 py-0.5 rounded-xs mt-1">
                      {edu.honors}
                    </div>
                  )}
                  {edu.thesisTitle && (
                    <p className="text-xs text-neutral-600 italic font-serif pt-1">
                      Graduation Thesis: "{edu.thesisTitle}"
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Technical Proficiencies & Software */}
          <section className="space-y-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-600 pb-2 border-b border-black/[0.06] flex items-center justify-between">
              <span>04. Technical & Software Capabilities</span>
              <Cpu size={14} className="text-neutral-400" />
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {architectProfile.skills.map((cat, idx) => (
                <div key={idx} className="border border-neutral-200 bg-white p-4 rounded-xs shadow-2xs">
                  <div className="font-mono text-[11px] text-neutral-800 font-semibold uppercase tracking-wider mb-2.5">
                    {cat.category}
                  </div>
                  <ul className="space-y-1.5 text-xs text-neutral-600 font-sans">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-neutral-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Awards & Press */}
          <section className="space-y-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-600 pb-2 border-b border-black/[0.06] flex items-center justify-between">
              <span>05. Honors, Exhibitions & Publications</span>
              <Award size={14} className="text-neutral-400" />
            </h2>
            <div className="divide-y divide-neutral-200">
              {architectProfile.awardsAndExhibitions.map((award, idx) => (
                <div key={idx} className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <div className="font-serif text-base text-neutral-900 font-medium">
                      {award.title}
                    </div>
                    <div className="text-xs text-neutral-600 font-sans mt-0.5">
                      {award.description}
                    </div>
                  </div>
                  <div className="font-mono text-xs text-neutral-500 whitespace-nowrap">
                    {award.year}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
