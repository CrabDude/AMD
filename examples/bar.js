var define = require('../lib/amd').define;

define(['http','path','fs'],function(http,path,fs) {
	return {
		hello: 'world'
	};
});