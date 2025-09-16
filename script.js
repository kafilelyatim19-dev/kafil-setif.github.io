const hamburger = document.querySelector(".hamburger");
const mobileSlide = document.getElementById("mobileSlide");
const closeBtn = document.querySelector(".close-btn");

// فتح القائمة slide
hamburger.addEventListener("click", () => {
  mobileSlide.style.width = "250px";
});

// غلق القائمة slide
closeBtn.addEventListener("click", () => {
  mobileSlide.style.width = "0";
});
