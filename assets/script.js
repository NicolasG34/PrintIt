
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

let position = 0;

const bannerSlides = document.querySelector(".banner-img");
const bannerTagLine = document.querySelector("#banner p");

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");


const dotsSlides = document.querySelector(".dots");


arrowLeft.addEventListener("click", previousImage)
arrowRight.addEventListener("click", nextImage)


//création des dots
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement('div')
	dot.classList.add("dot")
	dotsSlides.appendChild(dot);
}


//affichage du dot sélectionné
let dotSelected = document.querySelectorAll(".dot");

dotSelected[position].classList.add("dot_selected");

//importation des images et des taglines
function showImage() {
	bannerSlides.src = `./assets/images/slideshow/${slides[position].image}`;
	bannerTagLine.innerHTML = slides[position].tagLine;
}

//carroussel pour la flèche de gauche
function previousImage() {

	dotSelected[position].classList.remove("dot_selected");
	if (position <= 0) {
		position = slides.length - 1;
	}

	else {
		position--;
	}

	dotSelected[position].classList.add("dot_selected");
	showImage()
}

//carroussel pour la flèche de droite
function nextImage() {

	dotSelected[position].classList.remove("dot_selected");

	if (position >= slides.length - 1) {
		position = 0;
	}

	else {
		position++;
	}

	dotSelected[position].classList.add("dot_selected");
	showImage()
}
