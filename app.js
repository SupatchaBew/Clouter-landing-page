const carouselSlide = document.querySelector('.carousel-slide');
const carouselContent = document.querySelectorAll('.project-overview');

//button
const prevBtn = document.querySelector('.carousel-previous button');
const nextBtn = document.querySelector('.carousel-next button');

//counter
let counter = 0;
var size = document.querySelector('.carousel-container').clientWidth;

console.log(size);

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click',()=> {
  size = document.querySelector('.carousel-container').clientWidth;
  console.log(size);
  if(carouselContent[counter].id === 'last-clone') {
    counter = -1;
  }
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', ()=> {
  size = document.querySelector('.carousel-container').clientWidth;
  if(carouselContent[counter].id === 'first-clone') {
    counter = 3;
  }
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});
