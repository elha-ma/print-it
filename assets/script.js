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

//Initialisation de la variable numSlide
let numSlide = 0;

//première création des points bullets
genererDots(numSlide);


//En cliquant sur la flèche de droite, on passe au slide suivant
const ButtonNextSlide = document.querySelector(".arrow_right");
ButtonNextSlide.addEventListener("click", function () {
	
	if (numSlide < (slides.length - 1) ){
		numSlide++;		
	} 
	else
	{
		numSlide = 0;
	}
	genererSlide(numSlide);
});


//En cliquant sur la flèche de gauche, on passe au slide précédent
const ButtonLastSlide = document.querySelector(".arrow_left");
ButtonLastSlide.addEventListener("click", function () {
	if (numSlide > 0 ){
		numSlide--;		
	} 
	else
	{
		numSlide = slides.length - 1;
	}
	genererSlide(numSlide);
});

//Génération des bullets points 
function genererDots(i){

	for (let j = 0; j < slides.length; j++) {

		const dot = document.createElement("input");
		dot.setAttribute("type", "button");
		dot.setAttribute("class", "dot");
		//le premier bullet est différent
		if ( j == i ){
			dot.setAttribute("class", "dot dot_selected");
		}
		//rattacher les bullets à la la balise Div dont la classe est .dots
		const dotsElements = document.querySelector(".dots");
		dotsElements.appendChild(dot);
	}
}

//Génération du carroussel
function genererSlide(i) {

	//chargement de l'image correspondante
 	document.querySelector(".banner-img").src = `./assets/images/slideshow/${slides[i].image}`;

	// Effacement du texte associé à l'image
	document.querySelector("p").innerHTML = "";
	// on charge le texte correspondant à l'image
	document.querySelector("p").innerHTML = slides[i].tagLine;

	//Désignation du bullet point actif
	document.querySelector(".dots").innerHTML = "";
	genererDots(i);
}







