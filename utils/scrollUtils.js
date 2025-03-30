// Utility functions for smooth scrolling and section visibility

// Scroll to section with offset (for fixed header)
export const scrollToSection = (elementId, offset = 0) => {
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

// Check if element is in viewport
export const isElementInViewport = (el, threshold = 0.2) => {
  if (!el) return false;
  
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  // Element is considered in viewport if its top edge is 20% into the viewport
  return (
    rect.top <= windowHeight * (1 - threshold) &&
    rect.bottom >= windowHeight * threshold
  );
};

// Add visibility classes for animation
export const handleScrollAnimation = () => {
  const elements = document.querySelectorAll('.fade-in');
  
  elements.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('visible');
    }
  });
};

// Get current active section
export const getCurrentSection = (sectionIds, offset = 100) => {
  // Store the section that has the largest visible portion
  let maxVisibleSection = null;
  let maxVisiblePercentage = 0;
  
  sectionIds.forEach(id => {
    const element = document.getElementById(id);
    if (!element) return;
    
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Calculate how much of the section is visible
    const visibleTop = Math.max(0, rect.top);
    const visibleBottom = Math.min(windowHeight, rect.bottom);
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);
    
    // Calculate percentage of section that's visible
    const sectionHeight = rect.bottom - rect.top;
    const visiblePercentage = visibleHeight / sectionHeight;
    
    if (visiblePercentage > maxVisiblePercentage) {
      maxVisiblePercentage = visiblePercentage;
      maxVisibleSection = id;
    }
  });
  
  return maxVisibleSection;
};
