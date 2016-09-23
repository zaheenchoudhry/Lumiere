<?php
	session_start();
	setcookie($_POST["candleType"], $_POST["quantity"], time() + (86400 * 7), "/");
	header ("Location: cart.php");
?>