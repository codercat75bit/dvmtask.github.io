document.addEventListener("DOMContentLoaded",function() {
    const ham = document.getElementById("ham");
    const mobile = document.getElementById("mobile");
    const close = document.getElementById("close")

    ham.addEventListener("click", function() 
    {
     mobile.style.left = "0";   
    });
    close.addEventListener("click", function() {
        mobile.style.left = "-100%"
    })
    document.addEventListener("click", function (event) {
        if (!mobile.contains(event.target) && !ham.contains(event.target)) {
            mobile.style.left = "-100%";
        }
    })  
})
    document.addEventListener("DOMContentLoaded",function() {  
        let currentIndex = 0;
const images = document.querySelectorAll('.r2i');
const totalImages = images.length;
let imageWidth;
let imagesVisible;


const prevButton = document.querySelector('.arrow1');
const nextButton = document.querySelector('.arrow2');


const imageContainer = document.querySelector('.imgs');
let clonedImages;

function updateImageWidth() {
  if (window.innerWidth <= 1145) {
    imagesVisible = 6;
  } else {
    imagesVisible = 5; 
  }
  imageWidth = images[0].offsetWidth; 

  
  if (window.innerWidth <= 1145 && !clonedImages) {
    clonedImages = Array.from(images).slice(0, imagesVisible).map(img => img.cloneNode(true));
    clonedImages.forEach(img => imageContainer.appendChild(img));
  } else if (window.innerWidth > 1145 && clonedImages) {
    clonedImages.forEach(img => imageContainer.removeChild(img));
    clonedImages = null;
  }

  console.log("Image width updated: ", imageWidth);
}

function moveImages(direction) {
  currentIndex += direction;

  if (window.innerWidth <= 1145) {
   
    if (currentIndex >= totalImages) {
      currentIndex = 0; 
      setTimeout(function () {
        imageContainer.style.transition = 'none'; 
        imageContainer.style.transform = "translateX(0)";
      }, 300);
      setTimeout(function () {
        imageContainer.style.transition = 'transform 0.5s ease'; 
      }, 350);
    } 
    else if (currentIndex < totalImages) {
        currentIndex = currentIndex+ 1; 
      }
    else if (currentIndex < 0) {
      currentIndex = 0; 
    }
    
  } 
  else {
    if (currentIndex > totalImages - 5) {
      currentIndex = 0; 
    }
     else if (currentIndex < 0) {
      currentIndex = totalImages - 5;
    }
  }

  const transformValue = "translateX(-" + (currentIndex * imageWidth) + "px)";
  imageContainer.style.transform = transformValue;

  console.log("translateX applied: ", transformValue);
}

function autoSlide() {
  setInterval(function() {
    moveImages(1); 
  }, 4000);
}


prevButton.addEventListener('click', function() {
  moveImages(-1);
});

nextButton.addEventListener('click', function() {
  moveImages(1);
});

window.addEventListener('resize', updateImageWidth);
updateImageWidth(); 
autoSlide(); 

    })