setInterval(playProcess(), 50);
var oldPos = window.pageYOffset;
var imageNumber = 0;
var B = document.body;
var H = document.documentElement;
var height = 0;
var scroll = (14000/140) / 2;

window.onbeforeunload = function(){
	window.scrollTo(0,0);
}
/*
if (typeof document.height !== 'undefined') {
	height = document.height; // For webkit browsers
} else {
	height = Math.max( B.scrollHeight, B.offsetHeight,H.clientHeight, H.scrollHeight, H.offsetHeight );
}*/

function playProcess() {
	var processDiv = document.getElementById("test1");
	var temp11P = document.getElementById("temp11P");
	if ((window.pageYOffset - (window.innerHeight)) >= 0) {
		imageNumber = Math.floor((window.pageYOffset - (window.innerHeight)) / scroll) | 0;
		temp11P.innerHTML = imageNumber + "";
		processDiv.style.backgroundImage = 'url(ProcessPics/process' + imageNumber + '.png)';

		/*for(var i = 0; i < 102; i++) {
			var xx = document.getElementById('testDiv' + imageNumber);
			if(i != imageNumber) {
				xx.style.width = "0%";
			} else {
				xx.style.width = "100%";
			}
		}*/
		//processDiv.style.backgroundImage = 'url(ProcessPics/process' + imageNumber + '.png)';
	}
}

