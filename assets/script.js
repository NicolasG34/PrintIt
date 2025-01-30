const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

createDots();
const numberOfSlide = slides.length;


const arrowLeft = document.querySelector('.arrow_left');
arrowLeft.addEventListener("click", () => {
    console.log("Vous avez cliqué sur la flèche gauche")
});

const arrowRight = document.querySelector('.arrow_right');
arrowRight.addEventListener("click", () => {
    console.log("Vous avez cliqué sur la flèche droite")
});


function createDots(){
	const dots = document.querySelector(".dots");	
   for (let index = 0; index < slides.length; index++) {
	   const dot= document.createElement("div");
	   dot.setAttribute("class", "dot");
	   dots.appendChild(dot);
   } 
}


