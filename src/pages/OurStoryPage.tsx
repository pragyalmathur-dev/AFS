import React, { useState } from 'react';
import { SCHOOL_INFO, INFRASTRUCTURE_PROJECTS, ABOUT_VIDEO } from '../data/contentInventory';
import { ArrowRight, BookOpen, Users, Building, GraduationCap, Heart, CheckCircle2, ChevronRight, Play } from 'lucide-react';

interface OurStoryPageProps {
  onNavigate: (path: string, hash?: string) => void;
  onOpenVideo: (video: { title: string; videoUrl?: string; youtubeId?: string; posterUrl?: string; speakerRole?: string }) => void;
  onOpenLightbox: (item: { title: string; imageUrl: string; altText: string; description?: string }) => void;
}

export const OurStoryPage: React.FC<OurStoryPageProps> = ({
  onNavigate,
  onOpenVideo,
  onOpenLightbox
}) => {
  // Editable scholarship stats with note
  const [tuitionCount, setTuitionCount] = useState<number>(SCHOOL_INFO.scholarshipStats.tuitionSupportedStudents);
  const [hostelCount, setHostelCount] = useState<number>(SCHOOL_INFO.scholarshipStats.hostelSupportedStudents);
  const [isEditingStats, setIsEditingStats] = useState<boolean>(false);

  const sectionLinks = [
    { label: 'Our Story', href: '#our-story' },
    { label: 'Our Community & Approach', href: '#our-community' },
    { label: 'Sunbird Partnership', href: '#sunbird-partnership' },
    { label: 'Facilities & Progress', href: '#progress' }
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

      {/* A. Opening Hero & Portrait */}
      <section className="py-16 lg:py-20 bg-[#F7F4EC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B96F52]">
                Our Foundation & Purpose
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#23483D] leading-tight text-balance">
                A School Built on Hope and Resilience
              </h1>
              <p className="text-base sm:text-lg text-[#28332E]/85 leading-relaxed font-sans">
                Alpha Friendship School (AFS) is a residential institution located in Kachai village, Ukhrul district, Manipur. Established in 1995 by Mr. Mataisang Shirak and Mrs. Mingthingla Shirak, the school was founded with an enduring vision to provide quality education to children from remote and underserved communities.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs sm:text-sm text-[#28332E]/70 font-medium">
                <span>Founded 1995</span>
                <span>·</span>
                <span>Kachai Village, Manipur</span>
                <span>·</span>
                <span>Kindergarten to Grade 10</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#28332E]/10 bg-stone-200">
                <img
                  src="https://static.wixstatic.com/media/103928_d44940567640472d960c1e595746d4c6~mv2.jpeg"
                  alt="Students of Alpha Friendship School in Kachai"
                  className="w-full h-[420px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-[#FAF8F2] border-t border-[#28332E]/10 text-xs text-[#28332E]/75">
                  <span className="font-medium text-[#23483D]">Alpha Friendship School:</span> Nurturing resilient young learners from the Tangkhul and Poumai Naga communities.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* B. Our Story & Documentary Video */}
      <section id="our-story" className="py-20 bg-[#FAF8F2] border-t border-[#23483D]/10 scroll-mt-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B96F52]">
              History & Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#23483D]">
              Our Story
            </h2>
            <div className="space-y-4 text-base text-[#28332E]/85 leading-relaxed font-sans">
              <p>
                In 1995, founders <strong>Mr. Mataisang Shirak</strong> and <strong>Mrs. Mingthingla Shirak</strong> established Alpha Friendship School in Kachai village, high in the hills of Ukhrul district, Manipur. Recognizing that children from remote villages often lacked access to schooling, safe accommodations, and structured educational pathways, they built a school centered on community living, empathy, and academic rigor.
              </p>
              <p>
                Over three decades, the school has grown from a humble grassroots initiative into a pillar of hope for the region. Through dedicated faculty, community participation, and residential facilities, AFS has provided hundreds of children with the academic foundation and character to thrive.
              </p>
            </div>
          </div>

          {/* Documentary Embed */}
          <div className="bg-[#23483D] text-[#F7F4EC] rounded-2xl overflow-hidden shadow-md border border-[#19342C]">
            <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#F7F4EC]/10">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#D7B66E] font-semibold">
                  School Documentary Video
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold">
                  {ABOUT_VIDEO.title}
                </h3>
              </div>
              <button
                onClick={() => onOpenVideo({ title: ABOUT_VIDEO.title, youtubeId: ABOUT_VIDEO.youtubeId })}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-[#23483D] bg-[#F7F4EC] rounded-lg hover:bg-white transition-colors shrink-0 shadow-xs"
              >
                <Play className="w-4 h-4 fill-current text-[#23483D]" />
                <span>Play in Lightbox</span>
              </button>
            </div>
            
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`${ABOUT_VIDEO.embedUrl}?rel=0`}
                title={ABOUT_VIDEO.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

        </div>
      </section>

      {/* C. Our Community and Approach */}
      <section id="our-community" className="py-20 bg-[#F7F4EC] border-t border-[#23483D]/10 scroll-mt-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B96F52]">
              The People We Serve
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#23483D]">
              Our Community and Educational Approach
            </h2>
            <div className="space-y-4 text-base text-[#28332E]/85 leading-relaxed font-sans">
              <p>
                Today, AFS serves students from over <strong>25 neighbouring villages</strong>, many of whom are <strong>first-generation learners</strong> from the Tangkhul and Poumai Naga communities. The school provides education from Kindergarten to Grade 10 and focuses on academic excellence, character development, leadership, and community living.
              </p>
              <p>
                Despite the persistent challenges of geographical remoteness and regional conflict, AFS continues to be a nurturing and community-rooted institution, empowering children with the knowledge, skills, and confidence to build brighter futures.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 bg-white rounded-2xl border border-[#28332E]/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#E5EBE1] text-[#23483D] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#23483D]">
                Tangkhul & Poumai Naga Roots
              </h3>
              <p className="text-xs sm:text-sm text-[#28332E]/80 leading-relaxed font-sans">
                Welcoming children from diverse ethnic groups and surrounding rural villages, fostering mutual respect, cultural identity, and unity.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#28332E]/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#E5EBE1] text-[#23483D] flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#23483D]">
                Kindergarten to Grade 10
              </h3>
              <p className="text-xs sm:text-sm text-[#28332E]/80 leading-relaxed font-sans">
                A continuous, supportive educational continuum preparing young students for board examinations, vocational pathways, and higher studies.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#28332E]/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#E5EBE1] text-[#23483D] flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#23483D]">
                Community Living & Safety
              </h3>
              <p className="text-xs sm:text-sm text-[#28332E]/80 leading-relaxed font-sans">
                A safe residential environment with nutritious meals, hostel care, and structured routines that protect students during regional instability.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* D. Partnership with Sunbird */}
      <section id="sunbird-partnership" className="py-20 bg-[#E5EBE1] border-t border-[#23483D]/10 scroll-mt-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B96F52]">
              Collaboration for Sustainable Growth
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#23483D]">
              Partnership with Sunbird Trust
            </h2>
            <div className="space-y-4 text-base text-[#28332E]/85 leading-relaxed font-sans">
              <p>
                In 2021, Alpha Friendship School partnered with <strong>Sunbird Trust</strong> through the <strong>School Transformation Program (STP)</strong>. Since then, the partnership has supported infrastructure development, teacher professional development, student sponsorships, nutrition support, and systems strengthening, helping create a more enriching learning environment for students and staff.
              </p>
              <p className="text-sm text-[#28332E]/75 italic">
                *Note: Alpha Friendship School maintains its independent local community leadership, while Sunbird Trust provides targeted programmatic, infrastructural, and pedagogical support.
              </p>
            </div>
          </div>

          {/* E. Scholarship Support — Editable & Distinct figures */}
          <div className="bg-[#FAF8F2] rounded-2xl p-6 sm:p-8 border border-[#23483D]/15 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#23483D]">
                  Student Scholarship Support
                </h3>
                <p className="text-xs sm:text-sm text-[#28332E]/75 mt-1 font-sans">
                  Sunbird provides scholarship support to help students continue their education without financial burden.
                </p>
              </div>
              <button
                onClick={() => setIsEditingStats(!isEditingStats)}
                className="text-xs font-semibold text-[#B96F52] hover:underline self-start sm:self-auto cursor-pointer"
              >
                {isEditingStats ? 'Save Figures' : 'Staff Edit Mode'}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Tuition Support Card */}
              <div className="p-6 bg-white rounded-xl border border-[#23483D]/10 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#B96F52]">
                  Category 1: Academic Support
                </div>
                <div className="flex items-baseline gap-2">
                  {isEditingStats ? (
                    <input
                      type="number"
                      value={tuitionCount}
                      onChange={(e) => setTuitionCount(parseInt(e.target.value) || 0)}
                      className="w-28 font-serif text-3xl font-bold text-[#23483D] border border-[#23483D]/30 rounded px-2 py-0.5"
                    />
                  ) : (
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#23483D] tabular-nums">
                      {tuitionCount}
                    </span>
                  )}
                  <span className="text-sm font-medium text-[#28332E]/80">Students</span>
                </div>
                <div className="font-serif text-lg font-bold text-[#23483D]">
                  Tuition Fee Scholarships
                </div>
                <p className="text-xs text-[#28332E]/75 leading-relaxed font-sans">
                  Direct academic tuition fee coverage ensuring uninterrupted classroom access and school books.
                </p>
              </div>

              {/* Hostel Support Card */}
              <div className="p-6 bg-white rounded-xl border border-[#23483D]/10 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#B96F52]">
                  Category 2: Residential Support
                </div>
                <div className="flex items-baseline gap-2">
                  {isEditingStats ? (
                    <input
                      type="number"
                      value={hostelCount}
                      onChange={(e) => setHostelCount(parseInt(e.target.value) || 0)}
                      className="w-28 font-serif text-3xl font-bold text-[#23483D] border border-[#23483D]/30 rounded px-2 py-0.5"
                    />
                  ) : (
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#23483D] tabular-nums">
                      {hostelCount}
                    </span>
                  )}
                  <span className="text-sm font-medium text-[#28332E]/80">Students</span>
                </div>
                <div className="font-serif text-lg font-bold text-[#23483D]">
                  Hostel Fee Scholarships
                </div>
                <p className="text-xs text-[#28332E]/75 leading-relaxed font-sans">
                  Residential accommodation support enabling children from distant villages to stay safely on campus.
                </p>
              </div>

            </div>

            <p className="text-xs text-[#28332E]/65 italic">
              Important: These figures describe different types of support and may overlap. In keeping with reporting standards, they are maintained separately and not combined into a single total.
            </p>
          </div>

        </div>
      </section>

      {/* F. Infrastructure & Facilities (Before & Now Comparisons) */}
      <section id="progress" className="py-20 bg-[#F7F4EC] border-t border-[#23483D]/10 scroll-mt-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B96F52]">
              Campus Transformation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#23483D]">
              Infrastructure and Facilities
            </h2>
            <p className="text-base text-[#28332E]/85 leading-relaxed font-sans">
              Sunbird has taken up several important infrastructure projects to improve the school environment and provide better facilities for students and staff. Major projects include school building development, hostel facilities, hall, water tank installation, computer lab, and library.
            </p>
          </div>

          {/* Before & Now Comparisons Grid */}
          <div className="space-y-12">
            {INFRASTRUCTURE_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#28332E]/10 shadow-xs space-y-6"
              >
                <div className="space-y-1">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#23483D]">
                    {proj.title}
                  </h3>
                  {proj.description && (
                    <p className="text-xs sm:text-sm text-[#28332E]/75 font-sans">
                      {proj.description}
                    </p>
                  )}
                </div>

                {proj.hasComparison && proj.beforePhoto && proj.nowPhoto ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Before Image */}
                    <div
                      className="group cursor-pointer space-y-2"
                      onClick={() => onOpenLightbox({
                        title: `${proj.title} (Before)`,
                        imageUrl: proj.beforePhoto!,
                        altText: `${proj.title} prior to renovation`,
                        description: `Original facility condition prior to the School Transformation Program.`
                      })}
                    >
                      <div className="relative rounded-xl overflow-hidden bg-stone-200 border border-stone-300 aspect-16/10">
                        <img
                          src={proj.beforePhoto}
                          alt={`${proj.title} Before`}
                          className="w-full h-full object-cover transition-transform group-hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-black/70 text-[#F7F4EC] text-xs font-semibold px-2.5 py-1 rounded-md">
                          Before
                        </div>
                      </div>
                      <div className="text-xs text-[#28332E]/60 flex items-center justify-between">
                        <span>Original structure</span>
                        <span className="text-[#B96F52] group-hover:underline">Click to view</span>
                      </div>
                    </div>

                    {/* Now Image */}
                    <div
                      className="group cursor-pointer space-y-2"
                      onClick={() => onOpenLightbox({
                        title: `${proj.title} (Now)`,
                        imageUrl: proj.nowPhoto!,
                        altText: `${proj.title} after transformation`,
                        description: `Renovated and upgraded facility at Alpha Friendship School.`
                      })}
                    >
                      <div className="relative rounded-xl overflow-hidden bg-stone-200 border border-[#23483D]/20 aspect-16/10">
                        <img
                          src={proj.nowPhoto}
                          alt={`${proj.title} Now`}
                          className="w-full h-full object-cover transition-transform group-hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-[#23483D] text-[#F7F4EC] text-xs font-semibold px-2.5 py-1 rounded-md">
                          Now
                        </div>
                      </div>
                      <div className="text-xs text-[#28332E]/60 flex items-center justify-between">
                        <span>Completed renovation</span>
                        <span className="text-[#23483D] group-hover:underline font-medium">Click to view</span>
                      </div>
                    </div>

                  </div>
                ) : (
                  <div
                    className="group cursor-pointer max-w-2xl"
                    onClick={() => onOpenLightbox({
                      title: proj.title,
                      imageUrl: proj.singlePhoto!,
                      altText: proj.title,
                      description: proj.description
                    })}
                  >
                    <div className="relative rounded-xl overflow-hidden bg-stone-200 border border-[#23483D]/10 aspect-16/9">
                      <img
                        src={proj.singlePhoto}
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-102"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-[#23483D] text-[#F7F4EC] text-xs font-semibold px-2.5 py-1 rounded-md">
                        {proj.title}
                      </div>
                    </div>
                    <div className="pt-2 text-xs text-[#28332E]/60 flex items-center justify-between">
                      <span>Campus facility</span>
                      <span className="text-[#23483D] group-hover:underline font-medium">Click to view</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* G. Teacher Development */}
      <section className="py-20 bg-[#FAF8F2] border-t border-[#23483D]/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B96F52]">
                Faculty Excellence
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#23483D]">
                Teacher Training and Capacity Building
              </h2>
              <div className="space-y-4 text-base text-[#28332E]/85 leading-relaxed font-sans">
                <p>
                  A strong focus of the partnership is on teacher professional development. The Sunbird on-ground team regularly conducts training sessions, workshops, mentoring, and capacity-building programs for teachers.
                </p>
                <p>
                  These programs help teachers strengthen their classroom practices, improve student learning, and adopt more effective teaching strategies tailored to multi-grade and bilingual rural learners.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#28332E]/80">
                  <CheckCircle2 className="w-4 h-4 text-[#23483D]" />
                  <span>On-ground regular coaching and pedagogical workshops</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#28332E]/80">
                  <CheckCircle2 className="w-4 h-4 text-[#23483D]" />
                  <span>Modern classroom strategies for primary and secondary classes</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#28332E]/80">
                  <CheckCircle2 className="w-4 h-4 text-[#23483D]" />
                  <span>Empowering local community educators with leadership skills</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#28332E]/10 bg-stone-200">
                <img
                  src="https://static.wixstatic.com/media/103928_4810cc4eb71543bf9b1b87f93d7783c4~mv2.jpg"
                  alt="Teacher mentoring students at Alpha Friendship School"
                  className="w-full h-[380px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3 bg-[#FAF8F2] border-t border-[#28332E]/10 text-xs text-[#28332E]/75">
                  Mentoring and classroom engagement at Alpha Friendship School.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* H. Partnership Impact & Closing Support Call */}
      <section className="py-20 bg-[#23483D] text-[#F7F4EC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#D7B66E]">
            Looking Ahead
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl mx-auto leading-tight">
            Impact of the Partnership
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#F7F4EC]/90 leading-relaxed font-sans">
            The partnership between Alpha Friendship School and Sunbird has brought meaningful growth and transformation to the school. It has helped increase student enrolment, strengthen teacher professional development through regular training and mentoring, and build a strong educational ecosystem within the community. Through continued support in scholarships, infrastructure, and teacher development, the partnership is helping AFS move closer to its vision of &ldquo;Change Through Education&rdquo; for children in Kachai, Ukhrul district, Manipur.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('/get-involved')}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#23483D] bg-[#F7F4EC] hover:bg-white rounded-xl shadow-md transition-all active:translate-y-0.5"
            >
              <span>Support or Collaborate With Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
