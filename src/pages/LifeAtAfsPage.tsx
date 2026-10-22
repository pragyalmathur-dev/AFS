import React, { useState } from 'react';
import { CO_CURRICULAR_ACTIVITIES, EVENTS_GALLERY, TESTIMONIAL_VIDEOS } from '../data/contentInventory';
import { Play, Sparkles, Trophy, Music, Palette, Users, ArrowRight, Maximize2 } from 'lucide-react';

interface LifeAtAfsPageProps {
  onNavigate: (path: string, hash?: string) => void;
  onOpenVideo: (video: { title: string; videoUrl?: string; youtubeId?: string; posterUrl?: string; speakerRole?: string }) => void;
  onOpenLightbox: (item: { title: string; imageUrl: string; altText: string; description?: string }) => void;
}

export const LifeAtAfsPage: React.FC<LifeAtAfsPageProps> = ({
  onNavigate,
  onOpenVideo,
  onOpenLightbox
}) => {
  const sectionLinks = [
    { label: 'Activities', href: '#activities' },
    { label: 'Events & Celebrations', href: '#events' },
    { label: 'Student Leadership', href: '#student-leadership' },
    { label: 'Community Voices', href: '#community-voices' }
  ];

  const scrollToAnchor = (anchor: string) => {
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0">
      
      {/* Compact Section Navigation Ribbon */}
      <div className="sticky top-20 z-30 bg-[#E5EBE1] border-b border-[#23483D]/15 px-4 py-2.5">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between overflow-x-auto text-xs sm:text-sm font-medium text-[#23483D]">
          <span className="text-[11px] uppercase tracking-wider text-[#28332E]/60 font-semibold shrink-0 mr-4">
            Sections:
          </span>
          <div className="flex items-center gap-4 sm:gap-8 whitespace-nowrap">
            {sectionLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToAnchor(link.href)}
                className="hover:underline hover:text-[#B96F52] transition-colors py-1 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* A. Opening Hero */}
      <section className="py-16 lg:py-20 bg-[#F7F4EC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B96F52]">
                Campus Life & Holistic Growth
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#23483D] leading-tight text-balance">
                Life at Alpha Friendship School
              </h1>
              <p className="text-base sm:text-lg text-[#28332E]/85 leading-relaxed font-sans">
                At Alpha Friendship School (AFS), education extends far beyond textbooks and blackboards. We believe in nurturing healthy bodies, curious minds, confident voices, and rich cultural appreciation through daily sports, music, artistic expression, student governance, and shared celebrations.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#28332E]/70 font-medium pt-2">
                <span>Sports & Games</span>
                <span>·</span>
                <span>Instrumental Music</span>
                <span>·</span>
                <span>Cultural Heritage</span>
                <span>·</span>
                <span>Arts & Crafts</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#28332E]/10 bg-stone-200">
                <img
                  src="https://static.wixstatic.com/media/103928_eb34b0d0dbb649d7a0bd1032bfd67488~mv2.jpg"
                  alt="Alpha Friendship School cultural dance and community gathering"
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-[#FAF8F2] border-t border-[#28332E]/10 text-xs text-[#28332E]/75">
                  <span className="font-medium text-[#23483D]">Vibrant Community:</span> Students celebrating local heritage, song, and dance in Kachai.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* B. Co-Curricular Activities — Alternating Photography & Text */}
      <section id="activities" className="py-20 bg-[#FAF8F2] border-t border-[#23483D]/10 scroll-mt-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B96F52]">
              Creative & Physical Development
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#23483D]">
              Co-Curricular Activities
            </h2>
            <p className="text-sm sm:text-base text-[#28332E]/80 font-sans">
              Our diverse activities encourage every child to uncover latent talents, stay healthy, and build self-esteem.
            </p>
          </div>

          <div className="space-y-16">
            {CO_CURRICULAR_ACTIVITIES.map((act, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={act.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Photo Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                    <div
                      className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-md border border-[#28332E]/10 bg-stone-200"
                      onClick={() => onOpenLightbox({
                        title: act.title,
                        imageUrl: act.photoUrl,
                        altText: act.photoAlt,
                        description: act.description
                      })}
                    >
                      <img
                        src={act.photoUrl}
                        alt={act.photoAlt}
                        className="w-full h-[320px] sm:h-[380px] object-cover transition-transform duration-500 group-hover:scale-103"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 right-3 bg-black/60 p-2 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className={`lg:col-span-6 space-y-4 ${isEven ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                    <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B96F52]">
                      {act.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#23483D]">
                      {act.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#28332E]/85 leading-relaxed font-sans">
                      {act.description}
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2">
                      {act.instrumentsOrGames.map((item) => (
                        <span
                          key={item}
                          className="text-xs bg-[#E5EBE1] text-[#23483D] px-3 py-1 rounded-md font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* C. Events and Celebrations — Photo-led Gallery with Lightbox */}
      <section id="events" className="py-20 bg-[#E5EBE1]/50 border-t border-[#23483D]/10 scroll-mt-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B96F52]">
              Gatherings & Festivities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#23483D]">
              Events and Celebrations
            </h2>
            <div className="space-y-4 text-base text-[#28332E]/85 leading-relaxed font-sans">
              <p>
                At Alpha Friendship School (AFS), events are designed to inspire learning beyond the classroom. We combine academic, cultural, creative, and life-skill experiences to help students grow into confident and responsible individuals.
              </p>
              <p>
                As a school in the North-East, we celebrate both local traditions and festivals from other North-Eastern states and across India, including <strong>Baisakhi, Eid, Onam, and Bihu</strong>, giving students exposure to the rich diversity of our country and neighbouring cultures.
              </p>
              <p>
                Throughout the year, students participate in meaningful events such as <strong>Library Mela, World Innovation Day, Health and Hygiene Workshops, Career Guidance Workshops, Technology Day</strong>, and cultural celebrations. At AFS, every event is an opportunity to learn, explore, celebrate diversity, and grow together as a community.
              </p>
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVENTS_GALLERY.map((event) => (
              <div
                key={event.id}
                onClick={() => onOpenLightbox({
                  title: event.title,
                  imageUrl: event.photoUrl,
                  altText: event.photoAlt,
                  description: event.description
                })}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#28332E]/10 shadow-xs hover:shadow-md transition-all flex flex-col"
              >
                <div className="h-48 overflow-hidden relative bg-stone-200">
                  <img
                    src={event.photoUrl}
                    alt={event.photoAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <div className="space-y-1">
                    <h3 className="font-serif text-base font-bold text-[#23483D] group-hover:text-[#B96F52] transition-colors leading-snug">
                      {event.title}
                    </h3>
                    <p className="text-xs text-[#28332E]/75 line-clamp-2 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  <div className="pt-2 text-[11px] font-medium text-[#23483D] flex items-center justify-between">
                    <span>Alpha Friendship School</span>
                    <span className="text-[#B96F52]">Click to enlarge</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* D. Student Voice and Leadership */}
      <section id="student-leadership" className="py-20 bg-[#F7F4EC] border-t border-[#23483D]/10 scroll-mt-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B96F52]">
              Empowering Student Agency
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#23483D]">
              Student Voice and Leadership
            </h2>
            <p className="text-base text-[#28332E]/85 leading-relaxed font-sans">
              At our school, we value every student&apos;s voice and believe in nurturing future leaders. Each year, we conduct a democratic Student Council election, and students take ownership through student-led assemblies, developing leadership, confidence, and a sense of responsibility.
            </p>
          </div>

          {/* Subsection 1: Student-Led Assemblies */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-8 sm:p-10 rounded-3xl border border-[#28332E]/10 shadow-xs">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B96F52]">
                Morning Assembly Tradition
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#23483D]">
                Student-Led Assemblies
              </h3>
              <p className="text-sm sm:text-base text-[#28332E]/85 leading-relaxed font-sans">
                Students from Classes 6 to 10 take the lead in conducting the daily morning assembly. Each day follows a unique theme, and student leaders independently plan and present thought-provoking sessions, including speeches, news, prayers, activities, and special presentations, helping them develop communication, organization, and leadership skills.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#23483D]">
                <span className="bg-[#E5EBE1] px-3 py-1 rounded-md font-medium">Classes 6 to 10</span>
                <span className="bg-[#E5EBE1] px-3 py-1 rounded-md font-medium">Daily Unique Themes</span>
                <span className="bg-[#E5EBE1] px-3 py-1 rounded-md font-medium">Public Speaking & Organization</span>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div
                className="group cursor-pointer relative rounded-2xl overflow-hidden bg-stone-200 border border-[#28332E]/10 aspect-4/3"
                onClick={() => onOpenLightbox({
                  title: 'Student-Led Assemblies',
                  imageUrl: 'https://static.wixstatic.com/media/103928_af00b39f80b14cfe90aca6082ef9a2c2~mv2.jpeg',
                  altText: 'Students from Classes 6 to 10 conducting morning assembly',
                  description: 'Daily student-led assemblies foster communication and poise.'
                })}
              >
                <img
                  src="https://static.wixstatic.com/media/103928_af00b39f80b14cfe90aca6082ef9a2c2~mv2.jpeg"
                  alt="Student-Led Assemblies at Alpha Friendship School"
                  className="w-full h-full object-cover transition-transform group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-black/60 p-1.5 rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Subsection 2: Student Council */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-8 sm:p-10 rounded-3xl border border-[#28332E]/10 shadow-xs">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div
                className="group cursor-pointer relative rounded-2xl overflow-hidden bg-stone-200 border border-[#28332E]/10 aspect-4/3"
                onClick={() => onOpenLightbox({
                  title: 'Student Council',
                  imageUrl: 'https://static.wixstatic.com/media/103928_634c6943f0ea43dda1b2a32d3d8b2403~mv2.jpg',
                  altText: 'Democratically elected Student Council representatives at AFS',
                  description: 'Elected representatives receive leadership orientation and drive school decisions.'
                })}
              >
                <img
                  src="https://static.wixstatic.com/media/103928_634c6943f0ea43dda1b2a32d3d8b2403~mv2.jpg"
                  alt="Student Council election and ceremony at Alpha Friendship School"
                  className="w-full h-full object-cover transition-transform group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-black/60 p-1.5 rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B96F52]">
                Democratic Governance
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#23483D]">
                Student Council
              </h3>
              <p className="text-sm sm:text-base text-[#28332E]/85 leading-relaxed font-sans">
                The Student Council at Alpha Friendship School includes representatives from different classes, ensuring that students have a platform to share ideas, raise concerns, and contribute to school decisions. Council members are democratically elected through a student election process, encouraging participation, responsibility, and leadership among students.
              </p>
              <p className="text-sm text-[#28332E]/80 leading-relaxed font-sans">
                After the elections, members take part in orientation and capacity-building sessions that help them develop leadership, communication, teamwork, and decision-making skills, preparing them to serve the school community with confidence and responsibility.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#23483D]">
                <span className="bg-[#E5EBE1] px-3 py-1 rounded-md font-medium">Democratic Student Elections</span>
                <span className="bg-[#E5EBE1] px-3 py-1 rounded-md font-medium">Capacity Building & Teamwork</span>
                <span className="bg-[#E5EBE1] px-3 py-1 rounded-md font-medium">Student Council Platform</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* E. Community Voices — Both Original Testimonial Videos Preserved */}
      <section id="community-voices" className="py-20 bg-[#23483D] text-[#F7F4EC] scroll-mt-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#D7B66E]">
              Authentic Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Community Voices
            </h2>
            <p className="text-sm sm:text-base text-[#F7F4EC]/80 font-sans">
              Watch both original recorded reflections from our student and teacher community in Kachai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIAL_VIDEOS.map((video) => (
              <div
                key={video.id}
                className="bg-[#19342C] rounded-2xl overflow-hidden border border-[#F7F4EC]/15 shadow-lg flex flex-col"
              >
                {/* Video Click-to-Play Area */}
                <div
                  className="relative aspect-video w-full bg-black cursor-pointer group"
                  onClick={() => onOpenVideo(video)}
                >
                  <img
                    src={video.posterUrl}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#F7F4EC] text-[#23483D] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 fill-current ml-1 text-[#23483D]" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] text-[#F7F4EC]">
                    Click to Play Video
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#D7B66E]">
                      {video.speakerRole}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F7F4EC]">
                      {video.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F7F4EC]/80 leading-relaxed font-sans">
                      {video.transcriptNote}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#F7F4EC]/10 flex items-center justify-between">
                    <button
                      onClick={() => onOpenVideo(video)}
                      className="inline-flex items-center gap-2 text-xs font-medium text-[#D7B66E] hover:underline"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Watch Full Recording</span>
                    </button>
                    <span className="text-[11px] text-[#F7F4EC]/50 font-mono">1080p MP4</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
