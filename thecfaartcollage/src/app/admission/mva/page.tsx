'use client';

import Link from 'next/link';

export default function MVAPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Master of Visual Arts (MVA)
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            2-year advanced program for specialized study and research in visual arts
          </p>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">Program Overview</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  The Master of Visual Arts (MVA) is a 2-year program divided into 4 semesters, 
                  designed for advanced study and research in Visual Arts.
                </p>
                <p>
                  This program provides an opportunity for in-depth exploration of artistic concepts 
                  and the development of a personal artistic language.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">Course Structure</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Core Components</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Advanced Studio Practice</li>
                    <li>Research Methodology</li>
                    <li>Contemporary Art Theory</li>
                    <li>Professional Practice</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Specialization Options</h3>
                  <p className="text-gray-600 mb-4">
                    Choose from the following specializations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Painting</li>
                    <li>Sculpture</li>
                    <li>Graphic Art</li>
                    <li>Applied Art</li>
                    <li>Art History</li>
                    <li>Animation</li>
                    <li>Ceramics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">Admission Requirements</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Candidates must have completed their BVA or equivalent degree from a recognized institution.
                </p>
                <p>
                  A comprehensive portfolio review and entrance examination are part of the selection process.
                </p>
                <p>
                  Research proposal and statement of purpose are required for admission.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">How to Apply</h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <Link 
                    href="/admission/mva"
                    className="block w-full px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-full hover:bg-[#FFC000] transition-colors text-center"
                  >
                    Download MVA Application Form
                  </Link>
                  <p className="text-gray-600 text-center">
                    Fill out the application form and submit it along with required documents
                  </p>
                </div>
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-[#FFD700]">Phone:</span>
                      <span>+91 63649 17676</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#FFD700]">Email:</span>
                      <span>thecfaadmission@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 