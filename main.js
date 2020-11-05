// Tab 1
let tabsTitle = document.querySelectorAll('.tabs_wrapper .title');
tabsTitle.forEach(function(item) {
	item.addEventListener('click', function(e) {
		this.nextElementSibling.classList.toggle('active');
	});
	
});



// Tab 2
let	tabsTitle2 = document.querySelectorAll('.tabs_wrapper2 .title');
let	tabsContent2 = document.querySelectorAll('.tabs_wrapper2 .content');
document.querySelector('.tabs_wrapper2 .title').classList.add('active_t');
document.querySelector('.tabs_wrapper2 .content').classList.add('active_tab');

tabsTitle2.forEach(function(item, index) {
	item.addEventListener('click', function(e) {
		tabsTitle2.forEach(function(elem) {
			elem.classList.remove('active_t');
		});
		this.classList.add('active_t');
		tabsContent2.forEach(function(itemContent, indexContent) {
			itemContent.classList.remove('active_tab');
		});
		tabsContent2[index].classList.add('active_tab');
	});
});


// Slider
let slider = document.querySelector('.slider_wrapper');
let track = slider.querySelector('.track');
let item = track.querySelectorAll('.item');
let prevBtn = slider.querySelector('.controls .prev');
let nextBtn = slider.querySelector('.controls .next');
let widthItem = 600;
let current = 1

nextBtn.addEventListener('click', function(){
	if (current == item.length){
		return;
	};
	current++;
	contolsSlider();
	track.style.marginLeft= -1 * (current - 1) * widthItem + "px";
	
});

prevBtn.addEventListener('click', function(){
	if (current == 1){
		return;
	};
	current = current - 1;
	contolsSlider();
	track.style.marginLeft= -1 * (current - 1)  * widthItem + "px";
});

function contolsSlider () {
	if (current == item.length){
		nextBtn.classList.add('disabled');
	}else{
		nextBtn.classList.remove('disabled');
	};

	if (current == 1){
		prevBtn.classList.add('disabled');
	}else{
		prevBtn.classList.remove('disabled');
	};
};

contolsSlider();