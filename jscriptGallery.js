window.addEventListener("DOMContentLoaded", setDimGallery, false);
window.addEventListener("resize", setDimGallery, false);
/*
document.onkeydown = function(event) {
	for (var i = 0; i < 9; i++) {
		if (document.getElementById('fullScrImgCont' + (i + 1)).style.width == "100%") {
			if (event.keyCode == 37) {
				if (i == 0) {
					changePic("fullScrImgCont1", "fullScrImgCont9", "fullScrImg9");
				} else {
					changePic(("fullScrImgCont" + (i + 1)), ("fullScrImgCont" + i), ("fullScrImg" + i));
				}
			}
			else if (event.keyCode == 39) {
				if (i == 8) {
					changePic("fullScrImgCont9", "fullScrImgCont1", "fullScrImg1");
				} else {
					changePic(("fullScrImgCont" + (i + 1)), ("fullScrImgCont" + (i + 2)), ("fullScrImg" + (i + 2)));
				}
			}
		}
	}
}
*/

function setDimGallery() {
	var x5 = document.getElementById('finishedProducts1');
	var x6 = document.getElementById('finishedProducts2');
	if (window.innerWidth > 1050) {
		x5.style.height = ((((window.innerWidth / 3) * 0.665625) * 3)) + "px";
		x6.style.height = ((((window.innerWidth / 3) * 0.665625) * 3)) + "px";
	} else {
		x5.style.height = (255 * 3) + "px";
		x6.style.height = (255 * 3) + "px";
	}
	for (var i = 0; i < 21; i++) {
		var x = document.getElementById('picContainerA' + (i + 1));
		//var x2 = document.getElementById('picContainerAImg' + (i + 1));
		var x3 = document.getElementById('translucentDivGallery' + (i + 1));

		if (window.innerWidth > 1050) {
			x.style.width =  ((window.innerWidth / 3) - 6) + "px";
			x.style.height = ((window.innerWidth / 3) * 0.665625) + "px";
			x.style.backgroundSize = ((window.innerWidth / 3) - 6) + "px " + ((window.innerWidth / 3) * 0.665625) + "px";
			x3.style.width =  ((window.innerWidth / 3) - 6) + "px";
			x3.style.height = ((window.innerWidth / 3) * 0.665625) + "px";		
			//x2.style.width =  ((window.innerWidth / 3) - 8) + "px";
			//x2.style.height = ((window.innerWidth / 3) * 0.665625) + "px";
		} else {
			x.style.width = 380 + "px";
			x.style.height = 255 + "px";
			x.style.backgroundSize = "381px 255px";
			x3.style.width = 380 + "px";
			x3.style.height = 255 + "px";
			//x2.style.width = 381 + "px";
			//x2.style.height = 255 + "px";
		}
	}
}
function setDimGal2(z) {
	if (window.innerWidth > 1050) {
		z.style.backgroundSize = ((window.innerWidth / 2.8) - 6) + "px " + ((window.innerWidth / 2.8) * 0.665625) + "px";
	} else {
		z.style.backgroundSize = "400px 268px";
	}
}
function changeOpacOverGallery(x, y, z) {
	x.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
	y.style.display = "block";
	setDimGal2(z);
}

function changeOpacOutGallery(x, y, z) {
	x.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
	y.style.display = "none";
	setDimGallery();
}
function viewImg(x, y) {
	x.style.width = "100%";
	y.style.width = (window.innerWidth * 0.8) + "px";
	y.style.height = ((window.innerWidth * 0.8) * 0.6) + "px";
	y.style.left = "50%";
	y.style.top = "50%";
	y.style.marginLeft = ((window.innerWidth * -0.8) / 2) + "px";
	y.style.marginTop = ((window.innerWidth * -0.8) * 0.6 / 2) + "px";
	y.style.backgroundSize = (window.innerWidth * 0.8) + "px " + ((window.innerWidth * 0.8) * 0.65) + "px";
	disableScroll();
}
function closeImg(x) {
	x.style.width = "0%";
	enableScroll();
}
function changePic(x, y, z) {
	x.style.width = "0%";
	viewImg(y, z);
}