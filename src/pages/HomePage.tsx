import type { Project } from '../types'
import { Hero } from '../home/Hero'
import { WorksGallery } from '../home/WorksGallery'
import { AboutIntro, ClosingCta, CredentialBand, Philosophy, Process } from '../home/Sections'
import { scrollToElement } from '../lib/scroll'

interface HomePageProps {
  projects: Project[]
  onSelectProject: (p: Project) => void
  onNavigate: (tab: string) => void
  onOpenPdfMode: () => void
}

export function HomePage({ projects, onSelectProject, onNavigate, onOpenPdfMode }: HomePageProps) {
  return (
    <>
      <Hero onExplore={() => scrollToElement(document.getElementById('work'))} onContact={() => onNavigate('contact')} />
      <CredentialBand />
      <AboutIntro projects={projects} onAbout={() => onNavigate('about')} />
      <WorksGallery projects={projects} onSelectProject={onSelectProject} />
      <Philosophy />
      <Process />
      <ClosingCta onContact={() => onNavigate('contact')} onPdf={onOpenPdfMode} />
    </>
  )
}
