let slideIndex = 1;
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
