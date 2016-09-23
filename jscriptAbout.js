window.addEventListener("scroll", headerParallax2, false);
window.addEventListener("DOMContentLoaded", headerParallax2, false);
window.addEventListener("DOMContentLoaded", setDimAbt, false);
window.addEventListener("resize", setDimAbt, false);
//window.addEventListener("resize", setProductDimensions, false);

function headerParallax2() {
	var url = window.location.href;
	
	if (url.substr(url.lastIndexOf('/') + 1) == "about.php") {
		var divC = document.getElementById('aboutHeader');
		var divD = document.getElementById('aboutHeaderContents');
	} else if (url.substr(url.lastIndexOf('/') + 1) == "products.php") {
		var divC = document.getElementById('productsHeader');
		var divD = document.getElementById('productsHeaderContents');
	} else if (url.substr(url.lastIndexOf('/') + 1) == "contact.php") {
		var divC = document.getElementById('contactHeader');
		var divD = document.getElementById('contactHeaderContents');
	} else if (url.substr(url.lastIndexOf('/') + 1) == "gallery.php") {
		var divC = document.getElementById('galleryHeader');
		var divD = document.getElementById('galleryHeaderContents');
	} else if (url.substr(url.lastIndexOf('/') + 1) == "process.php") {
		var divC = document.getElementById('processHeader');
		var divD = document.getElementById('processHeaderContents');
	}
	
	if (url.substr(url.lastIndexOf('/') + 1) != "process.php") {
		divC.style.backgroundPosition = (-window.pageXOffset / 5) + "px " + (-window.pageYOffset / 5) + "px";
	}
	
	divD.style.marginTop = (-80 - (window.pageYOffset / 2.2)) + "px";
	divD.style.opacity = (0.5 / (window.pageYOffset / 200)) + "";
	
	if (window.pageYOffset > window.innerHeight) {
		divD.style.opacity = "0";
	}
}

function setDimAbt() {

	for (var i = 0; i < 30; i++) {
		var x = document.getElementById('memberDivs' + (i + 1));
		var x2 = document.getElementById('memberDivsImg' + (i + 1));
		var x3 = document.getElementById('memberDivsImgA' + (i + 1));
		var x4 = document.getElementById('blackDivAbout' + (i + 1));
		var x5 = document.getElementById('membersHolder');
		
		if (window.innerWidth > 1050) {
			x.style.width =  ((window.innerWidth / 3) - 8) + "px";
			x.style.height = ((window.innerWidth / 3) * 0.665625) + "px";
			x2.style.width =  ((window.innerWidth / 3) - 8) + "px";
			x2.style.height = ((window.innerWidth / 3) * 0.665625) + "px";
			x3.style.width =  ((window.innerWidth / 3) - 8) + "px";
			x3.style.height = ((window.innerWidth / 3) * 0.665625) + "px";
			x4.style.width =  ((window.innerWidth / 3) - 8) + "px";
			x4.style.height = ((window.innerWidth / 3) * 0.665625) + "px";
			x5.style.height = ((((window.innerWidth / 3) * 0.665625) * 10) + 20) + "px";
		} else {
			x.style.width = 381 + "px";
			x.style.height = 255 + "px";
			x2.style.width = 381 + "px";
			x2.style.height = 255 + "px";
			x3.style.width = 381 + "px";
			x3.style.height = 255 + "px";
			x4.style.width = 381 + "px";
			x4.style.height = 255 + "px";
			x5.style.height = (257 * 10) + "px";
		}
	}
}

function changeOpacOver(x) {
	x.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
}

function changeOpacOut(x) {
	x.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
}