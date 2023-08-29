function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };


const sliderImages = document.querySelectorAll('.slide-in');
const FCCImage = document.querySelector('.align-left-slide-in');



function checkSlide(){
//   console.log(e)
  sliderImages.forEach(slideImage => {
      const windowSize = window.scrollY + window.innerHeight - slideImage.height;
      // bottom of the image
      const imageBottom = slideImage.offsetTop + slideImage.height;
      const isHalfShown = windowSize > slideImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        slideImage.classList.add('active-slide-in');
      } else {
        slideImage.classList.remove('active-slide-in');
      }
  })

const slideFCC = FCCImage.height;
const windowSize = window.scrollY + window.innerHeight - slideFCC /2;
const imageBottom = FCCImage.offsetTop + FCCImage.height;
const isHalfShown = windowSize > FCCImage.offsetTop;
const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
        FCCImage.classList.add('active-align-left-slide-in');
    } else {
        FCCImage.classList.remove('active-align-left-slide-in');
    }
}

window.addEventListener('scroll', debounce(checkSlide));