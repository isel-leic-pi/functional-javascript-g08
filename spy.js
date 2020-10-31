function Spy(target, method) {
	let obj = {count: 0};

	let tempVal = target[method];
	target[method] = function() {
		obj.count++;
		return tempVal.apply(target, Array.prototype.slice.call(arguments));
	}
	return obj;
}

module.exports = Spy