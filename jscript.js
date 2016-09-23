window.onscroll = changePosition;
//window.addEventListener("scroll", headerParallax, false);
//window.addEventListener("DOMContentLoaded", headerParallax, false);
window.addEventListener("DOMContentLoaded", changePosition, false);
window.addEventListener("DOMContentLoaded", scrollToTop, false);
//window.addEventListener("DOMContentLoaded", initLoad, false);
//window.addEventListener("DOMContentLoaded", setProductDimensions, false);
//window.addEventListener("resize", setProductDimensions, false);
//window.addEventListener("DOMContentLoaded", setHeaderHeight, false);
//window.addEventListener("scroll", hideHeader, false);

//window.onbeforeunload = function
function scrollToTop() {
	window.scrollTo(0,0);
}

function closePopup(x) {
	x.style.height = "0px";
}

function initLoad() {
	var header = document.getElementById('navHeader');
	header.style.borderBottom = "#231f20 1px solid";
	header.style.marginTop = "0px";
}

/*function headerParallax() {
	
	var divA = document.getElementById('header');
	var divB = document.getElementById('headerContents');
	
	//divA.style.backgroundPosition = (-window.pageXOffset / 8) + "px " + (-window.pageYOffset / 8) + "px";
	divB.style.marginTop = (-100 - (window.pageYOffset / 4)) + "px";
	divB.style.opacity = (1 / (window.pageYOffset / 200)) + "";
	
	if (window.pageYOffset > window.innerHeight) {
		divB.style.opacity = "0";
	}
}*/

function disableScroll() {
    document.documentElement.style.overflow = 'hidden';  // chrome, firefox
    document.body.scroll = "no"; // ie
	window.onwheel = function(){ return false; }
}

function enableScroll() {
	document.documentElement.style.overflow = 'auto';  // chrome, firefox
    document.body.scroll = "yes"; // ie
	window.onwheel = function(){ return true; }
}

function toggleNav(){
	var nav = document.getElementById('nav');
	var header = document.getElementById('navHeader');
	var menuButton = document.getElementById('menuBut');
	var text = document.getElementById("jaP");
	var icon2 = document.getElementById("closeIcon");
	var closeButton = document.getElementById('closeBut');
	var compName = document.getElementById('compName');
	if (nav.style.width == "100%"){
		nav.style.width = "0%";
		closeButton.style.display = "none";
		menuButton.style.display = "block";
		compName.style.color = "white";
		menuButton.style.color = "white";
		closeButton.style.color = "white";
		enableScroll();
		changePosition();
	} else {
		nav.style.width = "100%";
		compName.style.color = "white";
		menuButton.style.color = "white";
		closeButton.style.color = "white";
		header.classList.remove('transition');
		header.classList.add('notransition');
		header.style.position = "fixed";
		header.style.marginTop = "3%";
		header.style.backgroundColor = "rgba(0, 0, 0, 0)";
		header.style.color = "white";
		menuButton.style.display = "none";
		closeButton.style.display = "block";
		text.style.color = "#f6364d";
		icon2.style.color = "#f6364d";
		header.style.borderBottom = "none";
		disableScroll();
		//cab340
	}
}

function changePosition() {
    var header = document.getElementById("navHeader");
	var text = document.getElementById("jaP");
	var icon1 = document.getElementById("menuIcon");
	var icon2 = document.getElementById("closeIcon");
	var closeButton = document.getElementById('closeBut');
	var compName = document.getElementById('compName');
	var menuButton = document.getElementById('menuBut');
	var url = window.location.href;
	if(document.getElementById('nav').style.width != "100%") {
		if (window.pageYOffset > 80 || url.substr(url.lastIndexOf('/') + 1) == "product.php?product=Mountain_Musk" || url.substr(url.lastIndexOf('/') + 1) == "product.php?product=Cookie_Crumble" || url.substr(url.lastIndexOf('/') + 1) == "product.php?product=Wintermint_Candy" || url.substr(url.lastIndexOf('/') + 1) == "product.php?product=Sweet_Lilac" || url.substr(url.lastIndexOf('/') + 1) == "product.php?product=Ocean_Breeze" || url.substr(url.lastIndexOf('/') + 1) == "product.php?product=Summer_Tango" || url.substr(url.lastIndexOf('/') + 1) == "cart.php") {
			header.style.position = "fixed";
			header.style.marginTop = "0px";
			header.style.backgroundColor = "rgba(45, 45, 48, 0.95)";
			header.style.color = "#494C50";
			header.classList.remove('notransition');
			header.classList.add('transition');
			header.style.borderBottom = "#231f20 1px solid";
			text.style.color = "#f6364d";
			icon1.style.color = "#f6364d";
			icon2.style.color = "#f6364d";
			compName.style.color = "white";
			menuButton.style.color = "white";
			closeButton.style.color = "white";
		} else {
			header.style.position = "absolute";
			header.style.marginTop = "3%";
			header.style.backgroundColor = "rgba(0, 0, 0, 0)";
			header.style.color = "white";
			header.classList.remove('transition');
			header.classList.add('notransition');
			header.style.borderBottom = "none";
		}
	}
	playProcess();
}

function headerNavBarToggle() {
	var header = document.getElementById("navHeader");
	var text = document.getElementById("jaP");
	var icon1 = document.getElementById("menuIcon");
	var icon2 = document.getElementById("closeIcon");
	var closeButton = document.getElementById('closeBut');
	var compName = document.getElementById('compName');
	var menuButton = document.getElementById('menuBut');
	header.style.visibility = "visible";
	header.style.position = "fixed";
	header.style.marginTop = "0px";
	headDivA.style.marginTop = "0px";
	headDivB.style.marginTop = "0px";
	headDivC.style.marginTop = "0px";
	header.style.backgroundColor = "rgba(45, 45, 48, 0.95)";
	header.style.color = "#494C50";
	header.classList.remove('notransition');
	header.classList.add('transition');
	header.style.borderBottom = "#231f20 1px solid";
	text.style.color = "#f6364d";
	icon1.style.color = "#f6364d";
	icon2.style.color = "#f6364d";
	compName.style.color = "white";
	menuButton.style.color = "white";
	closeButton.style.color = "white";
}

function changeNavDivColorOver(x) {
	x.style.fontSize = "22px";
	x.style.paddingTop = "100px";
}

function changeNavDivColorOut(x) {
	x.style.fontSize = "18px";
	x.style.paddingTop = "180px";
}

function shiftUp(x) {
	x.style.marginTop = "300px";
}
function shiftDown(x) {
	x.style.marginTop = "400px";
}
/*
function setHeaderHeight() {
	var header = document.getElementById("header");
	var browserHeight = window.innerHeight;
	header.style.height = browserHeight;
}*/
/*
function hideHeader() {
	var variable = document.getElementById("fixedDiv");
	if (window.pageYOffset > 400) {
		variable.style.opacity = "0";
	} else {
		variable.style.opacity = "1";
	}
}*/







// Detect if the browser is IE or not.
// If it is not IE, we assume that the browser is NS.
//var IE = document.all?true:false;

// If NS -- that is, !IE -- then set up for mouse capture
//if (!IE) document.captureEvents(
	//Event.MOUSEMOVE;
//)

// Set-up to use getMouseXY function onMouseMove
document.onmousemove = getMouseXY;

// Temporary variables to hold mouse x-y pos.s
var tempX = 0;
var tempY = 0;

// Main function to retrieve mouse x-y pos.s

function getMouseXY(e) {
	//if (IE) { // grab the x-y pos.s if browser is IE;
		//tempX = event.clientX + document.body.scrollLeft;
		//tempY = event.clientY + document.body.scrollTop;
	//} else {  // grab the x-y pos.s if browser is NS
		tempX = e.pageX;
		tempY = e.pageY;
	//}  
	// eliminate possible negative values
	if (tempX < 0){
		tempX = 0;
	}
	if (tempY < 0){
		tempY = 0;
	}
	
	document.getElementById('productPng').style.marginLeft = (170 - (window.innerWidth / 40) + (tempX / 7 * 1)) + "px";
	document.getElementById('productPng1').style.marginLeft = (0 + (window.innerWidth / 120) + (tempX / 15 * 1)) + "px";
	document.getElementById('productPng2').style.marginLeft = (400 + (window.innerWidth / 120) + (tempX / 15 * 1)) + "px";
	
	document.getElementById('productPng').style.marginTop = (-10 + (tempY / 20 * 1)) + "px";
	document.getElementById('productPng1').style.marginTop = (85 + (tempY / 35 * 1)) + "px";
	document.getElementById('productPng2').style.marginTop = (85  + (tempY / 35 * 1)) + "px";
	document.getElementById('newProductDiv').style.backgroundPosition = ((window.innerWidth / -20) + (window.innerWidth / 170) + (tempX / 51 * 1)) + "px " + (-80 + (tempY / 70 * 1)) + "px";
	
	//document.getElementById('productPng').style.marginTop = (50 +s (tempY / 50 * -1)) + "px";
	/*document.getElementById('productPng1').style.marginLeft = (220 + (tempX / 20 * -1)) + "px";
	document.getElementById('productPng1').style.marginTop = (250 + (tempY / 10 * -1)) + "px";*/
	//document.Show.MouseX.value = tempX;
	//document.Show.MouseY.value = tempY;
}

/*function setProductDimensions() {
	//var productA = document.getElementById('candleA');
	//var productB = document.getElementById('candleB');
	//var productC = document.getElementById('candleC');
	//productA.style.width = (window.innerWidth / 4) + "px";
	//productB.style.width = (window.innerWidth / 4) + "px";
	//productC.style.width = (window.innerWidth / 4) + "px";
	//productA.style.height = (window.innerWidth / 3) + "px";
	//productB.style.height = (window.innerWidth / 3) + "px";
	//productC.style.height = (window.innerWidth / 3) + "px";
	//productB.style.marginLeft = (window.innerWidth / 150) + "px";
	//productB.style.marginRight = (window.innerWidth / 150) + "px";
}*/


function zoomIn(x, y, z, a) {
	x.style.backgroundSize = "380px 560px";
	y.style.backgroundColor = "#f6364D";
	z.style.color = "white";
	a.style.backgroundColor = "white";
	a.style.borderColor = "#f6364D";
	a.style.color = "#f6364D";
}

function zoomOut(x, y, z, a) {
	x.style.backgroundSize = "340px 500px";
	y.style.backgroundColor = "white";
	z.style.color = "#231f20";
	a.style.backgroundColor = "none";
	a.style.borderColor = "#aaaaaa";
	a.style.color = "#aaaaaa";
}

function increment(x) {
	if (parseInt(x.value) < 100) {
		var val = parseInt(x.value) + 1;
		x.value = val;
	}
}
function decrement(x) {
	if (parseInt(x.value) > 1) {
		var val = parseInt(x.value) - 1;
		x.value = val;
	}
	
}
function watchVid(x) {
	x.style.width = "100%";
	disableScroll();
}
function closeVid(x) {
	x.style.width = "0%";
	enableScroll();
}
function clearForm() {
	//document.getElementById("nameInput").value="";
	//document.getElementById("emailInput").value="";
	//document.getElementById("subjectInput").value="";
	//document.getElementById("messageInput").value="";
	//document.getElementById("reset").click();
}