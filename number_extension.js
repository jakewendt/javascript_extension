Number.prototype.with_sign = function(){
	return ( this > 0 ) ? "+"+this : this.toString();
}

Number.prototype.odd = function(){
	return ( ( this % 2 ) == 1 )
}

Number.prototype.even = function(){
	return ( ( this % 2 ) == 0 )
}
