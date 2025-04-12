'use client';

import Link from 'next/link';
import { API_BASE_URL } from '../../config/api.config';
import { MDXProvider } from '@mdx-js/react';
import { processMarkdownContent } from '../../utils/content.utils';

// Custom component for departments list
const DepartmentsList = ({ content }: { content: string }) => {
  // Extract departments from content
  const extractDepartments = (content: string) => {
    const departments: string[] = [];
    const liRegex = /<li>(.*?)<\/li>/g;
    let match;
    
    while ((match = liRegex.exec(content)) !== null) {
      departments.push(match[1].replace(/^•\s*/, '').trim());
    }
    
    return departments;
  };
  
  const departments = extractDepartments(content);
  const midPoint = Math.ceil(departments.length / 2);
  const leftColumn = departments.slice(0, midPoint);
  const rightColumn = departments.slice(midPoint);
  
  // Extract paragraphs (non-list content) - using a more compatible regex approach
  const extractParagraphs = (content: string) => {
    // Create a temporary div to parse the HTML content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    
    // Remove all ul elements to isolate paragraphs
    const ulElements = tempDiv.getElementsByTagName('ul');
    while (ulElements.length > 0) {
      ulElements[0].parentNode?.removeChild(ulElements[0]);
    }
    
    // Get all paragraph elements
    const pElements = tempDiv.getElementsByTagName('p');
    const paragraphs: string[] = [];
    
    for (let i = 0; i < pElements.length; i++) {
      paragraphs.push(pElements[i].innerHTML);
    }
    
    return paragraphs;
  };
  
  // Use a simpler approach for server-side rendering
  const extractParagraphsFallback = (content: string) => {
    // First remove all list content
    let contentWithoutLists = content;
    const ulRegex = /<ul>[\s\S]*?<\/ul>/g;
    contentWithoutLists = contentWithoutLists.replace(ulRegex, '');
    
    // Then extract paragraphs
    const pRegex = /<p>([\s\S]*?)<\/p>/g;
    const paragraphs: string[] = [];
    let pMatch;
    
    while ((pMatch = pRegex.exec(contentWithoutLists)) !== null) {
      paragraphs.push(pMatch[1]);
    }
    
    return paragraphs;
  };
  
  // Try to use the DOM approach if available, otherwise fall back to regex
  let paragraphs: string[] = [];
  try {
    if (typeof document !== 'undefined') {
      paragraphs = extractParagraphs(content);
    } else {
      paragraphs = extractParagraphsFallback(content);
    }
  } catch {
    paragraphs = extractParagraphsFallback(content);
  }
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <ul className="space-y-2 text-gray-600">
          {leftColumn.map((dept, index) => (
            <li key={index}>• {dept}</li>
          ))}
        </ul>
        <ul className="space-y-2 text-gray-600">
          {rightColumn.map((dept, index) => (
            <li key={index}>• {dept}</li>
          ))}
        </ul>
      </div>
      {paragraphs.length > 0 && (
        <div className="mt-4 space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-600">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

interface AboutSectionProps {
  notifications: {
    title: string;
    content: string;
    date: string;
    link: string;
  }[];
  section_1?: {
    title?: string;
    subtitle?: string;
    content?: string;
    image?: string;
  };
  academic_structure?: {
    title?: string;
    content?: string;
  };
  departments_activities?: {
    title?: string;
    content?: string;
  };
}

const AboutSection = ({ 
  notifications, 
  section_1, 
  academic_structure, 
  departments_activities, 
}: AboutSectionProps) => {

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Logo and Content */}
          <div>
            <div className="flex gap-6 mb-8">
              { section_1?.image && <img 
                src={`${API_BASE_URL}/${section_1?.image}`} 
                alt="College Logo" 
                className="w-60 object-contain"
              />}
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <div className="text-justify space-y-6">
                {section_1?.content && 
                  <MDXProvider>
                    <div 
                      className="space-y-6" 
                      dangerouslySetInnerHTML={{ 
                        __html: processMarkdownContent(section_1.content)
                      }} 
                    />
                  </MDXProvider>
                }
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
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Academic Structure
            </h3>
            {academic_structure?.content && (
              <div 
                className="text-gray-600"
                dangerouslySetInnerHTML={{ 
                  __html: processMarkdownContent(academic_structure.content)
                }} 
              />
            )}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Departments & Activities
            </h3>
            {departments_activities?.content && (
              <DepartmentsList content={departments_activities.content} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 