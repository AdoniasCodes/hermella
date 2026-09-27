import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface LightboxProps {
  isOpen: boolean
  imageUrl: string
  caption?: string
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
  currentIndex?: number
  totalCount?: number
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  imageUrl,
  caption,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalCount,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && onPrev) onPrev()
      if (e.key === 'ArrowRight' && onNext) onNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose, onPrev, onNext])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between text-white p-4 sm:p-8 animate-in fade-in duration-200"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between font-mono text-xs text-neutral-400">
        <div>
          {currentIndex !== undefined && totalCount !== undefined && (
            <span>
              {String(currentIndex + 1).padStart(2, '0')} / {String(totalCount).padStart(2, '0')}
            </span>
          )}
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-[11px] text-neutral-500">ESC to close / Arrows to navigate</span>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-4 z-10 p-3 bg-black/40 hover:bg-black/80 rounded-full text-white/80 hover:text-white transition-all cursor-pointer backdrop-blur-xs"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        <img
          src={imageUrl}
          alt={caption || 'Architectural View'}
          className="max-h-[82vh] max-w-full object-contain select-none shadow-2xl transition-transform duration-300"
        />

        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-4 z-10 p-3 bg-black/40 hover:bg-black/80 rounded-full text-white/80 hover:text-white transition-all cursor-pointer backdrop-blur-xs"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      {/* Caption footer */}
      {caption && (
        <div className="text-center font-sans text-xs sm:text-sm text-neutral-300 max-w-2xl mx-auto px-4 pb-2">
          {caption}
        </div>
      )}
    </div>
  )
}
