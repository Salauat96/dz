document.addEventListener("DOMContentLoaded", function(event) {
let menuWrapper = document.querySelector('.menu_wrapper');
let menu = menuWrapper.querySelector('.menu');
let menuItem = menu.querySelectorAll('li');
let width = window.innerWidth;

menuItem.forEach(function(elem) {
	let submenuUl = elem.querySelectorAll('ul');

	submenuUl.forEach(function(ul) {
		ul.style.display = "block";
		if (ul.getBoundingClientRect().right > width){
			ul.classList.add('right');
		};

		setTimeout(function(){
			ul.style.display = "";
		}, 500);
	});

	elem.addEventListener('mouseenter', function(){
		if (elem.children.length > 1){
			this.querySelector('ul').classList.add('active');
		}
	});
	elem.addEventListener('mouseleave', function(){
		if (elem.children.length > 1){
			this.querySelector('ul').classList.remove('active');
		}
	});

});

});