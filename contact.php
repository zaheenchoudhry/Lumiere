<!DOCTYPE html>
<html>
	<head>
		<title>Lumi&#232re </title>
		<meta name="viewport" content="width=1024" />
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="style.css" />
		<link rel="stylesheet" type="text/css" href="navBar.css" />
		<link rel="stylesheet" type="text/css" href="contact.css" />
		<script src="jscript.js"></script>
		<script src="jscriptAbout.js"></script>
		<script src="jquery.1.9.1.min.js"></script>
        <script src="jquery_smoothscroll.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/ScrollToPlugin.min.js"></script>
		<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDL0lpLwCV29KvXYkD2cOUSgIZRClkOEfk&amp;sensor=false"></script>
		<script>
			function initialize() {
				var myLatlng = new google.maps.LatLng(43.77231,-79.32274);
				var mapProp = {center:myLatlng, zoom:16, mapTypeId:google.maps.MapTypeId.ROADMAP, disableDoubleClickZoom:true, disableDefaultUI:true, scrollwheel:false, styles:[{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}]};
				var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
				var marker = new google.maps.Marker({position: myLatlng, map: map, title: 'Lumiere Headquarters'});
			}
			google.maps.event.addDomListener(window, 'load', initialize);
		</script>
	</head>
	<body>
		<?php
		session_start();
		require "header.html";
		?>
		
		<div id="contactHeader">
			<div id="headerDarkDiv">
				<div id="contactHeaderContents">
					<p id="contactP1">LUMI&#200RE</p>
					<hr>
					<p id="contactP2">CONTACT</p>
				</div>
			</div>
		</div>
		
		<div id="contactForm">
			<div id="contactFormHolder">
				<p id="contactHead1">Contact US</p>
				<p id="contactHead2">Leave us a message, and we’ll be in touch.</p>
				<hr>
				<form id="lumForm" method="post" target="iframeMessage" action="mail.php">
					<p id="contactPP1">Your Name</p><br>
					<input id="nameInput" type="text" name="name" required></input><br>
					<p id="contactPP2">Your E-Mail</p><br>
					<input id="emailInput" type="email" name="email" required></input><br>
					<p id="contactPP3">Subject</p><br>
					<input id="subjectInput" type="text" name="subject" required></input><br>
					<p id="contactPP4">Your Message</p><br>
					<textarea id="messageInput" name="message" required></textarea><br>
					<input type="submit" value="SUBMIT" id="submitForm"></input>
					<!--<input id="reset" type="reset" value="reset"></input>-->
				</form>
				<iframe id="iframeMessage" name="iframeMessage"></iframe>
			</div>
		</div>
		
		<div id="mapdiv">
            <div id="mapAddress">
                <p style="padding-top:90px;"><span style="color:#f5f5f5;">We are located at:</span><br/> 500 Consumers Road<br/> Toronto, Ontario<br/> M2J 1P8 <br/> Enbridge Gas Comp.</p>
            </div>
            <div id="googleMap" style="height:500px;width:75%"></div>
        </div>
		
		<?php
		require "footer.html";
		?>
		
	</body>
</html>