
const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const numbersOfSlide = slides.length;
let position = 0;

createDots();
selectDot();


const arrowLeft = document.querySelector('.arrow_left');
arrowLeft.addEventListener("click", () => {
	console.log("Vous avez cliqué sur la flèche gauche")
	position--;
	const element = slides[position];
	const img = document.querySelector(".banner-img");
	img.setAttribute("src", "./assets/images/slideshow/" + element.image);
	const text = document.querySelector(".banner-txt");
	text.innerHTML = element.tagLine;
});

const arrowRight = document.querySelector('.arrow_right');
arrowRight.addEventListener("click", () => {
	console.log("Vous avez cliqué sur la flèche droite")
	position++;
	const element = slides[position];
	const img = document.querySelector(".banner-img");
	img.setAttribute("src", "./assets/images/slideshow/" + element.image);
	const text = document.querySelector(".banner-txt");
	text.innerHTML = element.tagLine;
});


function createDots() {
	const dots = document.querySelector(".dots");
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.setAttribute("class", "dot");
		dots.appendChild(dot);
	}
}

function selectDot() {
	const dotList = document.querySelectorAll(".dot");
	for (let i = 0; i < dotList.length; i++) {

		const dot = dotList[i];
		if (i == position) {
			dot.classList.add('dot_selected');
		}
		else {
			dot.classList.remove('dot_selected');
		}

	}
}



