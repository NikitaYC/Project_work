document.addEventListener('DOMContentLoaded', function () {
    // Get references to the slider wrapper and the prev/next buttons
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    // Add event listeners to the buttons
    prevButton.addEventListener('click', () => {
        sliderWrapper.scrollLeft -= sliderWrapper.offsetWidth;
    });

    nextButton.addEventListener('click', () => {
        sliderWrapper.scrollLeft += sliderWrapper.offsetWidth;
    });
});