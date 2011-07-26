# AMD
### Asynchronous Module Definition support for node (a.k.a. define())

See [/examples](https://github.com/CrabDude/node-amd/tree/master/examples).

### Example1

	// bar.js
	var define = require('node-amd').define;
	
	define(['http','path','fs'],function(http,path,fs) {
		return {
			hello: 'world'
		};
	});
	
### Example2

	// baz.js
	var define = require('node-amd').define;
	
	define({
		wtf: 'yeehaw'
	});
	
### Module use is seamless

	console.log(require('./bar'));
	console.log(require('./baz'));