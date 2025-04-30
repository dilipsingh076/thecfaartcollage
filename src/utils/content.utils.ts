/**
 * Utility functions for processing and formatting content
 */

/**
 * Processes markdown content and applies custom styling
 * @param content - The HTML/markdown content to process
 * @returns Processed content with applied styling
 */
export const processMarkdownContent = (content: string): string => {
  if (!content) return '';
  
  // Replace paragraph tags with more spacing
  let processedContent = content.replace(/<\/p>/g, '</p><div class="h-0"></div>');
  
  // Add a special class to top-level lists to identify them
  processedContent = processedContent.replace(/<ul>/g, '<ul class="top-level-list space-y-3 text-gray-600 list-disc pl-4">');
  
  // Style list items with proper indentation
  processedContent = processedContent.replace(/<li>/g, '<li class="ml-2">');
  
  // Style paragraphs with consistent text color, spacing, and text justification
  processedContent = processedContent.replace(
    /<p>/g, 
    '<p class="text-gray-600 mt-4 text-justify leading-relaxed">'
  );
  
  // Wrap lists in a grid container for two-column layout
  processedContent = processedContent.replace(
    /<ul class="top-level-list space-y-3 text-gray-600 list-disc pl-4">/g,
    '<div class="grid grid-cols-2 gap-6"><ul class="top-level-list space-y-3 text-gray-600 list-disc pl-4">'
  );
  
  // Close the grid container after the last list
  processedContent = processedContent.replace(
    /<\/ul>\s*<p>/g,
    '</ul></div><p class="text-gray-600 mt-4 text-justify leading-relaxed">'
  );
  
  return processedContent;
};

/**
 * Processes markdown content with ordered lists (numbers instead of bullets)
 * @param content - The HTML/markdown content to process
 * @returns Processed content with applied styling and numbered lists
 */
export const processMarkdownContentWithNumbers = (content: string): string => {
  if (!content) return '';
  
  // Replace paragraph tags with more spacing
  let processedContent = content.replace(/<\/p>/g, '</p><div class="h-6"></div>');
  
  // Convert unordered lists to ordered lists with numbers
  processedContent = processedContent.replace(/<ul>/g, '<ol class="top-level-list space-y-3 text-gray-600 list-decimal pl-4">');
  processedContent = processedContent.replace(/<\/ul>/g, '</ol>');
  
  // Style list items with proper indentation
  processedContent = processedContent.replace(/<li>/g, '<li class="ml-2">');
  
  // Style paragraphs with consistent text color, spacing, and text justification
  processedContent = processedContent.replace(
    /<p>/g, 
    '<p class="text-gray-600 mt-4 text-justify leading-relaxed">'
  );
  
  // Wrap lists in a grid container for two-column layout
  processedContent = processedContent.replace(
    /<ol class="top-level-list space-y-3 text-gray-600 list-decimal pl-4">/g,
    '<div class="grid grid-cols-2 gap-6"><ol class="top-level-list space-y-3 text-gray-600 list-decimal pl-4">'
  );
  
  // Close the grid container after the last list
  processedContent = processedContent.replace(
    /<\/ol>\s*<p>/g,
    '</ol></div><p class="text-gray-600 mt-4 text-justify leading-relaxed">'
  );
  
  return processedContent;
}; 