'use client';

import { useParams } from 'next/navigation';

const departmentDetails = {
  'bva-foundation': {
    title: 'BVA Foundation',
    description: 'Foundation studies in visual arts for first-year students',
    content: 'The BVA Foundation program provides a comprehensive introduction to visual arts, covering fundamental concepts, techniques, and practices. Students develop essential skills in drawing, color theory, and art history.',
    faculty: 'Led by experienced artists and educators',
    duration: '1 year',
    courses: [
      'Drawing Fundamentals',
      'Color Theory',
      'Art History',
      'Basic Design',
      'Visual Communication'
    ]
  },
  'painting': {
    title: 'Painting',
    description: 'Explore various painting techniques and styles',
    content: 'The Painting department offers intensive training in various painting techniques, from traditional to contemporary approaches. Students develop their unique artistic voice while mastering different mediums.',
    faculty: 'Experienced painters and art educators',
    duration: '3 years',
    courses: [
      'Oil Painting',
      'Watercolor',
      'Acrylic Painting',
      'Mixed Media',
      'Contemporary Painting'
    ]
  },
  'sculpture': {
    title: 'Sculpture',
    description: 'Learn three-dimensional art forms and techniques',
    content: 'The Sculpture department focuses on three-dimensional art forms, teaching students to work with various materials and techniques. Students learn to create both traditional and contemporary sculptures.',
    faculty: 'Professional sculptors and artists',
    duration: '3 years',
    courses: [
      'Clay Modeling',
      'Metal Sculpture',
      'Wood Carving',
      'Installation Art',
      'Contemporary Sculpture'
    ]
  },
  'graphic-art': {
    title: 'Graphic Art',
    description: 'Digital and traditional graphic design',
    content: 'The Graphic Art department combines traditional art principles with digital technology. Students learn to create compelling visual communications for various media platforms.',
    faculty: 'Graphic designers and digital artists',
    duration: '3 years',
    courses: [
      'Digital Design',
      'Typography',
      'Branding',
      'UI/UX Design',
      'Motion Graphics'
    ]
  },
  'applied-art': {
    title: 'Applied Art',
    description: 'Commercial and applied art practices',
    content: 'The Applied Art department focuses on commercial art applications, preparing students for careers in advertising, illustration, and design industries.',
    faculty: 'Industry professionals and artists',
    duration: '3 years',
    courses: [
      'Commercial Illustration',
      'Advertising Design',
      'Package Design',
      'Print Media',
      'Digital Marketing'
    ]
  },
  'art-history': {
    title: 'Art History',
    description: 'Study of art history and theory',
    content: 'The Art History department provides comprehensive knowledge of art history, theory, and criticism. Students develop critical thinking and research skills.',
    faculty: 'Art historians and researchers',
    duration: '3 years',
    courses: [
      'Ancient Art',
      'Modern Art',
      'Contemporary Art',
      'Art Criticism',
      'Research Methodology'
    ]
  },
  'animation': {
    title: 'Animation',
    description: 'Digital animation and motion graphics',
    content: 'The Animation department teaches students to create engaging animated content using both traditional and digital techniques.',
    faculty: 'Animation professionals and artists',
    duration: '3 years',
    courses: [
      '2D Animation',
      '3D Animation',
      'Character Design',
      'Storyboarding',
      'Motion Graphics'
    ]
  },
  'ceramics': {
    title: 'Ceramics',
    description: 'Ceramic art and pottery',
    content: 'The Ceramics department focuses on creating functional and artistic ceramic works, teaching various techniques and firing methods.',
    faculty: 'Ceramic artists and potters',
    duration: '3 years',
    courses: [
      'Hand Building',
      'Wheel Throwing',
      'Glazing Techniques',
      'Kiln Firing',
      'Ceramic Sculpture'
    ]
  }
};

export default function DepartmentPage() {
  const params = useParams();
  const department = params.department as string;
  const details = departmentDetails[department as keyof typeof departmentDetails];

  if (!details) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Department Not Found</h1>
          <p className="text-gray-600">The requested department does not exist.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            {details.title}
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            {details.description}
          </p>
        </div>
      </section>

      {/* Department Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">About the Department</h2>
                  <p className="text-gray-600">{details.content}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Program Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900">Faculty</h3>
                      <p className="text-gray-600">{details.faculty}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Duration</h3>
                      <p className="text-gray-600">{details.duration}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Courses Offered</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {details.courses.map((course, index) => (
                      <li key={index}>{course}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 