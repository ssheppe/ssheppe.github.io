
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

var images = ['bahai.jpg', 'barcelona.jpg', 'budapest.JPG', 'budapest2.jpg']

// $('body').css({'background': 'url(carousel-images/' + images[Math.floor(Math.random() * images.length)] + ')'});
// $('.carousel').carousel({
// 	interval: 5000
// })
// $('body').css({'background': 'url(carousel-images/' + images[Math.floor(Math.random() * images.length)] + ')'});

$(function(){
	var x = 0;
	setInterval(function(){
		x-=1;
		$('body').css('background-position', x + 'px 0');
	}, 10);
})