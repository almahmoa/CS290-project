//Carousel citation: https://www.youtube.com/watch?v=KcdBOoK3Pfw
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//AUTOMATIC ***********************************************************
showSlides();
var timer;

function showSlides() {
	if(counter >= carouselImages.length - 1) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out"
	counter++;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  	timer = setTimeout(showSlides, 3000);
} 

//Button Listeners
nextBtn.addEventListener('click', () => {
	if(counter >= carouselImages.length - 1) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out"
	counter++;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	clearTimeout(timer)
	timer = setTimeout(showSlides, 6000);
});

prevBtn.addEventListener('click', () => {
	if(counter <= 0) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out"
	counter--;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	clearTimeout(timer)
	timer = setTimeout(showSlides, 6000);
});

carouselSlide.addEventListener('transitionend', () => {
	if(carouselImages[counter].id === 'lastClone'){
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - 2;
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
	if(carouselImages[counter].id === 'firstClone'){
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - counter;
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
});

// CAROUSEL 2 *************************************************************************************
const carouselSlide2 = document.querySelector('.carousel-slide2');
const carouselImages2 = document.querySelectorAll('.carousel-slide2 img');

//Buttons
const prevBtn2 = document.querySelector('#prevBtn2');
const nextBtn2 = document.querySelector('#nextBtn2');

//Counter
let counter2 = 1;
const size2 = carouselImages2[0].clientWidth;

carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';

//AUTOMATIC ***********************************************************
showSlides2();
var timer2;

function showSlides2() {
	if(counter2 >= carouselImages2.length - 1) return;
	carouselSlide2.style.transition = "transform 0.4s ease-in-out"
	counter2++;
	carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
  	timer2 = setTimeout(showSlides2, 3000);
} 

//Button Listeners
nextBtn2.addEventListener('click', () => {
	if(counter2 >= carouselImages2.length - 1) return;
	carouselSlide2.style.transition = "transform 0.4s ease-in-out"
	counter2++;
	carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
	clearTimeout(timer2)
	timer2 = setTimeout(showSlides2, 6000);
});

prevBtn2.addEventListener('click', () => {
	if(counter2 <= 0) return;
	carouselSlide2.style.transition = "transform 0.4s ease-in-out"
	counter2--;
	carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
	clearTimeout(timer2)
	timer2 = setTimeout(showSlides2, 6000);
});

carouselSlide2.addEventListener('transitionend', () => {
	if(carouselImages2[counter2].id === 'lastClone'){
		carouselSlide2.style.transition = "none";
		counter2 = carouselImages2.length - 2;
		carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
	}
	if(carouselImages2[counter2].id === 'firstClone'){
		carouselSlide2.style.transition = "none";
		counter2 = carouselImages2.length - counter2;
		carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
	}
});

// CAROUSEL 3 *************************************************************************************
const carouselSlide3 = document.querySelector('.carousel-slide3');
const carouselImages3 = document.querySelectorAll('.carousel-slide3 img');

//Buttons
const prevBtn3 = document.querySelector('#prevBtn3');
const nextBtn3 = document.querySelector('#nextBtn3');

//Counter
let counter3 = 1;
const size3 = carouselImages3[0].clientWidth;

carouselSlide3.style.transform = 'translateX(' + (-size3 * counter3) + 'px)';

//AUTOMATIC ***********************************************************
showSlides3();
var timer3;

function showSlides3() {
	if(counter3 >= carouselImages3.length - 1) return;
	carouselSlide3.style.transition = "transform 0.4s ease-in-out"
	counter3++;
	carouselSlide3.style.transform = 'translateX(' + (-size3 * counter3) + 'px)';
  	timer3 = setTimeout(showSlides3, 3000);
} 

//Button Listeners
nextBtn3.addEventListener('click', () => {
	if(counter3 >= carouselImages3.length - 1) return;
	carouselSlide3.style.transition = "transform 0.4s ease-in-out"
	counter3++;
	carouselSlide3.style.transform = 'translateX(' + (-size3 * counter3) + 'px)';
	clearTimeout(timer3)
	timer3 = setTimeout(showSlides3, 6000);
});

prevBtn3.addEventListener('click', () => {
	if(counter3 <= 0) return;
	carouselSlide3.style.transition = "transform 0.4s ease-in-out"
	counter3--;
	carouselSlide3.style.transform = 'translateX(' + (-size3 * counter3) + 'px)';
	clearTimeout(timer3)
	timer3 = setTimeout(showSlides2, 6000);
});

carouselSlide3.addEventListener('transitionend', () => {
	if(carouselImages3[counter3].id === 'lastClone'){
		carouselSlide3.style.transition = "none";
		counter3 = carouselImages3.length - 2;
		carouselSlide3.style.transform = 'translateX(' + (-size3 * counter3) + 'px)';
	}
	if(carouselImages3[counter3].id === 'firstClone'){
		carouselSlide3.style.transition = "none";
		counter3 = carouselImages3.length - counter3;
		carouselSlide3.style.transform = 'translateX(' + (-size3 * counter3) + 'px)';
	}
});