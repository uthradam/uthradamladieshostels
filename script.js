let slideIndex = 1;

const ham = document.querySelector(".ham");
ham.addEventListener("click", toggleHam);
const navbar = document.querySelector(".navbar");
navbar.addEventListener("click", toggleMenu);

function navigate(e) {
  e.preventDefault();
  let id = e.target.dataset.info;
  document.querySelector(id).scrollIntoView();
}
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
}
function toggleMenu(e) {
  navbar.classList.remove("expand");
  ham.classList.remove("expand");
}
function toggleHam(e) {
  ham.classList.toggle("expand");
  navbar.classList.toggle("expand");
}
function changeSlide(n) {
  let slides = document.getElementsByClassName("slide");
  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

showSlides();

let aboutContainer = document.querySelector(".about-wrapper");

document.addEventListener("scroll", (e) => {
  const { y } = aboutContainer.getBoundingClientRect();

  if (y < 0) {
    document.querySelector(".navigation").classList.add("bg");
  } else {
    document.querySelector(".navigation").classList.remove("bg");
  }
});
