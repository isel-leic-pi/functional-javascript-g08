function duckCount() {
	return Array.prototype.reduce.call(arguments, function(acc, value) {
		return acc += (Object.prototype.hasOwnProperty.call(value, 'quack') ? 1 : 0); 
	}, 0);
}

module.exports = duckCount

