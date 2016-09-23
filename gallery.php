<!DOCTYPE html>
<html>
	<head>
		<title>Lumi&#232re </title>
		<meta name="viewport" content="width=1024" />
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="style.css" />
		<link rel="stylesheet" type="text/css" href="navBar.css" />
		<link rel="stylesheet" type="text/css" href="gallery.css" />
		<script src="jscript.js"></script>
		<script src="jscriptAbout.js"></script>
		<script src="jscriptGallery.js"></script>
		<script src="jquery.1.9.1.min.js"></script>
        <script src="jquery_smoothscroll.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/ScrollToPlugin.min.js"></script>
	</head>
	<body>
		<?php
			session_start();
			require "header.html";

			for ($i = 0; $i < 21; $i++) {
				echo "<div class='fullScrImgCont' id='fullScrImgCont".($i + 1)."'>";
					echo "<div class='fullScrImg' id='fullScrImg".($i + 1)."'>";
						echo "<p class='closeImg' onclick='closeImg(fullScrImgCont".($i + 1).")'>✖</p>";
						if($i == 0) {
							echo "<img class='previousPic changePicArrow' onclick='changePic(fullScrImgCont1, fullScrImgCont21, fullScrImg21)'></img>";
							echo "<img class='nextPic changePicArrow' onclick='changePic(fullScrImgCont1, fullScrImgCont2, fullScrImg2)'></img>";
						} else if($i == 20) {
							echo "<img class='previousPic changePicArrow' onclick='changePic(fullScrImgCont21, fullScrImgCont20, fullScrImg20)'></img>";
							echo "<img class='nextPic changePicArrow' onclick='changePic(fullScrImgCont21, fullScrImgCont1, fullScrImg1)'></img>";
						} else {
							echo "<img class='previousPic changePicArrow' onclick='changePic(fullScrImgCont".($i + 1).", fullScrImgCont".($i).", fullScrImg".($i).")'></img>";
							echo "<img class='nextPic changePicArrow' onclick='changePic(fullScrImgCont".($i + 1).", fullScrImgCont".($i + 2).", fullScrImg".($i + 2).")'></img>";
						}
					echo "</div>";
				echo "</div>";
			}
		?>
		
		<div id="galleryHeader">
			<div id="headerDarkDiv">
				<div id="galleryHeaderContents">
					<p id="galleryP1">LUMI&#200RE</p>
					<hr>
					<p id="galleryP2">GALLERY</p>
				</div>
			</div>
		</div>
		
		<?php
			$num = 0;
			for ($j = 0; $j < 2; $j++) {
				echo "<div class='finalPicHeading'>";
					if ($j == 0) {
						$num = 9;
						echo "<p class='finalPicHeadingP1'>Finished Products</p>";
						echo "<p class='finalPicHeadingP2'>Our Amazing Collection</p>";
					} else if ($j == 1) {
						$num = 12;
						echo "<p class='finalPicHeadingP1' style='font-size:24px;'>Production Session and Sales Events</p>";
						echo "<p class='finalPicHeadingP2'>Our Process</p>";
					}
				echo "</div>";
				echo "<div id='finishedProducts".($j + 1)."'>";
					for ($i = 0; $i < $num; $i++) {
						echo "<div class='picContainerA' id='picContainerA".($i + 1 + ($j * 9))."' onclick='viewImg(fullScrImgCont".($i + 1 + ($j * 9)).", fullScrImg".($i + 1 + ($j * 9)).")'>
							<div class='translucentDivGallery' id='translucentDivGallery".($i + 1 + ($j * 9))."' onmouseover='changeOpacOverGallery(translucentDivGallery".($i + 1 + ($j * 9)).", enlargeSprite".($i + 1 + ($j * 9)).", picContainerA".($i + 1 + ($j * 9)).")' onmouseout='changeOpacOutGallery(translucentDivGallery".($i + 1 + ($j * 9)).", enlargeSprite".($i + 1 + ($j * 9)).", picContainerA".($i + 1 + ($j * 9)).")'>
								<div class='enlargeSprite' id='enlargeSprite".($i + 1 + ($j * 9))."'></div>
							</div>
							
						</div>";
						//echo "<img class='picContainerAImg' id='picContainerAImg".($i + 1)."' src='DisplayImages/Lumiere_Banner_".($i + 1).".jpg'></img>";
					}
				echo "</div>";
			}
		?>
		
		<?php
		require "footer.html";
		?>
		
	</body>
</html>