/**
 * Alpha Friendship School — Complete Redesign
 * Source of truth: https://www.alphafriendshipschool.com/
 * Four Consolidated Pages: Home (/), Our Story & Impact (/our-story), Life at AFS (/life-at-afs), Get Involved (/get-involved)
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { OurStoryPage } from './pages/OurStoryPage';
import { LifeAtAfsPage } from './pages/LifeAtAfsPage';
import { GetInvolvedPage } from './pages/GetInvolvedPage';
import { VideoModal } from './components/VideoModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { MediaInventoryModal } from './components/MediaInventoryModal';
import { SchoolPortalModal } from './components/SchoolPortalModal';
import { EVENTS_GALLERY } from './data/contentInventory';

interface VideoModalState {
  isOpen: boolean;
  title: string;
  videoUrl?: string;
  youtubeId?: string;
  posterUrl?: string;
  speakerRole?: string;
}

interface LightboxState {
  isOpen: boolean;
  title: string;
  description?: string;
  imageUrl: string;
  altText: string;
  currentIndex?: number;
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [currentHash, setCurrentHash] = useState<string>('');
  
  // Modals state
  const [videoModal, setVideoModal] = useState<VideoModalState>({
    isOpen: false,
    title: ''
  });

  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    title: '',
    imageUrl: '',
    altText: ''
  });

  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);

  // Normalize path and handle 301-style URL migrations from old Wix 8 pages
  const resolveMigrationPath = useCallback((pathname: string, hash: string) => {
    const cleanPath = pathname.toLowerCase().replace(/\/$/, '') || '/';
    
    // Migration mapping table
    switch (cleanPath) {
      case '/about':
        return { path: '/our-story', hash: hash || '#our-story' };
      case '/blank-1':
        return { path: '/our-story', hash: hash || '#sunbird-partnership' };
      case '/blank':
        return { path: '/life-at-afs', hash: hash || '#activities' };
      case '/blank-2':
        return { path: '/life-at-afs', hash: hash || '#events' };
      case '/blank-3':
        return { path: '/life-at-afs', hash: hash || '#student-leadership' };
      case '/blank-4':
        return { path: '/life-at-afs', hash: hash || '#community-voices' };
      case '/get-involved':
        return { path: '/get-involved', hash };
      case '/our-story':
        return { path: '/our-story', hash };
      case '/life-at-afs':
        return { path: '/life-at-afs', hash };
      case '/home':
      case '/':
      default:
        return { path: '/', hash };
    }
  }, []);

  // Sync route on mount and popstate
  useEffect(() => {
    const handleLocationChange = () => {
      const { path, hash } = resolveMigrationPath(window.location.pathname, window.location.hash);
      setCurrentPath(path);
      setCurrentHash(hash);

      if (window.location.pathname !== path || (hash && window.location.hash !== hash)) {
        window.history.replaceState(null, '', path + (hash || ''));
      }

      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, [resolveMigrationPath]);

  // Navigate handler with pushState
  const handleNavigate = (path: string, hash: string = '') => {
    const { path: resolvedPath, hash: resolvedHash } = resolveMigrationPath(path, hash);
    setCurrentPath(resolvedPath);
    setCurrentHash(resolvedHash);

    const fullUrl = resolvedPath + (resolvedHash || '');
    window.history.pushState(null, '', fullUrl);

    if (resolvedHash) {
      setTimeout(() => {
        const el = document.querySelector(resolvedHash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Video modal opener
  const handleOpenVideo = (video: {
    title: string;
    videoUrl?: string;
    youtubeId?: string;
    posterUrl?: string;
    speakerRole?: string;
  }) => {
    setVideoModal({
      isOpen: true,
      title: video.title,
      videoUrl: video.videoUrl,
      youtubeId: video.youtubeId,
      posterUrl: video.posterUrl,
      speakerRole: video.speakerRole
    });
  };

  // Lightbox opener with gallery index support
  const handleOpenLightbox = (item: {
    title: string;
    imageUrl: string;
    altText: string;
    description?: string;
  }) => {
    const foundIndex = EVENTS_GALLERY.findIndex((e) => e.photoUrl === item.imageUrl);
    setLightbox({
      isOpen: true,
      title: item.title,
      imageUrl: item.imageUrl,
      altText: item.altText,
      description: item.description,
      currentIndex: foundIndex >= 0 ? foundIndex : undefined
    });
  };

  const handleLightboxPrev = () => {
    if (lightbox.currentIndex === undefined || lightbox.currentIndex <= 0) return;
    const nextIdx = lightbox.currentIndex - 1;
    const item = EVENTS_GALLERY[nextIdx];
    setLightbox({
      isOpen: true,
      title: item.title,
      imageUrl: item.photoUrl,
      altText: item.photoAlt,
      description: item.description,
      currentIndex: nextIdx
    });
  };

  const handleLightboxNext = () => {
    if (lightbox.currentIndex === undefined || lightbox.currentIndex >= EVENTS_GALLERY.length - 1) return;
    const nextIdx = lightbox.currentIndex + 1;
    const item = EVENTS_GALLERY[nextIdx];
    setLightbox({
      isOpen: true,
      title: item.title,
      imageUrl: item.photoUrl,
      altText: item.photoAlt,
      description: item.description,
      currentIndex: nextIdx
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EC] text-[#28332E]">
      
      {/* Header adhere to Top Bar Contract */}
      <Header currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPath === '/' && (
          <HomePage onNavigate={handleNavigate} onOpenVideo={handleOpenVideo} />
        )}
        {currentPath === '/our-story' && (
          <OurStoryPage
            onNavigate={handleNavigate}
            onOpenVideo={handleOpenVideo}
            onOpenLightbox={handleOpenLightbox}
          />
        )}
        {currentPath === '/life-at-afs' && (
          <LifeAtAfsPage
            onNavigate={handleNavigate}
            onOpenVideo={handleOpenVideo}
            onOpenLightbox={handleOpenLightbox}
          />
        )}
        {currentPath === '/get-involved' && (
          <GetInvolvedPage
            onNavigate={handleNavigate}
            initialEnquiryType={currentHash === '#donate' ? 'Donation' : currentHash === '#volunteer' ? 'Volunteering' : currentHash === '#partner' ? 'Partnership' : 'Donation'}
          />
        )}
      </main>

      {/* Standardized Unified Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenInventory={() => setIsInventoryOpen(true)}
        onOpenLoginModal={() => setIsPortalModalOpen(true)}
      />

      {/* Video Modal (No autoplay audio, accessible) */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={() => setVideoModal({ ...videoModal, isOpen: false })}
        title={videoModal.title}
        videoUrl={videoModal.videoUrl}
        youtubeId={videoModal.youtubeId}
        posterUrl={videoModal.posterUrl}
        speakerRole={videoModal.speakerRole}
      />

      {/* Image Lightbox Modal */}
      <ImageLightboxModal
        isOpen={lightbox.isOpen}
        onClose={() => setLightbox({ ...lightbox, isOpen: false })}
        title={lightbox.title}
        description={lightbox.description}
        imageUrl={lightbox.imageUrl}
        altText={lightbox.altText}
        onPrev={handleLightboxPrev}
        onNext={handleLightboxNext}
        hasPrev={lightbox.currentIndex !== undefined && lightbox.currentIndex > 0}
        hasNext={lightbox.currentIndex !== undefined && lightbox.currentIndex < EVENTS_GALLERY.length - 1}
      />

      {/* Media & Content Inventory Modal */}
      <MediaInventoryModal
        isOpen={isInventoryOpen}
        onClose={() => setIsInventoryOpen(false)}
      />

      {/* School Administrative Portal Modal */}
      <SchoolPortalModal
        isOpen={isPortalModalOpen}
        onClose={() => setIsPortalModalOpen(false)}
      />

    </div>
  );
}
