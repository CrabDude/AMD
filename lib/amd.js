module.exports = {
	define: function(id, deps,cb) {
		var ret,
		modules = [],
		exp = arguments.callee.caller.arguments[0];
		
		if (arguments.length === 1) {
			ret = id;
			id = null;
		} else {
			if (arguments.length === 2) {
				cb = deps;
				deps = id;
				id = null;
			}
			
			deps.forEach(function(v,k) {
				modules.push(require(v));
			});
			ret = cb.apply(null,modules);
		}
		
		if (typeof id === 'string') {
			exp[id] = ret;
		} else {
			Object.keys(ret).forEach(function(v,k) {
				exp[v] = ret[v];
			});
		}
	}
};
