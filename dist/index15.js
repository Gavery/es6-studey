'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

{
	var arr = ['hello', 'world'];
	var map = arr[Symbol.iterator]();
	console.log(map.next());
	console.log(map.next());
	console.log(map.next());
}
{
	var obj = _defineProperty({
		start: [1, 3, 2],
		end: [7, 9, 8]
	}, Symbol.iterator, function () {
		var self = this;
		var index = 0;
		var arr = self.start.concat(self.end);
		var len = arr.length;
		return {
			next: function next() {
				if (index < len) {
					return {
						value: arr[index++],
						done: false
					};
				} else {
					return {
						value: arr[index++],
						done: true
					};
				}
			}
		};
	});
	console.log(obj);
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var key = _step.value;

			console.log(key);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
}