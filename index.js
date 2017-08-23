/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : index.js
* Created at  : 2017-08-03
* Updated at  : 2017-08-24
* Author      : jeefo
* Purpose     :
* Description :
_._._._._._._._._._._._._._._._._._._._._.*/
// ignore:start

/* globals */
/* exported */

// ignore:end

var vendors = ["webkit", "moz", "o", "ms"];

var capitalize = function (name) {
	return name.charAt(0).toUpperCase() + name.substring(1);
};

module.exports = function (fn_name, fallback) {
	if (window[fn_name]) {
		return window[fn_name];
	}

	var i = vendors.length, suffix = capitalize(fn_name);
	while (i--) {
		fn_name = `${ vendors[i] }${ suffix }`;
		if (window[fn_name]) {
			return window[fn_name];
		}
	}

	return fallback;
};
