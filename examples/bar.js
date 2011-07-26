var define = require('../lib/node-amd').define;

define(['http','path','fs'],function(http,path,fs) {
	return {
		hello: 'world'
	};
});