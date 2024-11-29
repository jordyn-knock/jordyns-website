document.addEventListener("DOMContentLoaded", () => {
  // Select all paragraphs within the About section
  const paragraphs = document.querySelectorAll(".about-me p");
  
  // Delay in milliseconds for each paragraph to appear
  const delayBetweenParagraphs = 1000;

  paragraphs.forEach((paragraph, index) => {
    // Set initial styles for smooth visibility transition
    paragraph.style.opacity = "0";
    paragraph.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
    paragraph.style.transform = "translateY(20px)"; // Slight slide-in effect

    // Delay the reveal of each paragraph
    setTimeout(() => {
      paragraph.style.opacity = "1";
      paragraph.style.transform = "translateY(0)"; // Bring back to original position
    }, index * delayBetweenParagraphs);
  });
});
