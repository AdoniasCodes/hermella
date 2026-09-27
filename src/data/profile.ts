import type { ExperienceItem, EducationItem, SkillCategory } from '../types'

export interface ArchitectProfile {
  name: string
  title: string
  location: string
  email: string
  phone: string
  statusAvailability: string
  philosophyStatement: string
  portraitImage: string
  bioParagraphs: string[]
  experience: ExperienceItem[]
  education: EducationItem[]
  skills: SkillCategory[]
  awardsAndExhibitions: {
    year: number
    title: string
    organization: string
    description: string
  }[]
  selectedPress: {
    year: number
    publication: string
    articleTitle: string
    link?: string
  }[]
}

export const architectProfile: ArchitectProfile = [
  {
    name: 'Hermella Araya Manaye',
    title: 'Architectural Designer & Spatial Researcher',
    location: 'Addis Ababa, Ethiopia / Open to Global Relocation & Remote',
    email: 'hermellaraya@gmail.com',
    phone: '+251 91 123 4567',
    portraitImage: 'hermella.png',
    statusAvailability: 'Available for Full-time Studio Roles, Project Collaborations & Competitions',
    philosophyStatement:
      'Architecture exists in the quiet calibration between matter and light. I pursue an architecture of rigorous reduction — stripped of decorative superfluity, deeply attuned to climate and topography, and constructed from materials that age with grace and dignity.',
    bioParagraphs: [
      'Graduated with honors in Architecture in 2024, my practice is grounded in a deep reverence for tectonic clarity, vernacular intelligence, and environmental thermodynamics. Over the past two years, I have worked across diverse typologies — from bespoke alpine residential sanctuaries to adaptive industrial heritage conversions and ecological research prototypes.',
      'My design methodology begins with rigorous analytical sketching and physical massing models, advancing through parametric daylight simulation, bioclimatic envelope optimization, and precision working documentation. I believe the true test of architecture lies not in render imagery, but in the tactile reality of the 1:1 construction joint and the enduring dignity of the space over time.'
    ],
    experience: [
      {
        period: '2024 — Present',
        role: 'Junior Architectural Designer',
        studio: 'Studio Tectonica / Atelier A',
        location: 'Addis Ababa',
        description:
          'Contributing to high-end residential, cultural pavilions, and hospitality projects through all phases from schematic design to on-site construction observation.',
        highlights: [
          'Authored comprehensive construction documentation packages (plans, 1:20 sections, custom millwork schedules) in Autodesk Revit and AutoCAD.',
          'Conducted daylight and solar radiation simulations using ClimateStudio & Rhinoceros to optimize passive shading overhangs.',
          'Coordinated directly with structural, MEP engineers, and master timber joiners during construction administration.'
        ]
      },
      {
        period: '2023 — 2024',
        role: 'Architectural Intern & Physical Model Fabricator',
        studio: 'Urban Context Lab',
        location: 'Addis Ababa',
        description:
          'Assisted senior associates with site surveys, schematic zoning analysis, and precision exhibition model fabrication.',
        highlights: [
          'Fabricated large-scale 1:50 basswood and cast-plaster sectional models for municipal design review presentations.',
          'Assisted with zoning variance submissions, building code compliance checks, and material sample boards.',
          'Rendered high-fidelity spatial visualizations using Rhino, V-Ray, and Adobe Photoshop.'
        ]
      }
    ],
    education: [
      {
        period: '2019 — 2024',
        degree: 'Bachelor of Architecture (B.Arch, 5-Year Professional Degree)',
        institution: 'EiABC (Ethiopian Institute of Architecture, Building Construction and City Development)',
        location: 'Addis Ababa University',
        honors: 'First Class Honors (Graduated in Top 3% of Class)',
        thesisTitle: 'Bioclimatic Topographies: Stepped Earth Architecture for Highland Environmental Research'
      }
    ],
    skills: [
      {
        category: 'BIM & Parametric Modeling',
        items: ['Autodesk Revit (BIM Level 2)', 'Rhinoceros 7/8', 'Grasshopper (Parametric Design)', 'AutoCAD', 'SketchUp Pro']
      },
      {
        category: 'Rendering & Visualization',
        items: ['Chaos V-Ray', 'Enscape Realtime', 'Twinmotion', 'Adobe Photoshop', 'Illustrator', 'InDesign']
      },
      {
        category: 'Environmental & Technical',
        items: ['ClimateStudio (Daylight & Solar)', 'Thermal Mass Calculations', 'Working Drawings & Detailing (1:5 to 1:50)', 'Bill of Quantities (BoQ) Coordination']
      },
      {
        category: 'Craft & Fabrication',
        items: ['Precision Wood Model Making', 'Laser Cutting & CNC Routing', 'Cast Concrete & Plaster Prototyping', 'Hand Drafting & Ink Tectonics']
      }
    ],
    awardsAndExhibitions: [
      {
        year: 2024,
        title: 'National Architectural Thesis Prize — Commendation',
        organization: 'Association of Ethiopian Architects (AEA)',
        description: 'Recognized for outstanding integration of passive bioclimatic systems with vernacular earth construction.'
      },
      {
        year: 2023,
        title: 'Young Architects Biennale Exhibition: "Raw Materiality"',
        organization: 'Goethe-Institut & Modern Art Museum',
        description: 'Exhibited experimental 1:1 rammed-earth and timber joint prototypes exploring sustainable low-carbon construction.'
      }
    ],
    selectedPress: [
      {
        year: 2025,
        publication: 'African Architectural Review',
        articleTitle: 'Emerging Voices: Reinterpreting Vernacular Monoliths in the Great Rift Valley'
      },
      {
        year: 2024,
        publication: 'Design Indaba Showcase',
        articleTitle: 'Graduates to Watch: Minimalist Precision Meets African Earth Architecture'
      }
    ]
  }
][0]
