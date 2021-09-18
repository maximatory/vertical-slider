let buttonUp = document.querySelector('.button-up');
let buttonDown = document.querySelector('.button-down');
let leftSlider = document.querySelector('.left-slider');
let rightSlider = document.querySelector('.right-slider');
let rightSliderLength = rightSlider.querySelectorAll('div').length;
let slideWrapper = document.querySelector('.slider-wrapper');

let activeSlide = 0;
leftSlider.style.top = `-${(rightSliderLength - 1) * 100}vh`

buttonUp.addEventListener('click', () => {
   clickButton('up')
});
buttonDown.addEventListener('click', () => {
   clickButton('down')
});

let clickButton = (direction) => {
   let heightSlide = slideWrapper.clientHeight;
   if (direction === 'up') {
      activeSlide++
      if (activeSlide === rightSliderLength) {
         activeSlide = 0;
      }
   } else if (direction === 'down') {
      activeSlide--
      if (activeSlide < 0) {
         activeSlide = rightSliderLength - 1;
      }
   }
   rightSlider.style.transform = `translateY(-${activeSlide * heightSlide}px)`
   leftSlider.style.transform = `translateY(${activeSlide * heightSlide}px)`
}

document.onwheel = function (event) {
   if (event.deltaY > 0) {
      clickButton('up')
   } else if (event.deltaY < 0) {
      clickButton('down')
   }
}
