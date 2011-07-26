if (typeof module !== 'undefined' && "exports" in module && typeof define !== 'function') {
	var define = require('../lib/amd').define;
}

define(['http','path','fs'],function(http,path,fs) {
	return {
		hello: 'world'
	};
});