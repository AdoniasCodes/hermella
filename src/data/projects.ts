import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: '01',
    slug: 'house-in-the-rift',
    title: 'Monolith & Horizon House',
    subtitle: 'A quiet basalt and rammed-earth sanctuary anchored to the volcanic escarpment.',
    typology: 'Residential',
    year: 2025,
    location: 'Great Rift Escarpment, Ethiopia',
    coordinates: '8°54\'N 39°17\'E',
    area: '395 m²',
    status: 'Detailed Design',
    role: 'Lead Architectural Designer (Concept through Detail Documentation)',
    collaborators: 'Structural: Atelier K. Eng; Landscape: Studio Arba',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
        caption: 'Cantilevered concrete terrace framing the uninterrupted western horizon at dusk.',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        caption: 'The central impluvium courtyard with natural basalt water basin and microclimate cooling.',
        aspectRatio: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
        caption: 'Double-height living pavilion featuring monolithic board-marked concrete and raw oak joinery.',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
        caption: 'Morning light filtration along the monolithic circulation corridor.',
        aspectRatio: 'portrait'
      }
    ],
    overview: 'Monolith & Horizon House is conceived as an architectural response to the dramatic topography of the Great Rift Escarpment. Rather than imposing a foreign silhouette onto the fragile plateau, the residence is partially embedded into the terrain. A thick thermal spine of locally quarried basalt and rammed earth shields private quarters from intense eastern sun, while open living pavilions cantilever lightly over the hillside toward panoramic sunset vistas.',
    architecturalManifesto: 'Architecture should not shout at the landscape; it should anchor human consciousness to the cadence of stone, wind, and low-angle light.',
    designChallenge: 'The site presents extreme diurnal temperature swings (exceeding 22°C between noon and midnight), severe dry-season solar radiation, and gusting escarpment wind currents. The challenge was to achieve zero-energy thermal comfort without mechanical HVAC systems while maintaining expansive spatial openness.',
    spatialStrategy: 'Organized around a monastic central courtyard (impluvium), the layout separates collective gathering pavilions from contemplative private sleeping suites. Deep 2.4-meter horizontal eaves create shaded transitional verandas that blur the threshold between interior shelter and raw volcanic terrain.',
    environmentalStrategy: 'Heavy 450mm rammed-earth walls act as thermal batteries, capturing radiant solar heat during peak daytime hours and gradually releasing it into the interior during chilly alpine nights. High-level clerestory louvers harness prevailing valley drafts for passive stack-effect cooling.',
    keyFeatures: [
      'Passive solar orientation with calculated 2.4m shading overhangs',
      'Locally sourced volcanic aggregate concrete and site-excavated rammed earth',
      'Central rainwater harvesting impluvium feeding 45,000L subterranean cistern',
      'Framed aperture slots aligning with solstice solar geometry'
    ],
    drawings: [
      {
        id: 'drw-01',
        title: 'Ground Floor Level Plan (+0.00)',
        type: 'plan',
        scale: '1:100',
        description: 'Primary residential level showing central impluvium, cantilevered living volume, and service spine.',
        svgCode: `<svg viewBox="0 0 800 500" class="w-full h-auto text-neutral-800" stroke="currentColor" fill="none" stroke-width="1.2">
          <!-- Grid lines -->
          <line x1="60" y1="40" x2="740" y2="40" stroke="#d4d4d8" stroke-dasharray="4 4" />
          <line x1="60" y1="250" x2="740" y2="250" stroke="#d4d4d8" stroke-dasharray="4 4" />
          <line x1="60" y1="440" x2="740" y2="440" stroke="#d4d4d8" stroke-dasharray="4 4" />
          <line x1="80" y1="30" x2="80" y2="450" stroke="#d4d4d8" stroke-dasharray="4 4" />
          <line x1="280" y1="30" x2="280" y2="450" stroke="#d4d4d8" stroke-dasharray="4 4" />
          <line x1="520" y1="30" x2="520" y2="450" stroke="#d4d4d8" stroke-dasharray="4 4" />
          <line x1="720" y1="30" x2="720" y2="450" stroke="#d4d4d8" stroke-dasharray="4 4" />
          
          <!-- Outer Thick Structural Walls -->
          <rect x="100" y="80" width="580" height="340" stroke-width="3" fill="#fafafa" />
          
          <!-- Courtyard Impluvium -->
          <rect x="290" y="160" width="200" height="180" stroke-width="2.5" fill="#f4f4f5" />
          <rect x="330" y="195" width="120" height="110" stroke="#a1a1aa" stroke-dasharray="2 2" fill="#e4e4e7" />
          <text x="390" y="255" font-size="10" font-family="Space Mono, monospace" text-anchor="middle" fill="#71717a">IMPLUVIUM (-0.45)</text>
          
          <!-- Master Wing Left -->
          <line x1="240" y1="80" x2="240" y2="420" stroke-width="2.5" />
          <line x1="100" y1="240" x2="240" y2="240" stroke-width="2" />
          <text x="170" y="160" font-size="11" font-family="Space Mono, monospace" text-anchor="middle" font-weight="bold">PRIMARY SUITE</text>
          <text x="170" y="180" font-size="9" font-family="Space Mono, monospace" text-anchor="middle" fill="#71717a">38.4 m²</text>
          
          <text x="170" y="320" font-size="11" font-family="Space Mono, monospace" text-anchor="middle" font-weight="bold">STUDIO / ARCHIVE</text>
          <text x="170" y="340" font-size="9" font-family="Space Mono, monospace" text-anchor="middle" fill="#71717a">24.2 m²</text>

          <!-- Cantilevered Living Pavilions Right -->
          <line x1="530" y1="80" x2="530" y2="420" stroke-width="2.5" />
          <text x="625" y="180" font-size="12" font-family="Space Mono, monospace" text-anchor="middle" font-weight="bold">LIVING & HEARTH</text>
          <text x="625" y="200" font-size="9" font-family="Space Mono, monospace" text-anchor="middle" fill="#71717a">64.5 m²</text>
          <line x1="530" y1="260" x2="680" y2="260" stroke-width="1.8" />
          <text x="605" y="340" font-size="11" font-family="Space Mono, monospace" text-anchor="middle" font-weight="bold">KITCHEN & CELLAR</text>
          <text x="605" y="360" font-size="9" font-family="Space Mono, monospace" text-anchor="middle" fill="#71717a">32.0 m²</text>

          <!-- Veranda & Cantilever overhang -->
          <line x1="680" y1="50" x2="740" y2="50" stroke="#71717a" stroke-dasharray="6 3" />
          <line x1="740" y1="50" x2="740" y2="450" stroke="#71717a" stroke-dasharray="6 3" />
          <line x1="680" y1="450" x2="740" y2="450" stroke="#71717a" stroke-dasharray="6 3" />
          <text x="710" y="255" font-size="9" font-family="Space Mono, monospace" text-anchor="middle" fill="#71717a" transform="rotate(90, 710, 255)">CANTILEVER VERANDA (+0.00)</text>

          <!-- North Arrow -->
          <g transform="translate(730, 90)">
            <circle cx="0" cy="0" r="16" stroke="#27272a" stroke-width="1" />
            <polygon points="0,-14 -4,-2 4,-2" fill="#27272a" />
            <line x1="0" y1="-2" x2="0" y2="12" stroke="#27272a" stroke-width="1" />
            <text x="0" y="-18" font-size="9" font-family="Space Mono, monospace" text-anchor="middle" font-weight="bold">N</text>
          </g>

          <!-- Scale bar -->
          <g transform="translate(100, 465)">
            <line x1="0" y1="0" x2="100" y2="0" stroke="#27272a" stroke-width="2" />
            <line x1="0" y1="-4" x2="0" y2="4" stroke="#27272a" stroke-width="1.5" />
            <line x1="50" y1="-3" x2="50" y2="3" stroke="#27272a" stroke-width="1.5" />
            <line x1="100" y1="-4" x2="100" y2="4" stroke="#27272a" stroke-width="1.5" />
            <text x="0" y="14" font-size="8" font-family="Space Mono, monospace">0m</text>
            <text x="50" y="14" font-size="8" font-family="Space Mono, monospace" text-anchor="middle">5m</text>
            <text x="100" y="14" font-size="8" font-family="Space Mono, monospace" text-anchor="end">10m</text>
          </g>
        </svg>`
      },
      {
        id: 'drw-02',
        title: 'Longitudinal Section A-A\' (Solar Geometry)',
        type: 'section',
        scale: '1:100',
        description: 'Cut through courtyard, showing 2.4m cantilever eaves, thermal mass earth wall, and solar solstice angles.',
        svgCode: `<svg viewBox="0 0 800 380" class="w-full h-auto text-neutral-800" stroke="currentColor" fill="none" stroke-width="1.2">
          <!-- Grade line / Topography slope -->
          <path d="M 40 280 Q 250 270 450 300 T 760 340" stroke="#52525b" stroke-width="2.5" />
          <path d="M 40 280 Q 250 270 450 300 T 760 340 L 760 370 L 40 370 Z" fill="#f4f4f5" opacity="0.6" />
          
          <!-- Subterranean Cistern -->
          <rect x="330" y="300" width="130" height="50" stroke="#71717a" stroke-dasharray="3 3" />
          <text x="395" y="330" font-size="9" font-family="Space Mono, monospace" text-anchor="middle" fill="#71717a">RAINWATER CISTERN 45kL</text>

          <!-- Building Structure Section -->
          <!-- Left Wing: Bedroom / Thick wall -->
          <rect x="120" y="160" width="160" height="110" stroke-width="2.5" fill="#ffffff" />
          <rect x="100" y="150" width="20" height="120" stroke-width="3" fill="#27272a" />
          
          <!-- Central Courtyard Void -->
          <line x1="280" y1="270" x2="490" y2="270" stroke-width="2" />
          <line x1="330" y1="270" x2="330" y2="285" stroke-width="2" />
          <line x1="330" y1="285" x2="440" y2="285" stroke-width="2" />
          <line x1="440" y1="285" x2="440" y2="270" stroke-width="2" />
          <text x="385" y="280" font-size="8" font-family="Space Mono, monospace" text-anchor="middle" fill="#71717a">COURTYARD POOL</text>

          <!-- Living Room with Roof Cantilever -->
          <rect x="490" y="130" width="180" height="140" stroke-width="2.5" fill="#ffffff" />
          <!-- Heavy concrete roof slab with deep overhang -->
          <polygon points="460,120 740,105 740,125 460,135" fill="#27272a" stroke-width="1.5" />
          
          <!-- Cantilever support pier -->
          <rect x="630" y="270" width="24" height="45" fill="#3f3f46" />

          <!-- Solar path arrows -->
          <line x1="720" y1="40" x2="620" y2="135" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="4 2" />
          <polygon points="620,135 628,127 634,133" fill="#f59e0b" />
          <text x="730" y="45" font-size="9" font-family="Space Mono, monospace" fill="#d97706">SUMMER NOON (74°)</text>

          <line x1="750" y1="120" x2="550" y2="200" stroke="#e11d48" stroke-width="1.8" stroke-dasharray="4 2" />
          <polygon points="550,200 560,195 563,203" fill="#e11d48" />
          <text x="750" y="140" font-size="9" font-family="Space Mono, monospace" fill="#be123c">WINTER SOLSTICE (42°)</text>

          <text x="180" y="220" font-size="10" font-family="Space Mono, monospace" text-anchor="middle">PRIMARY WING</text>
          <text x="580" y="210" font-size="10" font-family="Space Mono, monospace" text-anchor="middle">LIVING PAVILION</text>
          <text x="690" y="100" font-size="9" font-family="Space Mono, monospace" fill="#52525b">2.4m EAVE OVERHANG</text>
        </svg>`
      }
    ],
    materials: [
      {
        name: 'Rammed Earth Monolith',
        finish: 'Unsealed natural compaction with local volcanic pozzolana',
        origin: 'Site excavation aggregate & volcanic silt',
        texture: 'Textured horizontal sedimentary striations with high thermal inertia'
      },
      {
        name: 'Board-Marked Concrete',
        finish: 'Rough-sawn eucalyptus formwork with natural oil release',
        origin: 'Low-clinker basalt composite cement',
        texture: 'Subtle wood grain imprint, tactile matte gray'
      },
      {
        name: 'Quarter-Sawn White Oak',
        finish: 'Dead-flat low-VOC natural wax emulsion',
        origin: 'Sustainably harvested regional timber',
        texture: 'Linear grain, warm tactile touch for millwork and doors'
      },
      {
        name: 'Thermal Steel Glazing',
        finish: 'Thermally-broken blackened matte powder coat',
        origin: 'Precision extruded profile',
        texture: 'Razor-thin 32mm sightlines framing landscape horizons'
      }
    ]
  },
  {
    id: '02',
    slug: 'pavilion-of-quietude',
    title: 'Pavilion of Quietude & Water',
    subtitle: 'A sensory meditation and cultural installation exploring daylight, acoustic shadow, and reflection.',
    typology: 'Cultural',
    year: 2024,
    location: 'Bishoftu Crater Lakes, Ethiopia',
    coordinates: '8°45\'N 38°59\'E',
    area: '520 m²',
    status: 'Completed',
    role: 'Spatial Designer & Working Detail Architect',
    collaborators: 'Acoustic Consultant: SoundSpace; Structural: Bereket T.',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=80',
        caption: 'The charred Yakisugi timber colonnade filtering soft northern daylight across the stone threshold.',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
        caption: 'Reflecting basin reflecting the ever-shifting cloudscapes of the volcanic caldera.',
        aspectRatio: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
        caption: 'Interior meditation chamber with acoustic micro-perforated timber ceiling.',
        aspectRatio: 'landscape'
      }
    ],
    overview: 'Commissioned as a seasonal pavilion for contemplative gathering and musical resonance, the structure sits lightly on the rim of an ancient volcanic caldera lake. The building orchestrates a gradual sensory sequence: visitors transition from the bright, windy outdoor terrain through a darkened timber decompression hall, emerging into a quiet sanctuary centered upon a still black granite reflection basin.',
    architecturalManifesto: 'To create silence in architecture is not to silence the world, but to give presence to the wind, the drop of water, and the slow movement of shadow.',
    designChallenge: 'The project required demountable foundations to protect the geological caldera rim, strict acoustic isolation from lake tourist boats, and zero use of artificial mechanical cooling.',
    spatialStrategy: 'A pinwheel spatial sequence where no interior door is required; circulation is organized via 90-degree baffles that block direct wind and exterior acoustic intrusion while guiding visitors toward the inner sky aperture.',
    environmentalStrategy: 'The central water basin acts as an evaporative cooling engine. Lakeside breezes are drawn across the water surface through submerged perimeter intake slots, providing natural convective cooling throughout the gallery.',
    keyFeatures: [
      'Reversible screw-pile structural foundation leaving no permanent scar on the caldera',
      'Charred Yakisugi timber louvers providing natural insect resistance and fire retardancy',
      'Honest monolithic granite water threshold calibrated to millimeter level',
      'Passive acoustic isolation achieving STC 48 via dense timber composite baffles'
    ],
    drawings: [
      {
        id: 'drw-201',
        title: 'Centroid Reflection Plan (1:125)',
        type: 'plan',
        scale: '1:125',
        description: 'Pinwheel acoustic baffles encircling central open-air reflecting pool and perimeter cloister.',
        svgCode: `<svg viewBox="0 0 700 450" class="w-full h-auto text-neutral-800" stroke="currentColor" fill="none" stroke-width="1.2">
          <!-- Concentric outer grid -->
          <circle cx="350" cy="225" r="180" stroke="#e4e4e7" stroke-dasharray="4 4" />
          <circle cx="350" cy="225" r="90" stroke="#cbd5e1" stroke-dasharray="2 2" />
          
          <!-- Outer Timber Baffle colonnade -->
          <rect x="150" y="75" width="400" height="300" stroke-width="2.5" fill="#fafafa" />
          
          <!-- Water Basin Centroid -->
          <rect x="270" y="145" width="160" height="160" stroke-width="2" fill="#f1f5f9" />
          <circle cx="350" cy="225" r="40" stroke="#94a3b8" fill="#e2e8f0" />
          <text x="350" y="222" font-size="9" font-family="Space Mono, monospace" text-anchor="middle" font-weight="bold">WATER BASIN</text>
          <text x="350" y="235" font-size="8" font-family="Space Mono, monospace" text-anchor="middle" fill="#64748b">DEPTH -0.30m</text>

          <!-- Pinwheel circulation walls -->
          <line x1="200" y1="75" x2="200" y2="240" stroke-width="3" stroke="#1e293b" />
          <line x1="500" y1="210" x2="500" y2="375" stroke-width="3" stroke="#1e293b" />
          <line x1="200" y1="320" x2="420" y2="320" stroke-width="3" stroke="#1e293b" />
          <line x1="280" y1="130" x2="500" y2="130" stroke-width="3" stroke="#1e293b" />

          <!-- Entrance threshold -->
          <g transform="translate(150, 280)">
            <text x="-40" y="5" font-size="8" font-family="Space Mono, monospace" fill="#475569">ENTRY ↘</text>
          </g>

          <text x="350" y="415" font-size="10" font-family="Space Mono, monospace" text-anchor="middle">ACOUSTIC CLOISTER WALKWAY</text>
        </svg>`
      }
    ],
    materials: [
      {
        name: 'Charred Yakisugi Cedar',
        finish: 'Traditional deep-char flame treatment, brushed and oil-sealed',
        origin: 'Responsible highland forestry plantation',
        texture: 'Velvety carbonized alligator skin pattern, deeply light-absorbent'
      },
      {
        name: 'Honed Black Volcanic Granite',
        finish: '300-grit wet-honed matte finish (no gloss)',
        origin: 'Ambo stone formation',
        texture: 'Silky mineral surface that deepens to absolute black when wet'
      },
      {
        name: 'Bead-Blasted Natural Aluminum',
        finish: 'Glass bead blast, clear anodized 25 microns',
        origin: 'Recycled structural alloy',
        texture: 'Diffuses harsh specular glare into soft metallic sheen'
      }
    ]
  },
  {
    id: '03',
    slug: 'the-tannery-atelier',
    title: 'The Tannery Loft & Atelier',
    subtitle: 'Adaptive reuse of a 1940s industrial masonry warehouse into a light-filled multi-disciplinary studio.',
    typology: 'Adaptive Reuse',
    year: 2024,
    location: 'Lideta Industrial Quarter, Addis Ababa',
    coordinates: '9°00\'N 38°44\'E',
    area: '440 m²',
    status: 'Completed',
    role: 'Lead Architect (Restoration Concept, Structural Insertion & Joinery)',
    collaborators: 'Masonry Heritage: D. Haile; Metal Fabrication: Artisan Ironworks',
    heroImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
        caption: 'The dramatic double-height main workshop revealing restored clay brickwork and black steel mezzanine.',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        caption: 'Suspended steel catwalk linking private drafting room to material library.',
        aspectRatio: 'portrait'
      }
    ],
    overview: 'Located within the historic industrial fabric of Lideta, this project rehabilitates a decommissioned 1940s tannery facility. Rather than erasing decades of industrial patina, the design embraces the scars and weathered character of the original masonry. A structurally independent timber and blackened steel framework was craned inside the shell, creating a multi-tiered creative collective without placing additional structural load onto the fragile historic brick perimeter.',
    architecturalManifesto: 'Adaptive reuse is not preservation through freezing; it is preservation through dialogue between the weight of history and the lightness of new intervention.',
    designChallenge: 'The original red-brick perimeter masonry possessed low seismic shear capacity and uneven subsidence. New interventions could not transfer lateral or vertical loads to existing brick walls.',
    spatialStrategy: 'An architectural "ship in a bottle." Four slender steel composite tree-columns support a suspended mezzanine platform 3.2 meters above the polished micro-cement ground floor. The gap between new structure and old wall is treated as a continuous light reveal.',
    environmentalStrategy: 'High industrial saw-tooth clerestory skylights were restored with modern high-performance insulated glass, bathing the drafting desks in continuous, glare-free northern light and eliminating artificial daytime lighting.',
    keyFeatures: [
      'Zero structural reliance on existing unreinforced historic masonry',
      'Restored saw-tooth roof monitors delivering 100% glare-free diffuse daylight',
      'Reclaimed industrial timber floorboards re-milled into acoustic ceiling slats',
      'Custom industrial steel pivot doors calibrated for smooth single-finger operation'
    ],
    drawings: [
      {
        id: 'drw-301',
        title: 'Mezzanine Insertion & Structural Void (1:100)',
        type: 'plan',
        scale: '1:100',
        description: 'Independent structural steel frame inserted within historic brick envelope, maintaining 400mm perimeter light reveal.',
        svgCode: `<svg viewBox="0 0 740 420" class="w-full h-auto text-neutral-800" stroke="currentColor" fill="none" stroke-width="1.2">
          <!-- Existing Historic Brick Outer Wall (Thick hatched border) -->
          <rect x="80" y="60" width="580" height="300" stroke-width="5" stroke="#78350f" fill="#fef2f2" opacity="0.9" />
          
          <!-- 400mm Perimeter Void / Light Gap -->
          <rect x="110" y="85" width="520" height="250" stroke="#94a3b8" stroke-dasharray="3 3" />
          <text x="370" y="75" font-size="8" font-family="Space Mono, monospace" text-anchor="middle" fill="#991b1b">HISTORIC 1940s BRICK PERIMETER (PRESERVED)</text>

          <!-- Steel Mezzanine Platform (Black) -->
          <rect x="150" y="110" width="440" height="200" stroke-width="2.5" fill="#f8fafc" />
          
          <!-- 4 Independent Steel Tree Columns -->
          <circle cx="200" cy="150" r="8" fill="#0f172a" />
          <circle cx="540" cy="150" r="8" fill="#0f172a" />
          <circle cx="200" cy="270" r="8" fill="#0f172a" />
          <circle cx="540" cy="270" r="8" fill="#0f172a" />

          <!-- Labels for columns -->
          <text x="200" y="135" font-size="8" font-family="Space Mono, monospace" text-anchor="middle" font-weight="bold">COL C1</text>
          <text x="540" y="135" font-size="8" font-family="Space Mono, monospace" text-anchor="middle" font-weight="bold">COL C2</text>
          
          <!-- Catwalk bridge -->
          <rect x="330" y="110" width="80" height="200" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="2 2" fill="#e2e8f0" />
          <text x="370" y="215" font-size="9" font-family="Space Mono, monospace" text-anchor="middle" transform="rotate(-90, 370, 215)">STEEL CATWALK (+3.20)</text>

          <text x="240" y="215" font-size="11" font-family="Space Mono, monospace" text-anchor="middle" font-weight="bold">ATELIER STUDIO</text>
          <text x="470" y="215" font-size="11" font-family="Space Mono, monospace" text-anchor="middle" font-weight="bold">MATERIAL ARCHIVE</text>
        </svg>`
      }
    ],
    materials: [
      {
        name: 'Historic Kiln-Fired Solid Brick',
        finish: 'Gentle low-pressure lime scrub, natural breathable mineral wash',
        origin: 'Original 1940s industrial masonry',
        texture: 'Deep ochre, terracotta imperfections, historical mortar joints'
      },
      {
        name: 'Hot-Rolled Blackened Steel',
        finish: 'Cold-patinated gunmetal finish with microcrystalline museum wax',
        origin: 'Structural steel I-beams (HEA 240)',
        texture: 'Slightly iridescent raw mill scale, precise crisp structural edges'
      },
      {
        name: 'Continuous Micro-Cement Floor',
        finish: 'Hand-troweled matte finish with penetrating polyurethane seal',
        origin: 'Mineral composite screed',
        texture: 'Monolithic warm dove gray with subtle organic trowel marks'
      }
    ]
  },
  {
    id: '04',
    slug: 'botanical-herbarium',
    title: 'Highland Botanical Institute & Herbarium',
    subtitle: 'Stepped ecological research terraced along a montane forest slope, harmonizing earth blocks with solar geometry.',
    typology: 'Institutional',
    year: 2023,
    location: 'Wondo Genet Highland Forest',
    coordinates: '7°05\'N 38°37\'E',
    area: '1,180 m²',
    status: 'Academic & Research',
    role: 'Author & Principal Spatial Investigator (B.Arch Honors Thesis Project)',
    collaborators: 'Academic Advisors: Prof. K. Mengistu, Dr. H. Weber; Commendation: National Architectural Thesis Prize',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
        caption: 'The terraced research wings following the 18% natural slope contours.',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
        caption: 'Colonnaded walkway connecting the specimen vault to open-air greenhouse pavilions.',
        aspectRatio: 'portrait'
      }
    ],
    overview: 'Conceived as an academic exploration into bioclimatic institutional design, this highland research institute bridges rigorous climate engineering with tactile materiality. Rather than a singular monolithic institutional block, the program is broken into three terraced pavilions that step down the natural 18% hillside gradient, preserving existing old-growth indigenous trees.',
    architecturalManifesto: 'An institution should not stand apart from nature as an observer, but fold into the ecosystem as a participating organism.',
    designChallenge: 'Preserving fragile endemic flora while maintaining museum-grade humidity and temperature stability (18°C ± 2°C, 45% RH) inside the botanical specimen vault without relying on diesel-powered mechanical chillers.',
    spatialStrategy: 'Stepped linear pavilions connected by cloistered pergolas. The sensitive herbarium archive is submerged into the cooler subterranean earth bank, using natural soil insulation for thermal stabilization.',
    environmentalStrategy: 'Gravity-fed rainwater terraces harvest runoff from 1,400 m² of roof surface, filtering it through stepped reed beds before storing it in irrigation reservoirs for experimental nursery cultivation.',
    keyFeatures: [
      'Subterranean earth-sheltered herbarium archive maintaining 18°C passive stability',
      'Locally pressed Compressed Stabilized Earth Blocks (CSEB) with 92% lower embodied carbon',
      'Bio-filtration wetlands cleaning laboratory greywater for agricultural reuse',
      'Timber scissor-truss roofs providing natural convective ventilation'
    ],
    drawings: [
      {
        id: 'drw-401',
        title: 'Topographic Slope Section C-C\' (1:200)',
        type: 'section',
        scale: '1:200',
        description: 'Stepped terraces conforming to natural 18% grade with subterranean archive.',
        svgCode: `<svg viewBox="0 0 760 360" class="w-full h-auto text-neutral-800" stroke="currentColor" fill="none" stroke-width="1.2">
          <!-- Natural Slope Contour -->
          <path d="M 50 100 Q 250 180 450 250 T 720 320" stroke="#15803d" stroke-width="2" stroke-dasharray="6 2" />
          <text x="650" y="300" font-size="8" font-family="Space Mono, monospace" fill="#15803d">NATURAL GRADE (18% SLOPE)</text>

          <!-- Upper Tier: Administration & Public Gallery -->
          <rect x="80" y="80" width="160" height="90" stroke-width="2" fill="#fafafa" />
          <polygon points="70,80 250,60 250,80" fill="#334155" />
          <text x="160" y="130" font-size="9" font-family="Space Mono, monospace" text-anchor="middle">TIER 01: PUBLIC</text>

          <!-- Mid Tier: Laboratories & Classrooms -->
          <rect x="270" y="150" width="180" height="90" stroke-width="2" fill="#fafafa" />
          <polygon points="260,150 460,130 460,150" fill="#334155" />
          <text x="360" y="200" font-size="9" font-family="Space Mono, monospace" text-anchor="middle">TIER 02: LABS</text>

          <!-- Lower Tier & Subterranean Archive -->
          <rect x="480" y="220" width="180" height="90" stroke-width="2" fill="#f1f5f9" />
          <polygon points="470,220 670,200 670,220" fill="#334155" />
          <text x="570" y="270" font-size="9" font-family="Space Mono, monospace" text-anchor="middle">TIER 03: HERBARIUM</text>
          
          <!-- Subterranean Vault below Tier 02/03 -->
          <rect x="360" y="240" width="100" height="60" stroke="#475569" stroke-width="1.8" fill="#e2e8f0" stroke-dasharray="2 2" />
          <text x="410" y="275" font-size="7" font-family="Space Mono, monospace" text-anchor="middle" fill="#475569">SUBTERRANEAN VAULT</text>
        </svg>`
      }
    ],
    materials: [
      {
        name: 'Compressed Stabilized Earth Blocks (CSEB)',
        finish: 'Exposed hydraulic press finish, natural mineral earth pigments',
        origin: 'Sub-soil excavated from foundation footprint',
        texture: 'Warm ochre matte masonry with micro-aggregate surface'
      },
      {
        name: 'Structural Eucalyptus Glulam',
        finish: 'Water-based UV oil with non-toxic borate preservation',
        origin: 'Managed community farm timber',
        texture: 'Dense straight-grain structural members with exposed stainless steel dowels'
      }
    ]
  },
  {
    id: '05',
    slug: 'micro-dwelling-24',
    title: 'Micro-Dwelling 24: Spatial Core Prototype',
    subtitle: 'High-density urban living prototype rethinking minimal spatial footprints through dynamic architectural cabinetry.',
    typology: 'Prefab & Research',
    year: 2023,
    location: 'Urban Infill Prototype',
    coordinates: '9°01\'N 38°45\'E',
    area: '58 m²',
    status: 'Completed',
    role: 'Lead Furniture & Spatial Architect',
    collaborators: 'Fabrication: Studio FabLab; Millwork: Master Joinery Addis',
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
        caption: 'The central service monolith in birch plywood concealing kitchen, bath, and bed storage.',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
        caption: 'Daytime configuration with bed recessed and workspace extended.',
        aspectRatio: 'portrait'
      }
    ],
    overview: 'Addressing escalating urban land scarcity and the alienation of generic high-rise apartments, Micro-Dwelling 24 tests how minimal living can offer expansive dignity. Rather than partitioning a 58 m² space into cramped miniature rooms, the entire floor plate remains unified around an engineered "central operational island" containing bathroom, HVAC stack, kitchen, and folding bed mechanism.',
    architecturalManifesto: 'Luxury is not excess square meters; luxury is light, silence, precision joinery, and the poetic absence of clutter.',
    designChallenge: 'Accommodating all domestic rituals (cooking, dining, hosting 6 people, working, sleeping, and laundry) inside 58 m² without visual chaos or compromising thermal comfort.',
    spatialStrategy: 'Transformable kinetic cabinetry: a motorized fold-down timber sleeping alcove converts into an 8-person conference and dining bench in under 30 seconds.',
    environmentalStrategy: 'Continuous perimeter thermal insulation and heat-recovery ventilation (HRV) achieving near-passive house energy metrics with less than 15 kWh/m²/year.',
    keyFeatures: [
      'Zero internal drywall partitions; 100% demarcated by functional millwork furniture',
      'Precision CNC-milled 24mm Baltic birch plywood with concealed soft-closing hardware',
      'Integrated shadow gap baseboards and invisible flush pivot doors',
      'Dual-aspect floor-to-ceiling sliding glass facade maximizing daylight penetration'
    ],
    drawings: [
      {
        id: 'drw-501',
        title: 'Core Island Axonometric (1:50)',
        type: 'axonometric',
        scale: '1:50',
        description: 'Exploded spatial core demonstrating integrated kitchen, wet room, and foldaway bed system.',
        svgCode: `<svg viewBox="0 0 600 400" class="w-full h-auto text-neutral-800" stroke="currentColor" fill="none" stroke-width="1.2">
          <!-- Isometric Grid Core -->
          <g transform="translate(300, 200)">
            <!-- Top Face -->
            <polygon points="0,-100 120,-40 0,20 -120,-40" stroke-width="2" fill="#f8fafc" />
            
            <!-- Left Face (Storage & Kitchen) -->
            <polygon points="-120,-40 0,20 0,140 -120,80" stroke-width="2" fill="#f1f5f9" />
            <line x1="-60" y1="-10" x2="-60" y2="110" stroke="#94a3b8" stroke-dasharray="2 2" />
            <line x1="0" y1="60" x2="-120" y2="0" stroke="#94a3b8" />
            
            <!-- Right Face (Foldaway Bed & Desk) -->
            <polygon points="0,20 120,-40 120,80 0,140" stroke-width="2" fill="#e2e8f0" />
            <line x1="60" y1="-10" x2="60" y2="110" stroke="#94a3b8" stroke-dasharray="2 2" />
            <line x1="0" y1="80" x2="120" y2="20" stroke="#94a3b8" />

            <!-- Labels -->
            <text x="0" y="-45" font-size="9" font-family="Space Mono, monospace" text-anchor="middle" font-weight="bold">SERVICE MONOLITH</text>
            <text x="-65" y="45" font-size="8" font-family="Space Mono, monospace" text-anchor="middle">KITCHEN / STORAGE</text>
            <text x="65" y="45" font-size="8" font-family="Space Mono, monospace" text-anchor="middle">FOLDAWAY SLEEPING</text>
          </g>
        </svg>`
      }
    ],
    materials: [
      {
        name: 'Baltic Birch Plywood',
        finish: 'Ultra-matte low-VOC protective waterborne lacquer',
        origin: 'Sustainably certified cross-laminated sheet stock',
        texture: 'Clean continuous edge laminations, warm Scandinavian blond tone'
      },
      {
        name: 'Seamless Brushed Stainless Steel',
        finish: 'Directional 240-grit satin brush finish',
        origin: 'Food-grade AISI 304 alloy',
        texture: 'Hygienic, crisp industrial counter surfaces with integrated welded sinks'
      }
    ]
  }
]
