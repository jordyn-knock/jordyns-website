document.addEventListener('DOMContentLoaded', () => {
  const fullscreenButton = document.querySelector('.fullscreen-btn');
  const slideshowContainer = document.querySelector('.slideshow-container');

  fullscreenButton.addEventListener('click', () => {
      // Toggle fullscreen class
      slideshowContainer.classList.toggle('fullscreen');

      // Adjust button styles based on state
      if (slideshowContainer.classList.contains('fullscreen')) {
          document.body.style.overflow = 'hidden'; // Prevent scrolling of the page
          fullscreenButton.textContent = 'Exit Fullscreen'; // Change button text
          fullscreenButton.classList.add('exit-fullscreen'); // Add class for Exit Fullscreen
      } else {
          document.body.style.overflow = ''; // Restore scrolling
          fullscreenButton.textContent = 'Fullscreen'; // Reset button text
          fullscreenButton.classList.remove('exit-fullscreen'); // Remove class
      }
  });
});

  document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".slideshow img");
    let index = 0;
  
    setInterval(() => {
      images.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
      });
      index = (index + 1) % images.length;
    }, 5000); // Change image every 3 seconds
  });
  