document.addEventListener("DOMContentLoaded", function(event) {
let menuWrapper = document.querySelector('.menu_wrapper');
let menu = menuWrapper.querySelector('.menu');
let menuFirstItem = menu.children;
let menuWidth = menuWrapper.offsetWidth;
let menuFirstWidth = 0;
for (let i = 0; i < menuFirstItem.length; i++) {
	menuFirstWidth += menuFirstItem[i].offsetWidth;
};
if (menuFirstWidth > menuWidth){
	let flexMenuLi = document.createElement("li");
	let flexMenuLink = document.createElement("a");
	flexMenuLink.setAttribute('href', '#');
	let flexMenuUl = document.createElement("ul");
	flexMenuLi.className = "flexmenu";
	flexMenuLink.innerHTML = '...';
	flexMenuLi.append(flexMenuLink);
	flexMenuLi.append(flexMenuUl);
	menu.append(flexMenuLi);
	for (let i = menuFirstItem.length - 1; i >= 0; i--) {
		
		if (menuFirstItem[i].classList.contains("flexmenu")){
			continue;
		}
		if (menuFirstWidth < menuWidth){
			break;
		};
		if (menuFirstWidth > menuWidth){
			menuFirstWidth -= menuFirstItem[i].offsetWidth;
			flexMenuUl.prepend(menuFirstItem[i]);
		};
	}
}
});