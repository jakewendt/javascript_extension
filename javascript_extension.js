function include(file){
	var s=document.createElement('script');
	s.type='text/javascript';
	s.src=file;
	document.getElementsByTagName('head')[0].appendChild(s);
}

function params(){
	search = window.location.search.replace(/^\?/,'').split('&');
	p = new Object();
	for(i=0;i<search.length;i++) {
		[key,value] = search[i].decodeURI().split('=');
		if( /\[\]$/.test(key) ) {
			key = key.replace(/\[\]$/,'');
			if( typeof(p[key]) == 'undefined' ){
				p[key] = new Array();
			}
			p[key].push(value);
		} else {
			p[key] = value;
		}
	}
	return p;
}

include('array_extension.js');
include('string_extension.js');
include('number_extension.js');
include('object_extension.js');
include('date_extension.js');
