document.addEventListener('DOMContentLoaded', () => {
    const fullscreenButton = document.querySelector('.fullscreen-btn');
    const slideshowContainer = document.querySelector('.slideshow-container');
  
    fullscreenButton.addEventListener('click', () => {
      // Toggle fullscreen class
      slideshowContainer.classList.toggle('fullscreen');
  
      // Adjust body scroll and button text
      if (slideshowContainer.classList.contains('fullscreen')) {
        document.body.style.overflow = 'hidden'; // Prevent scrolling of the page
        fullscreenButton.textContent = 'Exit Fullscreen'; // Change button text
      } else {
        document.body.style.overflow = ''; // Restore scrolling
        fullscreenButton.textContent = 'Fullscreen'; // Reset button text
      }
    });
  });