<?php
	$searchcontent = $_GET['searchcontent'];
	$searchurl = $_GET['searchurl'];
?>
<!DOCTYPE html>
<html lang="zh-cn"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
<title>全能VIP视频在线解析 - 以夕阳落款出品！</title>
<meta name="keywords" content="优酷VIP解析，爱奇艺VIP解析，腾讯VIP解析，乐视VIP解析，芒果VIP解析">
<meta name="description" content="本站为广大网友提供优酷VIP解析，爱奇艺VIP解析，腾讯VIP解析，乐视VIP解析，芒果VIP解析等解析服务，让你省去购买视频VIP费用，欢迎大家收藏本站，并将它介绍给您的朋友！">
    <link href="video/bootstrap.css" rel="stylesheet">
	<script src="video/jquery.js"></script>
    <script src="video/bootstrap.js"></script>
    <link rel="shortcut icon" href="http://tv.dsqndh.com/tu/favicon.ico">
    <link rel="bookmark" href="http://tv.dsqndh.com/tu/favicon.ico">
    <style type="text/css">body{cursor:url('/tu/S1.cur'), auto;} a{cursor:url('/tu/S2.cur'), auto;}</style>
    <!--[if lt IE 9]>
      <script src="http://libs.useso.com/js/html5shiv/3.7/html5shiv.min.js"></script>
      <script src="http://libs.useso.com/js/respond.js/1.4.2/respond.min.js"></script>
    <![endif]--><script src="video/share.js"></script><link rel="stylesheet" href="video/slide_share.css"></head>
  <body>
	<iframe id="iframe" allowfullscreen="true" allowtransparency="true" src="<?php echo $searchurl.$searchcontent; ?>" width="100%" height="auto"></iframe>
	<script>
		function changeFrameHeight(){
			var ifm= document.getElementById("iframe"); 
			ifm.height=document.documentElement.clientHeight;
		}
		window.onresize=function(){  
			 changeFrameHeight();  
		}
		window.onload=function(){  
			 changeFrameHeight();  
		} 
	</script>
  </body>
</html>