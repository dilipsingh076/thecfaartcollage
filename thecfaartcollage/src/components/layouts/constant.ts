export const navLinks = [
    { 
      name: 'Home', 
      href: '/',
      color: 'text-orange-500',
      dropdownItems: [
        { name: 'About Us', href: '/about' },
        { name: 'History', href: '/history' },
        { name: 'Vision & Mission', href: '/vision-mission' },
        { name: 'Campus', href: '/campus' },
        { name: 'Gallery', href: '/gallery' }
      ]
    },
    { 
      name: 'Admission', 
      href: '/admission',
      color: 'text-red-500',
      dropdownItems: [
        { name: 'Admission Process', href: '/admission/process' },
        { name: 'Application Form', href: '/admission/form' },
        { name: 'Eligibility Criteria', href: '/admission/eligibility' },
        { name: 'Fee Structure', href: '/admission/fees' },
        { name: 'Scholarships', href: '/admission/scholarships' }
      ]
    },
    { 
      name: 'Departments', 
      href: '/departments',
      color: 'text-blue-600',
      dropdownItems: [
        { name: 'Painting', href: '/departments/painting' },
        { name: 'Sculpture', href: '/departments/sculpture' },
        { name: 'Applied Arts', href: '/departments/applied-arts' },
        { name: 'Art History', href: '/departments/art-history' },
        { name: 'Graphics Design', href: '/departments/graphics-design' },
        { name: 'Animation', href: '/departments/animation' },
        { name: 'Photography', href: '/departments/photography' }
      ]
    },
    { 
      name: 'Events', 
      href: '/events',
      color: 'text-green-600',
      dropdownItems: [
        { name: 'Upcoming Events', href: '/events/upcoming' },
        { name: 'Exhibitions', href: '/events/exhibitions' },
        { name: 'Workshops', href: '/events/workshops' },
        { name: 'Annual Day', href: '/events/annual-day' },
        { name: 'Past Events', href: '/events/past' }
      ]
    },
    { 
      name: 'Contact Us', 
      href: '/contact',
      color: 'text-purple-600',
      dropdownItems: []
    },
  ];