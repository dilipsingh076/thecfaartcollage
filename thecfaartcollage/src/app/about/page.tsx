'use client';

import { aboutPageContent } from '@/src/constants/content';
import Image from 'next/image';
import Link from 'next/link';


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <Image
          src={aboutPageContent.hero.image}
          // Alternative options if you prefer:
          alt="CFA Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 flex flex-col justify-center items-center container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
            {aboutPageContent.hero.title}
          </h1>
          <p className="text-xl text-gray-200 text-center max-w-3xl mx-auto">
            {aboutPageContent.hero.subtitle}
          </p>
        </div>
      </section>
      {/* Content Sections */}
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
            {/* History Section - Improved */}

            <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-8">
                <div className="inline-block">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{aboutPageContent.history.title}</h2>
                  <div className="h-1 w-20 bg-red-500"></div>
                </div>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="leading-relaxed">{aboutPageContent.history.content}</p>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden group">
                <Image
                  src={aboutPageContent.history.image}
                  alt="College History"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              
            </div>

            {/* Leadership Section - Redesigned */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Leadership</h2>
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* President's Image Column */}
                  <div className="lg:col-span-1">
                    <div className="space-y-4">
                      <div className="relative h-[400px] rounded-xl overflow-hidden">
                        <Image
                          src={aboutPageContent.leadership.president.image}
                          alt={aboutPageContent.leadership.president.name}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-2xl font-bold">{aboutPageContent.leadership.president.name}</h3>
                        <p className="text-red-500 font-medium text-lg">{aboutPageContent.leadership.president.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* President's Message Column */}
                  <div className="lg:col-span-2">
                    <div className="space-y-6">
                      <div className="inline-block">
                        <h3 className="text-2xl font-bold mb-2">Message from the President</h3>
                        <div className="h-1 w-20 bg-red-500"></div>
                      </div>

                      <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                        {aboutPageContent.leadership.president.message.map((paragraph, index) => (
                          <p key={index}>
                            {paragraph.text}
                          </p>
                        ))}
                      </div>

                      {/* Signature */}
                      <div className="pt-4 flex items-center space-x-4">
                        <div className="flex-1 border-t border-gray-200"></div>
                        <div className="text-gray-500 italic text-sm">Dr. B. L. Shankar</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            {/* Executive Members Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">{aboutPageContent.executiveMembers.title}</h2>

                {/* Core Members */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {aboutPageContent.executiveMembers.members.map((member, index) => (
                    <div key={index} className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                      <p className="text-red-500">{member.role}</p>
                    </div>
                  ))}
                </div>

                {/* Committee Members */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Committee Members</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {aboutPageContent.executiveMembers.committeeMembers.map((member, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg text-gray-700">
                        {member}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Governing Body Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="inline-block mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{aboutPageContent.governingBody.title}</h2>
                  <div className="h-1 w-20 bg-red-500"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {aboutPageContent.governingBody.members.map((member, index) => (
                    <div
                      key={index}
                      className="flex space-x-4 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-gray-50 items-end"
                    >
                      <div className="flex-shrink-0">
                        {/* Profile Image */}
                        <div className="relative w-28 h-32 rounded-lg overflow-hidden">
                          <Image
                            src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=f43f5e&color=fff&size=200`}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {/* Number Badge */}
                        <div className="absolute -top-2 -left-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                          {(index + 1).toString().padStart(2, '0')}
                        </div>
                      </div>

                      <div className="flex-grow space-y-2">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 leading-tight">
                            {member.name}
                          </h3>
                          <p className="text-red-500 font-medium text-sm">
                            {member.role}
                          </p>
                        </div>
                        {member.description && (
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {member.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Infrastructure Gallery Section */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">{aboutPageContent.infrastructure.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutPageContent.infrastructure.images.map((image, index) => (
                  <div key={index} className="group relative h-80 rounded-xl overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white">{image.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Programs Section - New */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Programs</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="relative h-[250px] rounded-xl overflow-hidden">
                      <Image
                        src={aboutPageContent.courses.image}
                        alt="Art Programs"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      {aboutPageContent.courses.content}
                    </p>
                    <Link
                      href="/programs"
                      className="inline-flex items-center text-red-500 hover:text-red-600"
                    >
                      Learn more about our programs
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Departments Section - New */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Academic Departments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutPageContent.departments.list.map((dept) => {
                  // Create the image key properly
                  const imageKey = dept.toLowerCase().replace(/\s+/g, '') as keyof typeof aboutPageContent.departments.images;
                  const imageUrl = aboutPageContent.departments.images[imageKey];

                  return (
                    <div key={dept} className="bg-white rounded-xl overflow-hidden shadow-lg group">
                      <div className="relative h-64 md:h-72">
                        <Image
                          src={imageUrl}
                          alt={dept}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-2xl font-bold text-white mb-2">{dept}</h3>
                          <p className="text-gray-200 line-clamp-2">
                            Explore our comprehensive curriculum and facilities in {dept.toLowerCase()}.
                          </p>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-center">
                          <Link
                            href={`/departments/${dept.toLowerCase()}`}
                            className="inline-flex items-center text-red-500 hover:text-red-600 font-medium"
                          >
                            Learn more about {dept}
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Stats Section - New */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-500">1964</div>
                  <div className="text-gray-600 mt-2">Established</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-500">500+</div>
                  <div className="text-gray-600 mt-2">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-500">50+</div>
                  <div className="text-gray-600 mt-2">Faculty Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-500">4</div>
                  <div className="text-gray-600 mt-2">Departments</div>
                </div>
              </div>
            </div>


          </div>
        </div>


        {/* Chitrasanthe Welcome Banner */}
        <section className="py-12 bg-[#963B25] relative mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center text-white space-y-4">
              <div className="max-w-3xl">
                <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                  Welcomes you to 22nd chitrasanthe, to be held on{' '}
                  <span className="block mt-1">
                    Sunday, 05.01.2025
                  </span>
                </h2>
              </div>

              <Link
                href="/registration"
                className="inline-block px-6 py-3 bg-[#FFC107] text-black font-bold text-lg rounded-lg hover:bg-[#FFD54F] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Artist Registration
              </Link>
            </div>
          </div>

          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
        </section>
      </section>


    </main>
  );
} 