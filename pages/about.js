document.addEventListener("DOMContentLoaded", () => {
  const paragraphs = document.querySelectorAll(".long-description p");
  const delayBetweenParagraphs = 1000;

  paragraphs.forEach((paragraph, index) => {
    setTimeout(() => {
      paragraph.classList.add("visible");
    }, index * delayBetweenParagraphs);
  });
});
