<!DOCTYPE html>
<html>
	<head>
		<title>Lumi&#232re </title>
		<meta name="viewport" content="width=1024" />
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="style.css" />
		<link rel="stylesheet" type="text/css" href="navBar.css" />
		<link rel="stylesheet" type="text/css" href="products.css" />
		<!-- <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Lato"> -->
		<script src="jscript.js"></script>
		<script src="jscriptAbout.js"></script>
        <script src="jquery.1.9.1.min.js"></script>
        <script src="jquery_smoothscroll.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/ScrollToPlugin.min.js"></script>
	</head>
	<body>
		<?php
		require "header.html";
		?>
<!--
<div id="vidCont">
			<video autoplay loop poster="polina.jpg" id="bgvid">
				<source src="polina.webm" type="video/webm">
				<source src="DisplayImages/springCollection.mp4" type="video/mp4">
			</video>
		</div>
-->
		<div id="productsHeader">
			<div id="headerDarkDiv">
				<div id="productsHeaderContents">
					<p id="productsP1">LUMI&#200RE</p>
					<hr>
					<p id="productsP2">PRODUCTS</p>
				</div>
			</div>
		</div>
		
		<div id="productsHolder">
			<div class="holderContents">
				<a href="product.php?product=Mountain_Musk"><div class="candleProduct" id="candleA" onmouseover="zoomIn(candleA, productsHolderP1A, namePPA, arrow2A)" onmouseout="zoomOut(candleA, productsHolderP1A, namePPA, arrow2A)"></div></a>
				<a href="product.php?product=Cookie_Crumble"><div class="candleProduct" id="candleB" onmouseover="zoomIn(candleB, productsHolderP1B, namePPB, arrow2B)" onmouseout="zoomOut(candleB, productsHolderP1B, namePPB, arrow2B)"></div></a>
				<a href="product.php?product=Wintermint_Candy"><div class="candleProduct" id="candleC" onmouseover="zoomIn(candleC, productsHolderP1C, namePPC, arrow2C)" onmouseout="zoomOut(candleC, productsHolderP1C, namePPC, arrow2C)"></div></a>
				<div id="holderContentsText">
					<a href="product.php?product=Mountain_Musk"><div class="productsHolderP1" id="productsHolderP1A" onmouseover="zoomIn(candleA, productsHolderP1A, namePPA, arrow2A)" onmouseout="zoomOut(candleA, productsHolderP1A, namePPA, arrow2A)"><p id="namePPA" align="center">Mountain Musk</p><div class="arrow2"><p id="arrow2A">➔</p></div></div></a>
					<a href="product.php?product=Cookie_Crumble"><div class="productsHolderP1" id="productsHolderP1B" onmouseover="zoomIn(candleB, productsHolderP1B, namePPB, arrow2B)" onmouseout="zoomOut(candleB, productsHolderP1B, namePPB, arrow2B)"><p id="namePPB" align="center">Cookie Crumble</p><div class="arrow2"><p id="arrow2B">➔</p></div></div></a>
					<a href="product.php?product=Wintermint_Candy"><div class="productsHolderP1" id="productsHolderP1C" onmouseover="zoomIn(candleC, productsHolderP1C, namePPC, arrow2C)" onmouseout="zoomOut(candleC, productsHolderP1C, namePPC, arrow2C)"><p id="namePPC" align="center">Wintermint Candy</p><div class="arrow2"><p id="arrow2C">➔</p></div></div></a>
				</div>
			</div>
			<div class="holderContents" id="holderContents2">
				<a href="product.php?product=Summer_Tango"><div class="candleProduct" id="candleD" onmouseover="zoomIn(candleD, productsHolderP1D, namePPD, arrow2D)" onmouseout="zoomOut(candleD, productsHolderP1D, namePPD, arrow2D)"></div></a>
				<a href="product.php?product=Sweet_Lilac"><div class="candleProduct" id="candleE" onmouseover="zoomIn(candleE, productsHolderP1E, namePPE, arrow2E)" onmouseout="zoomOut(candleE, productsHolderP1E, namePPE, arrow2E)"></div></a>
				<a href="product.php?product=Ocean_Breeze"><div class="candleProduct" id="candleF" onmouseover="zoomIn(candleF, productsHolderP1F, namePPF, arrow2F)" onmouseout="zoomOut(candleF, productsHolderP1F, namePPF, arrow2F)"></div></a>
				<div id="holderContentsText">
					<a href="product.php?product=Summer_Tango"><div class="productsHolderP1" id="productsHolderP1D" onmouseover="zoomIn(candleD, productsHolderP1D, namePPD, arrow2D)" onmouseout="zoomOut(candleD, productsHolderP1D, namePPD, arrow2D)"><p id="namePPD" align="center">Summer Tango</p><div class="arrow2"><p id="arrow2D">➔</p></div></div></a>
					<a href="product.php?product=Sweet_Lilac"><div class="productsHolderP1" id="productsHolderP1E" onmouseover="zoomIn(candleE, productsHolderP1E, namePPE, arrow2E)" onmouseout="zoomOut(candleE, productsHolderP1E, namePPE, arrow2E)"><p id="namePPE" align="center">Sweet Lilac</p><div class="arrow2"><p id="arrow2E">➔</p></div></div></a>
					<a href="product.php?product=Ocean_Breeze"><div class="productsHolderP1" id="productsHolderP1F" onmouseover="zoomIn(candleF, productsHolderP1F, namePPF, arrow2F)" onmouseout="zoomOut(candleF, productsHolderP1F, namePPF, arrow2F)"><p id="namePPF" align="center">Ocean Breeze</p><div class="arrow2"><p id="arrow2F">➔</p></div></div></a>
				</div>
			</div>
		</div>
		
		<?php
		require "footer.html";
		?>
	</body>
</html>