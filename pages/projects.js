document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".slideshow img");
    let index = 0;
  
    setInterval(() => {
      images.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
      });
      index = (index + 1) % images.length;
    }, 3000); // Change image every 3 seconds
  });
  