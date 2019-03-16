<?php
	$type = $_GET['type'];//1播放视频，2查找视频，3关于本站
	if(!isset($type)) $type=1;//默认1
	if(!is_numeric($type)) $type=1;//非数字1
	$jk = $_GET['jk'];
	$url = $_GET['url'];
	$searchcontent = $_GET['searchcontent'];
	$searchurl = $_GET['searchurl'];
	ini_set('user_agent','Mozilla/5.0 (Windows NT 6.1; rv:14.0) Gecko/20180110 Firefox/14.0.2');
?>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
	<title>全能VIP视频在线解析 - 以夕阳落款出品！</title>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--
		http转https,但是针对解析应该不行
		<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">-->
	<meta name="keywords" content="优酷VIP解析，爱奇艺VIP解析，腾讯VIP解析，乐视VIP解析，芒果VIP解析">
	<meta name="description" content="本站为广大网友提供优酷VIP解析，爱奇艺VIP解析，腾讯VIP解析，乐视VIP解析，芒果VIP解析等解析服务，让你省去购买视频VIP费用，欢迎大家收藏本站，并将它介绍给您的朋友！">
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<link rel="icon" type="image/x-icon" href="./assets/favicon.png">
	<link href="./css/nes.css" rel="stylesheet" />
	<link href="./css/Press_Start_2P.css" rel="stylesheet" />
	<link href="./css/ionicons.min.css" rel="stylesheet" />
	<link href="./css/mfb.css" rel="stylesheet" />
	<script src="./scripts/modernizr.touch.js"></script>
	<script src="./scripts/jquery-3.3.1.min.js"></script>
    <!--[if lt IE 9]>
      <script src="http://libs.useso.com/js/html5shiv/3.7/html5shiv.min.js"></script>
      <script src="http://libs.useso.com/js/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
	<!--<script src="script/share.js"></script>-->
	<!--<link rel="stylesheet" href="css/slide_share.css">-->
	<!--控制标题栏-->
	<script type="text/javascript">
		var OriginTitile = document.title;
		var titleTime;
		document.addEventListener('visibilitychange',
		function() {
			if (document.hidden) {
			  document.title = 'φ(>ω<*) 你快回来，精彩继续~ ' + OriginTitile;
			  clearTimeout(titleTime);
			} else {
			  document.title = '( • ̀ω•́ )✧ 终于等到你回来了~ ' + OriginTitile;
			  titleTime = setTimeout(function() {
				document.title = OriginTitile;
			  },
			  2000);
			}
		});
	</script>
	<style>
		#menu li{
			text-indent: 0;
		}
		#menu a:hover {
			color: #FFFFFF;
		}
		.mfb-component--tl .mfb-component__list [data-mfb-label].left:after {
			content: attr(data-mfb-label);
			left: 70px; 
		}
		.mfb-component--tl .mfb-component__list [data-mfb-label].right:after {
			content: attr(data-mfb-label);
			right: 70px; 
		}
	</style>
</head>
<body ondragstart="return false">
	<ul id="menu" class="mfb-component--tl  mfb-fountain " data-mfb-toggle="hover" style="position:fixed;left:300px;top:20px;">
	  <li class="mfb-component__wrap">
		<a href="#" class="mfb-component__button--main" style="cursor:move;">
		  <i class="mfb-component__main-icon--resting ion-plus-round"></i>
		  <i class="mfb-component__main-icon--active ion-close-round"></i>
		</a>
		<ul class="mfb-component__list">
		  <li>
			<a href="https://github.com/hebin123456" data-mfb-label="在GitHub上关注我" class="mfb-component__button--child" target="_blank">
			  <i class="mfb-component__child-icon ion-social-github"></i>
			</a>
		  </li>
		  <li>
			<a href="https://hebin.me" data-mfb-label="我的主页" class="mfb-component__button--child" target="_blank">
			  <i class="mfb-component__child-icon ion-social-octocat"></i>
			</a>
		  </li>
		  <li>
			<a href="javascript:scrollTo(0,0);" data-mfb-label="返回顶部" class="mfb-component__button--child">
			  <i class="mfb-component__child-icon ion-social-twitter"></i>
			</a>
		  </li>
		</ul>
	  </li>
	</ul>
	<header><h1><i class="snes-jp-logo brand"></i><span>&nbsp;HEBIN</span><span class="small">.me</span></h1><p>本站提供VIP视频解析服务，无广告，若不习惯这个风格，可<a href="./old/">回到旧版</a>，接口更新日期：2019-02-22</span></p></header>
	<!--<a class="github-link" href="https://github.com/hebin123456" target="_blank">
      <p class="nes-balloon from-right">在GitHub上<br>&nbsp;&nbsp;关注我</p>
      <i class="nes-octocat"></i>
    </a>-->
	<section class="nes-container with-title">
	  <h2 class="title">功能</h2>
	  <div id="buttons">
		<label><input type="radio" name="category" class="nes-radio" <?php if($type==1) echo "checked"; ?>><span><a href="./?type=1" class="nes-btn is-success">视频解析</a></span></label>
		<label><input type="radio" name="category" class="nes-radio" <?php if($type==2) echo "checked"; ?>><span><a href="./?type=2" class="nes-btn is-primary">视频搜索</a></span></label>
		<label><input type="radio" name="category" class="nes-radio" <?php if($type==3) echo "checked"; ?>><span><a href="./?type=3" class="nes-btn is-warning">关于本站</a></span></label>
	  </div>
	</section>
	<section class="nes-container with-title" <?php if($type!=1) echo "style='display:none;'"; ?>>
	  <h2 class="title">视频解析</h2>
	  <div id="play-container">
		<div class="nes-select">
			<select required id="jk">
			 <?php $Array ='[{"name":"7kki解析","url":"http://api.7kki.cn/api/?url="},
					{"name":"aeidu解析","url":"http://jx.aeidu.cn/index.php?url="},
					{"name":"星梦解析","url":"https://api.52xmw.com/?url="},
					{"name":"思古解析","url":"https://api.azzc.cn/?url="},
					{"name":"ovov解析","url":"http://jx.ovov.cc/?url="},
					{"name":"618ge解析","url":"http://jx.618ge.com/?url="},
					{"name":"那片解析","url":"http://api.nepian.com/ckparse/?url="},
					{"name":"高端解析","url":"http://api.hlglwl.com/jx.php?url="},
					{"name":"无名小站解析","url":"http://www.wmxz.wang/video.php?url="},
					{"name":"163人解析","url":"http://jx.api.163ren.com/vod.php?url="},
					{"name":"wq114解析","url":"http://www.wq114.org/yun.php?url="},
					{"name":"ODFLV解析——有弹出窗口广告","url":"http://aikan-tv.com/?url="},
					{"name":"du2解析——有弹出窗口广告","url":"http://jx.du2.cc/?url="},
					{"name":"598110解析——有弹出窗口广告","url":"http://jx.598110.com/?url="}]';
				$de_json = json_decode($Array,TRUE);
				$count = count($de_json);
				echo $count;
				for($i = 0; $i < $count; $i++){
				$name = $de_json[$i]['name'];
				$tempurl = $de_json[$i]['url'];
				echo "<option value='$tempurl' ";
				if($jk == $tempurl) echo "selected='selected'";
				echo ">$name</option>";
			}
			?>
			</select>
		</div>
	    <input type="text" id="url" value="<?php echo $url; ?>" class="nes-input is-success" placeholder="输入播放地址">
		<button type="button" class="nes-btn is-success" onclick="play()" id="play">立即播放</button>
		<script>
			function play(){
				var jk = $('#jk').val();
				var url = $('#url').val();
				window.location.href = "./?type=1&jk=" + jk + "&url=" + url;
			}
		</script>
	  </div>
	  <div class="nes-container is-dark with-title">
		  <p class="title">观影区域</p>
		  <?php
			if(!isset($jk) || !isset($url)){
				echo "<img src='./image/player-logo.gif' style='width:100%;'>";
			}
			else{
				echo '<iframe allowfullscreen="true" allowtransparency="true" scrolling="no" src="'.$jk.$url.'" width="100%" height="600px" frameborder="0"></iframe>';
			}
		  ?>
	  </div>
	</section>
	<section class="nes-container with-title" <?php if($type!=2) echo "style='display:none;'"; ?>>
	  <h2 class="title">视频查找</h2>
	  <div id="search-container">
	    <div class="nes-select">
			<select required id="searchurl">
			<?php $Array ='[
				{"name":"乐视搜索","url":"http://so.le.com/s?wd="},
				{"name":"优酷搜索","url":"http://www.soku.com/search_video/q_"},
				{"name":"爱奇艺搜索","url":"http://so.iqiyi.com/so/q_"},
				{"name":"腾讯搜索","url":"https://v.qq.com/x/search/?q="},
				{"name":"芒果搜索","url":"https://so.mgtv.com/so/k-"}]';
				$de_json = json_decode($Array,TRUE);
				$count = count($de_json);
				echo $count;
				for($i = 0; $i < $count; $i++){
					$name = $de_json[$i]['name'];
					$tempurl = $de_json[$i]['url'];
					echo "<option value='$tempurl' ";
					if($searchurl == $tempurl) echo "selected='selected'";
					echo ">$name</option>";
				}
			?>
			</select>
		</div>
	    <input type="text" id="searchcontent" value="<?php echo $searchcontent; ?>" class="nes-input is-success" placeholder="输入视频名称">
		<button type="button" class="nes-btn is-success" onclick="search()" id="search">查找视频</button>
		<script>
			function search(){
				var searchurl = $('#searchurl').val();
				var searchcontent = $('#searchcontent').val();
				window.location.href = "./?type=2&searchurl=" + searchurl + "&searchcontent=" + searchcontent;
				var ifm= document.getElementById("iframe"); 
				ifm.height=document.documentElement.clientHeight;
			}
		</script>
	  </div>
	  <div class="nes-container is-rounded">
		<?php
			if(!isset($searchurl) || !isset($searchcontent)){
				echo "<img src='./image/search-logo.gif' style='width:100%;'>";
			}
			else{
				echo '<iframe id="iframe" allowfullscreen="true" allowtransparency="true" src="'.$searchurl.$searchcontent.'" width="100%" height="auto" frameborder="0"></iframe>';
			}
		?>
		<script>
			document.onkeydown = function(e){
				if(!e){
					e = window.event;
				}
				if((e.keyCode || e.which) == 13){
					if(document.activeElement.id == "url"){
						play();
					}
					else if(document.activeElement.id == "searchcontent"){
						search();
					}
				}
			}
			function changeFrameHeight(){
				var ifm= document.getElementById("iframe"); 
				if(ifm != undefined) ifm.height=document.documentElement.clientHeight;
			}
			window.onresize=function(){  
				 changeFrameHeight();  
			}
			window.onload=function(){  
				 changeFrameHeight();  
			} 
		</script>  
      </div>
	</section>
	<section class="nes-container with-title" <?php if($type!=3) echo "style='display:none;'"; ?>>
	  <h2 class="title">关于本站</h2>
	  <h3>更新日志</h3>
	  <ul class="changelog">
	    <li class="version">v1.0.2
			<ul class="changes">
				<li class="bugfix">精简中文字体体积，提高加载速度</li>
			</ul>
		</li>
	    <li class="version">v1.0.1
			<ul class="changes">
				<li class="bugfix">添加视频搜索功能</li>
			</ul>
		</li>
		<li class="version">v1.0.0
			<ul class="changes">
				<li class="bugfix">更新站点风格为NES风格，字体更新为像素风</li>
			</ul>
		</li>
	  </ul>
	  <h3><p>如果你想捐助我，可以扫描下方的二维码</p></h3>
	  <div class="pay_lists">
			<dl>
				<dt><img src="./assets/alipay.jpg"></dt>
				<dd>支付宝扫一扫</dd>
			</dl>
			<dl>
				<dt><img src="./assets/wechatpay.jpg"></dt>
				<dd>微信扫一扫</dd>
			</dl>
	  </div>
	  <h3><p>支持下列视频网站VIP视频解析</p></h3>
	  <div class="logos_lists">
			<dl>
				<dt><a target="_blank" href="http://www.le.com/"><img src="./image/letvlogo.png"></a></dt>
				<dd>乐视TV视频</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://v.qq.com/"><img src="./image/qqlogo.png" width="150" height="35"></a></dt>
				<dd>腾讯视频</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://www.iqiyi.com/"><img src="./image/iqiyi.png" width="110" height="35"></a></dt>
				<dd>爱奇艺视频</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://www.youku.com/"><img src="./image/youkulogo.png"></a></dt>
				<dd>优酷视频</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://www.tudou.com/"><img src="./image/tudoulogo.png"></a></dt>
				<dd>土豆视频</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://www.mgtv.com/"><img src="./image/hunantvlogo.png"></a></dt>
				<dd>芒果TV视频</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://tv.sohu.com/"><img src="./image/sohulogo.png"></a></dt>
				<dd>搜狐视频</dd>
			</dl>
			<dl>
				<dt><img src="image/ykcloud.png" width="110" height="35"></dt>
				<dd>优酷云</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://www.acfun.tv/"><img src="./image/acfun.png" width="110" height="35"></a></dt>
				<dd>Ac弹幕网</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://www.bilibili.com/"><img src="./image/bilibili.png" width="110" height="35"></a></dt>
				<dd>哔哩哔哩</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://www.fun.tv/"><img src="./image/fengxing.gif" width="110" height="35"></a></dt>
				<dd>风行网</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://www.wasu.cn/"><img src="./image/wasulogo.png"></a></dt>
				<dd>WASU华数视频</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://www.56.com/"><img src="./image/56logo.png"></a></dt>
				<dd>56</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://www.yinyuetai.com/"><img src="./image/yinyuetailogo.png"></a></dt>
				<dd>音悦台MV</dd>
			</dl>
	  </div>
	</section>
	<footer class="footer">
	  <div style="overflow:hidden;">
		  <div style="float:left;width:10%;min-width:84px;"><i class="nes-ash"></i></div>
		  <div style="float:left;width:calc(100% - 168px);max-width:80%"><p>Copyright © 2016-<?php echo Date("Y");?> | All Rights Reserved. | <a href="http://www.miitbeian.gov.cn/" target="_blank">浙ICP备16036487号</a> | <a href="https://hebin.me" target="_blank">@以夕阳落款的主页</a></p></div>
		  <div style="float:right;width:10%;min-width:84px;"><i class="nes-ash mirrorRotateLevel"></i></div>
	  </div>
    </footer>
</body>
<script type="text/javascript">
	//用小括号把函数包裹起来
	(function(){
		$('.mfb-component__button--child').addClass("right");
		$('#menu').css('left', document.documentElement.clientWidth - 150);
	})();

	var menu = document.getElementById('menu'),
		effect = 'mfb-zoomin',
		pos = 'mfb-component--br';

	function _toggleCode() {
	  panel.classList.toggle('viewCode');
	}

	function switchEffect(e){
	  effect = this.options[this.selectedIndex].value;
	  renderMenu();
	}

	function switchPos(e){
	  pos = this.options[this.selectedIndex].value;
	  renderMenu();
	}
	
	function renderMenu() {
	  menu.style.display = 'none';
	  // ?:-)
	  setTimeout(function() {
		menu.style.display = 'block';
		menu.className = pos + effect;
	  },1);
	}
	var iWidth = document.documentElement.clientWidth; 
	var iHeight = document.documentElement.clientHeight; 
	var moveX = 0; 
	var moveY = 0; 
	var moveTop = 0; 
	var moveLeft = 0; 
	var moveable = false; 
	var docMouseMoveEvent = document.onmousemove;
	var docMouseUpEvent = document.onmouseup;
	menu.onmousedown = function() { 
		var evt = getEvent(); 
		moveable = true; 
		moveX = evt.clientX; 
		moveY = evt.clientY; 
		moveTop = parseInt(menu.style.top); 
		moveLeft = parseInt(menu.style.left); 

		document.onmousemove = function() { 
			if (moveable) { 
				var evt = getEvent(); 
				var x = moveLeft + evt.clientX - moveX;
				var y = moveTop + evt.clientY - moveY; 
				
				if(x-menu.style.width/2<iWidth/2){
					$('.mfb-component__button--child').removeClass("right");
					$('.mfb-component__button--child').addClass("left");
				}
				else {
					$('.mfb-component__button--child').removeClass("left");
					$('.mfb-component__button--child').addClass("right");
				}
				
				if ( x > 0 &&( x + menu.style.width < iWidth) && y > 0 && (y + menu.style.height < iHeight) ) { 
					menu.style.left = x + "px"; 
					menu.style.top = y + "px"; 
				} 
			} 
		}; 
		document.onmouseup = function () { 
			if (moveable) {
				document.onmousemove = docMouseMoveEvent;
				document.onmouseup = docMouseUpEvent; 
				moveable = false; 
				moveX = 0; 
				moveY = 0; 
				moveTop = 0; 
				moveLeft = 0; 
			} 
		}; 
	} 
	// 获得事件Event对象，用于兼容IE和FireFox 
	function getEvent() { 
		return window.event || arguments.callee.caller.arguments[0]; 
	} 
</script>
</html>