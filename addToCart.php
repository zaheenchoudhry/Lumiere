<?php
	session_start();
	if (!empty($_POST['quantity'])) {
		//$_SESSION['candle'] = $_POST["quantity"];
		//echo '<p>'.$_POST["quantity"].'</p>';
		//echo '<p>'.$_POST["candleType"].'</p>';

		if(isset($_COOKIE[$_POST["candleType"]])) {
			$newQuantity = $_COOKIE[$_POST["candleType"]] + $_POST["quantity"];
			setcookie($_POST["candleType"], $newQuantity, time() + (86400 * 7), "/");
		} else {
			setcookie($_POST["candleType"], $_POST["quantity"], time() + (86400 * 7), "/");
		}
		//echo '<p>'.$_COOKIE[$_POST["candleType"]].'</p>';
		header ("Location: cart.php");
	} else {
		header ("Location: products.php");
	}
?>