var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var css  = document.querySelector("h3");

function grad() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ col1.value 
	+ ", " 
	+ col2.value 
	+ ")";
	css.textContent = body.style.background + ";";

}
col1.addEventListener("input", grad)

col2.addEventListener("input", grad)
