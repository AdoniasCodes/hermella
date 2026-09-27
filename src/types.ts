export interface Drawing {
  id: string
  title: string
  type: 'plan' | 'section' | 'elevation' | 'axonometric' | 'detail'
  scale: string
  description: string
  svgCode?: string
  imageUrl?: string
}

export interface MaterialSpec {
  name: string
  finish: string
  origin: string
  texture: string
  imageUrl?: string
}

export interface Project {
  id: string
  slug: string
  title: string
  subtitle: string
  typology: 'Residential' | 'Cultural' | 'Adaptive Reuse' | 'Institutional' | 'Prefab & Research'
  year: number
  location: string
  coordinates: string
  area: string
  status: 'Completed' | 'Under Construction' | 'Detailed Design' | 'Academic & Research'
  role: string
  collaborators?: string
  heroImage: string
  galleryImages: {
    url: string
    caption: string
    aspectRatio?: 'landscape' | 'portrait' | 'square'
  }[]
  overview: string
  architecturalManifesto: string
  designChallenge: string
  spatialStrategy: string
  environmentalStrategy: string
  drawings: Drawing[]
  materials: MaterialSpec[]
  keyFeatures: string[]
}

export interface ExperienceItem {
  period: string
  role: string
  studio: string
  location: string
  description: string
  highlights: string[]
}

export interface EducationItem {
  period: string
  degree: string
  institution: string
  location: string
  honors?: string
  thesisTitle?: string
}

export interface SkillCategory {
  category: string
  items: string[]
}
