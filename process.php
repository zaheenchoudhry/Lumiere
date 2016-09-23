<!DOCTYPE html>
<html>
	<head>
		<title>Lumi&#232re </title>
		<meta name="viewport" content="width=1024" />
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="style.css" />
		<link rel="stylesheet" type="text/css" href="navBar.css" />
		<link rel="stylesheet" type="text/css" href="process.css" />
		<script src="jscript.js"></script>
		<script src="jscriptAbout.js"></script>
		<script src="jscriptProcess.js"></script>
		<script src="jquery.1.9.1.min.js"></script>
        <script src="jquery_smoothscroll.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/ScrollToPlugin.min.js"></script>
		<!-- <link href='http://fonts.googleapis.com/css?family=Merriweather:700' rel='stylesheet' type='text/css'> -->
	</head>
	<body>
		<?php
		require "header.html";
		?>
		
		<div id="temp11"><p id="temp11P">0</p></div>
		
		<div id="processHeader">
			<div id="headerDarkDiv" style="background:rgba(0, 0, 0, 0.45);">
				<div id="processHeaderContents">
					<p id="processP1">LUMI&#200RE </p>
					<hr>
					<p id="processP2">PROCESS</p>
				</div>
			</div>
		</div>
		
		<!--<div id="transitionBg"></div>-->
		
		<div id="testbg1">
			<div id="testblk1">
				<div id="test1"></div>
				<?php
				//for($i = 0; $i < 102; $i++) {
					//echo "<div class='testDiv' id='testDiv".($i)."'></div>";
				//}
				?>
			</div>
		</div>
		
		<?php
		require "footer.html";
		?>
		
	</body>
</html>