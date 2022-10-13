const galleryImages = document.querySelectorAll(".gallery__image");
let galleryInterval;
let currentNumber = 0;
function SlideShow(interval) {
  galleryInterval = setInterval(function () {  
    if  (currentNumber < galleryImages.length) {
        ShowNextImage(currentNumber);        
    }
    else {
        currentNumber = 0;
        ShowNextImage(currentNumber);        
    }
    currentNumber++;    
  }, interval);
}
SlideShow(2000);

function ShowNextImage(num) {
    if (num > 0) galleryImages[num-1].classList.toggle("show");       
    else galleryImages[galleryImages.length - 1].classList.toggle("show");   
    galleryImages[num].classList.toggle("show");
}