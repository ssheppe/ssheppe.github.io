var navBar = document.getElementById("spongebob-nav");
var article = document.getElementById("spongebob-article")

var toggleBtns = Array.from(document.getElementsByClassName("nav-toggle"));

toggleBtns.forEach(function(btn) {
	btn.addEventListener("click", function(e) {
		e.preventDefault();
		navBar.classList.toggle("active");
		article.classList.toggle("active");
	});
});


$('.carousel').carousel({
	interval: 5000
})