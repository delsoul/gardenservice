! function (e) {
	var t = {};

	function a(i) {
		if (t[i]) return t[i].exports;
		var n = t[i] = {
			i: i,
			l: !1,
			exports: {}
		};
		return e[i].call(n.exports, n, n.exports, a), n.l = !0, n.exports
	}
	a.m = e, a.c = t, a.d = function (e, t, i) {
		a.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: i
		})
	}, a.r = function (e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, a.t = function (e, t) {
		if (1 & t && (e = a(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var i = Object.create(null);
		if (a.r(i), Object.defineProperty(i, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var n in e) a.d(i, n, function (t) {
				return e[t]
			}.bind(null, n));
		return i
	}, a.n = function (e) {
		var t = e && e.__esModule ? function () {
			return e.default
		} : function () {
			return e
		};
		return a.d(t, "a", t), t
	}, a.o = function (e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, a.p = "/", a(a.s = 8)
}({
	8: function (e, t, a) {
		e.exports = a(9)
	},
	9: function (e, t) {
		function a(e, t, a) {
			return t in e ? Object.defineProperty(e, t, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = a, e
		}
		$(window).bind("pageshow", (function (e) {
			e.originalEvent.persisted && window.location.reload()
		})), window.mobilecheck = function () {
			var e, t = !1;
			return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
		}, $(document).ready((function () {
			setTimeout((function () {
				$("template[data-after-load]").each((function () {
					$(this).after($(this).html()), $(this).remove()
				})), $("[data-lazy-class]").each((function () {
					$(this).addClass($(this).data("lazy-class"))
				})), $("[data-lazy-bg]").each((function () {
					$(this).css("background-image", "url('" + $(this).data("lazy-bg") + "')")
				})), $("[data-lazy-src]").each((function () {
					$(this).attr("src", $(this).data("lazy-src"))
				}))
			}), 0);
			var e = $(window).height(),
				t = $(window).width(),
				i = window.mobilecheck(),
				n = $("body"),
				o = $("html"),
				s = $(window).outerWidth(),
				r = document.getElementsByTagName("html")[0].getAttribute("lang");
			document.getElementsByTagName("body")[0];
			SmoothScroll({
				stepSize: 75
			}), $(".read-more .read-more__button a").click((function (e) {
				var t = $(this).parent(),
					a = t.parent(),
					i = a.find(".read-more__content");
				if (a.hasClass("active")) {
					var n = 300;
					a.animate({
						height: n
					}), t.css({
						padding: 0
					}), t.removeAttr("style"), a.removeClass("active")
				}
				else {
					n = 0;
					i.each((function () {
						n += $(this).outerHeight()
					})), n += 50, a.css({
						height: a.height(),
						"max-height": 9999
					}).animate({
						height: n
					}), t.css({
						padding: 0
					}), a.addClass("active")
				}
				return !1
			})), $(".single-article img").unwrap("p"), i && setTimeout((function () {
				!0 === (/iP(ad|od|hone)/i.test(window.navigator.userAgent) && /WebKit/i.test(window.navigator.userAgent) && !/(CriOS|FxiOS|OPiOS|mercury)/i.test(window.navigator.userAgent)) && n.addClass("mobile-safari")
			}), 0), $("#load-more-service").on("click", (function () {
				var e = $("#ajax-load-post").find(".hidden-card-service-js");
				e.length ? (e.length < 6 && $(this).parent("div").remove(), e.each((function (e) {
					if (!(e < 6 || $(this).hasClass("hidden-card-service-js_need-remove"))) return !1;
					$(this).removeClass("hidden-card-service-js hidden-card-service").addClass("showed-card-service")
				}))) : $(this).parent("div").remove()
			})), $("#reviews-more").length && $("#load-more-service").trigger("click"), $(".reveal-title, .slide-content-title h2").each((function () {
				var e = $(this),
					t = e.width();
				e.html((function (e, t) {
					return t.replace(/\s+/g, "*")
				})), e.find("big").html((function (e, t) {
					return t.replace(/\*/g, " ")
				}));
				var a = e.html().split("*");
				e.html("<span>" + a.join("</span> <span>") + "</span>"), e.find("span").each((function () {
					var e = $(this);
					e.position().left + e.width() > t && e.before("<br>")
				})), e.find("span").contents().unwrap();
				var i = e.html().split("<br>");
				e.html('<span class="reveal-wrap"><span class="reveal">' + i.join('</span></span><span class="reveal-wrap"><span class="reveal">') + "</span></span>")
			}));
			var l, d, c, p = t > e ? 90 : 0;
			90 === p && n.addClass("portret"), $(window).bind("resize", (function () {
				l = $(window).width(), d = $(window).height(), p != (c = l > d ? 90 : 0) && (90 === c ? n.addClass("portret") : n.removeClass("portret"), p = c)
			})), 992 > t && ($("#pricing-info .row").addClass("tabs").prepend('<ul class="tabs-caption"><li class="trans-СЃlr trans-bg active"></li><li class="trans-СЃlr trans-bg"></li></ul>'), $("#pricing-info .col-lg-6").each((function (e) {
				if (0 === e) {
					var t = $(this).wrap("<div class='tabs-content active'></div>").find("h3");
					$("#pricing-info .tabs-caption li:first").text(t.text().replace(/([.:!?])+/g, "")), t.remove()
				}
				else t = $(this).wrap("<div class='tabs-content'></div>").find("h3"), $("#pricing-info .tabs-caption li:last").text(t.text().replace(/([.:!?])+/g, "")), t.remove()
			}))), $("ul.tabs-caption").on("click", "li:not(.active)", (function () {
				$(this).addClass("active").siblings().removeClass("active").closest("div.tabs").find("div.tabs-content").removeClass("active").eq($(this).index()).addClass("active printed")
			})), $("#works-section").length && $("#works-section .marker-img-wrap").scalize(), $(".review-slider .review-slide").each((function (e) {
				$(".review-img-container").append('<div data-index="' + e + '" class="review-img" style="background-image: url(' + $(this).data("review-img") + ')"></div>'), $(this).find(".review-slide-autor").prepend('<img class="aut-img" src="' + $(this).data("review-img-mobile") + '">')
			})), $(".review-img-container .review-img:first").css({
				"z-index": "1",
				opacity: "1"
			});
			var m = new TimelineLite;
			if ($(".review-slider").on("beforeChange", (function (e, t, a, i) {
					$(".review-img-wrap").addClass("animate-end");
					var n = $('.review-img[data-index="' + $(t.$slides.get(a)).attr("data-slick-index") + '"]'),
						o = $('.review-img[data-index="' + $(t.$slides.get(i)).attr("data-slick-index") + '"]');
					m.clear(), m.fromTo(n, 1.5, {
						opacity: 1
					}, {
						opacity: 0
					}).set(n, {
						"z-index": 2
					}, 0).fromTo(o, 5, {
						scale: 1
					}, {
						scale: 1.1
					}, 0).set(o, {
						opacity: 1,
						"z-index": 1,
						visibility: "visible"
					}, 0)
				})), $(".review-slider").slick({
					infinite: !0,
					arrows: !1,
					dots: !0,
					autoplay: !1,
					speed: 1520,
					slidesToShow: 1,
					slidesToScroll: 1,
					appendDots: $(".review-dots"),
					fade: !0
				}), $(".workers-slider").slick({
					infinite: !0,
					arrows: !1,
					dots: !0,
					autoplay: !1,
					speed: 800,
					slidesToShow: 4,
					slidesToScroll: 1,
					responsive: [{
						breakpoint: 1025,
						settings: {
							slidesToShow: 3
						}
					}, {
						breakpoint: 769,
						settings: {
							slidesToShow: 2
						}
					}, {
						breakpoint: 668,
						settings: {
							slidesToShow: 1,
							centerMode: !0,
							centerPadding: "44px"
						}
					}]
				}), 667 > s && $(".more-services-row").slick({
					mobileFirst: !0,
					slidesToShow: 1,
					dots: !0,
					arrows: !1,
					centerMode: !0,
					centerPadding: "50px",
					responsive: [{
						breakpoint: 667,
						settings: "unslick"
					}]
				}), $(".channels-slider").length && $(".channels-slider").slick({
					mobileFirst: !0,
					slidesToShow: 1,
					dots: !0,
					arrows: !1,
					slidesToScroll: 1,
					centerMode: !0,
					centerPadding: "50px",
					responsive: [{
						breakpoint: 768,
						settings: {
							slidesToShow: 3,
							centerMode: !1,
							centerPadding: "0px",
							slidesToScroll: 3
						}
					}, {
						breakpoint: 1024,
						settings: {
							slidesToShow: 5,
							centerMode: !1,
							centerPadding: "0px",
							slidesToScroll: 5
						}
					}, {
						breakpoint: 1230,
						settings: {
							slidesToShow: 6,
							centerMode: !1,
							centerPadding: "0px",
							slidesToScroll: 6
						}
					}]
				}), 1230 > s && $(".more-article-slider").slick({
					mobileFirst: !0,
					slidesToShow: 1,
					dots: !0,
					arrows: !1,
					slidesToScroll: 1,
					centerMode: !0,
					centerPadding: "25px",
					responsive: [{
						breakpoint: 667,
						settings: {
							slidesToShow: 2,
							centerMode: !1,
							centerPadding: "0px"
						}
					}, {
						breakpoint: 1024,
						settings: {
							slidesToShow: 2,
							centerMode: !1,
							centerPadding: "0px"
						}
					}, {
						breakpoint: 1230,
						settings: {
							slidesToShow: 3,
							centerMode: !1,
							centerPadding: "0px"
						}
					}]
				}), $(".menu-modal-btn a").click((function (t) {
					t.preventDefault(), e < $("#modal-menu .modal").height() + 100 && o.addClass("full-height-modal"), $("#modal-menu").addClass("modal-show")
				})), $(".modal-discount").click((function (t) {
					t.preventDefault();
					var a = $(this).data("rule");
					$("#discount-rule .wpcf7-list-item-label").text(a), $("#discount-rule input").val(a), e < $("#modal-discount .modal").height() + 100 && o.addClass("full-height-modal"), $("#modal-discount").addClass("modal-show"), $(".discounts-rule-title").val(a)
				})), $(".modal-trigger").click((function (t) {
					t.preventDefault();
					var a = $("#" + $(this).data("modal"));
					e < a.find(".modal").height() + 100 && o.addClass("full-height-modal"), a.addClass("modal-show")
				})), $(".modal-close").click((function () {
					$(this).parents(".modal-overlay").removeClass("modal-show"), setTimeout((function () {
						o.removeClass("full-height-modal")
					}), 300)
				})), $(".modal-overlay").click((function (e) {
					e.target === this && ($(this).removeClass("modal-show"), setTimeout((function () {
						o.removeClass("full-height-modal")
					}), 300))
				})), Cookies.get("isPopupShow")) {
				if (!Cookies.get("isStockPopupShow")) {
					var u = $("#modal-stock");
					f = setInterval((function () {
						$(".modal-show").length || (e < u.children().height() + 100 && o.addClass("full-height-modal"), u.addClass("modal-show"), clearInterval(f), Cookies.set("isStockPopupShow", !0, {
							expires: 1,
							path: "/"
						}))
					}), 1e3)
				}
			}
			else var h = $("#modal-auto"),
				f = setInterval((function () {
					$(".modal-show").length || (e < h.children().height() + 100 && o.addClass("full-height-modal"), h.addClass("modal-show"), clearInterval(f), Cookies.set("isPopupShow", !0, {
						expires: 1,
						path: "/"
					}))
				}), 59e3);
			document.querySelector(".menu-button").addEventListener("click", (function () {
				var e = document.querySelector("body");
				e.classList.contains("menu-open") ? e.classList.remove("menu-open") : e.classList.add("menu-open")
			}), !1), $(".faq-item").on("click", ".faq-title", (function () {
				$(this).parent(".faq-item").toggleClass("faq-active").find(".faq-content-wrap").slideToggle()
			})), $(".form-element .wpcf7-form-control-wrap input:not([type='checkbox']), .form-element .wpcf7-form-control-wrap select").unwrap(), $(".form-element-field").blur((function () {
				var e = $(this).val();
				e && e.indexOf("-__") <= 0 ? $(this).addClass("has-value") : $(this).removeClass("has-value")
			})), $(".form-element-select").blur((function () {
				$(this).val() ? $(this).addClass("has-value") : $(this).removeClass("has-value")
			})), $(".phone-mask").length > 0 && $(".phone-mask").mask("+38 (999) 999-99-99"), $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click((function (e) {
				if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
					var t = $(this.hash);
					(t = t.length ? t : $("[name=" + this.hash.slice(1) + "]")).length && (e.preventDefault(), $("html, body").animate({
						scrollTop: t.offset().top
					}, 900))
				}
			})), window.priceAnimate || (window.priceAnimate = function (e, t) {
				$({
					countNum: e.text()
				}).animate({
					countNum: t
				}, {
					duration: 600,
					easing: "swing",
					step: function () {
						e.text(Math.floor(this.countNum))
					},
					complete: function () {
						e.text(this.countNum)
					}
				})
			}), $(".datepicker-wrap").length && $(".datepicker-wrap").datepicker({
				readonly: !1,
				lang: r
			}), $(".share-btn").on("click", (function () {
				var e = this.href,
					t = (screen.availHeight - 500) / 2,
					a = (screen.availWidth - 500) / 2;
				return window.open(e, "social sharing", "width=550,height=420,left=" + a + ",top=" + t + ",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1"), !1
			}));
			var v = !0,
				g = $(window).outerWidth();
			var w = 0,
				b = $("img:not(.aut-img, [data-lazy-src])").length + $(".bg-images:not(.review-img, .main-wrap, .main-background, [data-lazy-bg], [data-lazy-class])").length,
				k = 0;
			if ($("img:not(.aut-img,[data-lazy-src]), .bg-images:not(.review-img, .main-wrap, .main-background, [data-lazy-bg], [data-lazy-class])").imagesLoaded({
					background: !0
				}).progress((function (e, t) {
					w++, k = w / b, TweenLite.to(C, .7, {
						progress: k,
						ease: Linear.easeNone
					})
				})), i) y();
			else {
				var C = new TimelineMax({
					paused: !0,
					onUpdate: function () {
						k = Math.round(100 * C.progress()), $(".percent-count").text(k)
					},
					onComplete: y
				});
				C.insert(new TweenLite($(".preloader-bar"), .5, {
					width: "100%",
					ease: Linear.easeNone
				}), 0)
			}

			function y() {
				$(".homepage").length && $(document).scrollTop(0), setTimeout((function () {
					$(".homepage").length && ($(".reveal-title:in-viewport").addClass("printed"), $(".section-sub-title:in-viewport").addClass("printed"), $(".header-wrap:in-viewport").addClass("printed"), $(".main-content:in-viewport").run((function () {
						$(".main-left-column").addClass("printed"), this.siblings(".main-phone").addClass("printed")
					})), $(".animate-block:in-viewport").addClass("printed"), !0 === v && $("#slide-1:in-viewport").addClass("slide-point").run((function () {
						v = !1
					})), $(window).scroll((function () {
						$(".reveal-title:in-viewport").addClass("printed"), $(".section-sub-title:in-viewport").addClass("printed"), $(".header-wrap:in-viewport").addClass("printed"), $(".main-content:in-viewport").run((function () {
							$(".main-left-column").addClass("printed"), this.siblings(".main-phone").addClass("printed")
						})), $(".animate-block:in-viewport").addClass("printed"), !0 === v && (g > 667 ? $("#slide-1:in-viewport").addClass("slide-point").run((function () {
							v = !1
						})) : $("#slider-wrap .slick-current:in-viewport").addClass("slick-active").run((function () {
							v = !1
						})))
					}))), $(".article-body").length && ($(".reveal-title:in-viewport").addClass("printed"), $(".animate-block:in-viewport").addClass("printed"), $(window).scroll((function () {
						$(".reveal-title:in-viewport").addClass("printed"), $(".animate-block:in-viewport").addClass("printed")
					})))
				}), 0), $("#callnowbutton").addClass("loadComplete");
				var e = new TimelineMax;
				if (!i) return $(".homepage").length ? e.to($(".preloader-bar"), .3, {
					autoAlpha: 0,
					ease: Linear.easeIn
				}).to($(".preloader-content"), .3, {
					y: 100,
					autoAlpha: 0,
					ease: Back.easeIn
				}, .1).to($(".page-preloader"), .7, {
					yPercent: -100,
					ease: Power4.easeInOut
				}).set($(".page-preloader"), {
					className: "+=preloader-hidden"
				}).set($(".slide-content"), {
					className: "-=slide-point"
				}) : e.to($(".preloader-bar"), .3, {
					autoAlpha: 0,
					ease: Linear.easeIn
				}).set($(".page-preloader"), {
					className: "+=preloader-hidden"
				}).to(["header", "footer", "main"], .8, {
					ease: Linear.easeIn,
					autoAlpha: 1
				}), e;
				$(".page-preloader").remove(), $("header, footer, main").css("opacity", 1)
			}
			var x = new TimelineMax;
			if ($('a:not([target="_blank"]):not([href^="#"]):not([href^="tel:"]):not([href^="mailto:"]):not(.share-btn):not(#cancel-comment-reply-link):not(.content-loader)').click((function (e) {
					e.preventDefault();
					var t = $(this).attr("href");
					n.hasClass("menu-open") ? ($(".menu-wrap").hide(), setTimeout((function () {
						x.to(["header", "footer", "main", ".after-main"], .6, {
							ease: Linear.easeOut,
							autoAlpha: 0
						}), setTimeout((function () {
							window.location.href = t
						}), 600)
					}), 50)) : (x.to(["header", "footer", "main", ".after-main"], .6, {
						ease: Linear.easeOut,
						autoAlpha: 0
					}), setTimeout((function () {
						window.location.href = t
					}), 600))
				})), $(".slider-section").length > 0 && g > 667) {
				! function () {
					var e, t, a, i, n = new ScrollMagic.Controller,
						o = $(".slide-content").length + 1,
						s = $(".progress-slider-wrap"),
						r = $("#slider-container"),
						l = 100 - 100 / o;
					i = '<ul class="slider-dots">';
					for (var d = 1; d <= o; d++) r.append('<div id="slide-nav-' + d + '" class="slide"></div>'), s.append('<div class="progress-pin" data-dots="dots-nav-' + d + '" data-slide="slide-' + d + '">' + d + "</div>"), d != o && (i += '<li id="dots-nav-' + d + '" data-index="' + d + '">0' + d + '<svg viewBox="0 0 17 8"><use xlink:href="#slider-arrow"></use></li>');
					i += "</ul>", $("#slider-wrap .container").prepend(i);
					var c = $(".slide").width(),
						p = c / 2,
						m = c * (o - 1) / 5,
						u = 4 * m;
					e = (new TimelineMax).to(r, 1, {
						x: "-" + l + "%"
					}, 0).to(".progress-line", 1, {
						width: m + "px"
					}, 0).to(s, 1, {
						x: u + "px"
					}, 0), new ScrollMagic.Scene({
						triggerElement: "#slider-wrap",
						triggerHook: "onLeave",
						duration: 100 * o + "%"
					}).setPin("#slider-wrap").setTween(e).addTo(n), r.css("width", 100 * o + "%"), $(".slide").css("width", 100 / o + "%"), s.css({
						left: p,
						width: m
					}), a = parseFloat(Math.trunc(m / (o - 1))), $(".progress-pin").each((function (e) {
						t = e * a, $(this).css("left", t).attr("data-position", t)
					}))
				}();
				var S = 0,
					T = $('.progress-pin[data-slide="slide-2"]').data("position");
				$(window).scroll((function () {
					var e = $(this).scrollTop();
					e > S ? $(".slider-dots li.dots-point").removeClass("dots-up").addClass("dots-down") : $(".slider-dots li.dots-point").removeClass("dots-down").addClass("dots-up"),
						function () {
							var e = parseFloat(document.getElementById("progress-line").offsetWidth);
							$(".progress-pin").each((function () {
								var t = $(this).data("position");
								if (e > t && e < t + T) {
									var a = $("#" + $(this).data("slide"));
									a.siblings().removeClass("slide-point"), a.addClass("slide-point");
									var i = $("#" + $(this).data("dots"));
									i.siblings().removeClass("dots-point"), i.addClass("dots-point")
								}
							}))
						}(), S = e
				}))
			}
			else {
				var z;
				$(".slider-content-wrap .container").on("init", (function (e, t) {
					t.$slides[0].classList.remove("slick-active")
				})), $(".slider-content-wrap .container").slick((a(z = {
					infinite: !0,
					arrows: !1,
					dots: !0,
					autoplay: !1,
					speed: 100,
					slidesToShow: 1,
					slidesToScroll: 1,
					fade: !0,
					prevArrow: $("#prev-slides"),
					nextArrow: $("#next-slides")
				}, "arrows", !0), a(z, "customPaging", (function (e, t) {
					$(e.$slides[t]).data();
					return "<span>0" + (t + 1) + "</span>"
				})), z)), $(".slider-content-slick-nav button").click((function () {
					var e;
					(e = $(this)).addClass("nav-clicked"), setTimeout((function () {
						e.removeClass("nav-clicked")
					}), 500)
				}))
			}
			if ($(".homepage").length && g >= 1200 && ($("#main-section .main-background").paroller({
					factor: .12,
					factorSm: .1,
					factorXs: .1,
					type: "background",
					direction: "vertical"
				}), $("#main-section .main-content-async").paroller({
					factor: .2,
					factorSm: .2,
					factorXs: .2,
					direction: "vertical",
					type: "foreground"
				})), ($(".homepage").length && g >= 1200 || $(".article-body").length && $("#review-image-wrap").length && g >= 1200) && ($(".review-img-column").paroller({
					factor: .05,
					factorSm: .05,
					factorXs: 0,
					direction: "vertical",
					type: "foreground"
				}), $(".subscription-card").paroller({
					factor: .05,
					factorSm: .05,
					factorXs: 0,
					direction: "vertical",
					type: "foreground"
				})), $(".rating-form-input").starRating({
					totalStars: 5,
					emptyColor: "#fff",
					strokeColor: "#FFB300",
					hoverColor: "#FFB300",
					activeColor: "#FFB300",
					ratedColor: "#FFB300",
					initialRating: 0,
					strokeWidth: 34,
					starSize: 23,
					useGradient: !1,
					disableAfterRate: !1,
					callback: function (e, t) {
						$(".rating-field").val(e)
					}
				}), $(".rating-com-view").starRating({
					totalStars: 5,
					emptyColor: "#fff",
					strokeColor: "#FFB300",
					hoverColor: "#FFB300",
					activeColor: "#FFB300",
					ratedColor: "#FFB300",
					strokeWidth: 42,
					starSize: 12,
					useGradient: !1,
					readOnly: !0
				}), $(".rating-all-view").starRating({
					totalStars: 5,
					emptyColor: "#fff",
					strokeColor: "#FFB300",
					hoverColor: "#FFB300",
					activeColor: "#FFB300",
					ratedColor: "#FFB300",
					strokeWidth: 30,
					starSize: 34,
					useGradient: !1,
					readOnly: !0
				}), $(".wpcf7 form").submit((function () {
					$(this).closest(".modal").addClass("loading")
				})), document.addEventListener("wpcf7submit", (function (e) {
					$("#" + e.detail.id).closest(".modal").removeClass("loading")
				}), !1), $(".wpcf7-form .wpcf7-form-control").focus((function () {
					$(this).parent().removeClass("field-invalid field-valid")
				})), document.addEventListener("wpcf7invalid", (function (e) {
					$("#" + e.detail.id).find(".wpcf7-form-control").each((function () {
						$(this).hasClass("wpcf7-not-valid") ? $(this).parent().addClass("field-invalid") : $(this).parent().addClass("field-valid")
					}))
				}), !1), document.addEventListener("wpcf7mailsent", (function (e) {
					var t = $("#" + e.detail.id),
						a = t.find(".form-mail-send");
					a.fadeIn(500).addClass("form-mail-animate"), t.find("input").removeClass("has-value"), setTimeout((function () {
						t.parents(".modal-overlay").removeClass("modal-show"), setTimeout((function () {
							o.removeClass("full-height-modal"), a.fadeOut().removeClass("form-mail-animate")
						}), 300)
					}), 3e3)
				}), !1), $(".homepage").length > 0 && g >= 1200) {
				var F, P, M, L, j = void 0,
					O = void 0,
					A = $(".main-section .col-lg-7"),
					B = $(".main-content"),
					_ = $(".main-decoration-wrap");
				$(".main-section, .header-sidebar").mousemove((function (a) {
					M = a.clientX || a.pageX, L = a.clientY || a.pageY, F && P ? (j = .125 * (M - F), O = .125 * (L - P), Math.abs(j) + Math.abs(O) < .1 ? (F = M, P = L) : (F += j, P += O)) : (F = .1 * (t / 2 - M), P = .1 * (e / 2 - L)), _.css({
						"-webit-transform": "translate3d(-" + F / 100 + "px,-" + P / 100 + "px,0)",
						transform: "translate3d(-" + F / 100 + "px,-" + P / 100 + "px,0)"
					}), B.css({
						"-webit-transform": "translate3d(-" + F / 70 + "px,-" + P / 70 + "px,0) translate(0,-50%)",
						transform: "translate3d(-" + F / 70 + "px,-" + P / 70 + "px,0) translate(0,-50%)"
					}), A.css({
						"-webit-transform": "translate3d(-" + F / 70 + "px,-" + P / 70 + "px,0) translate(0,-50%)",
						transform: "translate3d(-" + F / 140 + "px,-" + P / 140 + "px,0)"
					})
				}))
			}
		}))
	}
});