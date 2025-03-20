'use client';

import Link from 'next/link';

export default function BVAPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Bachelor of Visual Arts (BVA)
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            4-year comprehensive program with foundation studies and specialization options
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
                  The Bachelor of Visual Arts (BVA) is a comprehensive 4-year program spanning 8 semesters, 
                  including 2 semesters of foundational studies and 6 semesters of specialization.
                </p>
                <p>
                  The program is designed to provide students with a strong foundation in visual arts while 
                  allowing them to explore and specialize in their chosen field.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">Course Structure</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Foundation Studies (2 Semesters)</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Drawing Fundamentals</li>
                    <li>Color Theory</li>
                    <li>Art History</li>
                    <li>Basic Design</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Specialization (6 Semesters)</h3>
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
                  Candidates must have completed their 10+2 or equivalent examination from a recognized board.
                </p>
                <p>
                  A portfolio review and entrance examination are part of the selection process.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">How to Apply</h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <Link 
                    href="/pdf/CFA-Prospectus-and-Application.pdf"
                    className="block w-full px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-full hover:bg-[#FFC000] transition-colors text-center"
                  >
                    Download Prospectus and Application Form
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