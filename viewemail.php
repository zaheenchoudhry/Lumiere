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
	</head>
	<body>
		<?php
			$mysql = new mysqli("localhost","root","","lumiere");
			$result = $mysql->query("SELECT * FROM Email");
		
			while ($row = $result->fetch_object()) {
				echo "<div style='height:800px; float:left;' id='contactForm'>";
					echo "<div style='height:800px;' id='contactFormHolder'>";
						echo "<hr>";
						echo "<form id='lumForm'>";
							echo "<p id='contactPP1'>Name ".$row->number."</p><br>";
							echo "<input id='nameInput' type='text' name='name' value='".$row->name."'></input><br>";
							echo "<p id='contactPP2'>E-Mail ".$row->number."</p><br>";
							echo "<input id='emailInput' type='email' name='email' value='".$row->email."'></input><br>";
							echo "<p id='contactPP3'>Subject ".$row->number."</p><br>";
							echo "<input id='subjectInput' type='text' name='subject' value='".$row->subject."'></input><br>";
							echo "<p id='contactPP4'>Message ".$row->number."</p><br>";
							echo "<textarea id='messageInput' name='message'>".$row->message."</textarea><br>";
						echo "</form>";
					echo "</div>";
				echo "</div>";
			}
		?>
	</body>
</html>