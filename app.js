hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation
var repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

    slides[i].classList.add('active');
    btns[i].classList.add('active');
    i++;

    if(slides.length == i){
      i = 0;
    }
    if(i >= slides.length){
      return;
    }
    repeater();
  }, 10000);
  }
  repeater();
}
repeat();

var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
box1.onended = function () {
    box2.play();
    box1.style.opacity=0;
    box2.style.opacity=1;
}
box2.onended = function () {
    box3.play();
    box2.style.opacity=0;
    box3.style.opacity=1;
}
box3.onended = function () {
    box1.play();
    box3.style.opacity=0;
    box1.style.opacity=1;
}


const body = document.body;
const galleryTabs = document.querySelectorAll('.gallery_tabs li');
const galleryItems = document.querySelectorAll('.gallery_item');
const galleryImgs = document.querySelectorAll('.gallery_item img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox_img');
const lightboxCloseBtn = document.querySelector('.lightbox_close');


/*===== 01) Gallery Filtering functionality =====*/

galleryTabs.forEach((currTab) => {
    currTab.addEventListener('click', (e) => {

        // removing the existing 'active' class from the tabs.
        e.target.parentElement.querySelector('.active').classList.remove('active');

        // adding the 'active' class to the currently clicked tab.
        e.target.classList.add('active');


        let filterValue = e.target.getAttribute('data-filter');

        galleryItems.forEach((currItem) => {
            if (filterValue === 'all' || currItem.classList.contains(filterValue)) {
                currItem.classList.remove('hide');
                currItem.classList.add('show');
            }
            else {
                currItem.classList.remove('show');
                currItem.classList.add('hide');
            }
        });

    });
});



/*===== 02) Lightbox functionality =====*/

galleryImgs.forEach((currImg) => {
    currImg.addEventListener('click', (e) => {

        let imgSrc = e.target.getAttribute('src');

        lightboxImg.setAttribute('src', imgSrc);

        lightbox.classList.add('open');
        body.classList.add('overflow_hide');

    });
});


// Function for closing the Lightbox
const lightboxClose = () => {
    lightbox.classList.remove('open');
    body.classList.remove('overflow_hide');
};


// closing the lightbox on clicking the lightboxClose btn.
lightboxCloseBtn.addEventListener('click', lightboxClose);


// closing the lightbox on clicking outside of it.
window.addEventListener('click', (e) => {
    if (e.target.className === 'lightbox_wrapper') {
        lightboxClose();
    }
});


// closing the lightbox on pressing the Escape key.
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        lightboxClose();
    }
});
