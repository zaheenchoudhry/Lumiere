#processHeader {
	width:100%;
	height:100%;
	background: rgba(30,30,30,1);
	background: url('DisplayImages/Lumiere_Banner_11.jpg') no-repeat fixed center;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}
#processHeaderContents {
	position:fixed;
	left:50%;
	top:50%;
	margin-left:-250px;
	margin-top:-100px;
	overflow:hidden;
	height:200px;
	width:500px;
}
#processHeaderContents hr {
	width:50px;
	margin:auto;
	border-color:#f6364d;
	background-color:#f6364d;
	color:#f6364d;
	margin-top:20px;
}
#processP1 {
	color:white;
	letter-spacing:10px;
	font-size:20px;
	font-family:CustomFont9;
	margin-left:175px;
}
#processP2 {
	margin-top:20px;
	color:white;
	letter-spacing:15px;
	font-size:65px;
	font-family:CustomFont6;
	margin-left:47px;
}

#transitionBg {
	height:100%;
	width:100%;
	background-color:#f1f1f1;
	background: url('DisplayImages/BeFunky_null_4.jpg') no-repeat fixed center;
	-webkit-background-size:cover;
	-moz-background-size:cover;
	-o-background-size:cover;
	background-size:cover;
}

#testbg1 {
	height:11500px;
	width:100%;
	background-color:#f1f1f1;
	/*background: url('DisplayImages/BeFunky_null_4.jpg') no-repeat fixed center;*/
/*a2b4ae cc756b f5c682 7e9349 85a2a6 846f62 a55b61 875681 b16483*/
	-webkit-background-size:cover;
	-moz-background-size:cover;
	-o-background-size:cover;
	background-size:cover;
}
#test1 {
	height:100%;
	width:100%;
	background-image:none;
    background-repeat:no-repeat;
	background-position:center; 
	background-attachment:fixed;
	-webkit-background-size:cover;
	-moz-background-size:cover;
	-o-background-size:cover;
	background-size:cover;
}
.testDiv {
	height:100%;
	width:0%;
	-webkit-background-size:cover;
	-moz-background-size:cover;
	-o-background-size:cover;
	background-size:cover;
	position:absolute;
}
#testblk1 {
	height:100%;
	width:100%;
	/*background:rgba(177, 100, 131, 0.7);*/
}

#temp11 {
	height:100px;
	width:100px;
	background-color:yellow;
	position:fixed;
	z-index:9000;
}
#temp11P {
	color:black;
	font-size:30px;
}

<?php
header("Content-type: text/css");

	for($i = 0; $i < 102; $i++) {
		echo "#testDiv".($i)." {
			background:url('ProcessPics/process".($i).".png') no-repeat fixed center;
		}";
	}
?>
