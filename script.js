const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileSlide = document.getElementById("mobileSlide");
const closeBtn = document.querySelector(".close-btn");

// فتح/غلق القائمة العادية
hamburger.addEventListener("click", () => {
  mobileMenu.style.display =
    mobileMenu.style.display === "block" ? "none" : "block";
});

// فتح القائمة slide
hamburger.addEventListener("click", () => {
  mobileSlide.style.width = "250px"; // العرض عند الفتح
});

// غلق القائمة slide
closeBtn.addEventListener("click", () => {
  mobileSlide.style.width = "0";
});
