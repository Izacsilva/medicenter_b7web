window.onload = function() {
	document.querySelector("#menuMobile").addEventListener("click", function() {
		if(document.querySelector(".menu .navigation .menu_list").style.display == "flex") {
			document.querySelector(".menu .navigation .menu_list").style.display = "none";
		} else {
			document.querySelector(".menu .navigation .menu_list").style.display = "flex";
		}
	});
};