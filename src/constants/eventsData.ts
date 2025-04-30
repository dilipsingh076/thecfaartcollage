export interface Event {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
  location: string;
  time?: string;
  link?: string;
  isUpcoming: boolean;
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Annual Art Exhibition 2024',
    date: 'April 5, 2024',
    category: 'Exhibition',
    description: 'Join us for our prestigious annual art exhibition showcasing the creative excellence of our students.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    location: 'Main Gallery Hall',
    time: '10:00 AM - 6:00 PM',
    isUpcoming: true
  },
  {
    id: '2',
    title: 'Digital Art Workshop',
    date: 'April 15, 2024',
    category: 'Workshop',
    description: 'A hands-on workshop exploring the latest digital art techniques and tools.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop',
    location: 'Digital Art Lab',
    time: '2:00 PM - 5:00 PM',
    isUpcoming: true
  },
  {
    id: '3',
    title: 'Art History Symposium',
    date: 'March 15, 2024',
    category: 'Academic',
    description: 'Leading art historians discuss contemporary trends in art history.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    location: 'Auditorium',
    time: '11:00 AM - 4:00 PM',
    isUpcoming: false
  },
  {
    id: '4',
    title: 'Student Portfolio Showcase',
    date: 'April 20, 2024',
    category: 'Exhibition',
    description: 'Graduating students present their final portfolios to industry professionals and art enthusiasts.',
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop',
    location: 'Student Gallery',
    time: '1:00 PM - 7:00 PM',
    isUpcoming: true
  },
  {
    id: '5',
    title: 'Contemporary Art Lecture Series',
    date: 'April 25, 2024',
    category: 'Lecture',
    description: 'A series of lectures exploring contemporary art movements and their influence on modern artistic expression.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    location: 'Lecture Hall 101',
    time: '3:00 PM - 5:00 PM',
    isUpcoming: true
  },
  {
    id: '6',
    title: 'Art & Technology Fusion',
    date: 'May 5, 2024',
    category: 'Workshop',
    description: 'Explore the intersection of traditional art and modern technology in this innovative workshop.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop',
    location: 'Innovation Lab',
    time: '10:00 AM - 2:00 PM',
    isUpcoming: true
  },
  {
    id: '7',
    title: 'Sculpture Exhibition',
    date: 'March 10, 2024',
    category: 'Exhibition',
    description: 'Showcasing contemporary sculptures from our talented students and faculty members.',
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop',
    location: 'Sculpture Garden',
    time: '9:00 AM - 5:00 PM',
    isUpcoming: false
  },
  {
    id: '8',
    title: 'Photography Masterclass',
    date: 'May 15, 2024',
    category: 'Workshop',
    description: 'Learn advanced photography techniques from industry professionals.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    location: 'Photography Studio',
    time: '11:00 AM - 4:00 PM',
    isUpcoming: true
  },
  {
    id: '9',
    title: 'Art Market Day',
    date: 'March 5, 2024',
    category: 'Market',
    description: 'A unique opportunity to purchase artwork directly from our students and alumni.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    location: 'Campus Plaza',
    time: '10:00 AM - 6:00 PM',
    isUpcoming: false
  },
  {
    id: '10',
    title: 'Animation Workshop',
    date: 'May 20, 2024',
    category: 'Workshop',
    description: 'Master the basics of animation in this comprehensive workshop for beginners.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop',
    location: 'Animation Studio',
    time: '2:00 PM - 6:00 PM',
    isUpcoming: true
  }
]; 