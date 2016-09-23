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
		<link rel="stylesheet" type="text/css" href="cart.css" />
		<script src="jscript.js"></script>
		<script src="jscriptAbout.js"></script>
        <script src="jquery.1.9.1.min.js"></script>
        <script src="jquery_smoothscroll.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/ScrollToPlugin.min.js"></script>
	</head>
	
	<body>
	<?php
		echo "<p>Please Wait...</p>";
		echo "<form id='checkoutForm' action='https://www.paypal.com/cgi-bin/webscr' method='post'>";
			echo "<input type='hidden' name='cmd' value='_cart'></input>";
			echo "<input type='hidden' name='upload' value='1'></input>";
			echo "<input type='hidden' name='business' value='9VUWH83QKVDM2'></input>";
			echo "<input type='hidden' name='lc' value='CA'></input>";
			echo "<input type='hidden' name='currency_code' value='CAD'></input>";
			echo "<input type='hidden' name='button_subtype' value='services'></input>";
			echo "<input type='hidden' name='no_note' value='1'></input>";
			
			$candle[0] = "Mountain_Musk";
			$candle[1] = "Cookie_Crumble";
			$candle[2] = "Wintermint_Candy";
			$candle[3] = "Summer_Tango";
			$candle[4] = "Sweet_Lilac";
			$candle[5] = "Ocean_Breeze";
			$totalQuantity = 0;
			$counter = 0;
			
			for($i = 0; $i < count($candle); $i++) {
				if(isset($_COOKIE[$candle[$i]])) {
					$totalQuantity += $_COOKIE[$candle[$i]];
				}
			}
			
			$mysql = new mysqli("localhost","root","","lumiere");
			
			for($i = 0; $i < count($candle); $i++) {
				if(isset($_COOKIE[$candle[$i]])) {
					if($_COOKIE[$candle[$i]] > 0) {
						$counter++;
						
						if($totalQuantity > 1) {
							$result = $mysql->query("SELECT * FROM candle WHERE number!=1");
						} else {
							$result = $mysql->query("SELECT * FROM candle WHERE number!=2");
						}
						
						echo "<input type='hidden' name='item_name_".$counter."' value='".$candle[$i]."'></input>";
						echo "<input type='hidden' name='item_number_".$counter."' value='00".($i + 1)."'></input>";
						while ($row = $result->fetch_object()) {
							if($row->number != 3) {
								echo "<input type='hidden' name='amount_".$counter."' value='".$row->price."'></input>";
							} else {
								//echo "<input type='hidden' name='handling_cart' value='".($totalQuantity * $row->price)."'></input>";
							}
						}
						echo "<input type='hidden' name='quantity_".$counter."' value='".$_COOKIE[$candle[$i]]."'></input>";
						//echo "<input type='hidden' name='handling_cart' value='".($totalQuantity * 5).".00'></input>";
					}
				}
			}
			$mysql->close();
			
		echo "</form>";
		echo "<script type='text/javascript'>document.getElementsByTagName('form')[0].submit()</script>";
	?>
	</body>
</html>