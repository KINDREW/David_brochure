const bar = document.querySelector(".bar");
const navMenu = document.querySelector(".link");
const carousel = document.querySelector(".carousel");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");

let currentIndex = 0;
let intervalId;

function updateCarousel() {
  const itemWidth = carousel.offsetWidth;
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function nextSlide() {
  const numItems = document.querySelectorAll(".carousel-item").length;
  if (currentIndex < numItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the first item when reaching the end
  }
  updateCarousel();
}

function startAutoplay() {
  intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
}

function stopAutoplay() {
  clearInterval(intervalId);
}

nextButton.addEventListener("click", () => {
  nextSlide();
  stopAutoplay(); // Stop autoplay on user interaction
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    const numItems = document.querySelectorAll(".carousel-item").length;
    currentIndex = numItems - 1; // Jump to the last item when at the beginning
  }
  updateCarousel();
  stopAutoplay(); // Stop autoplay on user interaction
});

startAutoplay(); // Start autoplay when the page loads
nextSlide();
// Optionally, you can also stop autoplay when the mouse hovers over the carousel:
carousel.addEventListener("mouseenter", stopAutoplay);
carousel.addEventListener("mouseleave", startAutoplay);

bar.addEventListener("click", showMenu);

function showMenu() {
  let value = navMenu.classList.contains("appear");
  if (value) {
    navMenu.classList.remove("appear");
    bar.classList.remove("change");
  } else {
    navMenu.classList.add("appear");
    bar.classList.add("change");
  }
}
