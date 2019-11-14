var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");
css.onload = loadPage();


function setGradient(){
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function loadPage(){
	setGradient();
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function randomNumber(){
	return Math.floor(Math.random()*255);
}

function randomColor() {
	return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

function button() {
	body.style.background = `linear-gradient(to right, ${randomColor()}, ${randomColor()})`;
//var randomColor1 = 'rgb(' + randomColor() + "," + randomColor() + "," + randomColor() + ')';
//var randomColor2 = 'rgb(' + randomColor() + "," + randomColor() + "," + randomColor() + ')';
//body.style.background = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
//"linear-gradient(to right, "
//+ randomColor1
//+ ", "
//+ randomColor2
//+ ")";

css.textContent = body.style.background + ";";
//return {randomColor1, randomColor2};
}
