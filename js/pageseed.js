(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		var _OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = _OldCookies;
			return api;
		};
	}
}(function () {
	function extend() {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[i];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init(converter) {
		function api(key, value, attributes) {
			var result;
			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);
				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}
				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}
				if (!converter.write) {
					value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}
				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);
				return (document.cookie = [key, '=', value, attributes.expires && '; expires=' + attributes.expires.toUTCString(), attributes.path && '; path=' + attributes.path, attributes.domain && '; domain=' + attributes.domain, attributes.secure ? '; secure' : ''].join(''));
			}
			if (!key) {
				result = {};
			}
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;
			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var name = parts[0].replace(rdecode, decodeURIComponent);
				var cookie = parts.slice(1).join('=');
				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}
				try {
					cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);
					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}
					if (key === name) {
						result = cookie;
						break;
					}
					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}
			return result;
		}
		api.get = api.set = api;
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};
		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};
		api.withConverter = init;
		return api;
	}
	return init(function () {});
}));

jQuery(function($){var qvars=getUrlVars()
$.each(['utm_source','utm_medium','utm_term','utm_content','utm_campaign','gclid','email','username'],function(i,v){var cookie_field=GetQVars(v,qvars)
if(cookie_field!='')Cookies.set(v,cookie_field,{expires:30});var curval=Cookies.get(v)
if(curval!=undefined){curval=decodeURIComponent(curval)
if(v=='username'){curval=curval.replace(/\+/g,' ')}jQuery('input[name=\"'+v+'\"]').val(curval)
jQuery('input#'+v).val(curval)
jQuery('input.'+v).val(curval)}});$('.utm-out').each(function(){var merged=$.extend({},handl_utm,getSearchParams(this.href))
this.search=""
if(!$.isEmptyObject(merged))this.href+="?"+$.param(merged)});});function getSearchParams(url,k){var p={};var a=document.createElement('a');a.href=url;a.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
return k?p[k]:p;}function GetQVars(v,qvars){if(qvars[v]!=undefined){return qvars[v]}return''}function getUrlVars(){var vars={};var parts=window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(m,key,value){vars[key]=value;});return vars;}