document.addEventListener("DOMContentLoaded", function() {
    createStars();
  });
  
  function createStars() {
    const numStars = 1500;
    const starsContainer = document.getElementById("stars");
  
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
  
      const size = Math.random() * 3;
      star.style.width = size + "px";
      star.style.height = size + "px";
  
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      star.style.left = x + "px";
      star.style.top = y + "px";
  
      const speed = Math.random() * 5 + 1;
      star.style.animationDuration = speed + "s";
  
      const color = getRandomColor();
      star.classList.add(color);
  
      starsContainer.appendChild(star);
    }
  }
  
  function getRandomColor() {
    const colors = ["pink", "blue", "purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  
