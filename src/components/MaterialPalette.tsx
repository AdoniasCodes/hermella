import type { MaterialSpec } from '../types'
import { Layers } from 'lucide-react'

interface MaterialPaletteProps {
  materials: MaterialSpec[]
}

export const MaterialPalette: React.FC<MaterialPaletteProps> = ({ materials }) => {
  if (!materials || materials.length === 0) return null

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500">
        <Layers size={14} />
        <span>Materiality & Tectonic Specifications</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {materials.map((mat, index) => (
          <div
            key={index}
            className="border border-neutral-200 bg-white p-4 rounded-xs flex flex-col justify-between hover:border-neutral-400 transition-colors shadow-2xs"
          >
            <div>
              <div className="font-mono text-[10px] text-neutral-400 mb-1 uppercase tracking-wider">
                Spec {String(index + 1).padStart(2, '0')}
              </div>
              <h4 className="font-serif text-lg font-medium text-neutral-900 leading-snug mb-2">
                {mat.name}
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed font-sans mb-3">
                {mat.texture}
              </p>
            </div>

            <div className="pt-3 border-t border-neutral-100 font-mono text-[11px] space-y-1">
              <div>
                <span className="text-neutral-400">FINISH: </span>
                <span className="text-neutral-700">{mat.finish}</span>
              </div>
              <div>
                <span className="text-neutral-400">ORIGIN: </span>
                <span className="text-neutral-700">{mat.origin}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
