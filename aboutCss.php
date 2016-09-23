#aboutHeader {
	width:100%;
	height:100%;
	background: rgba(30,30,30,1);
	background: url('DisplayImages/Lumiere_Team.jpg') no-repeat fixed center;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}
#aboutHeaderContents {
	position:fixed;
	left:50%;
	top:50%;
	margin-left:-250px;
	margin-top:-100px;
	overflow:hidden;
	height:200px;
	width:500px;
}
#aboutHeaderContents hr {
	width:50px;
	margin:auto;
	border-color:#f6364d;
	background-color:#f6364d;
	color:#f6364d;
	margin-top:20px;
}
#memPicDiv {
	height:600px;
	width:100%;
	background: rgba(30,30,30,1);
	background: url('DisplayImages/Lumiere_Team.jpg') no-repeat fixed center;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}
#aboutP1 {
	color:white;
	letter-spacing:10px;
	font-size:20px;
	font-family:CustomFont9;
	margin-left:175px;
}
#aboutP2 {
	margin-top:20px;
	color:white;
	letter-spacing:20px;
	font-size:70px;
	font-family:CustomFont6;
	margin-left:85px;
}

#aboutInfo {
	height:400px;
	width:100%;
	background-color:#dddddd;
}
#aboutTextHolder {
	height:400px;
	min-width:1050px;
	max-width:1050px;
	margin:auto;
	text-wrap:normal;
	text-align:center;
	font-size:20px;
}
#infoP1 {
	padding-top:60px;
	line-height:100px;
	font-family:CustomFont8;
	color:#41415E;
	font-weight:900;
	letter-spacing:1px;
}
#infoP2 {
	line-height:45px;
	font-family:CustomFont8;
	color:#61615E;
}

#membersHeading {
	width:100%;
	height:250px;
	background-color:#E8E8E8;
}
#membersHeadingP1 {
	color:#51515E;
	font-size:30px;
	letter-spacing:4px;
	padding-top:100px;
	text-align:center;
	font-family:CustomFont9;
}
#membersHeadingP2 {
	color:#61616E;
	font-size:20px;
	letter-spacing:2px;
	padding-top:18px;
	text-align:center;
	font-family:CustomFont7;
}

.memberDivs {
	-webkit-background-size: contain;
	-moz-background-size: contain;
	background-size: contain;
	float:left;
	border-style:solid;
	border-width:0.1em;
	border-color:#231f20;
}
.memberDivs img{
	position:absolute;
}
#membersHolder {
	width:100%;
	background-color:#231f20;
}
.lumMemberInfo {
	width:33.3%;
	position:absolute;
	z-index:6;
	pointer-events:none;
	margin-top:17%;
}
.lumMemberInfoP1 {
	position:relative;
	text-align:center;
	color:white;
	font-size:12px;
	pointer-events:none;
	text-transform: uppercase;
	letter-spacing:4px;
	font-family:CustomFont9;
	text-shadow: 0 0 1px rgba(0,0,0,.05), 0 1px 2px rgba(0,0,0,.3);
}
.lumMemberInfoP2 {
	position:relative;
	text-align:center;
	color:#dddddd;
	margin-top:10px;
	font-size:9px;
	pointer-events:none;
	text-transform: uppercase;
	letter-spacing:4px;
	font-family:CustomFont9;
	text-shadow: 0 0 1px rgba(0,0,0,.05), 0 1px 2px rgba(0,0,0,.3);
}
.lumMemberInfoP3 {
	position:relative;
	text-align:center;
	color:#cccccc;
	margin-top:10px;
	font-size:8px;
	pointer-events:none;
	text-transform: uppercase;
	letter-spacing:4px;
	font-family:CustomFont9;
	text-shadow: 0 0 1px rgba(0,0,0,.05), 0 1px 2px rgba(0,0,0,.3);
}

<?php

header("Content-type: text/css");

	$file = fopen("members.csv", "r");
	$counter = 0;
	
	while (!feof($file)) {
		$members = fgetcsv($file, 2048, "|");
		$counter ++;
		
		echo "#memberDivsImg".($counter)." {
			z-index:2;
			position:absolute;
		}";
		
		echo "#memberDivsImgA".($counter)." {
			position:absolute;
		}";
		
		echo "#blackDivAbout".($counter)." {
			position:absolute;
			z-index:4;
			pointer-events:none;
			background:rgba(0, 0, 0, 0.4);
			-webkit-transition: all .3s ease-in-out;
			-moz-transition: all .3s ease-in-out;
			transition: all .3s ease-in-out;
		}";
		
		echo "#memberDivsImg".($counter).":hover + #memberDivsImgA".($counter)." {
			z-index:3;
		}";
		
		echo "#memberDivsImgA".($counter).":hover {
			z-index:3;
		}";
	
	}

?>