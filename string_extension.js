String.prototype.to_f = function() {
	return parseFloat(this,10);
}

String.prototype.to_i = function() {
	// MUST add the radix as parsing dates gives leading 0s with will cause it to be octal.
	return parseInt(this,10);
}

String.prototype.blank = function() {
	return /^\s*$/.test(this);
}

String.prototype.to_date = function(){
// don't quite understand it, but I need to convert this string to a string?
// otherwise it is invalid
	d = new Date(this.toString());
	if( d == "Invalid Date" ) {
		if(this.length == 8){		/* 19991231 */
			d = new Date(this.substr(0,4), this.substr(4,2).to_i()-1, this.substr(6,2));
		}
	}
	return d;
}

String.prototype.decodeURI = function() {
	return decodeURI(this);
}

