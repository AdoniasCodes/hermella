import { useState, useEffect } from 'react'
import { projects } from './data/projects'
import type { Project } from './types'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { WorksPage } from './pages/WorksPage'
import { ProjectDetail } from './components/ProjectDetail'
import { AboutPage } from './pages/AboutPage'
import { ArchivePage } from './pages/ArchivePage'
import { ContactPage } from './pages/ContactPage'
import { PdfLookbookPage } from './pages/PdfLookbookPage'

export function App() {
  const [currentTab, setCurrentTab] = useState<string>('works')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isPdfMode, setIsPdfMode] = useState<boolean>(false)

  // URL Hash Sync for deep linking and browser back button support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash.startsWith('project/')) {
        const slug = hash.replace('project/', '')
        const found = projects.find((p) => p.slug === slug)
        if (found) {
          setSelectedProject(found)
          setCurrentTab('project')
          setIsPdfMode(false)
          return
        }
      }

      if (hash === 'pdf-lookbook') {
        setIsPdfMode(true)
        return
      }

      setIsPdfMode(false)
      if (['works', 'archive', 'about', 'contact'].includes(hash)) {
        setCurrentTab(hash)
        setSelectedProject(null)
      } else {
        setCurrentTab('works')
        setSelectedProject(null)
      }
    }

    // Initial check
    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project)
    setCurrentTab('project')
    setIsPdfMode(false)
    window.location.hash = `project/${project.slug}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToWorks = () => {
    setSelectedProject(null)
    setCurrentTab('works')
    setIsPdfMode(false)
    window.location.hash = 'works'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavigateTab = (tab: string) => {
    setCurrentTab(tab)
    setSelectedProject(null)
    setIsPdfMode(false)
    window.location.hash = tab
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleOpenPdfMode = () => {
    setIsPdfMode(true)
    window.location.hash = 'pdf-lookbook'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleClosePdfMode = () => {
    setIsPdfMode(false)
    window.location.hash = currentTab === 'project' && selectedProject ? `project/${selectedProject.slug}` : currentTab
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // If in dedicated PDF Lookbook mode
  if (isPdfMode) {
    return <PdfLookbookPage projects={projects} onBack={handleClosePdfMode} />
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF9F6] text-[#1C1B1A]">
      <Navbar
        currentTab={currentTab}
        setCurrentTab={handleNavigateTab}
        onOpenPdfMode={handleOpenPdfMode}
      />

      <main className="flex-1">
        {selectedProject ? (
          <ProjectDetail
            project={selectedProject}
            allProjects={projects}
            onBack={handleBackToWorks}
            onSelectProject={handleSelectProject}
          />
        ) : currentTab === 'works' ? (
          <WorksPage
            projects={projects}
            onSelectProject={handleSelectProject}
          />
        ) : currentTab === 'archive' ? (
          <ArchivePage
            projects={projects}
            onSelectProject={handleSelectProject}
          />
        ) : currentTab === 'about' ? (
          <AboutPage onOpenPdfMode={handleOpenPdfMode} />
        ) : currentTab === 'contact' ? (
          <ContactPage />
        ) : null}
      </main>

      <Footer onNavigateTab={handleNavigateTab} />
    </div>
  )
}

export default App
