<?php
	session_start();
	if (!empty($_POST['candleType'])) {
		setcookie($_POST["candleType"], 0, time() + (86400 * 7), "/");
	}
	header ("Location: cart.php");
?>