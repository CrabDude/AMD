var define = require('./AMD').define;

define(['http','path','fs'],function(http,path,fs) {
	return {
		hello: 'world'
	};
});