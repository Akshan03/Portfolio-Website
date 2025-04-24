/**
 * Smooth scroll to a specific element by ID
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Offset from the top in pixels (default: 0)
 */
export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Check if an element is in viewport
 * @param {HTMLElement} element - The element to check
 * @param {number} offset - Offset from the top in pixels (default: 0)
 * @returns {boolean} - Whether the element is in viewport
 */
export const isInViewport = (element, offset = 0) => {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight - offset) &&
    rect.bottom >= offset
  );
};
