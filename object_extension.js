Object.prototype.dup = function(){		/* crude Hash copy, but will cause problems elsewhere */
	obj = new Object();
	for( property in this )
		obj[property] = this[property]
	return obj;
}

Object.prototype.inspect = function(){
	var inspected = "{ ";
	for( property in this ) {
		if( this[property] instanceof Function )	//	skips dup, inspect and any future user-defined functions
			continue;
		inspected += property + ":";
		if( this[property] instanceof Object )
			inspected += this[property].inspect();
		else
			inspected += this[property];
		inspected += ", ";
	}
	inspected += " }";
	return inspected;
}
