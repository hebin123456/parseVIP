$(function(){
		$(".line:first").css({"margin-color":"#ff0","color":"#ff0"})
	$(".line").click(function(){
		$(".line").css({"margin-color":"#fff","color":"#fff"});
		
		$(this).css({"margin-color":"#ff0","color":"#ff0"})
		})
    if(window.location.href.indexOf("qq.com")>0){
		$("#myVideo").attr("src","https://www.jqaaa.com/jq3/?url=<?php echo $mp4; ?>");
		}else  if(window.location.href.indexOf("fun.tv")>0){
		$("#myVideo").attr("src","https://player.52laoma.com/ipsign/player.php?v=<?php echo $mp4; ?>");
		}else  if(window.location.href.indexOf("wasu.cn")>0){
		$("#myVideo").attr("src","https://api.47ks.com/webcloud/?v=<?php echo $mp4; ?>");
		}else  if(window.location.href.indexOf(".m3u8")>0){
		$("#myVideo").attr("src","m3u8.php?url=<?php echo $mp4; ?>");
		}else  if(window.location.href.indexOf(".mp4")>0){
		$("#myVideo").attr("src","mp4.php?url=<?php echo $mp4; ?>");
		}else  if(window.location.href.indexOf("1905.com")>0){
		$("#myVideo").attr("src","/jq1/?url=<?php echo $mp4; ?>");
		}else  if(window.location.href.indexOf("vlook.cn")>0){
		$("#myVideo").attr("src","/jq1/?url=<?php echo $mp4; ?>");
		}else  if(window.location.href.indexOf("yy.com")>0){
		$("#myVideo").attr("src","/jq1/?url=<?php echo $mp4; ?>");
		}else  if(window.location.href.indexOf("iqiyi.com")>0){
		$("#myVideo").attr("src","/jq6/apiget.php?url=<?php echo $mp4; ?>");
		}else  if(window.location.href.indexOf("bilibili.com")>0){
		$("#myVideo").attr("src","/jq1/?url=<?php echo $mp4; ?>");
		}else  if(window.location.href.indexOf("youku.com")>0){
		$("#myVideo").attr("src","/jq1/?url=<?php echo $mp4; ?>");
		}else  if(window.location.href.indexOf("sohu.com")>0){
		$("#myVideo").attr("src","/jq1/?url=<?php echo $mp4; ?>");
		}		
		else{
				$("#myVideo").attr("src","/jq3/?url=<?php echo $mp4; ?>"); 
			}
	})