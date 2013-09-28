Simple-Route.js
=================

Simple Routing Library for both browser and node.js  
(Simple URL Dispatcher)

SYNOPSIS
--------

	// Call target URL
	Route.add('exec', '/path/to/url', callback);
	// leftmost match
	Route.add('exec', '/path/to/url/parameter', callback);
	Route.dispath('exec', '/path/to/url');

	Route.clear();

	// Call all callbacks
	Route.add('exec', '/path/to/url', callback);
	Route.add('exec', callback);
	Route.dispath('exec');

LICENSE
-------

	MIT License
