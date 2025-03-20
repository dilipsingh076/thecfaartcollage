'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

const courseDetails = {
  'drawing': {
    title: 'Drawing Fundamentals',
    description: 'Learn the basics of drawing with focus on perspective, shading, and composition',
    duration: '3 months',
    schedule: 'Weekends',
    fee: '₹15,000',
    content: 'This comprehensive course covers essential drawing techniques and principles. Students will learn about line, form, perspective, shading, and composition through practical exercises and projects.',
    topics: [
      'Basic drawing tools and materials',
      'Line and contour drawing',
      'Perspective drawing',
      'Light and shadow',
      'Composition principles',
      'Figure drawing basics',
      'Still life drawing'
    ],
    requirements: [
      'No prior experience required',
      'Basic drawing materials will be provided',
      'Students should bring their own sketchbook'
    ]
  },
  'painting': {
    title: 'Painting Techniques',
    description: 'Explore various painting mediums including watercolor, acrylic, and oil',
    duration: '3 months',
    schedule: 'Weekends',
    fee: '₹20,000',
    content: 'This course introduces students to various painting mediums and techniques. Students will learn to work with watercolor, acrylic, and oil paints while developing their artistic style.',
    topics: [
      'Color theory and mixing',
      'Watercolor techniques',
      'Acrylic painting methods',
      'Oil painting basics',
      'Brushwork and texture',
      'Composition in painting',
      'Still life and landscape painting'
    ],
    requirements: [
      'Basic drawing skills recommended',
      'Painting materials will be provided',
      'Students should bring their own canvas/paper'
    ]
  },
  'sculpture': {
    title: 'Sculpture Basics',
    description: 'Introduction to three-dimensional art with clay modeling and basic sculpting',
    duration: '3 months',
    schedule: 'Weekends',
    fee: '₹25,000',
    content: 'This course introduces students to three-dimensional art forms through various sculpting techniques and materials. Students will learn to create both functional and artistic sculptures.',
    topics: [
      'Clay modeling techniques',
      'Armature building',
      'Surface treatment',
      'Basic casting methods',
      'Found object sculpture',
      'Relief sculpture',
      'Installation art basics'
    ],
    requirements: [
      'No prior experience required',
      'Basic tools will be provided',
      'Students should bring their own apron'
    ]
  },
  'digital-art': {
    title: 'Digital Art',
    description: 'Learn digital art creation using industry-standard software',
    duration: '3 months',
    schedule: 'Weekends',
    fee: '₹30,000',
    content: 'This course teaches students to create digital art using industry-standard software. Students will learn about digital drawing, painting, and basic animation techniques.',
    topics: [
      'Digital drawing fundamentals',
      'Photoshop basics',
      'Illustrator basics',
      'Digital painting techniques',
      'Color management',
      'Basic animation',
      'Digital portfolio creation'
    ],
    requirements: [
      'Basic computer skills required',
      'Students should have their own laptop',
      'Software licenses will be provided'
    ]
  },
  'printmaking': {
    title: 'Printmaking',
    description: 'Explore various printmaking techniques including etching and screen printing',
    duration: '3 months',
    schedule: 'Weekends',
    fee: '₹25,000',
    content: 'This course introduces students to various printmaking techniques and processes. Students will learn to create prints using different methods and materials.',
    topics: [
      'Relief printing',
      'Etching basics',
      'Screen printing',
      'Monoprinting',
      'Collagraphy',
      'Print composition',
      'Edition printing'
    ],
    requirements: [
      'Basic drawing skills recommended',
      'Printmaking materials will be provided',
      'Students should bring their own apron'
    ]
  },
  'art-history': {
    title: 'Art History',
    description: 'Comprehensive overview of art history from ancient to contemporary times',
    duration: '3 months',
    schedule: 'Weekends',
    fee: '₹15,000',
    content: 'This course provides a comprehensive overview of art history, from ancient civilizations to contemporary art movements. Students will develop critical thinking and analytical skills.',
    topics: [
      'Ancient art and architecture',
      'Medieval and Renaissance art',
      'Baroque and Rococo',
      'Modern art movements',
      'Contemporary art',
      'Art criticism',
      'Research methods'
    ],
    requirements: [
      'No prior experience required',
      'Course materials will be provided',
      'Students should bring their own notebook'
    ]
  }
};

export default function CoursePage() {
  const params = useParams();
  const course = params.course as string;
  const details = courseDetails[course as keyof typeof courseDetails];

  if (!details) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600">The requested course does not exist.</p>
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

      {/* Course Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">About the Course</h2>
                  <p className="text-gray-600">{details.content}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Course Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900">Duration</h3>
                      <p className="text-gray-600">{details.duration}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Schedule</h3>
                      <p className="text-gray-600">{details.schedule}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Course Fee</h3>
                      <p className="text-gray-600">{details.fee}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Topics Covered</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {details.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {details.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center">
                  <Link
                    href={`/admission/short-term/${course}/apply`}
                    className="px-8 py-3 bg-[#FFD700] text-black font-semibold rounded-full hover:bg-[#FFC000] transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
            <p className="text-gray-600 mb-8">
              Contact us for more information about this course and the enrollment process.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">
                <span className="font-semibold">Phone:</span> +91 1234567890
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span> courses@thecfa.art
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 