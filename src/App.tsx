import { useState, useEffect } from 'react'
import { HomePage } from './pages/HomePage'
import { initSmoothScroll, scrollToElement, scrollToTop } from './lib/scroll'
import { projects } from './data/projects'
import type { Project } from './types'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ProjectDetail } from './components/ProjectDetail'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { PdfLookbookPage } from './pages/PdfLookbookPage'

export function App() {
  const [currentTab, setCurrentTab] = useState<string>('home')
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
      if (['about', 'contact'].includes(hash)) {
        setCurrentTab(hash)
      } else if (['work', 'works', 'archive'].includes(hash)) {
        // Few enough projects that the home gallery is the works page
        setCurrentTab('home')
        setTimeout(() => scrollToElement(document.getElementById('work')), 120)
      } else {
        setCurrentTab('home')
      }
      setSelectedProject(null)
    }

    initSmoothScroll()

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
    scrollToTop()
  }

  const handleBackToWorks = () => {
    setSelectedProject(null)
    setCurrentTab('home')
    setIsPdfMode(false)
    window.location.hash = 'work'
  }

  const handleNavigateTab = (tab: string) => {
    setSelectedProject(null)
    setIsPdfMode(false)
    if (tab === 'work') {
      if (currentTab === 'home' && !selectedProject) scrollToElement(document.getElementById('work'))
      window.location.hash = 'work'
      setCurrentTab('home')
      return
    }
    setCurrentTab(tab)
    window.location.hash = tab === 'home' ? '' : tab
    scrollToTop()
  }

  const handleOpenPdfMode = () => {
    setIsPdfMode(true)
    window.location.hash = 'pdf-lookbook'
    scrollToTop()
  }

  const handleClosePdfMode = () => {
    setIsPdfMode(false)
    window.location.hash = currentTab === 'project' && selectedProject ? `project/${selectedProject.slug}` : currentTab
    scrollToTop()
  }

  // If in dedicated PDF Lookbook mode
  if (isPdfMode) {
    return <PdfLookbookPage projects={projects} onBack={handleClosePdfMode} />
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F3F2EE] text-[#121211]">
      <Navbar
        currentTab={currentTab}
        setCurrentTab={handleNavigateTab}
        onOpenPdfMode={handleOpenPdfMode}
      />

      <main className={`flex-1 ${currentTab === 'home' && !selectedProject ? '' : 'pt-20 md:pt-24 pb-24'}`}>
        {selectedProject ? (
          <ProjectDetail
            project={selectedProject}
            allProjects={projects}
            onBack={handleBackToWorks}
            onSelectProject={handleSelectProject}
          />
        ) : currentTab === 'home' ? (
          <HomePage
            projects={projects}
            onSelectProject={handleSelectProject}
            onNavigate={handleNavigateTab}
            onOpenPdfMode={handleOpenPdfMode}
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
