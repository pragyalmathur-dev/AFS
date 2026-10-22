import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  imageUrl: string;
  altText: string;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  imageUrl,
  altText,
  onPrev,
  onNext,
  hasPrev = false,
  hasNext = false
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext && hasNext) onNext();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-[#19342C] rounded-2xl overflow-hidden shadow-2xl border border-[#F7F4EC]/15 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#F7F4EC]/10 shrink-0">
          <div>
            <h3 className="font-serif text-lg text-[#F7F4EC] font-semibold">{title}</h3>
            {description && (
              <p className="text-xs text-[#F7F4EC]/75 font-sans mt-0.5 line-clamp-1">{description}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#F7F4EC]/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close image viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image viewport */}
        <div className="relative flex-1 bg-black/50 overflow-hidden flex items-center justify-center min-h-[300px] p-2">
          <img
            src={imageUrl}
            alt={altText}
            className="max-h-[72vh] w-auto max-w-full object-contain rounded-sm"
            referrerPolicy="no-referrer"
          />

          {/* Navigation Arrows */}
          {hasPrev && onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-[#F7F4EC] hover:bg-black/90 transition-colors focus:ring-2 focus:ring-[#D7B66E]"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {hasNext && onNext && (
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-[#F7F4EC] hover:bg-black/90 transition-colors focus:ring-2 focus:ring-[#D7B66E]"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Caption strip */}
        <div className="px-6 py-3 bg-[#23483D] flex items-center justify-between text-xs text-[#F7F4EC]/70 shrink-0">
          <span>Authentic photography from Alpha Friendship School archives</span>
          <span className="text-[#D7B66E]">Kachai, Ukhrul District, Manipur</span>
        </div>
      </div>
    </div>
  );
};
