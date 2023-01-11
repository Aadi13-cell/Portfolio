var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var link = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function(){
	this.classList.toggle("click");
	navlist.classList.toggle("open");

});