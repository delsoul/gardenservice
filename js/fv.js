(function (opt) {
	(function (e) {
		var t = {};

		function n(r) {
			if (t[r]) {
				return t[r].exports
			}
			var o = t[r] = {
				i: r,
				l: false,
				exports: {}
			};
			e[r].call(o.exports, o, o.exports, n);
			o.l = true;
			return o.exports
		}
		n.m = e;
		n.c = t;
		n.d = function (e, t, r) {
			if (!n.o(e, t)) {
				Object.defineProperty(e, t, {
					enumerable: true,
					get: r
				})
			}
		};
		n.r = function (e) {
			if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
				Object.defineProperty(e, Symbol.toStringTag, {
					value: "Module"
				})
			}
			Object.defineProperty(e, "__esModule", {
				value: true
			})
		};
		n.t = function (e, t) {
			if (t & 1) e = n(e);
			if (t & 8) return e;
			if (t & 4 && typeof e === "object" && e && e.__esModule) return e;
			var r = Object.create(null);
			n.r(r);
			Object.defineProperty(r, "default", {
				enumerable: true,
				value: e
			});
			if (t & 2 && typeof e != "string")
				for (var o in e) n.d(r, o, function (t) {
					return e[t]
				}.bind(null, o));
			return r
		};
		n.n = function (e) {
			var t = e && e.__esModule ? function t() {
				return e["default"]
			} : function t() {
				return e
			};
			n.d(t, "a", t);
			return t
		};
		n.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		};
		n.p = "";
		return n(n.s = 2)
	})([function (e, t) {
		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		e.exports = n
	}, function (e, t) {
		function n(e, t) {
			if (!(e instanceof t)) {
				throw new TypeError("Cannot call a class as a function")
			}
		}
		e.exports = n
	}, function (e, t, n) {
		"use strict";
		var r = n(0);
		var o = r(n(3));
		Object.defineProperty(t, "__esModule", {
			value: true
		});
		var i = n(7);
		var a = n(8);
		var c = Object.assign(new i.Options, opt);
		var u = s();
		if (u.hasOwnProperty("t")) {
			c.tracker_id = u.t
		}

		function s() {
			var e = document.currentScript || {
					src: ""
				},
				t = e.src;
			return (t.split("?")[1] || "").split("&").reduce((function (e, t) {
				var n = t.split("="),
					r = (0, o.default)(n, 2),
					i = r[0],
					a = r[1];
				e[decodeURIComponent(i)] = decodeURIComponent(a);
				return e
			}), {})
		}

		function d(e, t, n) {
			var r = "on" + e;
			if (t.addEventListener) {
				t.addEventListener(e, n, false)
			}
			else if (t.attachEvent) {
				t.attachEvent(r, n)
			}
			else {
				t[r] = n
			}
		}
		a.fetchViewabilityContext(c.viewability_context, c.tracker_id, (function (e) {
			if (!e || !e.tracker_id) {
				e.tracker_id = +c.tracker_id
			}
			try {
				var t = "unload";
				if ("beforeunload" in window) {
					t = "beforeunload"
				}
				d(t, window, (function () {
					a.sendViewability(c.viewability, e, window.performance.now() || -1)
				}))
			}
			catch (e) {
				console.error("adding unload event", e)
			}
			try {
				a.sendScriptLoaded(c.viewability_loaded, e)
			}
			catch (e) {
				console.error("sending script loaded event", e)
			}
			try {
				var n = 0;
				var r = (new Date).getTime();
				var o = setInterval((function () {
					var t = (new Date).getTime();
					var i = t - r;
					r = t;
					if (i < 200 && document.hasFocus()) {
						n += i
					}
					if (n >= 2e3) {
						clearInterval(o);
						a.sendViewability(c.viewability_real_impression, e, window.performance.now() || -1)
					}
				}), 100)
			}
			catch (e) {
				console.error("calculating real impression", e)
			}
		}))
	}, function (e, t, n) {
		var r = n(4);
		var o = n(5);
		var i = n(6);

		function a(e, t) {
			return r(e) || o(e, t) || i()
		}
		e.exports = a
	}, function (e, t) {
		function n(e) {
			if (Array.isArray(e)) return e
		}
		e.exports = n
	}, function (e, t) {
		function n(e, t) {
			var n = [];
			var r = true;
			var o = false;
			var i = undefined;
			try {
				for (var a = e[Symbol.iterator](), c; !(r = (c = a.next()).done); r = true) {
					n.push(c.value);
					if (t && n.length === t) break
				}
			}
			catch (e) {
				o = true;
				i = e
			}
			finally {
				try {
					if (!r && a["return"] != null) a["return"]()
				}
				finally {
					if (o) throw i
				}
			}
			return n
		}
		e.exports = n
	}, function (e, t) {
		function n() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}
		e.exports = n
	}, function (e, t, n) {
		"use strict";
		var r = n(0);
		var o = r(n(1));
		Object.defineProperty(t, "__esModule", {
			value: true
		});
		var i = function e() {
			(0, o.default)(this, e)
		};
		t.Options = i
	}, function (e, t, n) {
		"use strict";
		var r = n(0);
		var o = r(n(1));
		Object.defineProperty(t, "__esModule", {
			value: true
		});
		var i = function e() {
			(0, o.default)(this, e)
		};
		t.Parameters = i;

		function a(e, t) {
			var n = "https://".concat(e, "?").concat(l(t));
			if (navigator.sendBeacon) {
				navigator.sendBeacon(n);
				return
			}
			var r = document.createElement("img");
			r.src = n;
			r.setAttribute("style", "position: absolute; width: 1px; height: 1px; left: 0px; bottom: 0px; opacity: 0;");
			var o = setInterval((function () {
				try {
					if (!window.document.body) {
						return
					}
					document.body.appendChild(r);
					clearInterval(o)
				}
				catch (e) {
					console.warn("display pixel error, ensure that document.body is present, " + "or move vw script into body", e)
				}
			}), 200)
		}

		function c(e, t) {
			var n = new i;
			n.t = t.tracker_id;
			n.bid = t.banner_id;
			n.aid = t.action_id;
			a(e, n)
		}
		t.sendScriptLoaded = c;

		function u(e, t, n) {
			var r = new i;
			r.t = t.tracker_id;
			r.bid = t.banner_id;
			r.aid = t.action_id;
			if (n) {
				r.tp = n
			}
			a(e, r)
		}
		t.sendViewability = u;
		var s = function e() {
			(0, o.default)(this, e)
		};
		t.ViewabilityContext = s;

		function d(e, t, n) {
			var r = new XMLHttpRequest;
			r.withCredentials = true;
			r.responseType = "json";
			r.onload = function () {
				switch (r.status) {
					case 200:
						break;
					case 204:
						n(new s);
						return;
					default:
						console.warn("wrong view context response", r.status);
						n(new s);
						return
				}
				var e = r.response;
				n(e)
			};
			r.onerror = function (e) {
				console.error("error requesting view context", e);
				n(new s)
			};
			r.open("GET", "https://".concat(e, "?t=").concat(t));
			r.send(null)
		}
		t.fetchViewabilityContext = d;

		function l(e) {
			return Object.keys(e).reduce((function (t, n) {
				var r = e;
				if (r[n] === null) {
					return t
				}
				t.push("".concat(n, "=").concat(encodeURIComponent(r[n])));
				return t
			}), []).join("&")
		}
	}]);
})({
	"viewability": "propeller-tracking.com/vb",
	"viewability_context": "propeller-tracking.com/vctx",
	"viewability_loaded": "propeller-tracking.com/vbl",
	"viewability_real_impression": "propeller-tracking.com/vbri"
});