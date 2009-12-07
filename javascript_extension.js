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

var components = [
	'array_extension.js',
	'string_extension.js',
	'number_extension.js',
	'object_extension.js',
	'date_extension.js'
];
var script_path = '';
var scripts = document.getElementsByTagName("script");
for( var i=0; i<scripts.length; i++ )
	if( scripts[i].src.match(/javascript_extension\.js(\?.*)?$/) ){
		script_path = scripts[i].src.replace(/javascript_extension\.js(\?.*)?$/,'');
		break;
	}

for( var i=0; i<components.length; i++ )
	include( script_path + components[i] );
