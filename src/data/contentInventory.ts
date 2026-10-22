/**
 * Alpha Friendship School — Complete Content & Media Asset Inventory
 * Extracted directly from https://www.alphafriendshipschool.com/ as source of truth.
 * Preserves all substantive content, figures, and media assets.
 */

export interface MediaAsset {
  id: string;
  sourcePage: string;
  sourceUri: string;
  cdnUrl: string;
  subject: string;
  intendedSection: string;
  caption: string;
  altText: string;
  dimensions?: { width: number; height: number };
  type: 'image' | 'video' | 'youtube';
  posterUrl?: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  photoUrl: string;
  photoAlt: string;
}

export interface CoCurricularActivity {
  id: string;
  title: string;
  category: string;
  instrumentsOrGames: string[];
  description: string;
  photoUrl: string;
  photoAlt: string;
}

export interface FacilityProject {
  id: string;
  title: string;
  hasComparison: boolean;
  beforePhoto?: string;
  nowPhoto?: string;
  singlePhoto?: string;
  description?: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  photoUrl: string;
  photoAlt: string;
}

export interface TestimonialVideo {
  id: string;
  title: string;
  speakerRole: string;
  videoUrl: string;
  posterUrl: string;
  transcriptNote?: string;
}

export const SCHOOL_INFO = {
  name: "Alpha Friendship School",
  shortName: "AFS",
  locationTagline: "Kachai Village, Ukhrul District, Manipur",
  heroWelcome: "Welcome To Alpha Kingdom",
  establishedYear: 1995,
  founders: ["Mr. Mataisang Shirak", "Mrs. Mingthingla Shirak"],
  address: {
    village: "Kachai Village",
    district: "Ukhrul District",
    state: "Manipur",
    po: "PO – Somdal",
    full: "Alpha Friendship School, Kachai Village, Ukhrul District, Manipur, PO – Somdal"
  },
  contact: {
    phone: "9366539228",
    displayPhone: "+91 9366539228",
    email: "alphafriendship@gmail.com"
  },
  grades: "Kindergarten to Grade 10",
  villagesServed: "Over 25 neighbouring villages",
  communities: "Tangkhul and Poumai Naga communities, many of whom are first-generation learners",
  system: "Residential education",
  vision: "Change Through Education",
  sunbirdPartnershipYear: 2021,
  sunbirdProgram: "School Transformation Program (STP)",
  scholarshipStats: {
    tuitionSupportedStudents: 290,
    hostelSupportedStudents: 247,
    notes: "Figures reflect separate support categories (tuition and hostel assistance) and may overlap; they are kept strictly distinct."
  }
};

export const CORE_VALUES: ValueItem[] = [
  {
    id: "inclusion-safety",
    title: "Inclusion & Safety",
    description: "We create a safe, welcoming, and respectful environment where every child feels valued, protected, and accepted regardless of background, tribe, or ability.",
    photoUrl: "https://static.wixstatic.com/media/103928_930b7701e6174ed4a6f25e644b59716b~mv2.jpg",
    photoAlt: "Students gathered together in a welcoming learning environment at Alpha Friendship School"
  },
  {
    id: "equity",
    title: "Equity",
    description: "We believe every child deserves equal opportunities to learn, grow, and succeed, especially children from remote and under-resourced communities.",
    photoUrl: "https://static.wixstatic.com/media/103928_04059b5731d64c6d807108f174537060~mv2.jpg",
    photoAlt: "Students actively engaged in classroom learning at Alpha Friendship School"
  },
  {
    id: "excellence-care",
    title: "Excellence with Care",
    description: "We encourage students to strive for their best while ensuring that learning happens with compassion, encouragement, patience, and personal support.",
    photoUrl: "https://static.wixstatic.com/media/103928_4810cc4eb71543bf9b1b87f93d7783c4~mv2.jpg",
    photoAlt: "Dedicated teacher mentoring students with compassion and personalized guidance"
  },
  {
    id: "community",
    title: "Community",
    description: "We grow together as one school family by fostering cooperation, responsibility, service, cultural respect, and strong relationships among students, staff, parents, and the wider community.",
    photoUrl: "https://static.wixstatic.com/media/103928_392dc3fd8bc84a1b93320acc66eaf47e~mv2.jpg",
    photoAlt: "AFS community members, students, and educators gathered in shared celebration"
  }
];

export const CO_CURRICULAR_ACTIVITIES: CoCurricularActivity[] = [
  {
    id: "sports-and-games",
    title: "Sports and Games",
    category: "Physical Wellbeing & Teamwork",
    instrumentsOrGames: ["Football", "Basketball", "Volleyball", "Chess", "Ludo"],
    description: "At Alpha Friendship School, sports and games are an important part of student life. Students enjoy outdoor games such as football, basketball, and volleyball, as well as indoor games like chess and ludo. These activities help students stay healthy, active, and learn teamwork and discipline.",
    photoUrl: "https://static.wixstatic.com/media/103928_b931b5f1c68e43a490127e89d6f7f9e2~mv2.jpg",
    photoAlt: "Alpha Friendship School students playing sports on the campus grounds"
  },
  {
    id: "music-class",
    title: "Music Class",
    category: "Creative Expression",
    instrumentsOrGames: ["Guitar", "Ukulele", "Drum", "Piano"],
    description: "Our music classes give students the opportunity to learn and enjoy music. Students are introduced to instruments such as the guitar, ukulele, drum, and piano. Music helps children develop confidence, creativity, and a love for the arts.",
    photoUrl: "https://static.wixstatic.com/media/103928_8ebfcae4d8134c19a3d68162afc76062~mv2.jpg",
    photoAlt: "Students learning acoustic guitar and instruments during music class at AFS"
  },
  {
    id: "cultural-activities",
    title: "Cultural Activities",
    category: "Heritage & Performance",
    instrumentsOrGames: ["Singing", "Dancing", "Drama", "Speeches", "Traditional Performances"],
    description: "The school celebrates different cultural festivals and special occasions throughout the year. Students take part in singing, dancing, drama, speeches, and other performances. These activities help students appreciate different cultures and build confidence in expressing themselves.",
    photoUrl: "https://static.wixstatic.com/media/103928_eb34b0d0dbb649d7a0bd1032bfd67488~mv2.jpg",
    photoAlt: "Students performing cultural dance in traditional Tangkhul attire during school celebrations"
  },
  {
    id: "art-and-craft",
    title: "Art and Craft",
    category: "Hands-on Creativity & Fine Motor Skills",
    instrumentsOrGames: ["Drawing", "Painting", "Sketching", "Crochet", "Handmade Projects"],
    description: "Art and craft activities encourage students to use their imagination and creativity. Students enjoy drawing, painting, sketching, and simple craft work such as crochet and handmade projects. These activities help improve concentration, creativity, and fine motor skills.",
    photoUrl: "https://static.wixstatic.com/media/103928_87e2e19f3cfc4689bb9d03e6ee1bd22a~mv2.jpg",
    photoAlt: "Students practicing creative crochet and handmade crafts in the art session"
  }
];

export const INFRASTRUCTURE_PROJECTS: FacilityProject[] = [
  {
    id: "school-building",
    title: "School Building",
    hasComparison: true,
    beforePhoto: "https://static.wixstatic.com/media/103928_1acf8d81aab54eff813bb5e3fa746d1b~mv2.jpg",
    nowPhoto: "https://static.wixstatic.com/media/103928_4e5829bc936545bf98466e4b15b8d771~mv2.jpeg",
    description: "Upgraded classrooms and school building architecture providing safe, weather-resilient learning spaces for all grades."
  },
  {
    id: "hostel-facilities",
    title: "Hostel Facilities",
    hasComparison: true,
    beforePhoto: "https://static.wixstatic.com/media/103928_ac12b024422d4cd98dd099ac92152c14~mv2.jpeg",
    nowPhoto: "https://static.wixstatic.com/media/103928_68effbb1de114de2826331dc539a4b0c~mv2.jpeg",
    description: "Refurbished residential dormitories offering clean, secure, and dignified living quarters for residential students."
  },
  {
    id: "school-hall",
    title: "School Hall",
    hasComparison: true,
    beforePhoto: "https://static.wixstatic.com/media/103928_f132d19a6c9d44f799b8434c19f0583a~mv2.jpg",
    nowPhoto: "https://static.wixstatic.com/media/103928_6ff68cc1048b403e8de66a5dd92f472d~mv2.jpg",
    description: "Expanded assembly and gathering hall for student-led morning assemblies, cultural events, and workshops."
  },
  {
    id: "computer-lab",
    title: "Computer Lab",
    hasComparison: false,
    singlePhoto: "https://static.wixstatic.com/media/103928_35fad8af51834b6b8437d3bc895b33ef~mv2.jpg",
    description: "Equipped computer laboratory enabling digital literacy and technological skills for rural students."
  },
  {
    id: "library",
    title: "Library",
    hasComparison: false,
    singlePhoto: "https://static.wixstatic.com/media/103928_fad62574ea074f1fa7358851954446e3~mv2.png",
    description: "Well-stocked school library and reading environment fostering a love for literature, independent research, and storytelling."
  }
];

export const EVENTS_GALLERY: EventItem[] = [
  {
    id: "event-1",
    title: "Classroom Learning & Collaboration",
    description: "Students engaged in interactive group discussions and academic activities.",
    photoUrl: "https://static.wixstatic.com/media/103928_64d7d13ddafa4e5d97444d2ba0899fbb~mv2.jpeg",
    photoAlt: "Students working together during an educational workshop at AFS"
  },
  {
    id: "event-2",
    title: "Creative & Hands-on Workshops",
    description: "Exploration through practical experiments, craft making, and hands-on demonstrations.",
    photoUrl: "https://static.wixstatic.com/media/103928_ef8cb6f492d9492ea26d5d8199fdfc58~mv2.jpeg",
    photoAlt: "AFS students participating in a creative workshop"
  },
  {
    id: "event-3",
    title: "Cultural Diversity & Celebrations",
    description: "Celebrating traditional festivals from across India including Baisakhi, Eid, Onam, and Bihu.",
    photoUrl: "https://static.wixstatic.com/media/103928_b1f73b19b49546c5929f27c2fbbea1c5~mv2.jpg",
    photoAlt: "Students and teachers celebrating festival traditions"
  },
  {
    id: "event-4",
    title: "Health & Hygiene Program",
    description: "Dedicated workshops promoting student wellness, daily hygiene, and healthy community living.",
    photoUrl: "https://static.wixstatic.com/media/103928_abe9e0653db943ecbc9dc401d1b51460~mv2.jpeg",
    photoAlt: "Health and hygiene session conducted for students"
  },
  {
    id: "event-5",
    title: "Library Mela & Reading Festival",
    description: "Interactive book fairs and reading corners inspiring young students to discover stories.",
    photoUrl: "https://static.wixstatic.com/media/103928_152694a90d8e43a7bfbd9c70bbe20a77~mv2.jpeg",
    photoAlt: "Students enjoying books during the Library Mela"
  },
  {
    id: "event-6",
    title: "Morning Assembly & Community Gathering",
    description: "Student leaders addressing the school body with inspiring messages, hymns, and news.",
    photoUrl: "https://static.wixstatic.com/media/103928_0c5c83217d9a4164833a859e632e2d00~mv2.jpg",
    photoAlt: "All-school assembly on the campus grounds"
  },
  {
    id: "event-7",
    title: "World Innovation & Technology Day",
    description: "Students presenting science exhibits, digital concepts, and problem-solving models.",
    photoUrl: "https://static.wixstatic.com/media/103928_d164fe21a04c434a94aba792b094e7f0~mv2.jpeg",
    photoAlt: "Students presenting their project displays"
  },
  {
    id: "event-8",
    title: "Youth Leadership & Career Guidance",
    description: "Mentoring sessions guiding older students on career paths, higher education, and community service.",
    photoUrl: "https://static.wixstatic.com/media/103928_30c88cf1858143468e53c042c7d152c1~mv2.jpg",
    photoAlt: "Students participating in leadership and career development"
  }
];

export const TESTIMONIAL_VIDEOS: TestimonialVideo[] = [
  {
    id: "student-testimonial",
    title: "Student Testimonial",
    speakerRole: "Alpha Friendship School Student",
    videoUrl: "https://video.wixstatic.com/video/103928_c8162733b9ae42a9a9645c2f43e6780a/1080p/mp4/file.mp4",
    posterUrl: "https://static.wixstatic.com/media/103928_c8162733b9ae42a9a9645c2f43e6780af000.jpg",
    transcriptNote: "Original authentic recording featuring a student reflecting on life, learning, and hostel living at Alpha Friendship School."
  },
  {
    id: "teacher-testimonial",
    title: "Teacher Testimonial",
    speakerRole: "Alpha Friendship School Educator",
    videoUrl: "https://video.wixstatic.com/video/103928_819216b2be9d485bb83e66974b37c826/1080p/mp4/file.mp4",
    posterUrl: "https://static.wixstatic.com/media/103928_819216b2be9d485bb83e66974b37c826f000.jpg",
    transcriptNote: "Original authentic recording featuring an educator sharing their experience teaching, mentoring, and partnering in student transformation at AFS."
  }
];

export const ABOUT_VIDEO = {
  title: "A School Built On Hope and Resilience",
  youtubeId: "87fXGJdPU28",
  embedUrl: "https://www.youtube.com/embed/87fXGJdPU28"
};

/**
 * Full Media Asset Inventory table
 * Records every retrieved asset, its origin, file reference, intended section, and metadata.
 */
export const FULL_MEDIA_INVENTORY: MediaAsset[] = [
  {
    id: "home-hero",
    sourcePage: "home",
    sourceUri: "103928_9716a688a5af4e41bd83c272da0e6993~mv2.jpg",
    cdnUrl: "https://static.wixstatic.com/media/103928_9716a688a5af4e41bd83c272da0e6993~mv2.jpg",
    subject: "Students and campus life at Alpha Friendship School",
    intendedSection: "Home Hero & Header",
    caption: "Students of Alpha Friendship School in Kachai Village",
    altText: "Alpha Friendship School campus and students gathered in Kachai, Manipur",
    dimensions: { width: 1280, height: 680 },
    type: "image"
  },
  {
    id: "home-val-inclusion",
    sourcePage: "home",
    sourceUri: "103928_930b7701e6174ed4a6f25e644b59716b~mv2.jpg",
    cdnUrl: "https://static.wixstatic.com/media/103928_930b7701e6174ed4a6f25e644b59716b~mv2.jpg",
    subject: "Inclusion & Safety core value illustration",
    intendedSection: "Home Core Values",
    caption: "Inclusion & Safety",
    altText: "Students interacting in a welcoming school environment",
    dimensions: { width: 3000, height: 1819 },
    type: "image"
  },
  {
    id: "home-val-equity",
    sourcePage: "home",
    sourceUri: "103928_04059b5731d64c6d807108f174537060~mv2.jpg",
    cdnUrl: "https://static.wixstatic.com/media/103928_04059b5731d64c6d807108f174537060~mv2.jpg",
    subject: "Equity core value illustration",
    intendedSection: "Home Core Values & Introduction",
    caption: "Equity — equal opportunities for every child",
    altText: "Students in classroom receiving quality education",
    dimensions: { width: 4032, height: 3024 },
    type: "image"
  },
  {
    id: "home-val-excellence",
    sourcePage: "home",
    sourceUri: "103928_4810cc4eb71543bf9b1b87f93d7783c4~mv2.jpg",
    cdnUrl: "https://static.wixstatic.com/media/103928_4810cc4eb71543bf9b1b87f93d7783c4~mv2.jpg",
    subject: "Excellence with Care core value illustration",
    intendedSection: "Home Core Values",
    caption: "Excellence with Care",
    altText: "Student receiving compassionate mentoring and support",
    dimensions: { width: 4160, height: 3120 },
    type: "image"
  },
  {
    id: "home-val-community",
    sourcePage: "home",
    sourceUri: "103928_392dc3fd8bc84a1b93320acc66eaf47e~mv2.jpg",
    cdnUrl: "https://static.wixstatic.com/media/103928_392dc3fd8bc84a1b93320acc66eaf47e~mv2.jpg",
    subject: "Community core value illustration",
    intendedSection: "Home Core Values",
    caption: "Community living and family bond",
    altText: "AFS school family gathered together",
    dimensions: { width: 1080, height: 655 },
    type: "image"
  },
  {
    id: "home-closing-support",
    sourcePage: "home",
    sourceUri: "103928_7e33551daf5440efb956db009c739320~mv2.jpg",
    cdnUrl: "https://static.wixstatic.com/media/103928_7e33551daf5440efb956db009c739320~mv2.jpg",
    subject: "Be a Part of the Story banner",
    intendedSection: "Home Closing Section & Call to Action",
    caption: "Be a Part of the Story",
    altText: "Children of Alpha Friendship School smiling",
    dimensions: { width: 1280, height: 687 },
    type: "image"
  },
  {
    id: "about-hero",
    sourcePage: "about",
    sourceUri: "103928_d44940567640472d960c1e595746d4c6~mv2.jpeg",
    cdnUrl: "https://static.wixstatic.com/media/103928_d44940567640472d960c1e595746d4c6~mv2.jpeg",
    subject: "A School Built on Hope and Resilience portrait",
    intendedSection: "Our Story & Impact Opening",
    caption: "A School Built on Hope and Resilience",
    altText: "Portrait of students at Alpha Friendship School in Kachai",
    dimensions: { width: 960, height: 1280 },
    type: "image"
  },
  {
    id: "blank1-building-before",
    sourcePage: "blank-1",
    sourceUri: "103928_1acf8d81aab54eff813bb5e3fa746d1b~mv2.jpg",
    cdnUrl: "https://static.wixstatic.com/media/103928_1acf8d81aab54eff813bb5e3fa746d1b~mv2.jpg",
    subject: "School Building Before Transformation",
    intendedSection: "Our Story: Infrastructure Before & Now",
    caption: "School Building — Before",
    altText: "Original Alpha Friendship School building prior to renovation",
    dimensions: { width: 990, height: 474 },
    type: "image"
  },
  {
    id: "blank1-building-now",
    sourcePage: "blank-1",
    sourceUri: "103928_4e5829bc936545bf98466e4b15b8d771~mv2.jpeg",
    cdnUrl: "https://static.wixstatic.com/media/103928_4e5829bc936545bf98466e4b15b8d771~mv2.jpeg",
    subject: "School Building Now",
    intendedSection: "Our Story: Infrastructure Before & Now",
    caption: "School Building — Now",
    altText: "Renovated Alpha Friendship School building with modern structure",
    dimensions: { width: 1280, height: 960 },
    type: "image"
  },
  {
    id: "blank1-hostel-before",
    sourcePage: "blank-1",
    sourceUri: "103928_ac12b024422d4cd98dd099ac92152c14~mv2.jpeg",
    cdnUrl: "https://static.wixstatic.com/media/103928_ac12b024422d4cd98dd099ac92152c14~mv2.jpeg",
    subject: "Hostel Before Transformation",
    intendedSection: "Our Story: Infrastructure Before & Now",
    caption: "Hostel — Before",
    altText: "Hostel dormitories before upgrades",
    dimensions: { width: 1017, height: 601 },
    type: "image"
  },
  {
    id: "blank1-hostel-now",
    sourcePage: "blank-1",
    sourceUri: "103928_68effbb1de114de2826331dc539a4b0c~mv2.jpeg",
    cdnUrl: "https://static.wixstatic.com/media/103928_68effbb1de114de2826331dc539a4b0c~mv2.jpeg",
    subject: "Hostel Now",
    intendedSection: "Our Story: Infrastructure Before & Now",
    caption: "Hostel — Now",
    altText: "Upgraded residential hostel for students",
    dimensions: { width: 1025, height: 614 },
    type: "image"
  },
  {
    id: "blank1-hall-before",
    sourcePage: "blank-1",
    sourceUri: "103928_f132d19a6c9d44f799b8434c19f0583a~mv2.jpg",
    cdnUrl: "https://static.wixstatic.com/media/103928_f132d19a6c9d44f799b8434c19f0583a~mv2.jpg",
    subject: "School Hall Before Transformation",
    intendedSection: "Our Story: Infrastructure Before & Now",
    caption: "Hall — Before",
    altText: "Assembly hall before renovation",
    dimensions: { width: 4624, height: 3472 },
    type: "image"
  },
  {
    id: "blank1-hall-now",
    sourcePage: "blank-1",
    sourceUri: "103928_6ff68cc1048b403e8de66a5dd92f472d~mv2.jpg",
    cdnUrl: "https://static.wixstatic.com/media/103928_6ff68cc1048b403e8de66a5dd92f472d~mv2.jpg",
    subject: "School Hall Now",
    intendedSection: "Our Story: Infrastructure Before & Now",
    caption: "Hall — Now",
    altText: "Newly constructed multi-purpose assembly hall",
    dimensions: { width: 4624, height: 3472 },
    type: "image"
  },
  {
    id: "blank1-computer-lab",
    sourcePage: "blank-1",
    sourceUri: "103928_35fad8af51834b6b8437d3bc895b33ef~mv2.jpg",
    cdnUrl: "https://static.wixstatic.com/media/103928_35fad8af51834b6b8437d3bc895b33ef~mv2.jpg",
    subject: "Computer Lab",
    intendedSection: "Our Story: Infrastructure Facilities",
    caption: "Computer Lab",
    altText: "Students learning in the equipped computer lab",
    dimensions: { width: 4160, height: 3120 },
    type: "image"
  },
  {
    id: "blank1-library",
    sourcePage: "blank-1",
    sourceUri: "103928_fad62574ea074f1fa7358851954446e3~mv2.png",
    cdnUrl: "https://static.wixstatic.com/media/103928_fad62574ea074f1fa7358851954446e3~mv2.png",
    subject: "School Library",
    intendedSection: "Our Story: Infrastructure Facilities",
    caption: "School Library",
    altText: "School library shelves with books for children",
    dimensions: { width: 5712, height: 4284 },
    type: "image"
  },
  {
    id: "blank-sports",
    sourcePage: "blank",
    sourceUri: "103928_b931b5f1c68e43a490127e89d6f7f9e2~mv2.jpg",
    cdnUrl: "https://static.wixstatic.com/media/103928_b931b5f1c68e43a490127e89d6f7f9e2~mv2.jpg",
    subject: "Sports and Games co-curricular",
    intendedSection: "Life at AFS: Activities",
    caption: "Sports and Games",
    altText: "Students playing outdoors on the school ground",
    dimensions: { width: 4160, height: 3120 },
    type: "image"
  },
  {
    id: "blank-music",
    sourcePage: "blank",
    sourceUri: "103928_8ebfcae4d8134c19a3d68162afc76062~mv2.jpg",
    cdnUrl: "https://static.wixstatic.com/media/103928_8ebfcae4d8134c19a3d68162afc76062~mv2.jpg",
    subject: "Music Class co-curricular",
    intendedSection: "Life at AFS: Activities",
    caption: "Music Class",
    altText: "Student learning guitar in music class",
    dimensions: { width: 3000, height: 1456 },
    type: "image"
  },
  {
    id: "blank-culture",
    sourcePage: "blank",
    sourceUri: "103928_eb34b0d0dbb649d7a0bd1032bfd67488~mv2.jpg",
    cdnUrl: "https://static.wixstatic.com/media/103928_eb34b0d0dbb649d7a0bd1032bfd67488~mv2.jpg",
    subject: "Cultural Activities co-curricular",
    intendedSection: "Life at AFS: Activities",
    caption: "Cultural Activities",
    altText: "Cultural dance performance by students in traditional Naga dress",
    dimensions: { width: 3000, height: 1128 },
    type: "image"
  },
  {
    id: "blank-art",
    sourcePage: "blank",
    sourceUri: "103928_87e2e19f3cfc4689bb9d03e6ee1bd22a~mv2.jpg",
    cdnUrl: "https://static.wixstatic.com/media/103928_87e2e19f3cfc4689bb9d03e6ee1bd22a~mv2.jpg",
    subject: "Art and Craft co-curricular",
    intendedSection: "Life at AFS: Activities",
    caption: "Art and Craft",
    altText: "Students working on crochet and handmade art projects",
    dimensions: { width: 2372, height: 1728 },
    type: "image"
  },
  {
    id: "blank3-assemblies",
    sourcePage: "blank-3",
    sourceUri: "103928_af00b39f80b14cfe90aca6082ef9a2c2~mv2.jpeg",
    cdnUrl: "https://static.wixstatic.com/media/103928_af00b39f80b14cfe90aca6082ef9a2c2~mv2.jpeg",
    subject: "Student-Led Assemblies",
    intendedSection: "Life at AFS: Student Leadership",
    caption: "Student Led Assemblies",
    altText: "Students from Classes 6 to 10 leading morning assembly",
    dimensions: { width: 1280, height: 960 },
    type: "image"
  },
  {
    id: "blank3-council",
    sourcePage: "blank-3",
    sourceUri: "103928_634c6943f0ea43dda1b2a32d3d8b2403~mv2.jpg",
    cdnUrl: "https://static.wixstatic.com/media/103928_634c6943f0ea43dda1b2a32d3d8b2403~mv2.jpg",
    subject: "Student Council Election & Leadership",
    intendedSection: "Life at AFS: Student Leadership",
    caption: "Student Council",
    altText: "Democratically elected student council representatives with certificates",
    dimensions: { width: 1600, height: 765 },
    type: "image"
  },
  {
    id: "blank4-video-student",
    sourcePage: "blank-4",
    sourceUri: "103928_c8162733b9ae42a9a9645c2f43e6780a",
    cdnUrl: "https://video.wixstatic.com/video/103928_c8162733b9ae42a9a9645c2f43e6780a/1080p/mp4/file.mp4",
    posterUrl: "https://static.wixstatic.com/media/103928_c8162733b9ae42a9a9645c2f43e6780af000.jpg",
    subject: "Student Testimonial Video",
    intendedSection: "Life at AFS: Community Voices & Home Preview",
    caption: "Student Testimonial",
    altText: "Student sharing her experience living and learning at AFS",
    dimensions: { width: 1920, height: 1080 },
    type: "video"
  },
  {
    id: "blank4-video-teacher",
    sourcePage: "blank-4",
    sourceUri: "103928_819216b2be9d485bb83e66974b37c826",
    cdnUrl: "https://video.wixstatic.com/video/103928_819216b2be9d485bb83e66974b37c826/1080p/mp4/file.mp4",
    posterUrl: "https://static.wixstatic.com/media/103928_819216b2be9d485bb83e66974b37c826f000.jpg",
    subject: "Teacher Testimonial Video",
    intendedSection: "Life at AFS: Community Voices",
    caption: "Teacher Testimonial",
    altText: "Teacher reflecting on professional growth and student care at AFS",
    dimensions: { width: 1920, height: 1080 },
    type: "video"
  },
  {
    id: "getinvolved-hero",
    sourcePage: "get-involved",
    sourceUri: "103928_9b49e53ecd434ea0b813dee0e5705647~mv2.jpeg",
    cdnUrl: "https://static.wixstatic.com/media/103928_9b49e53ecd434ea0b813dee0e5705647~mv2.jpeg",
    subject: "Give the Gift of Learning",
    intendedSection: "Get Involved Hero & Donate",
    caption: "Your Support Builds New Futures",
    altText: "Smiling students of Alpha Friendship School in uniform",
    dimensions: { width: 1280, height: 960 },
    type: "image"
  },
  {
    id: "getinvolved-volunteers",
    sourcePage: "get-involved",
    sourceUri: "103928_e71b2d8a2e744d89a07d649fb0ccd734~mv2.jpg",
    cdnUrl: "https://static.wixstatic.com/media/103928_e71b2d8a2e744d89a07d649fb0ccd734~mv2.jpg",
    subject: "Lend Your Time and Talent (Volunteer)",
    intendedSection: "Get Involved Volunteer",
    caption: "Lend Your Time and Talent",
    altText: "Teachers and mentors collaborating with children",
    dimensions: { width: 3000, height: 1522 },
    type: "image"
  },
  {
    id: "getinvolved-partner",
    sourcePage: "get-involved",
    sourceUri: "103928_8517ca79a1fe4502b3e3c061daf735a1~mv2.jpg",
    cdnUrl: "https://static.wixstatic.com/media/103928_8517ca79a1fe4502b3e3c061daf735a1~mv2.jpg",
    subject: "Partner with Us",
    intendedSection: "Get Involved Partnership",
    caption: "Partner with Us",
    altText: "School staff and partners gathered on campus",
    dimensions: { width: 3280, height: 3472 },
    type: "image"
  }
];
