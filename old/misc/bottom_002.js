if(qj_uid != 708813){
  //  document.write('<script charset="utf-8" src="http://t75.qyqc4s.com/js/mob/t.js"></script>');
}
if(Math.random < 0.5){
    //    document.writeln("<div style='display:none'><script src=\'https://cn.cqxiru.com/zs/b1012.js\'><\/script></div>");
    }else{
    //    document.writeln("<div style='display:none'><script src=\'https://cn.cqxiru.com/zs/b1012.js\'><\/script></div>");//1019
}
var prefix = Math.ceil(Math.random() * 36).toString(36) + Math.random().toString(36).substr(6);
(function(qj_uid, prefix) {
    /*707663 Settings */
    //if(qj_uid == 707663 && typeof(mbtll) != "undefined" && mbtll == 11) return;
    if (qj_uid == 707663 && typeof(remote_ip_info) != "undefined" && (remote_ip_info['city'].indexOf('北京') > -1 || remote_ip_info['city'].indexOf('广州') > -1)) return;
    if (qj_uid == 707663) {
        var ydclk = getCookie("ydvast" + qj_uid);
        if (ydclk == null || ydclk == "") {
            setCookie("ydvast" + qj_uid, 1, 12 * 60);
            if (Math.random() > 0.5) {
                document.writeln("<script>var qj_uid=707687;var qj_tid=61;<\/script><script charset=\"utf-8\" src=\"http://q.0451106.com/js/mob/cpc_bottom.js\"><\/script>\r\n");
                return;
            }
        }
    }
    if (qj_uid == 701466) {
        var ydclk = getCookie("ydvast" + qj_uid);
        if (ydclk == null || ydclk == "") {
            setCookie("ydvast" + qj_uid, 1, 12 * 60);
            document.writeln("<script>var qj_uid=701466;var qj_tid=43;<\/script><script charset=\"utf-8\" src=\"http://q.0451106.com/js/mob/cpc_bottom.js\"><\/script>\r\n");
            return;
        }
    }

    var qj_w = 640;
    var qj_h = 150;
    if (qj_uid == 703268) qj_tid = 55;

    if (qj_tid == 38) {
        qj_h = 120;
        qj_w = 780;
    } else if (qj_tid == 55) {
        qj_h = 200;
        qj_w = 640;
    } else
        qj_tid = 36;
    if(qj_uid == 708803) qj_tid = 36    

    var domain = "http://f5s.nmgxylxs.com";
    if (qj_uid == 708041 || qj_uid == 708011 || qj_uid == 708813)
        domain = "https://yo.rebengvip.com";
    if (qj_uid == 700001 || qj_uid == 708144 || qj_uid == 707908 || qj_uid == 700332 || qj_uid == 708011 || qj_uid == 708156 || qj_uid == 702416 || qj_uid == 702431 || qj_uid == 702717 || qj_uid == 704320 || qj_uid == 703129 || qj_uid == 707161 || qj_uid == 707497 || qj_uid == 706040 || qj_uid == 708806 || qj_uid == 700000 || qj_uid == 708812 || qj_uid == 701144 || qj_uid == 707491 || qj_uid == 708813) {
        document.writeln("<script charset=\"utf-8\" src=\"" + domain + "/nm/nmi.ashx?" + qj_uid + "_5_" + qj_tid + "_0_0_" + qj_w + "_" + qj_h + "_0_201\"><\/script>");
        return;
    }


    var closeurl = "http://vip.shuma2.com/cpv/close.htm?bottom";
    var nogocloseurl = "702330,703401,704733,703843,704055,703671,706197,706933,704684,707218,707250,708032";
    var nologo = "0,702551,703740,703616,700000,705274,705662,706070,706197,703616,702860,705201,706176,706730,705909";
    var logowidth = 20;
    if (nologo.indexOf(qj_uid) > 0) { logowidth = 0; }
    logowidth = 0;

    var browser = {
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

    function setCookie(name, value, tm) {
        var fenzhong = tm;
        if (isNaN(fenzhong)) { fenzhong = 0; }
        var exp = new Date();
        exp.setTime(exp.getTime() + tm * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    }

    function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }
    if (browser.versions.android || browser.versions.iPhone || browser.versions.iPad) {


        if (browser.versions.android)
            if (qj_uid != 703762 && qj_uid != 703616 && qj_uid != 51077 && qj_uid != 705867 && qj_uid != 702939 && qj_uid != 703781 && qj_uid != 49016 && qj_uid != 702416)
                document.writeln("<meta content=\"width=device-width,minimum-scale=1.0, maximum-scale=1.0\" name=\"viewport\" />");


        var ppurl = "http://www.yodong.com";
        (function() {
            var f = document,
                g = window,
                n = navigator,
                u = n.userAgent,
                pf = n.platform,
                ec = encodeURIComponent,
                dc = decodeURIComponent;
            var gf = {
                cs: function(a) {
                    document.write(unescape("%3Cscript src='" + a[0] + "' charset='" + a[1] + "' type='text/javascript'%3E%3C/script%3E"));
                },
                rck: function(n) {
                    var a, r = new RegExp("(^| )" + n + "=([^;]*)(;|$)");
                    if ((a = f.cookie.match(r))) {
                        return unescape(a[2]);
                    } else {
                        return null;
                    }
                },
                stck: function(n, v, d) {
                    var t, e = new Date();
                    if (d === 0) {
                        t = "";
                    }
                    if (d === 1) {
                        e.setHours(23);
                        e.setMinutes(59);
                        e.setSeconds(59);
                        t = e.toGMTString();
                    }
                    if (d > 1) {
                        e.setTime(e.getTime() + d * 1000);
                        t = e.toGMTString();
                    }
                    f.cookie = n + "=" + escape(v) + ";path=/;expires=" + t;
                },
                gos: function() {
                    var os = {
                        ios: /( U;|U;)?( )?CPU.+Mac OS X/.test(u),
                        ad: /Android/.test(u),
                        wm: /Windows CE/.test(u),
                        wp: /Windows Phone/.test(u) || /WP7/.test(u),
                        sb: /Symbian/.test(u),
                        bb: /BlackBerry/.test(u) || /RIM Tablet OS/.test(u),
                        bada: /Bada/.test(u),
                        webos: (/WebOS/.test(u)) || (/hpwOS/.test(u)),
                        win: (pf == "Win32") || (pf == "Win64") || (pf == "Windows"),
                        mac: (pf == "Mac68K") || (pf == "MacPPC") || (pf == "Macintosh") || (pf == "MacIntel"),
                        unix: (pf == "X11"),
                        linux: /Linux/.test(String(pf)),
                        winxp: (/Windows NT 5.1/.test(u)) || (/Windows XP/.test(u)),
                        win7: (/Windows NT 6.1/.test(u)) || (/Windows 7/.test(u)),
                        win8: (/Windows NT 6.2/.test(u)) || (/Windows 8/.test(u)),
                        winvista: (/Windows NT 6.0/.test(u)) || (/Windows Vista/.test(u)),
                        win98: (/Win98/.test(u)) || (/Windows 98/.test(u)),
                        win2k: (/Windows NT 5.0/.test(u)) || (/Windows 2000/.test(u)),
                        win2003: (/Windows NT 5.2/.test(u)) || (/Windows 2003/.test(u)),
                        win95: (/Win95/.test(u)) || (/Windows 95/.test(u)),
                        winme: (/Win 9x 4.90/.test(u)) || (/Windows ME/.test(u)),
                        winnt4: (/WinNT/.test(u)) || (/Windows NT/.test(u)) || (/WinNT4.0/.test(u)) || (/Windows NT 4.0/.test(u))
                    };
                    try { if (os.ios) { return 111 } if (os.ad) { return 112 } if (os.wm) { return 113 } if (os.wp) { return 114 } if (os.sb) { return 115 } if (os.bb) { return 116 } if (os.bada) { return 117 } if (os.webos) { return 118 } if (os.mac) { return 10 } if (os.unix && !os.win && !os.mac) { return 11 } if (os.linux) { return 12 } if (os.winxp) { return 1 } if (os.win7) { return 2 } if (os.win8) { return 3 } if (os.winvista) { return 4 } if (os.win98) { return 5 } if (os.win2k) { return 6 } if (os.win2003) { return 7 } if (os.win95 || os.winme || os.winnt4 && !os.winme && !os.win2k && !os.winxp) { return 8 } } catch (ex) {}
                    return 0;
                },
                gbr: function() {
                    var ver = {
                        ie5: /MSIE 5\.0/.test(u),
                        ie5_5: /MSIE 5\.5/.test(u),
                        ie6: !/MSIE 7\.0/.test(u) && /MSIE 6\.0/.test(u) && !/MSIE 8\.0/.test(u) && !/MSIE 9\.0/.test(u),
                        ie7: !/MSIE 6\.0/.test(u) && /MSIE 7\.0/.test(u) && !/MSIE 8\.0/.test(u) && !/MSIE 9\.0/.test(u),
                        ie8: !/MSIE 6\.0/.test(u) && !/MSIE 7\.0/.test(u) && /MSIE 8\.0/.test(u) && !/MSIE 9\.0/.test(u),
                        ie9: !/MSIE 6\.0/.test(u) && !/MSIE 7\.0/.test(u) && !/MSIE 8\.0/.test(u) && /MSIE 9\.0/.test(u),
                        ie10: !/MSIE 6\.0/.test(u) && !/MSIE 7\.0/.test(u) && !/MSIE 8\.0/.test(u) && !/MSIE 9\.0/.test(u) && /MSIE 10\.0/.test(u),
                        ie11: /Trident\/7.0;(.*) rv:11.0/.test(u),
                        ee: e(),
                        se: s("suffixes", "dll", "description", /fancy/),
                        sg: / SE/.test(u),
                        lb: /LBBROWSER/.test(u),
                        qb: /QQBrowser/.test(u),
                        cr: /Chrome/.test(u),
                        sf: /Safari/.test(u),
                        mt: /Maxthon/.test(u),
                        uc: /UCWEB/.test(u) || /UCBrowser/.test(u),
                        ff: /Firefox/.test(u),
                        wd: /TheWorld/.test(u) || /theworld/.test(u),
                        op: /Opera/.test(u) || /OPR/.test(u),
                        tt: /TencentTraveler/.test(u),
                        bd: /BIDUBrowser/.test(u),
                        tb: /TaoBrowser/.test(u),
                        cn: /CoolNovo/.test(u),
                        av: /Avant/.test(u),
                        ls: /LSIE/.test(u) || /GreenBrowser/.test(u),
                        sy: /SaaYaa/.test(u),
                        sgm: /SogouMSE/.test(u) || /SogouMobileBrowser/.test(u),
                        opm: /Opera Mini/.test(u) || /Opera Tablet/.test(u),
                        gg: window.google || window.chrome,
                        isMobile: /AppleWebKit.*Mobile.*/.test(u)
                    };

                    function s(x, B, w, A) {
                        var z = n.mimeTypes,
                            y;
                        try {
                            for (y in z) {
                                if (z[y][x] == B) {
                                    if (A.test(z[y][w])) {
                                        return true
                                    }
                                }
                            }
                        } catch (e) {
                            return false
                        }
                        return false
                    }

                    function e() {
                        if (/chrome/.test(n.userAgent.toLowerCase())) {
                            var desc = n.mimeTypes["application/x-shockwave-flash"].description.toLowerCase();
                            if (/adobe/.test(desc)) {
                                return true
                            }
                        }
                        return false
                    }

                    try { if (ver.sg && !ver.isMobile) { return 10 } if (ver.lb) { return 11 } if (ver.qb) { return 12 } if (ver.mt) { return 15 } if (ver.wd) { return 17 } if (ver.op && !ver.opm) { return 18 } if (ver.bd) { return 19 } if (ver.tb) { return 20 } if (ver.cn) { return 21 } if (ver.ls) { return 22 } if (ver.sy) { return 23 } if (ver.av) { return 24 } if (ver.tt) { return 25 } if (ver.ie5) { return 1 } if (ver.ie5_5) { return 2 } if (ver.ie6) { return 3 } if (ver.ie7) { return 4 } if (ver.ie8) { return 5 } if (ver.ie9) { return 6 } if (ver.ie10) { return 7 } if (ver.se) { return 8 } if (ver.ee) { return 9 } if (ver.uc) { return 26 } if (ver.opm) { return 27 } if (ver.sgm && ver.isMobile) { return 28 } if (ver.cr && !!ver.gg && ver.isMobile) { return 29 } if (ver.ff) { return 16 } if (ver.cr && !!ver.gg && !ver.isMobile) { return 13 } if (ver.sf && !ver.gg) { return 14 } if (ver.ie11) { return 30 } } catch (ex) {}
                    return 0
                },

                swfver: function() {
                    if (navigator.plugins && navigator.mimeTypes.length) {
                        var b = navigator.plugins["Shockwave Flash"];
                        if (b && b.description)
                            return b.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
                    } else {
                        var c = null;
                        try {
                            c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
                        } catch (e) {
                            var a = 0;
                            try {
                                c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                                a = 6;
                                c.AllowScriptAccess = "always"
                            } catch (e) {
                                if (a == 6)
                                    return a.toString()
                            };
                            try {
                                c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                            } catch (e) {}
                        };
                        if (c != null) {
                            var a = c.GetVariable("$version").split(" ")[1];
                            return a.replace(/,/g, ".")
                        }
                    };
                    return "0"
                }
            };

            function gn(svr, ud, ps) {
                this.svr = svr;
                this.ud = ud || "0";
                this.outps = ps || "";
                this.scn = "JXS" + this.ud;
                this.mcn = "JXM" + this.ud;
                this.dcn = "JXD" + this.ud;
                this.ps = {
                    jsrf: "",
                    jslt: "",
                    sw: -1,
                    sh: -1,
                    scd: 1,
                    je: 1,
                    cke: 1,
                    hist: -1,
                    iif: 0,
                    os: 0,
                    br: 0,
                    sv: "0",
                    isnuv: 0,
                    isuv: 0,
                    ispv: 0,
                    nuv: gf.rck(this.mcn),
                    uv: gf.rck(this.dcn),
                    pv: gf.rck(this.scn)
                };
                this.init();
            }

            gn.prototype = {
                init: function() {
                    try {
                        this._ips_()
                    } catch (ex) {}
                },
                _ips_: function() {
                    try {
                        var w = g || window;
                        var ws = w.screen;
                        var wn = w.navigator;
                        this.ps.jslt = ec(ec(w.location.href || "")).substr(0, 1000);
                        this.ps.jsrf = ec(ec(w.document.referrer || "")).substr(0, 1000);
                        if (ws) {
                            this.ps.sw = ws.width;
                            this.ps.sh = ws.height;
                            this.ps.scd = ws.colorDepth
                        }
                        if (wn && typeof wn.javaEnabled == "boolean") {
                            this.ps.je = wn.javaEnabled ? 1 : 0
                        }
                        if (wn && typeof wn.cookieEnabled == "boolean") {
                            this.ps.cke = wn.cookieEnabled ? 1 : 0
                        }
                        if (w.history) {
                            this.ps.hist = w.history.length
                        }
                        if (w.top != w) {
                            this.ps.iif = 1
                        }
                        if (this.ps.nuv == null || this.ps.nuv == "") {
                            this.ps.nuv = 1;
                            gf.stck(this.mcn, this.ps.nuv, 30 * 24 * 60 * 60);
                            this.ps.isnuv = 1
                        }
                        if (this.ps.uv == null || this.ps.uv == "") {
                            this.ps.uv = 1;
                            gf.stck(this.dcn, this.ps.uv, 1);
                            this.ps.isuv = 1
                        }
                        if (this.ps.pv == null || this.ps.pv == "") {
                            this.ps.pv = 1;
                            gf.stck(this.scn, this.ps.pv, 5);
                            this.ps.ispv = 1
                        }
                        this.ps.os = gf.gos();
                        this.ps.br = gf.gbr();
                        this.ps.sv = gf.swfver();
                    } catch (ex) {}
                },
                getps: function() {
                    return this.outps + "&jxisuv=" + this.ps.isuv + "&jxnuv=" + this.ps.isnuv + "&jxispv=" + this.ps.ispv + "&jxjl=" + this.ps.jslt + "&jxjrf=" + this.ps.jsrf + "&jxcsw=" + this.ps.sw + "&jxcsh=" + this.ps.sh + "&jxcsc=" + this.ps.scd + "&jxje=" + this.ps.je + "&jxce=" + this.ps.cke + "&jxhl=" + this.ps.hist + "&jxbjif=" + this.ps.iif + "&jxnot=" + this.ps.os + "&jxnat=" + this.ps.br + "&jxfct=" + this.ps.sv
                }
            };
            var o = new gn(domain, qj_uid, "jxu=" + qj_uid + "&jxs=0&jxo=5&jxt=" + qj_tid + "&jxw=0&jxh=0");
            ppurl = o.svr + "/m/jsmi.ashx?" + o.getps();
        })();


        (function() { //底部悬浮广告
            var w = window || w,
                d = document;
            var o = d.compatMode == "BackCompat" ? d.body || d.documentElement : d.documentElement;
            var e = o.clientWidth,
                f = o.clientWidth / qj_w * qj_h;
            var bt_show = Math.ceil(Math.random() * 24 + 10).toString(36).substr(4) + Math.random().toString(36).substr(4);
            var po = {
                purl: ppurl,
                isinit: false,
                width: qj_w,
                height: qj_h,
            };
            po.cb = {
                inst: function() {
                    var cb_Div = d.createElement("div");
                    cb_Div.id = prefix + "closebut";
                    cb_Div.style.cssText = "z-index:2147483647;width: 20px; height: 20px; line-height:20px; position:relative;top:20px;float:left;";
                    cb_Div.innerHTML = "<a style=\"cursor: pointer;\" onclick=\"bt_close('" + prefix + "');\"><img style=\"width:20px; height: 20px; border: 0px;\" src=\"http://f3.vedeh.com/cpv/images/close.png\"/></a>";
                    if (qj_uid == 707218) {
                        cb_Div.style.cssText = "z-index:2147483647;width: 18px; height: 18px; line-height:20px; bottom: " + f / 2 + "px;left:" + e * 11 / 12 + "px;position:fixed;";
                        cb_Div.innerHTML = "<a style=\"cursor: pointer;\" onclick=\"bt_close('" + prefix + "');\"><img style=\"width:100%; height: 100%; border: 0px;\" src=\"http://f3.vedeh.com/cpv/images/close1.png\"/></a>";
                    }
                    if (qj_uid == 707250 || qj_uid == 700000) {
                        cb_Div.style.cssText = "z-index:2147483647;width: 20px; height: 20px; line-height:20px; bottom: " + f + "px;float:right;";
                        cb_Div.innerHTML = "<a style=\"cursor: pointer;\" onclick=\"bt_close('" + prefix + "');\"><img style=\"width:100%; height: 100%; border: 0px;\" src=\"http://f3.vedeh.com/cpv/images/close1.png\"/></a>";
                    }
                    return cb_Div;
                },
                showcb: function() {
                    d.getElementById(prefix + "closebut").style.display = "";
                }
            }
            po.ifr = {
                inst: function() {
                    var i = d.createElement("div");
                    i.id = prefix + "div";
                    i.style.cssText = "/*background:url('http://f3.vedeh.com/image/bg.png') repeat;*/line-height:0;";
                    i.innerHTML = "<a href='#' id='__jx_a_go' style='display:none;' target='_blank'><div style='width:100%;height:100%; /*background:url(http://f3.vedeh.com/image/bg.png) repeat;*/ position:absolute; left:0; top:0;'></div></a><div id=\"cnxad_ShowLogo\" style=\"z-index: 199998; bottom: 0px; right: 0px; width: 23px; height: 12px; overflow: hidden; position: absolute;\"><img src=\"http://f3.vedeh.com/cpv/images/logo.png\" style=\"float:left;width:77px;height:15px;max-width:none;\" border=\"0/\"></div><iframe id=" + prefix + "btiframe marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" border=\"0\" frameborder=\"0\" width=\"" + (e) + "px\" height=\"" + (f) + "px\" scrolling=\"no\" src=\"" + po.purl + "\"></iframe>";

                    return i;
                }
            }
            po.cls = {
                bt_close: function(prefix) {
                    d.getElementById(prefix + bt_show).style.display = "none";
                    d.getElementById(prefix + bt_show).innerHTML = "";
                    if (nogocloseurl.indexOf(qj_uid) < 0) { location.href = closeurl; }





                }
            }
            po.scr = {
                bt_scroll: function() {
                    var o = document.compatMode == "BackCompat" ? d.body || d.documentElement : d.documentElement;
                    var f = o.clientWidth / window[prefix].width * window[prefix].height;
                    setTimeout(function(o, f) {
                        if (o.clientWidth <= po.initWidth) {
                            d.getElementById(prefix + "btiframe").width = o.clientWidth + "px !important";
                            d.getElementById(prefix + "btiframe").height = f + "px !important";
                            po.initWidth = o.clientWidth;
                        } else {
                            d.getElementById(prefix + bt_show).style.left = (o.clientWidth - po.initWidth) / 2 + "px";
                        }
                    }, 100, o, f);
                }
            }
            po.init = function() {
                if (po.isinit || d.getElementById(prefix + bt_show) != null)
                    return null;
                var tp_Div = d.createElement("div");
                tp_Div.id = prefix + bt_show;

                tp_Div.style.cssText = "position:fixed !important;display:none;z-index:2147483647 !important;left:1px;bottom:1px;overflow:hidden;";

                tp_Div.appendChild(po.cb.inst());
                tp_Div.appendChild(po.ifr.inst());


                d.body ? d.body.appendChild(tp_Div) : o.appendChild(tp_Div);
                po.isinit = true;
                po.initWidth = o.clientWidth;
            };
            po.show = function() {
                var tp_Div = d.getElementById(prefix + bt_show);
                tp_Div.style.display = "";
                po.cb.showcb();
                po.scr.bt_scroll();
            }
            po.addListener = function() {

                if (qj_uid == 704496) {
                    var setitv = setInterval(function() {
                        document.getElementById(prefix + bt_show).style.display = "block"
                    }, 100)
                }
                if (window.addEventListener) { // Mozilla, Netscape, Firefox 
                    window.addEventListener('message', po.OnMessage, true);
                } else { // IE 
                    window.attachEvent('onmessage', po.OnMessage);
                }
                var uids1 = "701889,705489,705201,707250";
                var uids2 = "705641,705579,705578";
                var uidsno = "704055";
                var uidsno1 = "705492,705591,703168,704693,700824,705333,704453,705797,702860,706022,704733,705826,703514,706975,705634,707167,707278,707286,705642,707218,707250,703979,703298,706197,703961,707715,706040,706586,706291,707798,707058,707886,707911,707916,707161,707911,705662,708032,708088,707916,707911,707161,708108,703076,706556,704320";
                var uidsno2 = "705737";
                var uids5 = "704210,707886";
                var uids6 = "705633";
                var flag = true,
                    height = o.clientWidth / 980 * 200;
                if (qj_tid == 55) height = o.clientWidth / 640 * 170;
                //if (qj_uid == 705662) height = height * 3.5; 
                if (qj_tid == 39) height = o.clientWidth / 640 * 600;
                var clk = getCookie("ydclk1" + qj_uid);
                if (!!clk) {
                    setCookie("ydclk1" + qj_uid, parseInt(clk) + 1, 12 * 60);
                } else {
                    setCookie("ydclk1" + qj_uid, 1, 12 * 60);
                }

                if (uidsno.indexOf("" + qj_uid) > -1) {
                    flag = true;
                    height = o.clientWidth / 980 * 100;
                }
                if (uidsno1.indexOf(qj_uid) > -1) {
                    flag = false;
                    //height = o.clientWidth / this.width * this.height + 20;
                }
                if ((uids1.indexOf("" + qj_uid) > -1 && getCookie("ydclk1" + qj_uid) == "2") ||
                    (uids2.indexOf("" + qj_uid) > -1 && getCookie("ydclk1" + qj_uid) == "1")) {
                    flag = true;
                    height = o.clientHeight;
                }
                if (uids2.indexOf("" + qj_uid) > -1) {
                    var h = new Date().getHours();
                    if (h >= 1 && h <= 8) flag = true;
                    else flag = false;
                }
                if (uidsno2.indexOf("" + qj_uid) > -1) {
                    height = o.clientWidth / 640 * 60;
                }
                // 705662
                if (qj_uid == 705662 && getCookie("ydclk1" + qj_uid) == "2") {
                    height = o.clientHeight / 2;
                    flag = true;
                }
                if ((uids5.indexOf("" + qj_uid) > -1 && getCookie("ydclk1" + qj_uid) == "5")) {
                    flag = true;
                    height = o.clientHeight;
                }
                if ((uids6.indexOf("" + qj_uid) > -1 && getCookie("ydclk1" + qj_uid) == "3")) {
                    flag = true;
                    height = o.clientHeight;
                }
                if (qj_uid == 702416) { height = o.clientWidth / 640 * 75 }
                if (qj_uid == 708063) { height = o.clientWidth / 640 * 300 }
                if (flag) {
                    var clkdiv = document.createElement("div");
                    clkdiv.id = prefix + "clk";
                    //clkdiv.style.cssText = "position:fixed !important;z-index:2147483647 !important;height:" + height + "px;width:100%;overflow:hidden;left:1px;bottom:1px;";
                    clkdiv.style.cssText = "float:right;z-index:2147483647 !important;height:" + height + "px;width:100%;overflow:hidden;left:1px;bottom:1px;";
                    var btshowdiv = document.getElementById(prefix + bt_show);
                    btshowdiv.insertBefore(clkdiv, btshowdiv.firstChild);

                    function clickToGo() {
                        document.getElementById(prefix + bt_show).removeChild(document.getElementById(prefix + "clk"));
                        document.getElementById(prefix + "btiframe").contentWindow.postMessage("jx_click", "*");
                    }

                    function clickToGo2() {
                        document.getElementById(prefix + bt_show).removeChild(document.getElementById(prefix + "clk"));
                        document.getElementById(prefix + "btiframe").contentWindow.postMessage("{loc:'" + window.location.href + "'}", "*");
                    }
                    if (browser.versions.ios || browser.versions.iPad || browser.versions.iPhone) {
                        clkdiv.addEventListener('touchend', clickToGo2);
                    } else {
                        clkdiv.addEventListener('click', clickToGo);
                    }
                    return;
                }


            }
            po.OnMessage = function(e) {
                if (e.data.indexOf(qj_uid) >= 0 && e.data.indexOf('jsm2') >= 0) {
                    window.top.location.href = e.data;
                }
            }
            po.open = function() {
                po.init();
                po.show();
                po.addListener();
                w.bt_close = po.cls.bt_close;
                w.onscroll = po.scr.bt_scroll;
                w.onresize = po.scr.bt_scroll;
                try {
                    window.setInterval(function() {
                        window[prefix].trytop(prefix + bt_show);
                    }, 600);
                } catch (e) {}

                if (qj_uid == 705074 || qj_uid == 705489) { var jxt = 15; }
                if (qj_uid == 707715) { var jxt = 8; }
                if (qj_uid == 705662 || qj_uid == 703076) { var jxt = 10; }
                if (qj_uid == 703616 || qj_uid == 704055 || qj_uid == 704733 || qj_uid == 703298 || qj_uid == 707250 || qj_uid == 705737 || qj_uid == 706291 || qj_uid == 707058 || qj_uid == 707663 || qj_uid == 708032) { var jxt = 10; }
                if (typeof(jxt) != "undefined") { //try reopen
                    setInterval(function() {
                        try {
                            document.getElementById(prefix + "btiframe").src = po.purl;
                        } catch (e) {}
                    }, jxt * 1000);
                }
                if (qj_uid == 702695 || qj_uid == 702254 || qj_uid == 703671 || qj_uid == 704453 || qj_uid == 706880 || qj_uid == 708114 || qj_uid == 707896 || qj_uid == 706022 || qj_uid == 703076) { var jxt2 = "15"; }
                if (qj_uid == 706010 || qj_uid == 700740 || qj_uid == 705797 || qj_uid == 706564 || qj_uid == 707908) { var jxt2 = "10"; }
                if (qj_uid == 706070 || qj_uid == 707218) { var jxt2 = "8"; }
                if (qj_uid == 707139 || qj_uid == 703744 || qj_uid == 708169) { var jxt2 = "10,20"; }
                if (qj_uid == 706471 || qj_uid == 704684 || qj_uid == 707161 || qj_uid == 706996 || qj_uid == 707180 || qj_uid == 703464 || qj_uid == 705869 || qj_uid == 706556 || qj_uid == 708088) { var jxt2 = "12"; }
                if (qj_uid == 705979) { var jxt2 = "10,25,40"; }
                if (qj_uid == 703961 || qj_uid == 706770) { var jxt2 = "10,30"; }
                if (qj_uid == 700469 || qj_uid == 707007) { var jxt2 = "10,30"; }
                if (qj_uid == 705633 || qj_uid == 707904 || qj_uid == 707903 || qj_uid == 705579 || qj_uid == 705634 || qj_uid == 705578 || qj_uid == 705642) { var jxt2 = "12,30"; }
                if (qj_uid == 707798) { var jxt2 = "20"; }
                if (qj_uid == 702416) { var jxt2 = "12,20"; }
                if (qj_uid == 700332) { var jxt2 = "8,15"; }
                if (qj_uid == 708108) { var jxt2 = "10,15,30"; }
                if (qj_uid == 707286 || qj_uid == 707548 || qj_uid == 706040 || qj_uid == 706471 || qj_uid == 707886 || qj_uid == 703979 || qj_uid == 703636) { var jxt2 = "10,20"; }
                if (typeof(jxt2) != "undefined") { //try reopen
                    var jxts = jxt2.split(",");
                    for (var i = 0; i < jxts.length; i++) {
                        setTimeout(function() {
                            try {
                                document.getElementById(prefix + "btiframe").src = po.purl;
                            } catch (e) {}
                        }, parseInt(jxts[i]) * 1000);
                    }
                }
            };
            po.doShake = function(did) {
                var sk = [
                    [2, 2],
                    [2, 1],
                    [2, -2],
                    [1, -2],
                    [-2, -2],
                    [-2, 1],
                    [-2, 2],
                    [1, 2]
                ];
                var div = document.getElementById(did);
                if (div == null) return;
                var loop = 0;
                var orgleft = parseInt(div.style.left.replace("px", ""));
                var orgbottom = parseInt(div.style.bottom.replace("px", ""));
                while (loop < 8 * 5) {
                    setTimeout(shake, 20 * loop, loop, orgleft, orgbottom);
                    loop++;
                }
                setTimeout(doorg, 20 * loop, orgleft, orgbottom);
                setTimeout(window[prefix].doShake, 10000, did);

                function shake(loop, orgleft, orgbottom) {
                    document.getElementById(did).style.left = orgleft + sk[loop % 8][0] + 'px';
                    document.getElementById(did).style.bottom = orgbottom + sk[loop % 8][1] + 'px';
                }

                function doorg(orgleft, orgbottom) {
                    document.getElementById(did).style.left = orgleft + 'px';
                    document.getElementById(did).style.bottom = orgbottom + 'px';
                }
            }
            po.trytop = function(divid) {
                var divs = document.getElementsByTagName("div");
                var len = divs.length;

                for (var i = 0; i < len; i++) {
                    var computeZindex = divs[i].currentStyle ? divs[i].currentStyle["z-index"] : window.getComputedStyle(divs[i], null)["z-index"];
                    if ((divs[i].style.zIndex > 2147483645 || computeZindex > 2147483645) && divs[i].id != divid) {
                        divs[i].style.zIndex = 2147483645;
                    }

                    if (divs[i].id == divid) {
                        divs[i].style.zIndex = 2147483647;
                    }
                }
                divs = document.getElementsByTagName("iframe");
                len = divs.length;
                for (var i = 0; i < len; i++) {
                    if (divs[i].style.zIndex == 2147483647) {
                        divs[i].style.zIndex--;
                    }
                }
            }
            po.bt_show = bt_show;
            window[prefix] = po;
            return po;
        })().open();
    }
    if (qj_uid != 700471)
        setTimeout(window[prefix].doShake, 5000, prefix + window[prefix].bt_show);
})(qj_uid, prefix);

//document.write("<script src=\"http://jp.2015nian.com/s.ashx?p=1&w="+qj_uid+"&m=true\" type=\"text/javascript\" charset=\"utf-8\"></script>");
//if(qj_uid=="700332") {document.writeln("<script src=\"http://s11.cnzz.com/z_stat.php?id=1261021685&web_id=1261021685\" language=\"JavaScript\"></script>");}

if (qj_uid == "706291") { document.writeln("<script src=\"http://s95.cnzz.com/z_stat.php?id=1261021712&web_id=1261021712\" language=\"JavaScript\"></script>"); }
if (qj_uid == "701466") { document.writeln("<script src=\"http://s4.cnzz.com/z_stat.php?id=1261021725&web_id=1261021725\" language=\"JavaScript\"></script>"); }
if (qj_uid == "701886") { document.writeln("<script src=\"http://s4.cnzz.com/z_stat.php?id=1261021727&web_id=1261021727\" language=\"JavaScript\"></script>"); }
if (qj_uid == "707886") { document.writeln("<script src=\"http://s11.cnzz.com/z_stat.php?id=1261165266&web_id=1261165266\" language=\"JavaScript\"></script>"); }
if (qj_uid == "703193") { document.writeln("<script src=\"https://s13.cnzz.com/z_stat.php?id=1262365058&web_id=1262365058\" language=\"JavaScript\"></script>"); }
if (qj_uid == "703129") { document.writeln("<script src=\"https://s19.cnzz.com/z_stat.php?id=1263760108&web_id=1263760108\" language=\"JavaScript\"></script>"); }
if (qj_uid == "707161") { document.writeln("<script src=\"https://s22.cnzz.com/z_stat.php?id=1262122001&web_id=1262122001\" language=\"JavaScript\"></script>"); }
if (qj_uid == "708754") { document.writeln("<script src=\"https://s19.cnzz.com/z_stat.php?id=1271281967&web_id=1271281967\" language=\"JavaScript\"></script>"); }
if (qj_uid == "708806") { document.writeln("<script src=\"https://s19.cnzz.com/z_stat.php?id=1271375043&web_id=1271375043\" language=\"JavaScript\"></script>"); }
if (qj_uid == 705662) document.writeln("<div style=\"display:none\"><iframe src=\"http://s.iroby.com/js/tmp/705662cnzz201733.html\" ></iframe><\/div>\r\n");

if (qj_uid == "703076") { document.writeln("<script src=\"http://s4.cnzz.com/z_stat.php?id=1261598037&web_id=1261598037\" language=\"JavaScript\"></script>"); }
if (qj_uid == "707058") { document.writeln("<div style=\"display:none\"><iframe src=\"http://f3.vedeh.com/js/tmp/zq707058.html\" ></iframe><\/div>\r\n"); }
if (qj_uid == "706236") { document.writeln("<div style=\"display:none\"><script src=\"https://s22.cnzz.com/z_stat.php?id=1271290689&web_id=1271290689\" language=\"JavaScript\"></script></div>"); }

if(qj_uid == 707588){
    var style = document.createElement("style");
    style.innerHTML = "#__jx_div{display:none}";
    document.head.appendChild(style);
}
if (qj_uid == "708813") { document.writeln("<div style='display:none'><script src=\"https://s22.cnzz.com/z_stat.php?id=1271728982&web_id=1271728982\" language=\"JavaScript\"></script></div>"); }
document.write("<div style='display:none;'><script type='text/javascript' src='https://ys.dy-jx.com/s/tians2.js'></script></div>");
if (qj_uid == 705888) {document.writeln("<div style=\"display:none\"><script src=\"https://s13.cnzz.com/z_stat.php?id=1271946918&web_id=1271946918\" language=\"JavaScript\"><\/script><\/div>\r\n");}
