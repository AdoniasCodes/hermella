import { useState } from 'react'
import type { Drawing } from '../types'
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react'

interface DrawingViewerProps {
  drawings: Drawing[]
  projectTitle: string
}

export const DrawingViewer: React.FC<DrawingViewerProps> = ({ drawings, projectTitle }) => {
  const [activeDrawingIndex, setActiveDrawingIndex] = useState(0)
  const [zoomLevel, setZoomLevel] = useState(1)

  if (!drawings || drawings.length === 0) return null

  const activeDrawing = drawings[activeDrawingIndex]

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5))
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75))
  const handleReset = () => setZoomLevel(1)

  return (
    <div className="border border-neutral-300 bg-white rounded-xs shadow-xs overflow-hidden">
      {/* Drawing Toolbar Header */}
      <div className="bg-[#F8F7F4] border-b border-neutral-200 px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Drawing Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto">
          {drawings.map((drw, idx) => (
            <button
              key={drw.id}
              onClick={() => {
                setActiveDrawingIndex(idx)
                setZoomLevel(1)
              }}
              className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors rounded-xs cursor-pointer ${
                activeDrawingIndex === idx
                  ? 'bg-neutral-900 text-white font-medium'
                  : 'bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-400'
              }`}
            >
              {drw.title} ({drw.scale})
            </button>
          ))}
        </div>

        {/* Zoom & View Controls */}
        <div className="flex items-center space-x-2 font-mono text-xs">
          <div className="hidden sm:inline text-neutral-500 mr-2">
            SCALE <span className="font-semibold text-neutral-900">{activeDrawing.scale}</span>
          </div>
          <button
            onClick={handleZoomOut}
            className="p-1.5 border border-neutral-200 bg-white hover:bg-neutral-100 rounded-xs text-neutral-700 cursor-pointer"
            title="Zoom out"
          >
            <ZoomOut size={15} />
          </button>
          <span className="text-neutral-600 min-w-10 text-center font-mono text-[11px]">
            {Math.round(zoomLevel * 100)}%
          </span>
          <button
            onClick={handleZoomIn}
            className="p-1.5 border border-neutral-200 bg-white hover:bg-neutral-100 rounded-xs text-neutral-700 cursor-pointer"
            title="Zoom in"
          >
            <ZoomIn size={15} />
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 border border-neutral-200 bg-white hover:bg-neutral-100 rounded-xs text-neutral-700 cursor-pointer"
            title="Reset zoom"
          >
            <RotateCcw size={15} />
          </button>
        </div>
      </div>

      {/* Drawing Viewport / Canvas */}
      <div className="relative bg-[#FAFAF8] overflow-auto min-h-[380px] max-h-[560px] flex items-center justify-center p-6 sm:p-10 select-none arch-grid-bg">
        <div
          className="transition-transform duration-200 ease-out origin-center w-full max-w-4xl"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {activeDrawing.svgCode ? (
            <div
              className="w-full flex items-center justify-center"
              dangerouslySetInnerHTML={{ __html: activeDrawing.svgCode }}
            />
          ) : activeDrawing.imageUrl ? (
            <img
              src={activeDrawing.imageUrl}
              alt={activeDrawing.title}
              className="w-full h-auto object-contain"
            />
          ) : null}
        </div>

        {/* Watermark / Drawing Stamp */}
        <div className="absolute bottom-4 right-4 bg-white/90 border border-neutral-300 p-2.5 rounded-xs font-mono text-[10px] text-neutral-600 pointer-events-none shadow-xs">
          <div className="font-bold text-neutral-900">{projectTitle}</div>
          <div>{activeDrawing.title}</div>
          <div className="text-neutral-600">DRAWING TYPE: {activeDrawing.type.toUpperCase()} • {activeDrawing.scale}</div>
        </div>
      </div>

      {/* Description caption */}
      <div className="bg-white border-t border-neutral-200 px-6 py-3 text-xs text-neutral-600 font-sans flex items-center justify-between">
        <p>{activeDrawing.description}</p>
        <span className="font-mono text-[10px] text-neutral-600 uppercase tracking-widest hidden sm:inline">
          Architectural Drawing Documentation
        </span>
      </div>
    </div>
  )
}
