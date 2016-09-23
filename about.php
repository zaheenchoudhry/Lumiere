<!DOCTYPE html>
<html>
	<head>
		<title>Lumi&#232re </title>
		<meta name="viewport" content="width=1024" />
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="style.css" />
		<link rel="stylesheet" type="text/css" href="navBar.css" />
		<link rel="stylesheet" type="text/css" href="aboutCss.php" />
		<script src="jscript.js"></script>
		<script src="jscriptAbout.js"></script>
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
		
		<div id="aboutHeader">
			<div id="headerDarkDiv" style="background:rgba(0, 0, 0, 0.45);">
				<div id="aboutHeaderContents">
					<p id="aboutP1">LUMI&#200RE </p>
					<hr>
					<p id="aboutP2">ABOUT</p>
				</div>
			</div>
		</div>
		
		<div id="aboutInfo">
			<div id="aboutTextHolder">
				<!--<img src="DisplayImages/Lumiere_Team.jpg" height="600px" width="1000px"></img>-->
				<?php
					$file = fopen("about.txt", "r");
					$counter = 0;
					while (!feof($file)) {
						$counter ++;
						$aboutText = fgetcsv($file, 2048, "|");
						
						echo "<p id='infoP".$counter."'>".$aboutText[0]."</p>";
					}
				?>
			</div>
		</div>
		<!--
		<div id="memPicDiv">
			<div style="height:100%; width:100%; background:rgba(0, 0, 0, 0.4);"></div>
		</div>-->
		
		<div id="membersHeading">
			<p id="membersHeadingP1">Our Spectacular Team</p>
			<p id="membersHeadingP2">The People That Make Us Amazing</p>
		</div>
		
		<?php
			$file = fopen("members.csv", "r");
			$counter = 0;
			
			echo "<div id='membersHolder'>";
			
				while (!feof($file)) {
					$members = fgetcsv($file, 2048, "|");
					$counter ++;
					
					echo '<div class="memberDivs" id="memberDivs'.$counter.'"  onmouseover="changeOpacOver(blackDivAbout'.$counter.')" onmouseout="changeOpacOut(blackDivAbout'.$counter.')">
						<img id="memberDivsImg'.$counter.'" src="Lumiere_Members/'.$members[5].'"/>
						<img id="memberDivsImgA'.$counter.'" src="Lumiere_Members/'.$members[6].'"/>
						<div id="blackDivAbout'.$counter.'"></div>
						<div class="lumMemberInfo">
							<p class="lumMemberInfoP1">'.$members[1].' '.$members[2].'</p>
							<p class="lumMemberInfoP2">'.$members[4].'</p>
							<p class="lumMemberInfoP3">'.$members[3].'</p>
						</div>
					</div>';
					//  onLoad='setDimensions(memberDivs".$counter.")' onResize='setDimensions(memberDivs".$counter.")'
				}
			
			echo "</div>";
		?>
		
		<?php
		require "footer.html";
		?>
		
	</body>
</html>