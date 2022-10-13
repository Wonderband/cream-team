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
    galleryImages[num].classList.toggle("show");  
    if (num + 1 < galleryImages.length) galleryImages[num+1].classList.toggle("show");       
    else galleryImages[0].classList.toggle("show");     
}