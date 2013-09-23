(function (global) {
	'use strict';
	var self = function () {};
	var selfName = 'Route';
	self.route = {};

	self.add = function (name, path, callback) {
		if (arguments.length === 2) {
			callback = path;
			path = undefined;
		}
		this.route[name] = this.route[name] || [];
		var reg = path;
		if (path && !(path instanceof RegExp)) {
			reg = new RegExp('^' + path.replace(/(\W)/, '\\$1'));
		}
		this.route[name].push({
			'path' : path,
			'pathMatch' : reg,
			'callback' : callback
		});
	};
	self.clear = function () {
		this.route = {};
	};
	self.dispath = function (name, path) {
		if (!this.route[name]) {
			return;
		}
		var i, l;
		var routes = this.route[name];
		var results = [];
		if (!path) {
			for (i = 0, l = routes.length; i < l; i++) {
				results.push(routes[i]['callback']());
			}
			return results;
		}
		var match, route;
		for (i = 0, l = routes.length; i < l; i++) {
			route = routes[i];
			match = path.match(route['pathMatch']);
			if (!match) {
				return;
			}
			results.push(routes[i]['callback'](match));
		}
		return results;
	};

	global[selfName] = self;
})(this);