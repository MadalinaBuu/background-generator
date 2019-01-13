var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var initialBackground = body.style.background = 
		"linear-gradient(to right, "
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";
css.textContent = initialBackground + ";";

function setGratient(){
		body.style.background = 
		"linear-gradient(to right, "
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";

		css.textContent = body.style.background + ";";
}

function setRandomGratient(){
		color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
		color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);

		body.style.background = 
		"linear-gradient(to right, "
		+ color1.value
		+ ", " 
		+ color2.value 
		+ ")";

		css.textContent = body.style.background + ";";
}
color1.addEventListener("input", setGratient);
color2.addEventListener("input", setGratient);

btn.addEventListener("click", setRandomGratient);