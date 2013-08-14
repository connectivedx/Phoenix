Content Filter
06.29.09 - pdf

This was built for PacifiCorp. Examples can be seen on fed:

http://fed.isitedesign.us/content/pacificorp/

Mostly custom filtering extending the jquery pagination plugin. Requires some inline script by client request. Could be externalized or gathered via JSON to avoid the extra page weight. Though, the pagination plugin in general isn't that awesome.

Example HTML files included. Will need to hook up jquery, resources, etc.

Additional documentation in the source code.


	Custom filter views. Includes fuctions for:
	
		1. pagination (customized jquery pagination plugin)
		2. link toggle control
		3. form field filters
		4. content type radio toggle
		5. alpha list
		6. table sorting
	
	Requires:
	
		1. jquery.pagination.js
		2. sort up/down images
		3. record set arrays to be defined in calling page - structure dependent on what filtering needs to happen. refer to examples.
		4. filetype icons
		5. proper HTML structures for containing elements