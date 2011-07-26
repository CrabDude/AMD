# AMD
### Asynchronous Module Definition support for node (a.k.a. define())

See [/examples](https://github.com/CrabDude/node-amd/tree/master/examples).

### Install

	npm install AMD
	
### Example1

	// bar.js
	if (typeof module !== 'undefined' && "exports" in module && typeof define !== 'function') {
		var define = require('AMD').define;
	}
	
	define(['http','path','fs'],function(http,path,fs) {
		return {
			hello: 'world'
		};
	});
	
### Example2

	// baz.js
	if (typeof module !== 'undefined' && "exports" in module && typeof define !== 'function') {
		var define = require('AMD').define;
	}

	define({
		wtf: 'yeehaw'
	});
	
### Module use is seamless

	console.log(require('./bar'));
	console.log(require('./baz'));