module.exports = function arrayMap(arr, fn) {
	return arr.reduce(function(newArray, currentValue) {
		newArray.push(fn(currentValue));
		return newArray;
	}, [])
}