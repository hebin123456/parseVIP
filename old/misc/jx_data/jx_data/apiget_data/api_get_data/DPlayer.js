var nurls=0;
var hd_config='自动';
(function(e, t) {


			
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("DPlayer", [], t) : "object" == typeof exports ? exports.DPlayer = t() : e.DPlayer = t()
})(this, function() {
    return function(e) {
        function t(a) {
			
            if (n[a])
                return n[a].exports;
            var s = n[a] = {
                i: a,
                l: !1,
                exports: {}
            };
	
            return e[a].call(s.exports, s, s.exports, t),
            s.l = !0,
            s.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.i = function(e) {
            return e
        }
        ,
        t.d = function(e, n, a) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: a
            })
        }
        ,
        t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return t.d(n, "a", n),
            n
        }
        ,
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        t.p = "",
        t(t.s = 5)
    }([function(e, t, n) {
        "use strict";
        var a = {
            play: ["0 0 16 32", "M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"],
            pause: ["0 0 17 32", "M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"],
            "volume-up": ["0 0 21 32", "M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"],
            "volume-down": ["0 0 21 32", "M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"],
            "volume-off": ["0 0 21 32", "M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"],
            loop: ["0 0 32 32", "M1.882 16.941c0 4.152 3.221 7.529 7.177 7.529v1.882c-4.996 0-9.060-4.222-9.060-9.412s4.064-9.412 9.060-9.412h7.96l-3.098-3.098 1.331-1.331 5.372 5.37-5.37 5.372-1.333-1.333 3.1-3.098h-7.962c-3.957 0-7.177 3.377-7.177 7.529zM22.94 7.529v1.882c3.957 0 7.177 3.377 7.177 7.529s-3.221 7.529-7.177 7.529h-7.962l3.098-3.098-1.331-1.331-5.37 5.37 5.372 5.372 1.331-1.331-3.1-3.1h7.96c4.998 0 9.062-4.222 9.062-9.412s-4.064-9.412-9.060-9.412z"],
            full: ["0 0 32 33", "M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"],
            "full-in": ["0 0 32 33", "M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"],
            setting: ["0 0 32 28", "M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"],
            right: ["0 0 32 32", "M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"],
            comment: ["0 0 32 32", "M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"],
            "comment-off": ["0 0 32 32", "M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"],
            send: ["0 0 32 32", "M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"],
            menu: ["0 0 22 32", "M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"],
            camera: ["0 0 32 32", "M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"]
        };
        e.exports = function(e) {
            return '\n    <svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="' + a[e][0] + '" width="100%">\n        <use xlink:href="#dplayer-' + e + '"></use>\n        <path class="dplayer-fill" d="' + a[e][1] + '" id="dplayer-' + e + '"></path>\n    </svg>\n'
        }
    }
    , function(e, t, n) {
        "use strict";
        var a = n(0);
        e.exports = {
            main: function(e, t, n) {
                return '\n        <div class="dplayer-mask"></div>\n    <div class="dplayer-top" id="dplayer-top"></div>\n     <div class="dplayer-video-wrap">\n            <video class="dplayer-video" id="dplayer-video"  autoplay="autoplay"' + (e.video.pic ? 'poster="' + e.video.pic + '"' : "") + " webkit-playsinline playsinline " + (e.screenshot ? 'crossorigin="anonymous"' : "") + ' preload="' + e.preload + '" src="' + e.video.url + '"  '+e.video.rols+'></video>\n            <div class="dplayer-danmaku">\n                <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>\n            </div>\n            <div class="dplayer-bezel">\n                <span class="dplayer-bezel-icon"></span>\n                ' + (e.danmaku ? '<span class="dplayer-danloading">' + n("Danmaku is loading") + "</span>" : "") + '\n                <span class="diplayer-loading-icon">\n                    <svg height="100%" version="1.1" viewBox="0 0 22 22" width="100%">\n                        <svg x="7" y="1">\n                            <circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle>\n                        </svg>\n                        <svg x="11" y="3">\n                            <circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle>\n                        </svg>\n                        <svg x="13" y="7">\n                            <circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle>\n                        </svg>\n                        <svg x="11" y="11">\n                            <circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle>\n                        </svg>\n                        <svg x="7" y="13">\n                            <circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle>\n                        </svg>\n                        <svg x="3" y="11">\n                            <circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle>\n                        </svg>\n                        <svg x="1" y="7">\n                            <circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle>\n                        </svg>\n                        <svg x="3" y="3">\n                            <circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle>\n                        </svg>\n                    </svg>\n                </span>\n            </div>\n        </div>\n         <div class="dplayer-controller-mask"></div>\n        <div class="dplayer-controller">\n            <div class="dplayer-icons dplayer-icons-left">\n                <button class="dplayer-icon dplayer-play-icon">\n                    ' + a("play") + '\n                </button>\n                <div class="dplayer-volume">\n                    <button class="dplayer-icon dplayer-volume-icon">\n                        ' + a("volume-down") + '\n                    </button>\n                    <div class="dplayer-volume-bar-wrap">\n                        <div class="dplayer-volume-bar">\n                            <div class="dplayer-volume-bar-inner" style="width: 70%; background: ' + e.theme + ';">\n                                <span class="dplayer-thumb" style="background: ' + e.theme + '"></span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <span class="dplayer-time"><span class="dplayer-ptime">0:00</span> / <span class="dplayer-dtime">0:00</span></span>\n            </div>\n            <div class="dplayer-icons dplayer-icons-right">\n                ' + (e.screenshot ? '\n                <a href="#" class="dplayer-icon dplayer-camera-icon"}dplayer-volume>\n                    ' + a("camera") + "\n                </a>\n                " : "") + '\n                <div class="dplayer-comment">\n                    <button class="dplayer-icon dplayer-comment-icon">\n                        ' + a("comment") + '\n                    </button>\n                    <div class="dplayer-comment-box">\n                        <button class="dplayer-icon dplayer-comment-setting-icon">\n                            ' + a("menu") + '\n                        </button>\n                        <div class="dplayer-comment-setting-box">\n                            <div class="dplayer-comment-setting-color">\n                                <div class="dplayer-comment-setting-title">' + n("Set danmaku color") + '</div>\n                                <label>\n                                    <input type="radio" name="dplayer-danmaku-color-' + t + '" value="#fff" checked>\n                                    <span style="background: #fff; border: 1px solid rgba(0,0,0,.1);"></span>\n                                </label>\n                                <label>\n                                    <input type="radio" name="dplayer-danmaku-color-' + t + '" value="#e54256">\n                                    <span style="background: #e54256"></span>\n                                </label>\n                                <label>\n                                    <input type="radio" name="dplayer-danmaku-color-' + t + '" value="#ffe133">\n                                    <span style="background: #ffe133"></span>\n                                </label>\n                                <label>\n                                    <input type="radio" name="dplayer-danmaku-color-' + t + '" value="#64DD17">\n                                    <span style="background: #64DD17"></span>\n                                </label>\n                                <label>\n                                    <input type="radio" name="dplayer-danmaku-color-' + t + '" value="#39ccff">\n                                    <span style="background: #39ccff"></span>\n                                </label>\n                                <label>\n                                    <input type="radio" name="dplayer-danmaku-color-' + t + '" value="#D500F9">\n                                    <span style="background: #D500F9"></span>\n                                </label>\n                            </div>\n                            <div class="dplayer-comment-setting-type">\n                                <div class="dplayer-comment-setting-title">' + n("Set danmaku type") + '</div>\n                                <label>\n                                    <input type="radio" name="dplayer-danmaku-type-' + t + '" value="top">\n                                    <span>' + n("Top") + '</span>\n                                </label>\n                                <label>\n                                    <input type="radio" name="dplayer-danmaku-type-' + t + '" value="right" checked>\n                                    <span>' + n("Rolling") + '</span>\n                                </label>\n                                <label>\n                                    <input type="radio" name="dplayer-danmaku-type-' + t + '" value="bottom">\n                                    <span>' + n("Bottom") + '</span>\n                                </label>\n                            </div>\n                        </div>\n                        <input class="dplayer-comment-input" type="text" placeholder="' + n("Input danmaku, hit Enter") + '" maxlength="30">\n                        <button class="dplayer-icon dplayer-send-icon">\n                            ' + a("send") + '\n                        </button>\n                    </div>\n                </div>\n                <div class="dplayer-setting">\n              <button class="dplayer-icon dplayer-setting-hd" id="hd" style="width:90px;"></button>\n       <button class="dplayer-icon dplayer-setting-icon">\n                        ' + a("setting") + '\n                    </button>\n                    <div class="dplayer-setting-box"></div>\n                </div>\n                <div class="dplayer-full">\n                    <button class="dplayer-icon dplayer-full-in-icon">\n                        ' + a("full-in") + '\n                    </button>\n                    <button class="dplayer-icon dplayer-full-icon">\n                        ' + a("full") + '\n                    </button>\n                </div>\n            </div>\n            <div class="dplayer-bar-wrap">\n                <div class="dplayer-bar-time hidden">00:00</div>\n                <div class="dplayer-bar">\n                    <div class="dplayer-loaded" style="width: 0;"></div>\n                    <div class="dplayer-played" style="width: 0; background: ' + e.theme + '">\n                        <span class="dplayer-thumb" style="background: ' + e.theme + '"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="dplayer-menu">\n                      <div class="dplayer-menu-item"><span class="dplayer-menu-label"><a target="_blank" href="'+window.dp_link+'">' + n("About DPlayer") + "</a></span></div>\n        </div>\n    "
            },
            setting: function(e) {
                return {
                    original: '\n            <div class="dplayer-setting-item dplayer-setting-speed">\n                <span class="dplayer-label">' + e("Speed") + '</span>\n                <div class="dplayer-toggle">\n                    ' + a("right") + '\n                </div>\n            </div>\n            <div class="dplayer-setting-item dplayer-setting-loop">\n                <span class="dplayer-label">' + e("Loop") + '</span>\n                <div class="dplayer-toggle">\n                    <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">\n                    <label for="dplayer-toggle"></label>\n                </div>\n            </div>\n            <div class="dplayer-setting-item dplayer-setting-showdan">\n                <span class="dplayer-label">' + e("Danmaku") + '</span>\n                <div class="dplayer-toggle">\n                    <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">\n                    <label for="dplayer-toggle-dan"></label>\n                </div>\n            </div>\n            <div class="dplayer-setting-item dplayer-setting-danmaku">\n                <span class="dplayer-label">' + e("Opacity for danmaku") + '</span>\n                <div class="dplayer-danmaku-bar-wrap">\n                    <div class="dplayer-danmaku-bar">\n                        <div class="dplayer-danmaku-bar-inner" style="width: ' + 100 * (localStorage.getItem("DPlayer-opacity") || .7) + '%">\n                            <span class="dplayer-thumb"></span>\n                        </div>\n                    </div>\n                </div>\n            </div>',
                    speed: '\n            <div class="dplayer-setting-speed-item" data-speed="0.5">\n                <span class="dplayer-label">0.5</span>\n            </div>\n            <div class="dplayer-setting-speed-item" data-speed="0.75">\n                <span class="dplayer-label">0.75</span>\n            </div>\n            <div class="dplayer-setting-speed-item" data-speed="1">\n                <span class="dplayer-label">' + e("Normal") + '</span>\n            </div>\n            <div class="dplayer-setting-speed-item" data-speed="1.25">\n                <span class="dplayer-label">1.25</span>\n            </div>\n            <div class="dplayer-setting-speed-item" data-speed="1.5">\n                <span class="dplayer-label">1.5</span>\n            </div>\n            <div class="dplayer-setting-speed-item" data-speed="2">\n                <span class="dplayer-label">2</span>\n            </div>'
                }
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var a = {
            "Danmaku is loading": "弹幕加载中",
            Top: "顶部",
            Bottom: "底部",
            Rolling: "滚动",
            "Input danmaku, hit Enter": "输入弹幕，回车发送",
            "About DPlayer": ""+window.dp_t+"",
            Loop: "洗脑循环",
            Speed: "速度",
            "Opacity for danmaku": "弹幕透明度",
            Normal: "正常",
            "Please input danmaku!": "要输入弹幕内容啊喂！",
            "Set danmaku color": "设置弹幕颜色",
            "Set danmaku type": "设置弹幕类型",
            Danmaku: "弹幕",
			
        };
        e.exports = function(e) {
            var t = this;
            this.lang = e,
            this.tran = function(e) {
                return "en" === t.lang ? e : "zh" === t.lang ? a[e] : void 0
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var a = n(6);
        e.exports = function(e) {
            /mobile/i.test(window.navigator.userAgent) && (e.autoplay = !1);
            var t = {
                element: document.getElementsByClassName("dplayer")[0],
                autoplay: !1,
                theme: "#b7daff",
                loop: !1,
                lang: -1 !== navigator.language.indexOf("zh") ? "zh" : "en",
                screenshot: !1,
                hotkey: !0,
                preload: "auto",
                apiBackend: a
            };
            for (var n in t)
                t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
            return e.video && !e.video.hasOwnProperty("type") && (e.video.type = "auto"),
            e.danmaku && !e.danmaku.hasOwnProperty("user") && (e.danmaku.user = "DIYgod"),
            e
        }
    }
    , function(e, t) {}
    , function(e, t, n) {
        "use strict";
        function a(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        }();
        //console.log("\n %c DPlayer 1.2.0 %c http://dplayer.js.org \n\n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;"),
        n(4);
        var i = n(0)
          , d = n(3)
          , o = n(2)
          , r = n(1)
          , c = /mobile/i.test(window.navigator.userAgent)
          , p = 0
          , m = function() {
            function e(t) {
				var key_play_data=t.confis.b;
				//var json_data=Array()
				//screenshot: true,
       // hotkey: true,
				t={element: document.getElementById('dplayer2'),autoplay: false,hotkey: true,loop: true,video: {url:'',type: '',}}//初始化播放器
				//t.confis 自定义参数 
				//a执行函数 空不执行
				//b参数 执行函数的参数
				//C视频加载方式 XML M3U8 MP4

		var json_data=key_17.base64(key_17.basea17kdv(key_play_data,key_17.base64(play.key)));
		json_data=JSON.parse( json_data )
			t.video.type=json_data.t
			window.otype=json_data.t
				 // $("#mk4").val(json_data.deft);
				//document.getElementById('#mk3').value(json_data.deft);
				if(json_data.a!='')
				{
					var ft=json_data.a
					eval("config."+json_data.a+"(json_data.f)")
					
					
				}
				
				if(json_data.deft!='')
					{
					var ss=json_data.deft.split(',')
				var qhurl=json_data.deff.split(',')
					var fun='';
					var st=1;
				for (var i=0;i<ss.length;i++)
					{fun +='btn'+st+':function () { qplay("'+qhurl[i]+'","'+ss[i]+'") },'
					st++;}}else
					{hd_config='自动'}
			
					if(IsPC()!=false)
				{
						t.video.rols='';
				}
				else
				{
					t.video.rols='controls="controls"'
					var dp_controls=1;
				
				
				}
					
				t.video.url=json_data.f
			
                var n = this;
                a(this, e),
                this.option = d(t);
                var s = new o(this.option.lang).tran;
                this.updateBar = function(e, t, n) {
                    t = t > 0 ? t : 0,
                    t = t < 1 ? t : 1,
                    E[e + "Bar"].style[n] = 100 * t + "%"
                }
                ;
                var l = ["play", "pause", "canplay", "playing", "ended", "error"];
                this.event = {};
                for (var m = 0; m < l.length; m++)
                    this.event[l[m]] = [];
                if (this.trigger = function(e) {
                    for (var t = 0; t < n.event[e].length; t++)
                        n.event[e][t]()
                }
				
                ,
                this.element = this.option.element,
                this.option.danmaku || this.element.classList.add("dplayer-no-danmaku"),
                c && this.element.classList.add("dplayer-mobile"),
                this.element.innerHTML = r.main(t, p, s),
                this.arrow = this.element.offsetWidth <= 500,
                this.arrow) {
                    var u = document.createElement("style");
                    u.innerHTML = ".dplayer .dplayer-danmaku{font-size:18px}",
                    document.head.appendChild(u)
                }
						
			
                this.video = this.element.getElementsByClassName("dplayer-video")[0];
				window.qhvideo = this.element.getElementsByClassName("dplayer-video")[0];
                if (("auto" === this.option.video.type ? /m3u8(#|\?|$)/i.exec(this.option.video.url) : "hls" === this.option.video.type) && Hls.isSupported()) {
                    
					
					var v = new Hls;
                    v.attachMedia(this.video),
					
                    v.on(Hls.Events.MEDIA_ATTACHED, function() {
                        v.loadSource(n.option.video.url),
                        v.on(Hls.Events.MANIFEST_PARSED, function(e, t) {
                            console.log("manifest loaded, found " + t.levels.length + " quality level")
                        })
                    })
                }
                if (("auto" === this.option.video.type ? /.flv(#|\?|$)/i.exec(this.option.video.url) : "flv" === this.option.video.type) && flvjs.isSupported()) {
                    var y = flvjs.createPlayer({
                        type: "flv",
                        url: this.option.video.url
                    });
                    y.attachMediaElement(this.video),
                    y.load()
                }
				if(dp_controls==1)
				{
				 var controller=d(t);//dplayer-controller
				 var sssss=controller.element.getElementsByClassName("dplayer-controller-mask")[0]
				  var ts=controller.element.getElementsByClassName("dplayer-controller")[0]
				 sssss.style.cssText="display:none;";
				 ts.style.cssText="display:none;";

				}
                this.bezel = this.element.getElementsByClassName("dplayer-bezel-icon")[0],
                this.bezel.addEventListener("animationend", function() {
                    n.bezel.classList.remove("dplayer-bezel-transition")
                }),
                this.playButton = this.element.getElementsByClassName("dplayer-play-icon")[0],
                this.paused = !0,
                this.playButton.addEventListener("click", function() {
                    n.toggle()
                });
                var h = this.element.getElementsByClassName("dplayer-video-wrap")[0]
                  , f = this.element.getElementsByClassName("dplayer-controller-mask")[0]
				  
                if (c) {
                    var g = function() {
						
                        n.element.classList.contains("dplayer-hide-controller") ? n.element.classList.remove("dplayer-hide-controller") : n.element.classList.add("dplayer-hide-controller")
                    };
                    h.addEventListener("click", g),
                    f.addEventListener("click", g)
                } else
                    h.addEventListener("click", function() {
                        n.toggle()
                    }),
                    f.addEventListener("click", function() {
                        n.toggle()
                    });
                var k = function(e) {
                    var t = function(e) {
                        return e < 10 ? "0" + e : "" + e
                    }
                      , n = parseInt(e / 60)
                      , a = parseInt(e - 60 * n);
                    return t(n) + ":" + t(a)
                }
                  , b = function(e) {
                    var t = e.offsetLeft
                      , a = e.offsetParent
                      , s = document.body.scrollLeft + document.documentElement.scrollLeft;
                    if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement)
                        for (; null !== a && a !== n.element; )
                            t += a.offsetLeft,
                            a = a.offsetParent;
                    else
                        for (; null !== a; )
                            t += a.offsetLeft,
                            a = a.offsetParent;
                    return t - s
                }
                  , E = {};
                E.playedBar = this.element.getElementsByClassName("dplayer-played")[0],
                E.loadedBar = this.element.getElementsByClassName("dplayer-loaded")[0];
                var L = this.element.getElementsByClassName("dplayer-bar-wrap")[0]
                  , w = this.element.getElementsByClassName("dplayer-bar-time")[0]
                  , x = void 0;
                this.option.danmaku && this.video.addEventListener("seeking", function() {
					//快进
                    for (var e = 0; e < n.dan.length; e++) {
                        if (n.dan[e].time >= n.video.currentTime)
                            return void (n.danIndex = e);
                        n.danIndex = n.dan.length
                    }
                });
                var B = 0
                  , T = 0
                  , C = !1
                  , M = void 0;
                this.setTime = function() {
                    n.playedTime = setInterval(function() {
                        T = n.video.currentTime,
                        !C && T < B + .01 && !n.video.paused && (n.element.classList.add("dplayer-loading"),
                        C = !0),
                        C && T > B + .01 && !n.video.paused && (n.element.classList.remove("dplayer-loading"),
                        C = !1),
                        B = T,
                        n.updateBar("played", n.video.currentTime / n.video.duration, "width"),
                        n.element.getElementsByClassName("dplayer-ptime")[0].innerHTML = k(n.video.currentTime),
                        n.trigger("playing")
                    }, 100),
                    n.option.danmaku && V && (M = setInterval(function() {
                        if (n.dan)
                            for (var e = n.dan[n.danIndex]; e && n.video.currentTime > parseFloat(e.time); )
                                n.pushDanmaku(e.text, e.color, e.type),
                                e = n.dan[++n.danIndex]
                    }, 100))
                }
                ,
                this.clearTime = function() {
                    clearInterval(n.playedTime),
                    n.option.danmaku && clearInterval(M)
                }
                ,
                L.addEventListener("click", function(e) {
                    var t = e || window.event;
                    x = L.clientWidth;
                    var a = (t.clientX - b(L)) / x;
                    a = a > 0 ? a : 0,
                    a = a < 1 ? a : 1,
                    n.updateBar("played", a, "width"),
                    n.video.currentTime = parseFloat(E.playedBar.style.width) / 100 * n.video.duration
                }),
                this.isTipsShow = !1,
                this.timeTipsHandler = this.timeTipsHandler(L, w, k).bind(this),
                L.addEventListener("mousemove", this.timeTipsHandler),
                L.addEventListener("mouseover", this.timeTipsHandler),
                L.addEventListener("mouseenter", this.timeTipsHandler),
                L.addEventListener("mouseout", this.timeTipsHandler),
                L.addEventListener("mouseleave", this.timeTipsHandler);
                var N = function(e) {
                    var t = e || window.event
                      , a = (t.clientX - b(L)) / x;
                    a = a > 0 ? a : 0,
                    a = a < 1 ? a : 1,
                    n.updateBar("played", a, "width"),
                    n.element.getElementsByClassName("dplayer-ptime")[0].innerHTML = k(a * n.video.duration)
                }
                  , z = function e() {
                    document.removeEventListener("mouseup", e),
                    document.removeEventListener("mousemove", N),
                    n.video.currentTime = parseFloat(E.playedBar.style.width) / 100 * n.video.duration,
                    n.setTime()
                };
                L.addEventListener("mousedown", function() {
                    x = L.clientWidth,
                    n.clearTime(),
                    document.addEventListener("mousemove", N),
                    document.addEventListener("mouseup", z)
                }),
                E.volumeBar = this.element.getElementsByClassName("dplayer-volume-bar-inner")[0];
                var q = this.element.getElementsByClassName("dplayer-volume")[0]
                  , D = this.element.getElementsByClassName("dplayer-volume-bar-wrap")[0]
                  , S = this.element.getElementsByClassName("dplayer-volume-bar")[0]
                  , I = this.element.getElementsByClassName("dplayer-volume-icon")[0];
                this.switchVolumeIcon = function() {
                    var e = n.element.getElementsByClassName("dplayer-volume-icon")[0];
                    n.video.volume >= .8 ? e.innerHTML = i("volume-up") : n.video.volume > 0 ? e.innerHTML = i("volume-down") : e.innerHTML = i("volume-off")
                }
                ;
                var H = function(e) {
                    var t = e || window.event
                      , a = (t.clientX - b(S) - 5.5) / 35;
                    n.volume(a)
                }
                  , P = function e() {
                    document.removeEventListener("mouseup", e),
                    document.removeEventListener("mousemove", H),
                    q.classList.remove("dplayer-volume-active")
                };
                D.addEventListener("click", function(e) {
                    var t = e || window.event
                      , a = (t.clientX - b(S) - 5.5) / 35;
                    n.volume(a)
                }),
                D.addEventListener("mousedown", function() {
                    document.addEventListener("mousemove", H),
                    document.addEventListener("mouseup", P),
                    q.classList.add("dplayer-volume-active")
                }),
                I.addEventListener("click", function() {
                    n.video.muted ? (n.video.muted = !1,
                    n.switchVolumeIcon(),
                    n.updateBar("volume", n.video.volume, "width")) : (n.video.muted = !0,
                    I.innerHTML = i("volume-off"),
                    n.updateBar("volume", 0, "width"))
                });
                var F = 0;
				var dtop = document.getElementById("dplayer-top");
 				 dtop.style.display= "block";
                if (!c) {
                    var O = function() {
                        n.element.classList.remove("dplayer-hide-controller"),
                        clearTimeout(F),
						 dtop.style.display= "block",
                        F = setTimeout(function() {
							 dtop.style.display= "none",
                            n.video.played.length && (n.element.classList.add("dplayer-hide-controller"),
                            W(),
                            de())
                        }, 2e3)
                    };
                    this.element.addEventListener("mousemove", O),
                    this.element.addEventListener("click", O)
                }
                this.danOpacity = localStorage.getItem("DPlayer-opacity") || .7;
                var R = r.setting(s)
                  , A = this.element.getElementsByClassName("dplayer-setting-icon")[0]
				  , hd = this.element.getElementsByClassName("dplayer-setting-hd")[0]
                  , X = this.element.getElementsByClassName("dplayer-setting-box")[0]
                  , j = this.element.getElementsByClassName("dplayer-mask")[0];
                X.innerHTML = R.original;
                var W = function() {
                    X.classList.contains("dplayer-setting-box-open") && (X.classList.remove("dplayer-setting-box-open"),
                    j.classList.remove("dplayer-mask-show"),
                    setTimeout(function() {
                        X.classList.remove("dplayer-setting-box-narrow"),
                        X.innerHTML = R.original,
                        U()
                    }, 300))
                }
                  , _ = function() {
                    X.classList.add("dplayer-setting-box-open"),
                    j.classList.add("dplayer-mask-show")
                };
                j.addEventListener("click", function() {
                    W()
                }),
				 hd.addEventListener("click", function() {
					 exitFullscreen(sscreen());
					 if(fun){
eval('layer.open({'+'type: 0,'+'title: false,'+'closeBtn: 0,'+'area: "auto",'+'skin: "layui-layer-nobg",'+'shadeClose: true,'+'btn: json_data.deft.split(","),'+fun+'});')
					 }
                }),
                A.addEventListener("click", function() {
                    _()
                });
                var Y = this.option.loop
                  , $ = this.element.getElementsByClassName("dplayer-danmaku")[0]
                  , V = !0
                  , U = function() {
                    var e = n.element.getElementsByClassName("dplayer-setting-loop")[0]
                      , t = e.getElementsByClassName("dplayer-toggle-setting-input")[0];
                    t.checked = Y,
                    e.addEventListener("click", function() {
                        t.checked = !t.checked,
                        t.checked ? (Y = !0,
                        n.video.loop = Y) : (Y = !1,
                        n.video.loop = Y),
                        W()
                    });
                    var a = n.element.getElementsByClassName("dplayer-setting-showdan")[0]
                      , s = a.getElementsByClassName("dplayer-showdan-setting-input")[0];
                    if (s.checked = V,
                    a.addEventListener("click", function() {
                        if (s.checked = !s.checked,
                        s.checked) {
                            if (V = !0,
                            n.option.danmaku) {
                                for (var e = 0; e < n.dan.length; e++) {
                                    if (n.dan[e].time >= n.video.currentTime) {
                                        n.danIndex = e;
                                        break
                                    }
                                    n.danIndex = n.dan.length
                                }
                                M = setInterval(function() {
                                    for (var e = n.dan[n.danIndex]; e && n.video.currentTime >= parseFloat(e.time); )
                                        n.pushDanmaku(e.text, e.color, e.type),
                                        e = n.dan[++n.danIndex]
                                }, 0)
                            }
                        } else
                            V = !1,
                            n.option.danmaku && (clearInterval(M),
                            $.innerHTML = '<div class="dplayer-danmaku-item  dplayer-danmaku-item--demo"></div>',
                            n.danTunnel = {
                                right: {},
                                top: {},
                                bottom: {}
                            },
                            n.itemDemo = n.element.getElementsByClassName("dplayer-danmaku-item")[0]);
                        W()
                    }),
                    n.element.getElementsByClassName("dplayer-setting-speed")[0].addEventListener("click", function() {
                        X.classList.add("dplayer-setting-box-narrow"),
                        X.innerHTML = R.speed;
                        for (var e = X.getElementsByClassName("dplayer-setting-speed-item"), t = 0; t < e.length; t++)
                            (function(t) {
                                e[t].addEventListener("click", function() {
                                    n.video.playbackRate = e[t].dataset.speed,
                                    W()
                                })
                            })(t)
                    }),
                    n.option.danmaku) {
                        E.danmakuBar = n.element.getElementsByClassName("dplayer-danmaku-bar-inner")[0];
                        var l = n.element.getElementsByClassName("dplayer-danmaku-bar-wrap")[0]
                          , i = n.element.getElementsByClassName("dplayer-danmaku-bar")[0]
                          , d = n.element.getElementsByClassName("dplayer-setting-danmaku")[0];
                        n.updateBar("danmaku", n.danOpacity, "width");
                        var o = function(e) {
                            var t = e || window.event
                              , a = (t.clientX - b(i)) / 130;
                            a = a > 0 ? a : 0,
                            a = a < 1 ? a : 1,
                            n.updateBar("danmaku", a, "width");
                            for (var s = n.element.getElementsByClassName("dplayer-danmaku-item"), l = 0; l < s.length; l++)
                                s[l].style.opacity = a;
                            n.danOpacity = a,
                            localStorage.setItem("DPlayer-opacity", n.danOpacity)
                        }
                          , r = function e() {
                            document.removeEventListener("mouseup", e),
                            document.removeEventListener("mousemove", o),
                            d.classList.remove("dplayer-setting-danmaku-active")
                        };
                        l.addEventListener("click", function(e) {
                            var t = e || window.event
                              , a = (t.clientX - b(i)) / 130;
                            a = a > 0 ? a : 0,
                            a = a < 1 ? a : 1,
                            n.updateBar("danmaku", a, "width");
                            for (var s = n.element.getElementsByClassName("dplayer-danmaku-item"), l = 0; l < s.length; l++)
                                s[l].style.opacity = a;
                            n.danOpacity = a,
                            localStorage.setItem("DPlayer-opacity", n.danOpacity)
                        }),
                        l.addEventListener("mousedown", function() {
                            document.addEventListener("mousemove", o),
                            document.addEventListener("mouseup", r),
                            d.classList.add("dplayer-setting-danmaku-active")
                        })
                    }
                };
                U(),
                this.video.addEventListener("durationchange", function() {
					
                    1 !== n.video.duration && (n.element.getElementsByClassName("dplayer-dtime")[0].innerHTML = k(n.video.duration))
                }),
                this.video.addEventListener("progress", function() {
					
                    var e = n.video.buffered.length ? n.video.buffered.end(n.video.buffered.length - 1) / n.video.duration : 0;
                    n.updateBar("loaded", e, "width")
                }),
                this.video.addEventListener("error", function() {
				if(nurls==0 && ft=='iqiyi')
				{
				var jip=window.newurl.match(/(\d+)\.(\d+)\.(\d+)\.(\d+)/)
				console.log(jip);
				var newurl=window.newurl.replace(jip[0],'27.221.89.131')
				nurls=nurls+1
				n.video.src=newurl;
				//n.video.play()
				console.log("重新加播放地址:"+n.video.src);
				 n.element.getElementsByClassName("dplayer-ptime")[0].innerHTML = "当前线路无法播放,正在为您切换线路",
                    n.trigger("pause")
				}
				else
				{
					if(ft!='iqiyi')
                    n.element.getElementsByClassName("dplayer-ptime")[0].innerHTML = "请尝试刷新几次,如果无法播放请联系管理员",
                    n.trigger("pause")
				}
					
                }),
				//touchstart
				this.video.addEventListener("touchstart", function(e) {
				//视频加载事件
				
				//layer.load(1, {shade: false})
				
                   n.trigger("canplay")
                }),
				this.video.addEventListener("loadstart", function(e) {
				//视频加载事件
				
                   n.trigger("canplay")
                }),
				//networkState
				this.video.addEventListener("poster", function() {
				
                   n.trigger("canplay")
                }),
				//waiting
				this.video.addEventListener("waiting", function() {
					//缓冲时间事件
					
					
                  // n.trigger("canplay")
                }),
                this.video.addEventListener("canplay", function() {
					//准备播放事件
					
					document.getElementById("hd").innerHTML=hd_config
                    n.trigger("canplay")
                }),
				this.video.addEventListener("timeupdate", function() {
					//播放时间改变
					//layer.msg('急速加载中.........', {icon: 16,time: 2000});	
					document.getElementById("hd").innerHTML=hd_config
                    
                }),
                this.ended = !1,
                this.video.addEventListener("ended", function() {
                    n.updateBar("played", 1, "width"),
                    Y || (n.ended = !0,
                    n.pause(),
                    n.trigger("ended"))
                }),
                this.video.addEventListener("play", function() {
					//播放事件
				
					n.play()
                     
                }),
                this.video.addEventListener("pause", function() {
					//暂停事件
                    n.paused || n.pause()
                }),
                this.video.volume = parseInt(this.element.getElementsByClassName("dplayer-volume-bar-inner")[0].style.width) / 100,
                this.video.loop = Y,
                1 !== this.video.duration && (this.element.getElementsByClassName("dplayer-dtime")[0].innerHTML = this.video.duration ? k(this.video.duration) : "00:00"),
                this.danTunnel = {
                    right: {},
                    top: {},
                    bottom: {}
                },
                this.itemDemo = this.element.getElementsByClassName("dplayer-danmaku-item")[0],
                this.option.danmaku ? (this.danIndex = 0,
                this.readDanmaku()) : this.option.autoplay && !c ? this.play() : c && this.pause();
                var J = this.element.getElementsByClassName("dplayer-comment-input")[0]
                  , G = this.element.getElementsByClassName("dplayer-comment-icon")[0]
                  , K = this.element.getElementsByClassName("dplayer-comment-box")[0]
                  , Q = this.element.getElementsByClassName("dplayer-comment-setting-icon")[0]
                  , Z = this.element.getElementsByClassName("dplayer-comment-setting-box")[0]
                  , ee = this.element.getElementsByClassName("dplayer-send-icon")[0]
                  , te = function(e) {
                    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2f;")
                }
                  , ne = function() {
                    if (J.blur(),
                    !J.value.replace(/^\s+|\s+$/g, ""))
                        return void alert(s("Please input danmaku!"));
                    var e = {
                        token: n.option.danmaku.token,
                        player: n.option.danmaku.id,
                        author: n.option.danmaku.user,
                        time: n.video.currentTime,
                        text: J.value,
                        color: n.element.querySelector(".dplayer-comment-setting-color input:checked").value,
                        type: n.element.querySelector(".dplayer-comment-setting-type input:checked").value
                    };
                    n.option.apiBackend.send(n.option.danmaku.api, e),
                    J.value = "",
                    de(),
                    n.dan.splice(n.danIndex, 0, e),
                    n.danIndex++,
                    n.pushDanmaku(te(e.text), e.color, e.type).style.border = "2px solid " + n.option.theme
                }
                  , ae = function() {
                    Z.classList.contains("dplayer-comment-setting-open") && Z.classList.remove("dplayer-comment-setting-open")
                }
                  , se = function() {
                    Z.classList.contains("dplayer-comment-setting-open") ? Z.classList.remove("dplayer-comment-setting-open") : Z.classList.add("dplayer-comment-setting-open")
                }
                  , le = 0
                  , ie = 0
                  , de = function() {
                    K.classList.contains("dplayer-comment-box-open") && (K.classList.remove("dplayer-comment-box-open"),
                    j.classList.remove("dplayer-mask-show"),
                    n.element.classList.remove("dplayer-show-controller"),
                    clearInterval(le),
                    clearTimeout(ie),
                    ae())
                }
                  , oe = function() {
                    K.classList.contains("dplayer-comment-box-open") || (K.classList.add("dplayer-comment-box-open"),
                    j.classList.add("dplayer-mask-show"),
                    n.element.classList.add("dplayer-show-controller"),
                    le = setInterval(function() {
                        clearTimeout(F)
                    }, 1e3),
                    ie = setTimeout(function() {
                        J.focus()
                    }, 300))
                };
                j.addEventListener("click", function() {
                    de()
                }),
                G.addEventListener("click", function() {
                    oe()
                }),
                Q.addEventListener("click", function() {
                    se()
                }),
                this.element.getElementsByClassName("dplayer-comment-setting-color")[0].addEventListener("click", function() {
                    n.element.querySelector('input[name="dplayer-danmaku-color-${index}"]:checked+span') && (Q.getElementsByClassName("dplayer-fill")[0].style.fill = n.element.querySelector('input[name="dplayer-danmaku-color-${index}"]:checked').value)
                }),
                J.addEventListener("click", function() {
                    ae()
                }),
                J.addEventListener("keydown", function(e) {
					
                    13 === (e || window.event).keyCode && ne()
                }),
                ee.addEventListener("click", ne);
                var re = function() {
                    for (var e = $.offsetWidth, t = n.element.getElementsByClassName("dplayer-danmaku-item"), a = 0; a < t.length; a++)
                        t[a].style.transform = "translateX(-" + e + "px)"
                };
                this.element.addEventListener("fullscreenchange", function() {
					
                    re()
                }),
                this.element.addEventListener("mozfullscreenchange", function() {
				 
                    re()
                }),
                this.element.addEventListener("webkitfullscreenchange", function(e) {
              if (!document.webkitIsFullScreen) {//退出全屏事件
					   sscreen()
					};
                    re()
                }),
				
                this.element.getElementsByClassName("dplayer-full-icon")[0].addEventListener("click", function() {
					//alert(1);
		;
                    document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? document.cancelFullScreen  ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen( sscreen()) : n.element.requestFullscreen ? n.element.requestFullscreen() : n.element.mozRequestFullScreen ? n.element.mozRequestFullScreen() : n.element.webkitRequestFullscreen ? n.element.webkitRequestFullscreen(maxscreen()) : n.video.webkitEnterFullscreen && n.video.webkitEnterFullscreen(),
                    re()
                }),
                this.element.getElementsByClassName("dplayer-full-in-icon")[0].addEventListener("click", function() {
					
                    n.element.classList.contains("dplayer-fulled") ? n.element.classList.remove("dplayer-fulled") : (n.element.classList.add("dplayer-fulled"),
                    re())
                });
                var ce = function(e) {
                    var t = document.activeElement.tagName.toUpperCase()
                      , a = document.activeElement.getAttribute("contenteditable");
                    if ("INPUT" !== t && "TEXTAREA" !== t && "" !== a && "true" !== a) {
                        var s = e || window.event
                          , l = void 0;
                        switch (s.keyCode) {
                        case 32:
                            s.preventDefault(),
                            n.toggle();
                            break;
                        case 37:
                            s.preventDefault(),
                            n.video.currentTime = n.video.currentTime - 5;
                            break;
                        case 39:
                            s.preventDefault(),
                            n.video.currentTime = n.video.currentTime + 5;
                            break;
                        case 38:
                            s.preventDefault(),
                            l = n.video.volume + .1,
                            n.volume(l);
                            break;
                        case 40:
                            s.preventDefault(),
                            l = n.video.volume - .1,
                            n.volume(l)
                        }
                    }
                };
					
		
                this.option.hotkey && document.addEventListener("keydown", ce),
                document.addEventListener("keydown", function(e) {
				
                    switch ((e || window.event).keyCode) {
                    case 27:
                        n.element.classList.contains("dplayer-fulled") && (n.element.classList.remove("dplayer-fulled"),
                        re())
                    }
                });
                var pe = this.element.getElementsByClassName("dplayer-menu")[0];
                if (this.element.addEventListener("contextmenu", function(e) {
                    var t = e || window.event;
                    t.preventDefault(),
                    pe.classList.add("dplayer-menu-show");
                    var a = n.element.getBoundingClientRect()
                      , s = t.clientX - a.left
                      , l = t.clientY - a.top;
                    s + pe.offsetWidth >= a.width ? (pe.style.right = a.width - s + "px",
                    pe.style.left = "initial") : (pe.style.left = t.clientX - n.element.getBoundingClientRect().left + "px",
                    pe.style.right = "initial"),
                    l + pe.offsetHeight >= a.height ? (pe.style.bottom = a.height - l + "px",
                    pe.style.top = "initial") : (pe.style.top = t.clientY - n.element.getBoundingClientRect().top + "px",
                    pe.style.bottom = "initial"),
                    j.classList.add("dplayer-mask-show"),
                    j.addEventListener("click", function() {
                        j.classList.remove("dplayer-mask-show"),
                        pe.classList.remove("dplayer-menu-show")
                    })
                }),
                this.option.screenshot) {
                    var me = this.element.getElementsByClassName("dplayer-camera-icon")[0];
                    me.addEventListener("click", function() {
                        var e = document.createElement("canvas");
                        e.width = n.video.videoWidth,
                        e.height = n.video.videoHeight,
                        e.getContext("2d").drawImage(n.video, 0, 0, e.width, e.height),
                        me.href = e.toDataURL(),
                        me.download = "DPlayer.png"
                    })
                }
                p++
            }
            return l(e, [{
                key: "play",
                value: function(e) {
                    "[object Number]" === Object.prototype.toString.call(e) && (this.video.currentTime = e),
                    this.paused = !1,
                    this.video.paused && (this.bezel.innerHTML = i("play"),
                    this.bezel.classList.add("dplayer-bezel-transition")),
                    this.playButton.innerHTML = i("pause"),
                    this.video.play(),
                    this.playedTime && this.clearTime(),
                    this.setTime(),
                    this.element.classList.add("dplayer-playing"),
                    this.trigger("play")
					
                }
            }, {
                key: "pause",
                value: function() {
                    this.paused = !0,
                    this.element.classList.remove("dplayer-loading"),
                    this.video.paused || (this.bezel.innerHTML = i("pause"),
                    this.bezel.classList.add("dplayer-bezel-transition")),
                    this.ended = !1,
                    this.playButton.innerHTML = i("play"),
                    this.video.pause(),
                    this.clearTime(),
                    this.element.classList.remove("dplayer-playing"),
                    this.trigger("pause")
					
                }
            }, {
                key: "volume",
                value: function(e) {
                    e = e > 0 ? e : 0,
                    e = e < 1 ? e : 1,
                    this.updateBar("volume", e, "width"),
                    this.video.volume = e,
                    this.video.muted && (this.video.muted = !1),
                    this.switchVolumeIcon()
                }
            }, {
                key: "toggle",
                value: function() {
                    this.video.paused ? this.play() : this.pause()
                }
            }, {
                key: "on",
                value: function(e, t) {
                    "function" == typeof t && this.event[e].push(t)
                }
            }, {
                key: "_readAllEndpoints",
                value: function(e, t) {
                    for (var n = [], a = 0, s = 0; s < e.length; ++s)
                        this.option.apiBackend.read(e[s], function(s) {
                            return function(l, i) {
                                if (++a,
                                l ? (l.response ? console.log(l.response.msg) : console.log("Request was unsuccessful: " + l.status),
                                n[s] = []) : n[s] = i,
                                a === e.length)
                                    return t(n)
                            }
                        }(s))
                }
            }, {
                key: "readDanmaku",
                value: function() {
                    var e = this
                      , t = /mobile/i.test(window.navigator.userAgent)
                      , n = void 0;
                    n = this.option.danmaku.maximum ? this.option.danmaku.api + "?id=" + this.option.danmaku.id + "&max=" + this.option.danmaku.maximum : this.option.danmaku.api + "?id=" + this.option.danmaku.id;
                    var a = (this.option.danmaku.addition || []).slice(0);
                    a.push(n),
                    this._readAllEndpoints(a, function(n) {
                        e.danIndex = 0,
                        e.dan = [].concat.apply([], n).sort(function(e, t) {
                            return e.time - t.time
                        }),
                        e.element.getElementsByClassName("dplayer-danloading")[0].style.display = "none",
                        e.option.autoplay && !t ? e.play() : t && e.pause()
                    })
                }
            }, {
                key: "pushDanmaku",
                value: function(e, t, n) {
                    var a = this
                      , l = this.element.getElementsByClassName("dplayer-danmaku")[0]
                      , i = this.arrow ? 24 : 30
                      , d = l.offsetWidth
                      , o = l.offsetHeight
                      , r = parseInt(o / i)
                      , c = function(e) {
                        return l.getBoundingClientRect().right - e.getBoundingClientRect().right
                    }
                      , p = function(e) {
                        return (d + e) / 5
                    }
                      , m = function(e, t, n) {
                        for (var l = d / p(n), i = 0; ; i++) {
                            var o = function(n) {
                                var s = a.danTunnel[t][n + ""];
                                if (!s || !s.length)
                                    return a.danTunnel[t][n + ""] = [e],
                                    e.addEventListener("animationend", function() {
                                        a.danTunnel[t][n + ""].splice(0, 1)
                                    }),
                                    {
                                        v: n % r
                                    };
                                for (var i = 0; i < s.length; i++) {
                                    var o = c(s[i]) - 10;
                                    if (o <= d - l * p(s[i].offsetWidth) || o <= 0)
                                        break;
                                    if (i === s.length - 1)
                                        return a.danTunnel[t][n + ""].push(e),
                                        e.addEventListener("animationend", function() {
                                            a.danTunnel[t][n + ""].splice(0, 1)
                                        }),
                                        {
                                            v: n % r
                                        }
                                }
                            }(i);
                            if ("object" === (void 0 === o ? "undefined" : s(o)))
                                return o.v
                        }
                    };
                    n || (n = "right"),
                    t || (t = "#fff");
                    var u = document.createElement("div");
                    u.classList.add("dplayer-danmaku-item"),
                    u.classList.add("dplayer-danmaku-" + n),
                    u.innerHTML = e,
                    u.style.opacity = this.danOpacity,
                    u.style.color = t,
                    u.addEventListener("animationend", function() {
                        l.removeChild(u)
                    }),
                    this.itemDemo.innerHTML = e;
                    var v = this.itemDemo.offsetWidth;
                    switch (n) {
                    case "right":
                        u.style.top = i * m(u, n, v) + "px",
                        u.style.width = v + 1 + "px",
                        u.style.transform = "translateX(-" + d + "px)";
                        break;
                    case "top":
                        u.style.top = i * m(u, n) + "px";
                        break;
                    case "bottom":
                        u.style.bottom = i * m(u, n) + "px";
                        break;
                    default:
                        console.error("Can't handled danmaku type: " + n)
                    }
                    return l.appendChild(u),
                    u.classList.add("dplayer-danmaku-move"),
                    u
                }
            }, {
                key: "switchVideo",
                value: function(e, t) {
                    this.video.src = e.url,
                    this.video.poster = e.pic ? e.pic : "",
                    this.video.currentTime = 0,
                    this.pause(),
                    t && (this.dan = [],
                    this.danIndex = 0,
                    this.element.getElementsByClassName("dplayer-danloading")[0].style.display = "block",
                    this.updateBar("played", 0, "width"),
                    this.updateBar("loaded", 0, "width"),
                    this.element.getElementsByClassName("dplayer-ptime")[0].innerHTML = "00:00",
                    this.element.getElementsByClassName("dplayer-danmaku")[0].innerHTML = '<div class="dplayer-danmaku-item  dplayer-danmaku-item--demo"></div>',
                    this.danTunnel = {
                        right: {},
                        top: {},
                        bottom: {}
                    },
                    this.itemDemo = this.element.getElementsByClassName("dplayer-danmaku-item")[0],
                    this.option.danmaku = t,
                    this.readDanmaku())
                }
            }, {
                key: "timeTipsHandler",
                value: function(e, t, n) {
                    var a = this
                      , s = function(e) {
                        var t = 0
                          , n = 0;
                        do {
                            t += e.offsetTop || 0,
                            n += e.offsetLeft || 0,
                            e = e.offsetParent
                        } while (e);return {
                            top: t,
                            left: n
                        }
                    };
                    return function(l) {
                        if (a.video.duration) {
                            var i = l.clientX
                              , d = s(e).left
                              , o = i - d;
                            switch (t.innerText = n(a.video.duration * (o / e.offsetWidth)),
                            t.style.left = o - 20 + "px",
                            l.type) {
                            case "mouseenter":
                            case "mouseover":
                            case "mousemove":
                                if (a.isTipsShow)
                                    return;
                                t.classList.remove("hidden"),
                                a.isTipsShow = !0;
                                break;
                            case "mouseleave":
                            case "mouseout":
                                if (!a.isTipsShow)
                                    return;
                                t.classList.add("hidden"),
                                a.isTipsShow = !1
                            }
                        }
                    }
                }
            }]),
            e
        }();
        e.exports = m
		
    }
    , function(e, t, n) {
        "use strict";
        var a = function(e, t, n, a, s) {
            var l = new XMLHttpRequest;
            l.onreadystatechange = function() {
                if (4 === l.readyState) {
                    if (l.status >= 200 && l.status < 300 || 304 === l.status) {
                        var e = JSON.parse(l.responseText);
                        return 1 !== e.code ? a(l, e) : n(l, e)
                    }
                    s(l)
                }
            }
            ,
            l.open(null !== t ? "POST" : "GET", e, !0),
            l.send(null !== t ? JSON.stringify(t) : null)
        };
        e.exports = {
			
            send: function(e, t) {
                a(e, t, function(e, t) {
                    console.log("Post danmaku: ", t)
                }, function(e, t) {
                    alert(t.msg)
                }, function(e) {
                    console.log("Request was unsuccessful: " + e.status)
                })
            },
            read: function(e, t) {
                a(e, null, function(e, n) {
                    t(null, n.danmaku)
                }, function(e, n) {
                    t({
                        status: e.status,
                        response: n
                    })
                }, function(e) {
                    t({
                        status: e.status,
                        response: null
                    })
                })
            }
        }
    }
    ])
	
});
config={
	iqiyi:function(url){
	
		$.ajax({
                url:url,
				async:false,
                dataType: 'jsonp',
                jsonp: 'callback',
                success: function(e) {
				var newurl=e.data.l
			 $.ajax({
                url: '//data.video.iqiyi.com/v.mp4',
                dataType: 'jsonp',
                jsonp: 'callback',
				async:false,
                success: function(e) {
					 var lip = e.data.l.match(/\d+\.\d+\.\d+\.\d+/);
						ss=0;
				var sssv=newurl.match(/\d+\.\d+\.\d+\.\d+/);
				window.newurl=newurl.replace(sssv,lip)
				
				$("#video2").attr("src",window.newurl)
				$("#dplayer-video").attr("src",window.newurl)
					return newurl
                            }
                        });
                            }
                        });
		},
		mmtv:function(e){
			return e;
			
			},
	}
function qplay(vid,id)//切换清晰度配置
{	var myVideo = document.getElementById("dplayer-video");
	myVideo.pause();
	
	/*var v = new Hls;
                    v.attachMedia(this.video),
                    v.on(Hls.Events.MEDIA_ATTACHED, function() {
                        v.loadSource(n.option.video.url),
                        v.on(Hls.Events.MANIFEST_PARSED, function(e, t) {}*/
						console.log(window.otype);
						
hd_config=id
if(window.otype!='hls')
{
$("#dplayer-video").attr("src",vid)
}
else
{
	var v = new Hls;
                    v.attachMedia(window.qhvideo),
                    v.on(Hls.Events.MEDIA_ATTACHED, function() {
                        v.loadSource(vid),
                        v.on(Hls.Events.MANIFEST_PARSED, function(e, t) {
                            console.log("manifest loaded, found " + t.levels.length + " quality level")
                        })
                    })
}

}

// Cross-browser xml parsing
  function loadXML(xmlFile) {
            var xmlDoc, xmlhttp;
            if (window.XMLHttpRequest) {//兼容 IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {//兼容 IE5、IE6 
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.open("GET", xmlFile, false);  //使用HTTP GET初始化HTTP请求
            xmlhttp.send(); //发送HTTP请求并获取HTTP响应
            xmlDoc = xmlhttp.responseXML;  //获取XML文档
            return xmlDoc;
        }// 退出 fullscreen 
function exitFullscreen() { 
if(document.exitFullscreen) { 
document.exitFullscreen(); 
} else if(document.mozExitFullScreen) { 
document.mozExitFullScreen(); 
} else if(document.webkitExitFullscreen) { 
document.webkitExitFullscreen(); 
} 
} 
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
function display_s()
{
	

	$("#display2").css("display","block")
}