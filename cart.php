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
		require "header.html";
		?>
				
		<?php
			$candle[0] = "Mountain_Musk";
			$candle[1] = "Cookie_Crumble";
			$candle[2] = "Wintermint_Candy";
			$candle[3] = "Summer_Tango";
			$candle[4] = "Sweet_Lilac";
			$candle[5] = "Ocean_Breeze";
			$isEmpty = true;
			$totalQuantity = 0;
			$individualPrice = 12;
			$items = 0;

			for($i = 0; $i < count($candle); $i++) {
				if(isset($_COOKIE[$candle[$i]])) {
					if($_COOKIE[$candle[$i]] > 0) {
						$items++;
					}
					$totalQuantity += $_COOKIE[$candle[$i]];
				}
			}
					
			if ($items == 0) {
				echo "<div id='cartItemsContainer' style='height:650px;'>";
				echo "<div id='cartItemsHolder'  style='height:650px;'>";
			} else {
				echo "<div id='cartItemsContainer' style='height:".((300 * $items) + 350)."px;'>";
				echo "<div id='cartItemsHolder' style='height:".((300 * $items) + 350)."px;'>";
			}
			
					echo "<p class='cartHead'>Cart</p>";
					echo "<hr>";
					
					if($totalQuantity > 1) {
						$individualPrice = 10;
					}
					
					for($i = 0; $i < count($candle); $i++) {
						if(isset($_COOKIE[$candle[$i]])) {
							if($_COOKIE[$candle[$i]] > 0) {
								$isEmpty = false;
								
								echo "<div class='cartItem'>";
									echo "<img class='cartItemImg' src='DisplayImages/".$candle[$i].".jpg'></img>";
									echo "<p class='cartItemTitle'>".substr($candle[$i], 0, strpos($candle[$i], '_'))." ".substr($candle[$i], strpos($candle[$i], '_') + strlen('_'))."</p>";
									echo "<p class='cartItemP cartPriceP'>Price: $".$individualPrice.".00</p>";
									echo "<p class='cartItemP cartTotalPriceP'>Total Price: $".($individualPrice * $_COOKIE[$candle[$i]]).".00</p>";
									echo "<form id='quantityUpdate' method='post' action='updateQuantity.php'>";
										echo "<p class='cartItemP cartQuantityP'>Quantity: </p>";
										echo "<input class='cartQuantity' type='number' name='quantity' value='".$_COOKIE[$candle[$i]]."' max='100' min='0'></input>";
										echo "<input type='hidden' name='candleType' value='".$candle[$i]."'></input>";
										echo "<input class='cartItemButton cartItemUpdateButton' type='submit' value='Update'></input>";
									echo "</form>";
									echo "<form id='quantityUpdate' method='post' action='deleteCartItem.php'>";
										echo "<input type='hidden' name='candleType' value='".$candle[$i]."'></input>";
										echo "<input class='cartItemButton cartItemDeleteButton' type='submit' value='Remove'></input>";
									echo "</form>";
								echo "</div>";
							}
						}
					}
					
					if($isEmpty == true) {
						echo "<p class='cartHead'>No Items Selected</p>";
					} else {
						echo "<p class='subtotalPrice'>Subtotal: $".($totalQuantity * $individualPrice).".00</p>";
						echo "<form id='checkoutForm' action='checkout.php' method='post'>";
						/*echo "<form id='checkoutForm' action='action='https://www.paypal.com/cgi-bin/webscr' method='post'>";
							echo "<input type='hidden' name='cmd' value='_cart'>";
							echo "<input type='hidden' name='upload' value='1'>";
							echo "<input type='hidden' name='business' value='9VUWH83QKVDM2'>";
							echo "<input type='hidden' name='lc' value='CA'>";
							echo "<input type='hidden' name='currency_code' value='CAD'>";
							echo "<input type='hidden' name='button_subtype' value='services'>";
							echo "<input type='hidden' name='no_note' value='1'>";
							
							$counter = 0;
							for($i = 0; $i < count($candle); $i++) {
								if(isset($_COOKIE[$candle[$i]])) {
									if($_COOKIE[$candle[$i]] > 0) {
									$counter++;
										echo "<input type='hidden' name='item_name_".$counter."' value='".$candle[$i]."'></input>";
										echo "<input type='hidden' name='item_number_".$counter."' value='00".($i + 1)."'></input>";
										echo "<input type='hidden' name='amount_".$counter."' value='".$individualPrice.".00'></input>";
										echo "<input type='hidden' name='quantity_".$counter."' value='".$_COOKIE[$candle[$i]]."'></input>";
										//echo "<input type='hidden' name='handling_cart' value='".($totalQuantity * 5).".00'></input>";
									}
								}
							}
						echo "</form>";*/
							
							echo "<input id='checkoutButton' type='submit' name='submit' value='Checkout With PayPal'></input>";
						echo "</form>";
					}
				echo "</div>";
			echo "</div>";			
		?>	
		
		<?php
		require "footer.html";
		?>
	</body>
</html>