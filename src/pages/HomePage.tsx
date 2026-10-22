import React from 'react';
import { CORE_VALUES, SCHOOL_INFO, TESTIMONIAL_VIDEOS } from '../data/contentInventory';
import { ArrowRight, Play, Heart, Users, GraduationCap, Home as HomeIcon, Award, Compass, Music, BookOpen } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string, hash?: string) => void;
  onOpenVideo: (video: { title: string; videoUrl?: string; youtubeId?: string; posterUrl?: string; speakerRole?: string }) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenVideo }) => {
  const featuredVideo = TESTIMONIAL_VIDEOS[0]; // Student testimonial

  return (
    <div className="space-y-0">
      
      {/* A. Hero Section */}
      <section className="relative bg-[#23483D] text-[#F7F4EC] overflow-hidden min-h-[580px] lg:min-h-[660px] flex items-center">
        {/* Background authentic photograph */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://static.wixstatic.com/media/103928_9716a688a5af4e41bd83c272da0e6993~mv2.jpg"
            alt="Students and teachers of Alpha Friendship School in Kachai village"
            className="w-full h-full object-cover object-center brightness-70"
            referrerPolicy="no-referrer"
          />
          {/* Measured gradient scrim preserving legibility and faces */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#19342C]/90 via-[#23483D]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#23483D] via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-2xl space-y-6">
            
            {/* Welcome To Alpha Kingdom Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#D7B66E] font-semibold">
              <span className="w-8 h-px bg-[#D7B66E]" aria-hidden="true" />
              <span>{SCHOOL_INFO.heroWelcome}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F4EC] leading-[1.15] text-balance">
              {SCHOOL_INFO.name}
            </h1>

            {/* Concise Editorial Introduction */}
            <p className="text-base sm:text-lg text-[#F7F4EC]/90 leading-relaxed font-sans font-normal">
              A residential community school in Kachai village, Ukhrul district, Manipur, nurturing children from remote and underserved communities with quality education from Kindergarten to Grade 10.
            </p>

            {/* Two Clear CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('/our-story')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#23483D] bg-[#F7F4EC] rounded-lg hover:bg-white transition-all shadow-sm active:translate-y-0.5"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('/get-involved', '#donate')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#F7F4EC] bg-[#B96F52] hover:bg-[#A35D42] rounded-lg transition-all shadow-sm active:translate-y-0.5"
              >
                <Heart className="w-4 h-4" />
                <span>Support the School</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* B. School at a Glance — Elegant Information Strip */}
      <section className="bg-[#E5EBE1] border-y border-[#23483D]/10 text-[#23483D]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#23483D]/15">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4 first:pl-0">
              <div className="p-2.5 rounded-lg bg-[#23483D]/10 text-[#23483D] shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl font-bold tracking-tight">1995</div>
                <div className="text-xs text-[#28332E]/75 font-sans font-medium">Established in Kachai</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
              <div className="p-2.5 rounded-lg bg-[#23483D]/10 text-[#23483D] shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl font-bold tracking-tight">25+ Villages</div>
                <div className="text-xs text-[#28332E]/75 font-sans font-medium">Serving local children</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
              <div className="p-2.5 rounded-lg bg-[#23483D]/10 text-[#23483D] shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl font-bold tracking-tight">KG to Grade 10</div>
                <div className="text-xs text-[#28332E]/75 font-sans font-medium">Holistic curriculum</div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
              <div className="p-2.5 rounded-lg bg-[#23483D]/10 text-[#23483D] shrink-0">
                <HomeIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl font-bold tracking-tight">Residential</div>
                <div className="text-xs text-[#28332E]/75 font-sans font-medium">Campus hostel care</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* C. A Short Introduction — Editorial Image & Text Pairing */}
      <section className="py-20 lg:py-24 bg-[#F7F4EC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#28332E]/10 bg-stone-200">
                <img
                  src="https://static.wixstatic.com/media/103928_04059b5731d64c6d807108f174537060~mv2.jpg"
                  alt="Alpha Friendship School students in classroom engaged in learning"
                  className="w-full h-[400px] sm:h-[480px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-[#FAF8F2] border-t border-[#28332E]/10 text-xs text-[#28332E]/75 italic">
                  Classroom learning at AFS, where first-generation learners discover their voice and potential.
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B96F52]">
                Our Background & Community
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#23483D] leading-tight text-balance">
                Rooted in Kachai, Transforming Futures Through Education
              </h2>
              <div className="space-y-4 text-base text-[#28332E]/85 leading-relaxed font-sans">
                <p>
                  Founded in 1995 by Mr. Mataisang Shirak and Mrs. Mingthingla Shirak, Alpha Friendship School was born out of a profound commitment to ensure that remoteness never stands in the way of a child&apos;s dignity, education, and hope.
                </p>
                <p>
                  Located in the hills of Kachai in Ukhrul district, Manipur, our residential campus serves students from over 25 neighbouring villages, many of whom are first-generation learners from the Tangkhul and Poumai Naga communities. Despite the ongoing challenges of remoteness and regional complexity, AFS remains a steadfast sanctuary of safety, encouragement, and academic excellence.
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/our-story')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#23483D] hover:text-[#B96F52] transition-colors"
                >
                  <span>Read our complete story and impact</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* D. Our Core Values — Uncluttered 2x2 Arrangement */}
      <section className="py-20 bg-[#E5EBE1]/60 border-t border-[#23483D]/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B96F52]">
              What We Stand For
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#23483D]">
              Our Core Values
            </h2>
            <p className="text-sm sm:text-base text-[#28332E]/80 font-sans">
              Every day at Alpha Friendship School is guided by four foundational principles that shape our teaching, residential life, and community service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CORE_VALUES.map((val) => (
              <div
                key={val.id}
                className="bg-[#F7F4EC] rounded-2xl overflow-hidden border border-[#28332E]/10 shadow-xs flex flex-col sm:flex-row hover:shadow-md transition-shadow"
              >
                <div className="sm:w-2/5 h-48 sm:h-auto shrink-0 relative bg-stone-200">
                  <img
                    src={val.photoUrl}
                    alt={val.photoAlt}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 sm:p-7 flex flex-col justify-between space-y-3 sm:w-3/5">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-[#23483D]">
                      {val.title}
                    </h3>
                    <p className="text-sm text-[#28332E]/80 leading-relaxed font-sans">
                      {val.description}
                    </p>
                  </div>
                  <div className="pt-2 text-xs font-semibold text-[#B96F52] tracking-wider uppercase">
                    AFS Core Principle
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* E. Life at AFS Preview */}
      <section className="py-20 lg:py-24 bg-[#F7F4EC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl space-y-3">
              <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B96F52]">
                Learning Beyond the Classroom
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#23483D]">
                Life at Alpha Friendship School
              </h2>
              <p className="text-sm sm:text-base text-[#28332E]/80 font-sans">
                A vibrant campus where academics are enriched by arts, sports, cultural heritage, and student-led leadership.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/life-at-afs')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#23483D] hover:text-[#B96F52] transition-colors whitespace-nowrap self-start md:self-end"
            >
              <span>Explore all activities and events</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Sports & Games */}
            <div
              onClick={() => onNavigate('/life-at-afs', '#activities')}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#28332E]/10 shadow-xs hover:shadow-md transition-all flex flex-col"
            >
              <div className="h-56 overflow-hidden relative bg-stone-200">
                <img
                  src="https://static.wixstatic.com/media/103928_b931b5f1c68e43a490127e89d6f7f9e2~mv2.jpg"
                  alt="Sports and Games at AFS"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#B96F52]">
                    Sports & Games
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#23483D] group-hover:text-[#B96F52] transition-colors">
                    Teamwork, Health & Discipline
                  </h3>
                  <p className="text-xs sm:text-sm text-[#28332E]/75 leading-relaxed">
                    Football, basketball, volleyball, chess, and ludo inspire students to stay healthy, active, and collaborative.
                  </p>
                </div>
                <div className="pt-2 inline-flex items-center gap-1.5 text-xs font-medium text-[#23483D] group-hover:underline">
                  <span>View Sports & Activities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Card 2: Music, Art & Culture */}
            <div
              onClick={() => onNavigate('/life-at-afs', '#activities')}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#28332E]/10 shadow-xs hover:shadow-md transition-all flex flex-col"
            >
              <div className="h-56 overflow-hidden relative bg-stone-200">
                <img
                  src="https://static.wixstatic.com/media/103928_8ebfcae4d8134c19a3d68162afc76062~mv2.jpg"
                  alt="Music and Creative Arts at AFS"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#B96F52]">
                    Music & Creative Arts
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#23483D] group-hover:text-[#B96F52] transition-colors">
                    Arts, Crochet & Cultural Dance
                  </h3>
                  <p className="text-xs sm:text-sm text-[#28332E]/75 leading-relaxed">
                    Guitar, ukulele, drum, piano, crochet, and traditional Tangkhul folk celebrations foster self-expression.
                  </p>
                </div>
                <div className="pt-2 inline-flex items-center gap-1.5 text-xs font-medium text-[#23483D] group-hover:underline">
                  <span>View Music & Arts</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Card 3: Student Voice & Leadership */}
            <div
              onClick={() => onNavigate('/life-at-afs', '#student-leadership')}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#28332E]/10 shadow-xs hover:shadow-md transition-all flex flex-col"
            >
              <div className="h-56 overflow-hidden relative bg-stone-200">
                <img
                  src="https://static.wixstatic.com/media/103928_af00b39f80b14cfe90aca6082ef9a2c2~mv2.jpeg"
                  alt="Student Leadership and Assemblies"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#B96F52]">
                    Student Leadership
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#23483D] group-hover:text-[#B96F52] transition-colors">
                    Assemblies & Student Council
                  </h3>
                  <p className="text-xs sm:text-sm text-[#28332E]/75 leading-relaxed">
                    Democratic student council elections and student-led morning assemblies cultivate confidence and leadership.
                  </p>
                </div>
                <div className="pt-2 inline-flex items-center gap-1.5 text-xs font-medium text-[#23483D] group-hover:underline">
                  <span>Explore Student Leadership</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* F. Partnership and Progress Preview — Sunbird Trust */}
      <section className="py-20 bg-[#E5EBE1] border-y border-[#23483D]/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF8F2] rounded-3xl p-8 sm:p-12 border border-[#23483D]/15 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B96F52]">
                  Transformative Collaboration Since 2021
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#23483D]">
                  Partnership with Sunbird Trust
                </h2>
                <p className="text-sm sm:text-base text-[#28332E]/85 leading-relaxed font-sans">
                  Through the School Transformation Program (STP), Alpha Friendship School partners with Sunbird Trust to strengthen infrastructure, support student scholarships (tuition assistance for 290 students and hostel assistance for 247 students), and conduct on-ground teacher training and capacity building.
                </p>
                <div className="flex flex-wrap gap-6 pt-2 text-xs sm:text-sm font-medium text-[#23483D]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B96F52]" />
                    <span>Tuition Support: 290 Students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B96F52]" />
                    <span>Hostel Support: 247 Students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B96F52]" />
                    <span>School Infrastructure & Teacher Mentoring</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
                <button
                  onClick={() => onNavigate('/our-story', '#sunbird-partnership')}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#F7F4EC] bg-[#23483D] rounded-xl hover:bg-[#19342C] transition-colors shadow-xs"
                >
                  <span>Explore Partnership & Progress</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('/get-involved', '#partner')}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#23483D] bg-[#E5EBE1] hover:bg-[#D5DDCF] rounded-xl transition-colors border border-[#23483D]/15"
                >
                  <span>Partner With AFS</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* G. Community Voices Preview — Video Feature */}
      <section className="py-20 lg:py-24 bg-[#F7F4EC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl space-y-3">
              <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B96F52]">
                Voices from Kachai
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#23483D]">
                Community Voices
              </h2>
              <p className="text-sm sm:text-base text-[#28332E]/80 font-sans">
                Hear directly from our students and teachers about life, learning, and hope at Alpha Friendship School.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/life-at-afs', '#community-voices')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#23483D] hover:text-[#B96F52] transition-colors whitespace-nowrap self-start md:self-end"
            >
              <span>View all testimonial recordings</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-[#23483D] text-[#F7F4EC] rounded-3xl overflow-hidden shadow-lg border border-[#19342C]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Video Poster Preview */}
              <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[420px] bg-black">
                <img
                  src={featuredVideo.posterUrl}
                  alt={featuredVideo.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={() => onOpenVideo(featuredVideo)}
                    className="group flex items-center justify-center w-20 h-20 rounded-full bg-[#F7F4EC] text-[#23483D] shadow-xl hover:scale-108 transition-all focus:outline-none focus:ring-4 focus:ring-[#D7B66E]"
                    aria-label={`Play ${featuredVideo.title}`}
                  >
                    <Play className="w-8 h-8 fill-current ml-1 text-[#23483D] group-hover:text-[#B96F52] transition-colors" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-xs px-3 py-1.5 rounded-md text-xs text-[#F7F4EC]">
                  Authentic Video Recording · Click to Play
                </div>
              </div>

              {/* Video Info Column */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 rounded-md bg-[#F7F4EC]/10 text-xs font-semibold text-[#D7B66E] uppercase tracking-wider">
                    Featured Reflection
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                    {featuredVideo.title}
                  </h3>
                  <p className="text-sm text-[#F7F4EC]/80 leading-relaxed font-sans">
                    {featuredVideo.transcriptNote}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#F7F4EC]/15 flex items-center justify-between">
                  <span className="text-xs text-[#D7B66E]">{featuredVideo.speakerRole}</span>
                  <button
                    onClick={() => onOpenVideo(featuredVideo)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#F7F4EC] hover:text-[#D7B66E] transition-colors"
                  >
                    <span>Watch Recording</span>
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* H. Closing Support Section — Be a Part of the Story */}
      <section className="relative py-24 bg-[#23483D] text-[#F7F4EC] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://static.wixstatic.com/media/103928_7e33551daf5440efb956db009c739320~mv2.jpg"
            alt="Children smiling at Alpha Friendship School"
            className="w-full h-full object-cover brightness-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#23483D]/80 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#D7B66E]">
            Make a Difference
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl mx-auto leading-tight">
            Be a Part of the Story
          </h2>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-[#F7F4EC]/90 leading-relaxed font-sans">
            Your support, whether through time or donation, can change a life. Join a global community dedicated to making education a joyful reality for every child.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('/get-involved')}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-[#23483D] bg-[#F7F4EC] hover:bg-white rounded-xl shadow-md transition-all active:translate-y-0.5"
            >
              <span>Get Involved Today</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
