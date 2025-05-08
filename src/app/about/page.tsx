'use client';

import {  AdmissionsBanner,ChitrasantheBanner, ErrorMessage, GallerySection, LoadingSpinner } from '@/src/components/common';
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
                     Messages
                    </span>
                    <div className="h-[1px] w-12 bg-blue-600"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    From the College Leaders
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
          {/* End President Message */}

            {/* GS Message */}
            <div className="space-y-6">              
              <div className="grid lg:grid-cols-3 gap-8">
                {/* GS's Image Column */}
                <div className="lg:col-span-1">
                  <div className="space-y-4">
                    <div className="relative h-[500px] rounded-xl overflow-hidden">
                      <img
                        src="https://karnatakaindustries.in/uploads/img/misc/GS_Sir_1.png"
                        alt="General Secretary IMg"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold">Sri. Shashidhar Rao S. N</h3>
                      <p className="text-red-500 font-medium text-lg">General Secretary</p>
                    </div>
                  </div>
                </div>

                {/* GS's Message Column */}
                <div className="lg:col-span-2">
                  <div className="space-y-6">
                    <div className="inline-block">
                      <h3 className="text-2xl font-bold mb-2">Message from the General Secretary</h3>
                      <div className="h-1 w-20 bg-blue-500"></div>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                    <p>On behalf of our institution, it gives me great pleasure to welcome you to our thriving community
of artists, designers and creative practitioners.
With a distinguished legacy spanning six decades,
we have established ourselves as a trailblazer in
visual arts education. This prospectus, alongside
our digital platforms, offers an insight into our
vibrant academic environment, exceptional
facilities and dynamic creative culture that bridges
traditional craftsmanship with cutting-edge digital
practices.</p>

<p>Our stimulating environment provides the ideal
foundation for your holistic development as an
artist. Our graduates' strong employment
outcomes testify to the quality of our programmes,
with alumni making their mark across diverse
sectors including arts institutions, advertising,
scientific illustration, medical visualisation,
journalism, cinematography and corporate
creative roles. We regularly host eminent alumni
and industry leaders who provide invaluable networking and mentoring opportunities, while our
faculty of accomplished artists ensures rigorous
training through masterclasses and personalised
tuition that balances technical precision with
conceptual innovation.</p>

<p>Beyond formal instruction, our campus functions
as an active artistic laboratory where students
engage with practicing artists-in-residence,
participate in live exhibition curation, and
collaborate on community art projects. These
experiential learning opportunities allow you to
test ideas in real-world contexts while developing
professional competencies. Our interdisciplinary
approach encourages cross-pollination between
mediums - from traditional painting and sculpture
to digital fabrication and immersive media -
preparing you for the evolving contemporary art
landscape.</p>

<p>The Visual Arts degree at our college develops both
technical proficiency and theoretical
understanding, producing adaptable practitioners
equipped for professional success. Karnataka
Chitrakala Parishath's remarkable campus, with its
multiple galleries and museums, serves as an
extraordinary resource, showcasing everything
from international exhibitions to traditional Mysore
and Tanjore paintings that connect you directly
with India's rich artistic heritage.</p>

<p>As you commence your journey with the College of
Fine Arts, Karnataka Chitrakala Parishath, prepare
to realise your creative potential through our
pedagogy that cultivates personal expression
while developing professional competencies.
Welcome to a transformative journey where
technical excellence and creativity unite to forge
the visionary artists of tomorrow - innovative,
culturally-grounded practitioners who will
simultaneously preserve heritage and revolutionise
the frontiers of visual expression through inspired
imagination and bold experimentation.</p>

                    </div>

                    {/* Signature */}
                    <div className="pt-4 flex items-center space-x-4">
                      <div className="flex-1 border-t border-gray-200"></div>
                      <div className="text-gray-500 italic text-sm">Sri. Shashidhar Rao S. N</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End GS Message */}

            {/* Principal Message */}
            
            <div className="space-y-6">             
              <div className="grid lg:grid-cols-3 gap-8">
                {/* President's Image Column */}
                <div className="lg:col-span-1">
                  <div className="space-y-4">
                    <div className="relative h-[500px] rounded-xl overflow-hidden">
                      <img
                        src="https://karnatakaindustries.in/uploads/img/misc/Principal_Madam_1.png"
                        alt="Principal"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold">Dr. Gomathi Gowda</h3>
                      <p className="text-red-500 font-medium text-lg">Principal</p>
                    </div>
                  </div>
                </div>

                {/* Principal's Message Column */}
                <div className="lg:col-span-2">
                  <div className="space-y-6">
                    <div className="inline-block">
                      <h3 className="text-2xl font-bold mb-2">Message from the Principal</h3>
                      <div className="h-1 w-20 bg-red-500"></div>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                    <p>Step into the College of Fine Arts – a sanctuary
where artistic dreams take form and creative
pioneers flourish. Within these walls, you'll
encounter a dynamic crucible of artistic
innovation, where tradition and avant-garde
expression collide to spark extraordinary visions.</p>

<p>Our Bengaluru campus, strategically positioned in
the city's academic nucleus, represents our
unwavering dedication to cultivating world-class
visual artists through intentionally designed
spaces that stimulate creative breakthroughs.</p>

<p>State-of-the-art studios flooded with natural light,
cutting-edge digital laboratories, a
research-intensive art library, and
professional-grade exhibition spaces form the
backbone of our creative infrastructure. These
facilities don't merely support your education –
they actively elevate your practice, providing the
tools to transform raw talent into professional
mastery. Here, you'll join a thriving collective of
artists and designers where daily exchanges of
ideas fuel unexpected creative synergies.</p>

<p>Under the mentorship of our distinguished faculty
practicing artists and industry leaders you'll
develop both the technical virtuosity and
conceptual depth demanded by today's evolving
art world.</p>

<p>For six decades, CFA has been the launchpad for
visionaries who redefine visual culture across
global galleries, studios, and creative enterprises.
As you become part of this legacy, you'll gain
access to Cross-disciplinary collaborations that
shatter creative boundaries, Masterclasses with
internationally acclaimed visiting artists, Critical
dialogues that refine your artistic philosophy,
Professional frameworks for sustainable creative
careers.</p>

<p>We champion art as a transformative force – a
universal language that bridges cultures and drives
societal evolution. Our curriculum balances
rigorous skill-building with fearless
experimentation, empowering you to develop a
distinctive creative signature while engaging with
global art narratives. Beyond technical training, we
cultivate the resilience, adaptability and visionary
thinking that distinguishes true cultural innovators.</p>

<p>The CFA journey will profoundly challenge you to
embrace bold creative risks, and cultivate the
courageous vision to share your artistic ideology
with the world. This is where passion powerfully
converges with professional purpose within our
luminous studios buzzing with creative ferment,
alongside inspired peers, all supported by an
institution deeply invested in your growth as both
an accomplished artist and meaningful cultural
innovator. Your extraordinary artistic destiny finds
it’s beginning here.</p>
                    </div>

                    {/* Signature */}
                    <div className="pt-4 flex items-center space-x-4">
                      <div className="flex-1 border-t border-gray-200"></div>
                      <div className="text-gray-500 italic text-sm">Dr. Gomathi Gowda</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>           
             {/* End Principal Message */}
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
           
          </div>
        </div>


         {/* Admissions Banner Section */}
        <AdmissionsBanner />
      </section>


    </main>
  );
} 