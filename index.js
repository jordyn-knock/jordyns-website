document.addEventListener("DOMContentLoaded", () => {
    const targetElement = document.querySelector(".hero h1"); // The target element
    const textBeforeHighlight = "Hi! I'm "; // Text before "Jordyn Knock"
    const highlightText = "Jordyn Knock"; // Highlighted text
    const typingSpeed = 100; // Typing speed in milliseconds
  
    let currentIndex = 0; // Tracks how much of the text has been typed
  
    const typeText = () => {
      if (currentIndex <= textBeforeHighlight.length) {
        // Typing the text before "Jordyn Knock"
        targetElement.innerHTML = textBeforeHighlight.slice(0, currentIndex);
      } else {
        // Typing the "Jordyn Knock" text with highlight styling
        const highlightIndex = currentIndex - textBeforeHighlight.length;
        targetElement.innerHTML = `${textBeforeHighlight}<span class="highlight">${highlightText.slice(
          0,
          highlightIndex
        )}</span>`;
      }
  
      if (currentIndex < textBeforeHighlight.length + highlightText.length) {
        currentIndex++;
        setTimeout(typeText, typingSpeed);
      }
    };
  
    typeText();
  });
  