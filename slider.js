
document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
  const slides = document.querySelectorAll('#slider > ul > li');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }
  setInterval(nextSlide, 5000);
});


// slider2

document.addEventListener("DOMContentLoaded", function() {
  let currentIndex = 0;
const slides = document.querySelectorAll('#slider2 > ul > li');

function showSlide2(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide2() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide2(currentIndex);
}

function prevSlide2() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide2(currentIndex);
}
setInterval(nextSlide2, 5000);
});
