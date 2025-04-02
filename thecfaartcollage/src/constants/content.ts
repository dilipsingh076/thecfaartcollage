export const heroSlides = [
  {
    title: "Art Education Excellence",
    description: "Join our prestigious art college and unlock your creative potential",
    variant: 'paint' as const,
    heroTitle: "Welcome to College of Fine Arts",
    heroDescription: "Established in 1964, we are a premier institution for visual arts education in Bangalore."
  },
  {
    title: "Master Drawing Skills",
    description: "Learn the fundamentals of drawing with expert guidance",
    variant: 'draw' as const,
    heroTitle: "BVA & MVA Programs",
    heroDescription: "4-year BVA and 2-year MVA programs with specialized departments in Painting, Sculpture, Applied Art, and more."
  },
  {
    title: "Sculpture & 3D Art",
    description: "Explore the world of three-dimensional art forms",
    variant: 'sculpture' as const,
    heroTitle: "Admissions Open 2024-25",
    heroDescription: "Join our vibrant community of artists and shape your creative future."
  }
];

export const features = [
  {
    title: "Expert Faculty",
    description: "Learn from experienced artists and educators who are passionate about nurturing talent",
    variant: 'paint' as const
  },
  {
    title: "Modern Facilities",
    description: "Access to state-of-the-art studios, workshops, and exhibition spaces",
    variant: 'draw' as const
  },
  {
    title: "Industry Connections",
    description: "Build your network through our partnerships with leading art institutions and galleries",
    variant: 'sculpture' as const
  },
];

export const departments = [
  {
    title: "BVA Foundation",
    description: "Comprehensive foundation studies for visual arts",
    link: "/departments/bva-foundation"
  },
  {
    title: "Painting",
    description: "Explore various painting techniques and styles",
    link: "/departments/painting"
  },
  {
    title: "Sculpture",
    description: "Master the art of three-dimensional forms",
    link: "/departments/sculpture"
  },
  {
    title: "Graphic Art",
    description: "Learn printmaking and graphic design",
    link: "/departments/graphic-art"
  },
  {
    title: "Applied Art",
    description: "Commercial and applied art practices",
    link: "/departments/applied-art"
  },
  {
    title: "Art History",
    description: "Study the evolution of art through history",
    link: "/departments/art-history"
  },
  {
    title: "Animation",
    description: "Digital and traditional animation techniques",
    link: "/departments/animation"
  },
  {
    title: "Ceramics",
    description: "Explore pottery and ceramic arts",
    link: "/departments/ceramics"
  }
];

export const newsItems = [
  {
    id: "nep-cbcs-results-2025",
    title: "NEP and CBCS Result Jan/Feb-2025",
    date: "February 25, 2025",
    category: "Results",
    description: "Results for NEP and CBCS examinations for January/February 2025 semester are now available. Students can access their results through the official portal.",
    image: "/images/events/results-2025.jpg",
    venue: "College Portal",
    time: "10:00 AM",
    registrationRequired: false,
    registrationLink: null
  },
  {
    id: "drushyotsava-2024",
    title: "Drushyotsava 2024 – Annual Show",
    date: "November 27, 2024",
    category: "Events",
    description: "Join us for our prestigious annual art exhibition showcasing the best works from our students across all departments. The event will feature live demonstrations, workshops, and an awards ceremony.",
    image: "/images/events/drushyotsava-2024.jpg",
    venue: "Main Exhibition Hall",
    time: "9:00 AM - 6:00 PM",
    registrationRequired: true,
    registrationLink: "https://forms.example.com/drushyotsava-2024"
  },
  {
    id: "research-positions-2024",
    title: "Call for Applications: Research Positions",
    date: "November 22, 2024",
    category: "Admissions",
    description: "We are seeking passionate researchers to join our faculty. Positions are available in various departments including Art History, Applied Arts, and Digital Media.",
    image: "/images/events/research-positions.jpg",
    venue: "Online Application",
    time: "Open until filled",
    registrationRequired: true,
    registrationLink: "https://careers.example.com/research-positions"
  }
];

export const contactInfo = {
  address: {
    line1: "College of Fine Arts, Karnataka Chitrakala Parishath",
    line2: "Extended Campus",
    line3: "Dr. Vishnuvardhan Road, Srinivaspura,",
    line4: "Banashankari 6th Stage, Bengaluru – 560 060"
  },
  phone: "+91 63649 17676",
  email: "thecfaadmission@gmail.com"
}; 

export const aboutPageContent = {
  hero: {
    title: "About College of Fine Arts",
    subtitle: "Established in 1964, we are a premier institution for visual arts education in Bangalore",
    // Art college/gallery themed banner image
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2070&auto=format&fit=crop"
  },
  history: {
    title: "Our Rich Legacy",
    content: `Initially founded as "Chitrakala Vidyalaya" under Mysore Pradesh Chitrakala Parishath in 1964, Karnataka Chitrakala Parishath owes its establishment and growth to the visionary efforts of the late Prof. M.S. Nanjunda Rao, the Founder Secretary. In 1983, it attained the status of a Degree College, affiliated to Bangalore University. The institution introduced Post-Graduate Studies in 1990 and it has since evolved to include a research center, providing a Ph.D. program.`,
    // Historical building image
    image: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=2070&auto=format&fit=crop"
  },
  courses: {
    title: "Our Programs",
    content: "The Visual Art Course is spread across B.V.A, 4 years / 8 semesters (2 Semesters of Foundation and 6 Semesters of Specialization), M.V.A, 2 years (Master of Visual Arts) 4 Semesters.",
    // Art studio image
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2070&auto=format&fit=crop"
  },
  departments: {
    title: "Academic Departments",
    list: ["Painting", "Printmaking", "Art History", "Animation"],
    // Department images
    images: {
      painting: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2070&auto=format&fit=crop",
      printmaking: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2160&auto=format&fit=crop",
      artHistory: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2070&auto=format&fit=crop",
      animation: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2070&auto=format&fit=crop"
    }
  },
  // leadership: {
  //   title: "Leadership",
  //   president: {
  //     name: "Dr. B. L. Shankar",
  //     role: "President",
  //     message: "The CFA-CKP, is one of the renowned institutions in the field of fine arts education in India. It has a consistent history of encouraging the theory, practice and display of visual culture, over last five decades...",
  //     // Professional portrait style image
  //     image: "https://thecfa.art/wp-content/uploads/2020/07/president-1.jpg"
  //   }
  // },
  leadership: {
    title: "Leadership",
    president: {
      name: "Dr. B. L. Shankar",
      role: "President",
      message: [
        {
          text: "The CFA-CKP, is one of the renowned institutions in the field of fine arts education in India. It has a consistent history of encouraging the theory, practice and display of visual culture, over last five decades. It is an established cultural landmark and a place for cultural tourism."
        },
        {
          text: "The CFA is attached to a cluster of thirteen museums, with a content of the folk, tribal, traditional, modern and contemporary art works, that reflect the unique character of our institution. There has been constant flow of talented art tutors, artists, curators, critics and philanthropists to the city from various parts of the world."
        },
        {
          text: "Most of them specifically visit to interact with our institution, faculty and art students, thereby providing our students with an exposure to different art styles besides a great opportunity to learn from artists from across the world. The Chitra Santhe, our annual art fair provides the students and staff of CFA, as well as artists and connoisseurs from across the country, a unique opportunity to interact with and to benefit from each other."
        },
        {
          text: "Over time it has become a crucible of art and culture, from where many talented and renowned artists have emerged. They are a testimony to the artistic freedom enjoyed in the classrooms as well as the inspiration provided by the environment around them."
        },
        {
          text: "The CFA prepares the students to boldly face new challenges and explore opportunities beyond the campus as well. The faculty members bring on board their wide ranging experience and exposure to a wide variety of artistic representation, over the decades."
        },
        {
          text: "Professional opportunities for art students have been expanding rapidly. Our students have consistently been attracting good offers from some of the top names in the IT sector, for the past half a decade."
        },
        {
          text: "The CFA is the appropriate place to be in, to pursue visual arts and make a vocation as well as a profession out of it. The personality traits that students develop during their study here, helps them emerge as successful and creative citizens. Our Institution aims at imparting not only the skills for visual art, but also the wisdom and skills for life itself."
        }
      ],
      image: "https://thecfa.art/wp-content/uploads/2020/07/president-1.jpg"
    }
  },
  contact: {
    address: "College of Fine Arts, Karnataka Chitrakala Parishath",
    phone: "+91 63649 17676",
    email: "thecfaadmission@gmail.com"
  },
  executiveMembers: {
    title: "Executive Members",
    members: [
      {
        name: "Dr. Shankar B.L.",
        role: "President"
      },
      {
        name: "Sri Prabhakar T.",
        role: "Vice-President"
      },
      {
        name: "Sri Ramakrishnappa A.",
        role: "Vice-President"
      },
      {
        name: "Prof. Appajaiah K.S.",
        role: "Vice-President"
      },
      {
        name: "Sri Shashidhar S.N.",
        role: "General Secretary"
      },
      {
        name: "Sri Chandrashekar T.",
        role: "Asst- Secretary"
      },
      {
        name: "Sri Srinivasa B.L.",
        role: "Asst- Secretary"
      },
      {
        name: "Dr.Lakshmipathy Babu N.",
        role: "Treasurer"
      }
    ],
    committeeMembers: [
      "Sri Sri Amirtha Vimalanathan S.",
      "Sri Bhandari R.G.",
      "Sri Dinesh Magar P.",
      "Sri Subramanya Kukke",
      "Smt. Tarakeshwari T.V.",
      "Smt. Usha Rani C.P.",
      "Smt. Vinoda B.Y."
    ]
  },

  governingBody: {
    title: "Governing Body",
    members: [
      {
        name: "Dr. Gururaj Karajagi",
        role: "Hon'ble Chairman",
        description: "Educationist",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop"
      },
      {
        name: "Dr. K. Balaveera Reddy",
        role: "Executive Chairman",
        description: "Former Vice Chancellor, VTU",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop"
      },
      {
        name: "Dr. K. R. Venugopal",
        role: "Former Dean",
        description: "Chancellor, Bangalore University",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop"
      },
      {
        name: "Dr. B. L. Shankar",
        role: "President",
        description: "",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop"
      },
      {
        name: "Sri. Shashidhar. S. N",
        role: "General Secretary",
        description: "",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop"
      },
      {
        name: "Dr. Lakshmipathy Babu. N",
        role: "Treasurer",
        description: "",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop"
      },
      {
        name: "Prof. K.S. Appajaiah",
        role: "Former Principal",
        description: "CFA and Vice President, Karnataka Chitrakala Parishath",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop"
      },
      {
        name: "Dr. Choodamani Nandagopal",
        role: "Former Dean",
        description: "Jain University, UNESCO Scholar & Eminent Art Historian",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop"
      },
      {
        name: "Sri. Manmohan Anchan",
        role: "CFA Alumni",
        description: "Industry Expert",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop"
      },
      {
        name: "Dr. Gomathi Gowda",
        role: "Principal",
        description: "College of Fine Arts",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop"
      },
      {
        name: "Dr. R. H. Kulkarni",
        role: "Head of the Department",
        description: "Department of Art History",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop"
      },
      {
        name: "Dr. Jagan Mohan",
        role: "Head of the Department",
        description: "Department of Animation",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop"
      },
      {
        name: "Prof. Ramesh Chandra",
        role: "Invitee",
        description: "Former Principal, Acharya College of Design",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop"
      },
      {
        name: "Sri. Ravikumar Kashi",
        role: "Invitee",
        description: "Eminent Artist and Art Educationist",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop"
      },
      {
        name: "Sri. Vimalanathan. A",
        role: "Invitee",
        description: "College of Fine Arts – Alumni, Eminent Artist and EC Member Karnataka Chitrakala Parishath",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop"
      },
      {
        name: "Smt. Lalithamba",
        role: "Superintendent",
        description: "College of Fine Arts",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  },
  infrastructure: {
    title: "Our Infrastructure",
    images: [
      {
        src: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3",
        alt: "Art Studio",
        title: "Modern Art Studios"
      },
      {
        src: "https://images.unsplash.com/photo-1544531585-9847b68c8c86",
        alt: "Library",
        title: "Well-Equipped Library"
      },
      {
        src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
        alt: "Exhibition Hall",
        title: "Exhibition Spaces"
      },
      {
        src: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
        alt: "Computer Lab",
        title: "Digital Art Labs"
      }
    ]
  }
};