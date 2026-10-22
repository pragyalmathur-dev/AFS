import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  videoUrl?: string;
  youtubeId?: string;
  posterUrl?: string;
  speakerRole?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title,
  videoUrl,
  youtubeId,
  posterUrl,
  speakerRole
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#19342C] rounded-2xl overflow-hidden shadow-2xl border border-[#F7F4EC]/15"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#F7F4EC]/10">
          <div>
            <h3 id="video-modal-title" className="font-serif text-lg text-[#F7F4EC] font-semibold">
              {title}
            </h3>
            {speakerRole && (
              <p className="text-xs text-[#D7B66E] uppercase tracking-wider font-sans mt-0.5">
                {speakerRole}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#F7F4EC]/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          {youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
              title={title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : videoUrl ? (
            <video
              src={videoUrl}
              poster={posterUrl}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="text-sm text-[#F7F4EC]/70 p-6 text-center">
              Video source is currently unavailable.
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3.5 bg-[#23483D] flex items-center justify-between text-xs text-[#F7F4EC]/70">
          <span>Alpha Friendship School · Authentic Community Video</span>
          <button
            onClick={onClose}
            className="text-xs font-medium text-[#D7B66E] hover:underline"
          >
            Close Player
          </button>
        </div>
      </div>
    </div>
  );
};
