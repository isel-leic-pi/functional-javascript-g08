function recur(array, callback, index, value) {
	if(index < array.length) {
		return recur(array, callback, index + 1, callback(value, array[index], index, array));
	} else {
		return value;
	}
}

function reduce(arr, fn, initial) {
	return recur(arr, fn, 0, initial);
}

module.exports = reduce

