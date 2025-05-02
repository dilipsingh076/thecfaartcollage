'use client';

import { ChitrasantheBanner, ErrorMessage, GallerySection, LoadingSpinner } from '@/src/components/common';
import { API_BASE_URL } from '@/src/config/api.config';
import { aboutPageContent } from '@/src/constants/content';
import ImageViewer from '@/src/components/common/ImageViewer';

import Link from 'next/link';
import { MDXProvider } from '@mdx-js/react';
import { processMarkdownContent } from '@/src/utils/content.utils';
import { useAboutData } from '@/src/hooks';
import { useState } from 'react';

// Define type for gallery conversion
type GalleryItem = {
  title: string;
  category: string;
  thumbImg: string;
  largeImg: string;
};

// Define type for history image
type HistoryImage = {
  content: string;
  image: string;
};

// Function to convert gallery items to the format expected by GallerySection
const convertGalleryToGalleryImages = (galleryItems: GalleryItem[]) => {
  return galleryItems.map((item, index) => ({
    id: index + 1,
    title: item.title,
    category: item.category,
    imageUrl: item.largeImg,
    thumbnailUrl: item.thumbImg
  }));
};

// Helper function to safely construct API image URL
const getApiImageUrl = (path: string | null | undefined): string | null => {
   console.log("check path before", path, API_BASE_URL);

  if (!path || !API_BASE_URL) return null;
  console.log("check path", path);
  return `${API_BASE_URL}/${path}`;
};

export default function AboutPage() {
  const { data: aboutData, isLoading, error, refetch } = useAboutData();  
  // Use API data if available, otherwise fall back to static content
  const heroTitle = aboutData?.banner?.name || aboutPageContent.hero.title;
  const heroSubtitle = aboutData?.banner?.banner_txt || aboutPageContent.hero.subtitle;
  const heroImage = `${API_BASE_URL}/${aboutData?.banner?.banner_img}`
  
  const historyContent = aboutData?.section_1?.content;
  const historyImage = `${API_BASE_URL}/${aboutData?.section_1?.image}`
  
  // Get the history images array from the API
  const historyImages = (aboutData?.section_1_img || []) as HistoryImage[];
  
  // State for the image viewer modal
  const [selectedHistoryImage, setSelectedHistoryImage] = useState<HistoryImage | null>(null);
  
  // Handle image click to open full-screen viewer
  const handleHistoryImageClick = (image: HistoryImage) => {
    setSelectedHistoryImage(image);
  };

  // Close the full-screen viewer
  const closeHistoryImageViewer = () => {
    setSelectedHistoryImage(null);
  };
  
  const presidentName = aboutData?.president_message?.content ? "Dr. B. L. Shankar" : aboutPageContent.leadership.president.name;
  const presidentRole = "President";
  const presidentImage = getApiImageUrl(aboutData?.president_message?.image) || aboutPageContent.leadership.president.image;
  
  // Parse president message from API if available
  const presidentMessage = aboutData?.president_message?.content;

  
  // Use executive members from API if available
  const executiveMembers = aboutData?.["Executive Members"] || [];
  const committeeMembers = aboutData?.["Committee Members"] || [];
  const governingBodyMembers = aboutData?.["Governing Body"] || [];
  // Define the type for executive members
  type ExecutiveMember = {
    name: string;
    designation?: string;
    role?: string;
    image?: string;
  };
  
  // Use departments from API if available
  const departments = aboutData?.departments || aboutPageContent.departments.list.map(name => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    snippet: `Explore our comprehensive curriculum and facilities in ${name.toLowerCase()}.`,
    image: aboutPageContent.departments.images[name.toLowerCase().replace(/\s+/g, '') as keyof typeof aboutPageContent.departments.images] || null,
    icon: ''
  }));

  // Get gallery images from API and convert them to the required format
  const apiGalleryImages = aboutData?.gallery || [];
  const convertedGalleryImages = convertGalleryToGalleryImages(apiGalleryImages as GalleryItem[]);

  // If loading, show a loading spinner
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" color="#963B25" />
      </div>
    );
  }
  
  // If there's an error, show an error message with a retry button
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <ErrorMessage error={error} retry={refetch} />
        </div>
      </div>
    );
  }
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full">
        <img
          src={heroImage}
          alt="CFA Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/70" />
        <div className="absolute inset-0 flex flex-col justify-center items-center container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-center">
            {heroTitle}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 text-center max-w-2xl sm:max-w-3xl mx-auto px-4">
            {heroSubtitle}
          </p>
        </div>
      </section>
      
      {/* Content Sections */}
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-4">
          <div className="max-w-8xl space-y-12 md:space-y-16">
            {/* History Section - Improved */}
            <div className="space-y-6">
              <div className="mb-16 text-center">
                <div className="inline-block">
                  <div className="flex items-center gap-3 mb-4 justify-center">
                    <div className="h-[1px] w-12 bg-blue-600"></div>
                    <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">
                      History
                    </span>
                    <div className="h-[1px] w-12 bg-blue-600"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    {aboutPageContent.history.title}
                  </h2>
                  <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-8">
                  <div className="prose prose-lg max-w-none text-gray-600">
                    {historyContent ? (
                      <MDXProvider>
                        <div dangerouslySetInnerHTML={{ __html: processMarkdownContent(historyContent) }} />
                      </MDXProvider>
                    ) : (
                      <p className="leading-relaxed">{aboutPageContent.history.content}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-4 h-full">
                  {historyImages.length > 0 ? (
                    <>
                      {/* First image - larger and spans full width */}
                      {historyImages.length > 0 && (
                        <div 
                          className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden group cursor-pointer"
                          onClick={() => handleHistoryImageClick(historyImages[0])}
                        >
                          <img
                            src={`${API_BASE_URL}/${historyImages[0].image}`}
                            alt={historyImages[0].content || "College History"}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                          {/* <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="text-white text-sm font-medium">{historyImages[0].content}</p>
                          </div> */}
                        </div>
                      )}
                      
                      {/* Remaining images in a single row */}
                      {historyImages.length > 1 && (
                        <div className="grid grid-cols-3 gap-4">
                          {historyImages.slice(1, 4).map((img: HistoryImage, index: number) => (
                            <div 
                              key={index} 
                              className="relative h-[150px] sm:h-[180px] rounded-xl overflow-hidden group cursor-pointer"
                              onClick={() => handleHistoryImageClick(img)}
                            >
                              <img
                                src={`${API_BASE_URL}/${img.image}`}
                                alt={img.content || "College History"}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                              {/* <div className="absolute bottom-0 left-0 right-0 p-2">
                                <p className="text-white text-xs font-medium truncate">{img.content}</p>
                              </div> */}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div 
                      className="relative h-[300px] sm:h-[400px] md:h-full rounded-xl overflow-hidden group cursor-pointer"
                      onClick={() => handleHistoryImageClick({ content: "College History", image: aboutData?.section_1?.image || "" })}
                    >
                      <img
                        src={historyImage}
                        alt="College History"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* History Image Viewer */}
            <ImageViewer
              isOpen={!!selectedHistoryImage}
              onClose={closeHistoryImageViewer}
              imageUrl={selectedHistoryImage ? `${API_BASE_URL}/${selectedHistoryImage.image}` : ''}
              imageAlt={selectedHistoryImage?.content || "College History"}
              imageTitle={selectedHistoryImage?.content || "College History"}
            />

            {/* Leadership Section - Redesigned */}
            <div className="space-y-6">
              <div className="mb-16 text-center">
                <div className="inline-block">
                  <div className="flex items-center gap-3 mb-4 justify-center">
                    <div className="h-[1px] w-12 bg-blue-600"></div>
                    <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">
                      Leadership
                    </span>
                    <div className="h-[1px] w-12 bg-blue-600"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    College Leadership
                  </h2>
                  <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
                </div>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                {/* President's Image Column */}
                <div className="lg:col-span-1">
                  <div className="space-y-4">
                    <div className="relative h-[500px] rounded-xl overflow-hidden">
                      <img
                        src={presidentImage || ''}
                        alt={presidentName}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold">{presidentName}</h3>
                      <p className="text-red-500 font-medium text-lg">{presidentRole}</p>
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
                      {presidentMessage ? (
                        <MDXProvider>
                          <div dangerouslySetInnerHTML={{ __html: processMarkdownContent(presidentMessage) }} />
                        </MDXProvider>
                      ) : (
                        <p>No message available from the president at this time.</p>
                      )}
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

            {/* Executive Members Section */}
            <div className="space-y-6">
              <div className="mb-16 text-center">
                <div className="inline-block">
                  <div className="flex items-center gap-3 mb-4 justify-center">
                    <div className="h-[1px] w-12 bg-blue-600"></div>
                    <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">
                      Executive Members
                    </span>
                    <div className="h-[1px] w-12 bg-blue-600"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    {aboutPageContent.executiveMembers.title}
                  </h2>
                  <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
                </div>
              </div>

              {/* Executive Members - Enhanced Card Design with 3D effects */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {executiveMembers.map((member, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 relative border-t-4 border-blue-600"
                  >
                    <div className="p-6">
                      {/* Member Number */}
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mr-3">
                          {index + 1}
                        </div>
                        <div className="h-px flex-grow bg-blue-200"></div>
                      </div>
                      
                      {/* Member Info */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {(member as ExecutiveMember).name || 'Executive Member'}
                        </h3>
                        <p className="text-blue-700 font-medium">
                          {(member as ExecutiveMember).designation || (member as ExecutiveMember).role || 'Executive Member'}
                        </p>
                      </div>
                      
                      {/* Simple decorative line */}
                      <div className="mt-auto pt-2">
                        <div className="h-1 w-16 bg-blue-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Committee Members */}
              <div className="mt-12">
                <div className="mb-16 text-center">
                  <div className="inline-block">
                    <div className="flex items-center gap-3 mb-4 justify-center">
                      <div className="h-[1px] w-12 bg-blue-600"></div>
                      <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">
                        Committee Members
                      </span>
                      <div className="h-[1px] w-12 bg-blue-600"></div>
                    </div>
                    {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                      Committee Members
                    </h2> */}
                    {/* <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div> */}
                  </div>
                </div>
                
                {/* Committee Members - Simple Clean List */}
                <div className="max-w-5xl mx-auto">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-red-100">
                    {/* Simple header */}
                    <div className="bg-red-500 py-4 px-6 text-white">
                      <h3 className="text-xl font-bold">Committee Members</h3>
                    </div>
                    
                    {/* Simple two-column layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-red-100">
                      <div className="divide-y divide-red-100">
                        {committeeMembers.slice(0, Math.ceil(committeeMembers.length/2)).map((member, index) => (
                          <div 
                            key={index} 
                            className={`p-4 ${index % 2 === 0 ? 'bg-red-50' : 'bg-white'} hover:bg-red-100 transition-colors duration-200`}
                          >
                            <div className="flex items-center">
                              {/* Simple numbered list */}
                              <div className="mr-3 font-bold text-red-500 w-6 text-center">
                                {index + 1}.
                              </div>
                              
                              {/* Member Info */}
                              <div>
                                <h4 className="font-semibold text-gray-900">{member.name}</h4>
                                <p className="text-sm text-red-600">{member.designation}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="divide-y divide-red-100">
                        {committeeMembers.slice(Math.ceil(committeeMembers.length/2)).map((member, index) => (
                          <div 
                            key={index}
                            className={`p-4 ${index % 2 === 0 ? 'bg-red-50' : 'bg-white'} hover:bg-red-100 transition-colors duration-200`}
                          >
                            <div className="flex items-center">
                              {/* Simple numbered list continuation */}
                              <div className="mr-3 font-bold text-red-500 w-6 text-center">
                                {index + Math.ceil(committeeMembers.length/2) + 1}.
                              </div>
                              
                              {/* Member Info */}
                              <div>
                                <h4 className="font-semibold text-gray-900">{member.name}</h4>
                                <p className="text-sm text-red-600">{member.designation}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Governing Body Section */}
            <div className="space-y-6">
              <div className="mb-16 text-center">
                <div className="inline-block">
                  <div className="flex items-center gap-3 mb-4 justify-center">
                    <div className="h-[1px] w-12 bg-blue-600"></div>
                    <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">
                      Governing Body
                    </span>
                    <div className="h-[1px] w-12 bg-blue-600"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    {aboutPageContent.governingBody.title}
                  </h2>
                  <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
                </div>
              </div>

              {/* Governing Body - Simple Table Style */}
              <div className="max-w-5xl mx-auto">
                <div className="bg-white overflow-hidden rounded-xl shadow-md border border-amber-200">
                  {/* Simple header */}
                  <div className="bg-amber-500 py-4 px-6 text-white">
                    <h3 className="text-xl font-bold">Governing Body Members</h3>
                  </div>
                  
                  {/* Simple table layout */}
                  <div>
                    <table className="min-w-full divide-y divide-amber-200">
                      <thead className="bg-amber-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-amber-700 uppercase tracking-wider w-16">No.</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-amber-700 uppercase tracking-wider">Name</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-amber-700 uppercase tracking-wider">Designation</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-amber-100">
                        {governingBodyMembers.map((member, index) => (
                          <tr key={index} className="hover:bg-amber-50 transition-colors duration-200">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold">
                                {index + 1}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{member.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-amber-700">{member.designation}</div>
                              {member.message && (
                                <p className="text-xs text-gray-500 mt-1 italic">&ldquo;{member.message}&rdquo;</p>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/*GallerySection */}
              <GallerySection images={convertedGalleryImages} />

            {/* Departments Section - New */}
            <div className="space-y-6">
              <div className="mb-16 text-center">
                <div className="inline-block">
                  <div className="flex items-center gap-3 mb-4 justify-center">
                    <div className="h-[1px] w-12 bg-blue-600"></div>
                    <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">
                      Departments
                    </span>
                    <div className="h-[1px] w-12 bg-blue-600"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Academic Departments
                  </h2>
                  <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {departments.map((dept) => {
                  // Create the image key properly
                  const imageKey = dept.name.toLowerCase().replace(/\s+/g, '') as keyof typeof aboutPageContent.departments.images;
                  const imageUrl = getApiImageUrl(dept.image) || aboutPageContent.departments.images[imageKey];

                  return (
                    <div key={dept.name} className="bg-white rounded-xl overflow-hidden shadow-lg group">
                      <div className="relative h-64 md:h-72">
                        {imageUrl && (
                          <img
                            src={imageUrl}
                            alt={dept.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-2xl font-bold text-white mb-2">{dept.name}</h3>
                          {/* <div className="text-gray-200 line-clamp-2">
                            <MDXProvider>
                              <div dangerouslySetInnerHTML={{ __html: processMarkdownContent(dept.snippet) }} />
                            </MDXProvider>
                          </div> */}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-center">
                          <Link
                            href={`/departments/${dept.slug}`}
                            className="inline-flex items-center text-red-500 hover:text-red-600 font-medium"
                          >
                            Learn more about {dept.name}
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
        <ChitrasantheBanner />
      </section>


    </main>
  );
} 