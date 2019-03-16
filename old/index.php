<?php
	$jk = $_GET['jk'];
	$url = $_GET['url'];
	ini_set('user_agent','Mozilla/5.0 (Windows NT 6.1; rv:14.0) Gecko/20180110 Firefox/14.0.2');
?>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
	<title>全能VIP视频在线解析 - 以夕阳落款出品！</title>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="keywords" content="优酷VIP解析，爱奇艺VIP解析，腾讯VIP解析，乐视VIP解析，芒果VIP解析">
	<meta name="description" content="本站为广大网友提供优酷VIP解析，爱奇艺VIP解析，腾讯VIP解析，乐视VIP解析，芒果VIP解析等解析服务，让你省去购买视频VIP费用，欢迎大家收藏本站，并将它介绍给您的朋友！">
    <script src="script/jquery.js"></script>
    <script src="script/bootstrap.js"></script>
    <link rel="stylesheet" href="css/bootstrap.css">
	<link rel="shortcut icon" href="image/favicon.ico">
    <link rel="bookmark" href="image/favicon.ico">
	<link rel="stylesheet" href="css/styles.css" type="text/css">
    <style type="text/css">body{cursor:url('/tu/point.cur'), auto;} a,.btn{cursor:url('/tu/link.cur'), auto;} input{cursor:url('/tu/Text.cur'), auto;}</style>
    <!--[if lt IE 9]>
      <script src="http://libs.useso.com/js/html5shiv/3.7/html5shiv.min.js"></script>
      <script src="http://libs.useso.com/js/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
	<!--<script src="script/share.js"></script>-->
	<!--<link rel="stylesheet" href="css/slide_share.css">-->
</head>
<body>
<!--控制标题栏-->
<script type="text/javascript">var OriginTitile = document.title;
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
<!--头部浮窗-->
<div class="topbar" style="z-index: 1001;position: fixed; top: 0px; width:auto;left:0px;right:0px;">
	<div class="container">
		<div class="logo">
		<a href="https://hebin.me" target="_blank"><img src="image/go_logo.png"></a>
		</div>
		<div class="txt">以夕阳落款出品, 去广告, 更简洁！<a href="../">体验新版</a></div>
	</div>
</div>
<br>
<div style="height:70px"></div>
<div class="container" style="padding-top:0px;top:100px">
	<span style="color: #FE8B1F;display: block;text-align:center; ">本站将持久更新最新可用解析接口，保证可用性！请持续关注若播放异常，刷新，更换接口尝试即可！播放地址输入位于第二行，可用第一行搜索引擎搜索播放地址，接口更新日期：2019-02-22</span>
	<br>
    <div class="row" style="margin-left:0px; margin-right:0px;">
		<div class="col-md-12 column">
			<div class="col-md-3" style="margin-top: 8px;">
				<div class="input-group" style="width: 100%;">
					<select class="form-control input-lg" id="searchurl" name="searchurl">
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
								if($jk == $tempurl) echo "selected='selected'";
								echo ">$name</option>";
							}
						?>
					</select>
				</div>
			</div>
			<div class="col-md-7" style="margin-top: 8px;">
				<div class="input-group" style="width: 100%;">
					<input class="form-control input-lg" id="searchcontent" name="searchcontent" placeholder="输入查找视频名称" type="text" value="" />
				</div>
			</div>
			<div class="col-md-2" style="margin-top: 8px;padding-left:0px;padding-right:0px;">
				<button class="btn btn-default btn-lg btn-block" onclick="search()">查找视频</button>
				<!--打开搜索页面的方法-->
				<script>
					function search(){
						var searchcontent = $('#searchcontent').val();
						var searchurl = $('#searchurl').val();
						window.open("./search.php?searchcontent=" + searchcontent + "&searchurl=" + searchurl);
					}
				</script>
			</div>
		</div>
	</div>
	<div class="row" style="margin-left:0px; margin-right:0px;">
		<div class="col-md-12 column">
			<div class="col-md-3" style="margin-top: 8px;">
				<div class="input-group" style="width: 100%;">
					<select class="form-control input-lg" id="jk" name="jk">
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
							{"name":"ODFLV解析","url":"http://aikan-tv.com/?url="},
							{"name":"wq114解析","url":"http://www.wq114.org/yun.php?url="},
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
					<!--
						<option value="http://api.7kki.cn/api/?url=">7kki解析</option>存活
						<option value="http://jx.aeidu.cn/index.php?url=">aeidu解析</option>存活
						<option value="https://api.52xmw.com/?url=">星梦解析</option>存活
						<option value="https://api.azzc.cn/?url=">思古解析</option>存活
						<option value="http://jx.ovov.cc/?url=">ovov解析</option>存活
						<option value="http://jx.618ge.com/?url=">618ge解析</option>存活
						<option value="http://api.nepian.com/ckparse/?url=">那片解析</option>存活
						<option value="http://api.hlglwl.com/jx.php?url=">高端解析</option>存活
						<option value="http://www.wmxz.wang/video.php?url=">无名小站解析</option>存活
						<option value="http://jx.api.163ren.com/vod.php?url=">163人解析</option>存活
						<option value="http://aikan-tv.com/?url=">ODFLV解析</option>存活
						<option value="http://www.wq114.org/yun.php?url=">wq114解析</option>存活
						<option value="http://jx.du2.cc/?url=">du2解析</option>存活
						<option value="http://jx.598110.com/?url=">598110解析</option>存活
						<option value="http://api.baiyug.cn/vip/index.php?url=">百域阁解析</option>失效
						<option value="http://jiexi.92fz.cn/player/vip.php?url=">92fz解析</option>失效
						<option value="http://jqaaa.com/jx.php?url=">金桥解析</option>失效
						<option value="http://api.wlzhan.com/sudu/?url=">速度牛解析</option>失效
						<option value="http://v.buy360.vip/cxjx.php?v=">buy360解析</option>失效
						<option value="https://api.vparse.org/?skin=47ks&url=">vparse解析</option>失效
						<option value="http://api.97kn.com/?url=">97科诺解析</option>失效
						<option value="http://lookxw.com/yingzi/?url=">炫影影视解析</option>失效
						<option value="http://www.ou522.cn/t2/1.php?url=">云上解析</option>失效
					-->
					</select>
				</div>
			</div>
			<div class="col-md-7" style="margin-top: 8px;">
				<div class="input-group" style="width: 100%;">
					<input class="form-control input-lg" id="url" name="url" placeholder="输入播放地址" type="text" value="<?php echo $url; ?>">
				</div>
			</div>
			<div class="col-md-2" style="margin-top: 8px;padding-left:0px;padding-right:0px;">
				<button class="btn btn-default btn-lg btn-block" onclick="refer()">立即播放</button>
				<script>
					function refer(){
						var jk = $('#jk').val();
						var url = $('#url').val();
						window.location.href = "./?jk=" + jk + "&url=" + url;
					}
				</script>
			</div>
		</div>
	</div>
	<br>
	<div class="col-md-14 column">
		<div class="panel panel-default">
			<div class="panel-body">
				<!--<iframe allowfullscreen="true" allowtransparency="true" scrolling="no" src="<?php echo $jk.$url; ?>" width="100%" height="600px" frameborder="0"></iframe>-->
				<script>
					var __originalNavigator = navigator;
					navigator = new Object();
					navigator.__defineGetter__('userAgent', function () {
						return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0';
					});
					var iframe='<iframe allowfullscreen="true" allowtransparency="true" scrolling="no" src="<?php echo $jk.$url; ?>" width="100%" height="600px" frameborder="0" id="Player" name="Player"><img src="image/player-logo.gif"></iframe>';        
					//document.write("User-agent header sent: " + navigator.userAgent + iframe);
					//var iframe='<iframe src="http://www.useragentstring.com/"></iframe>';
					//var script='<script>var fillseo_window=window.frames["Player"];fillseo_window.window.alert=function(){alert("测试有问题!");};<'+'/script>';
					//document.write(iframe+script);
					document.write(iframe);
				</script>
			</div>
		</div>
	</div>
	<div class="row" style="margin-left:0px; margin-right:0px;">
		<div class="col-md-12">
			<div style="border-radius: 0;" class="alert alert-success" role="alert">
				<p style="text-align: center;">本站视频源于互联网视频网站，系互联网抓取所得，仅供学习交流。已支持以下网站视频播放(包含VIP电影)</p>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="logos_lists">
			<dl>
				<dt><a target="_blank" href="http://www.le.com/"><img src="image/letvlogo.png"></a></dt>
				<dd>乐视TV视频</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://v.qq.com/"><img src="image/qqlogo.png" width="150" height="35"></a></dt>
				<dd>腾讯视频</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://www.iqiyi.com/"><img src="image/iqiyi.png" width="110" height="35"></a></dt>
				<dd>爱奇艺视频</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://www.youku.com/"><img src="image/youkulogo.png"></a></dt>
				<dd>优酷视频</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://www.tudou.com/"><img src="image/tudoulogo.png"></a></dt>
				<dd>土豆视频</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://www.mgtv.com/"><img src="image/hunantvlogo.png"></a></dt>
				<dd>芒果TV视频</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://tv.sohu.com/"><img src="image/sohulogo.png"></a></dt>
				<dd>搜狐视频</dd>
			</dl>
			<dl>
				<dt><img src="image/ykcloud.png" width="110" height="35"></dt>
				<dd>优酷云</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://www.acfun.tv/"><img src="image/acfun.png" width="110" height="35"></a></dt>
				<dd>Ac弹幕网</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://www.bilibili.com/"><img src="image/bilibili.png" width="110" height="35"></a></dt>
				<dd>哔哩哔哩</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://www.fun.tv/"><img src="image/fengxing.gif" width="110" height="35"></a></dt>
				<dd>风行网</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://www.wasu.cn/"><img src="image/wasulogo.png"></a></dt>
				<dd>WASU华数视频</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://www.56.com/"><img src="image/56logo.png"></a></dt>
				<dd>56</dd>
			</dl>
			<dl>
				<dt><a target="_blank" href="http://www.yinyuetai.com/"><img src="image/yinyuetailogo.png"></a></dt>
				<dd>音悦台MV</dd>
			</dl>
		</div>
	</div>
</div>
<?php
    @session_start();  
    $counter = intval(file_get_contents("function/counter.dat"));  //创建一个dat数据文件
    if(!$_SESSION['#'])  
    {  
     $_SESSION['#'] = true;  
     $counter++;  //刷新一次+1
     $fp = fopen("function/counter.dat","w");  //以写入的方式，打开文件，并赋值给变量fp
     fwrite($fp, $counter);   //将变量fp的值+1
     fclose($fp);  
    }  
?>
<div class="copyright">
	<div class="container">
		<div class="row text-center">
			<div class="col-sm-12">
				<br>
				<span>您是到访的第<?php echo "$counter";?>位用户</span>
				<br>
				<br>
				<span>Copyright © 2016-<?php echo Date("Y");?> | All Rights Reserved. | <a target="_blank" href="https://hebin.me/">以夕阳落款主页</a></span>
			</div>
		</div>
		<br>
	</div>
</div>
</body>
</html>