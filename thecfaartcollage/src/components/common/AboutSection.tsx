'use client';

import { SixtyYearsLogo } from '../../Images/Icons';
import Link from 'next/link';
import { API_BASE_URL } from '../../config/api.config';

interface AboutSectionProps {
  notifications: {
    title: string;
    content: string;
    date: string;
    link: string;
  }[];
}

const AboutSection = ({ notifications }: AboutSectionProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Logo and Content */}
          <div>
            <div className="flex gap-6 mb-8">
              <SixtyYearsLogo />
              <div className="space-y-1 self-center">
                <h2 className="text-2xl font-bold text-[#38B2AC]">
                  ARTISTIC EXCELLENCE
                </h2>
                <p className="text-lg text-[#38B2AC] font-medium tracking-wide">
                  CULTIVATING STUDENT CREATIVITY
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <div className="text-justify space-y-4">
                <p>
                  The College of Fine Arts has a rich history dating back to 1964 when it was initially established as Chitrakala Vidyalaya under the guidance of Karnataka Chitrakala Parishath. It owes its establishment to Sri M Aryamurthy the Founder President, and led by the visionary leadership of Prof. M.S. Nanjunda Rao, appointed as the Founder Secretary and first Principal. Sri S. S Kukke briefly assumed the role of Principal during the early stages.
                </p>
                <p>
                  In 1983, CFA was elevated to the status of a degree college, offering undergraduate programs. It further expanded its offerings in 1990 to include postgraduate and post-diploma courses. Today, College of Fine Arts stands as a testament to the enduring legacy of its founders and its vibrant community of faculty, staff, students, and alumni in shaping the institution into a renowned center of Artistic excellence.
                </p>
                <p>
                  The College of Fine Arts, Karnataka Chitrakala Parishath, is affiliated with Bangalore University and offers undergraduate and postgraduate programs in Visual Arts. The Bachelor of Visual Arts (BVA) is a comprehensive 4-year program spanning 8 semesters, including 2 semesters of foundational studies and 6 semesters of specialization. The Master of Visual Arts (MVA) is a 2-year program divided into 4 semesters, designed for advanced study and research in Visual arts. 
                </p>
                <p>
                College of Fine Arts, Karnataka Chitrakala Parishath continues to uphold its commitment to nurturing creative talent and advancing the frontiers of art education on both national and international platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Notifications Slider */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden h-[600px]">
            <div className="absolute flex justify-between items-center top-0 left-0 right-0 bg-gradient-to-r from-blue-800 to-blue-600 text-white py-4 px-6 z-10">
              <h3 className="text-2xl font-bold">Notifications</h3>
              <Link 
                href="/notifications" 
                className="bg-white cursor-pointer text-blue-800 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                All Notifications
              </Link>
            </div>
            
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white z-[5]"></div>
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white z-[5]"></div>
            
            <div className="pt-20 pb-6 px-6 h-full overflow-hidden">
              <div className="space-y-4 animate-scroll">
                {[...notifications, ...notifications].map((notification, index) => (
                 <Link target="_blank" key={index} href={`${API_BASE_URL}/${notification.link}`}>
                 <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg border-l-4 border-amber-500 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg text-gray-900">
                        {notification.title}
                      </h4>
                      <span className="text-sm text-blue-600 font-medium">
                        {notification.date}
                      </span>
                    </div>
                    <p className="text-gray-600">{notification.content}</p>
                  </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Academic Structure and Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-800">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Academic Structure</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>B.V.A - 4 years (8 semesters)
                <ul className="pl-6 mt-1 space-y-1 text-gray-500">
                  <li>• 2 Semesters of Foundation</li>
                  <li>• 6 Semesters of Specialization</li>
                </ul>
              </li>
              <li>M.V.A - 2 years (4 semesters)</li>
              <li>Short Term Courses - Basic & Advance
                <ul className="pl-6 mt-1 space-y-1 text-gray-500">
                  <li>•  FUNDAMENTALS OF VISUAL ART</li>
                  <li>• NATURE STUDY</li>
                  <li>• OBJECT STUDY/STILL LIFE STUDY</li>
                  <li>• PRINT MAKING</li>
                  <li>• SCULPTURE</li>

                </ul>
              </li>
              <li>
                Post Diploma
              </li>
              <li>
                Diploma in Animation
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Departments & Activities</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• Painting</li>
                  <li>• Printmaking</li>
                  <li>• Art History</li>
                  <li>• Animation</li>
                </ul>
                <ul className="space-y-2 text-gray-600">
                  <li>• Sculpture</li>
                  <li>• Applied Art</li>
                  <li>• Ceramics</li>
                </ul>
              </div>
              <p className="text-gray-600 mt-4">
                Each department organizes frequent educational excursions that encompass visits to historical monuments, art galleries, museums and industries/corporate sectors. Additionally, students undertake project assignments for internal assessment and internships as part of their academic experience.
              </p>
              <p className="text-gray-600">
                Distinguished visiting scholars, artists and industry experts are regularly invited to engage with students, sharing their insights and expertise through lectures, demonstrations and workshops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 