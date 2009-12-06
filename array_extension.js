Array.prototype.dup = function(){
	var new_array = new Array;
	for( var i=0; i < this.length; i++ )
		new_array.push(this[i]);
	return new_array;
}

Array.prototype.shuffle = function(){
	for(var j, x, i = this.length; 
		i; 
		j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
	return this;
};

/* 
	Doesn't deal with multiple occurences.
		ie. [1,2,3].contains([1,1]) => true
	Or order
		ie. [1,2,3].contains([3,1]) => true
*/
Array.prototype.contains = function(v) {
	var values = v
	if(typeof(v) != 'object') values = [v]
	for( var i=0; i < values.length; i++ ) {
		if( this.index_of(values[i]) == -1 )
			return false;
	}
	return true;
}

Array.prototype.index_of = function(v){
	for ( var i = 0; i < this.length; i++ )
		if ( this[ i ] == v )
			return i;
	return -1;
}

Array.prototype.sum = function() {
	var sum = 0;
	for( var i=0; i<this.length; i++ )
		sum += parseFloat(this[i],10)
	return sum;
}

Array.prototype.average = function() {
	var sum = 0.0;
	for(i=0;i<this.length;i++)
		sum += this[i];
	return sum/this.length;
}

Array.prototype.median = function() {
	var dup = this.dup().to_f().sort(function(a,b){return (a < b) ? -1 : ( a > b ) ? 1 : 0; })
	var half = dup.length / 2;
	if( dup.length.even() ){
		return ( dup[half] + dup[half-1] ) / 2;
	} else {
		return dup[parseInt(half,10)];
	}
}

Array.prototype.to_f = function(){
	dup = this.dup()
	for(i=0;i<this.length;i++)
		dup[i] = parseFloat(this[i],10);
	return dup;
}
