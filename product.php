<!DOCTYPE html>
<html>
	<head>
		<title>Lumi&#232re </title>
		<meta name="viewport" content="width=1024" />
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="style.css" />
		<link rel="stylesheet" type="text/css" href="navBar.css" />
		<link rel="stylesheet" type="text/css" href="products.css" />
		<link rel="stylesheet" type="text/css" href="aboutCss.php" />
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
		
		<div id="candleHolder">
			<div id="candleContainer">
				<?php
				echo "<img src='DisplayImages/".$_GET['product'].".jpg'></img>";
				echo "<p id='candleTitle1' class='candleTitle'>".substr($_GET['product'], 0, strpos($_GET['product'], '_'))." ".substr($_GET['product'], strpos($_GET['product'], '_') + strlen('_'))."</p>";
				
				$file = fopen($_GET['product'].".txt", "r");
				while (!feof($file)) {
					$productText = fgetcsv($file, 2048, "|");	
					echo '<p id="candleInfo">'.$productText[0].'</p>';
				}
				?>			
				<p id="candleTitle2" class="candleTitle">Price</p>
				<p id="candlePrice">$12.00 / 1 </br> $10.00 / 2+ each</p>
				<form action="addToCart.php" method='post'>
					<div id="candleForm">
						<p onclick="increment(quantity)" class="incrementP" id="incrementPLeft">+</p>
						<?php
						echo "<input type='hidden' name='candleType' value='".$_GET['product']."'></input>";
						?>
						<input id="quantity" type="number" name="quantity" value="1" max="100" min="1"></input>
						<p onclick="decrement(quantity)" class="incrementP" id="incrementPRight">-</p>
					</div>
					<input type='submit' value="ADD TO CART" id='submitCandle'>
				</form>
			</div>
		</div>
		
		<?php
		require "footer.html";
		?>
		
		<?php
		//echo "<p>".$_GET['product']."</p>";
		?>
	</body>
</html>