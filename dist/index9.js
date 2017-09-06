'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

{
	//第一种方式
	var a1 = Symbol(); //独一无二的
	var a2 = Symbol();
	console.log(a1 === a2); //false
	//第二种方式
	var a3 = Symbol.for('a3'); //看a3这个变量是否被注册过，如果被注册就返回这个变量
	var a4 = Symbol.for('a3');
	console.log(a3 === a4); //true
}

{
	var _obj;

	var _a = Symbol.for('abc'); //如果没有for的话就要报错，下面已经有了abc变量了
	var obj = (_obj = {}, _defineProperty(_obj, _a, '123'), _defineProperty(_obj, 'abc', 345), _defineProperty(_obj, 'c', 456), _obj);
	console.log('obj', obj);

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = Object.entries(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _step$value = _slicedToArray(_step.value, 2),
			    key = _step$value[0],
			    value = _step$value[1];

			console.log('let of', key, value); //for of 方法拿不到a1的属性值（只能拿到非symbol属性的值）
			console.log('12345', obj.abc);
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

	Object.getOwnPropertySymbols(obj).forEach(function (item) {
		console.log('symbol', obj[item]); //能拿到symbol作为对象属性的值
	});

	Reflect.ownKeys(obj).forEach(function (item) {
		console.log('ownKeys', item, obj[item]);
	});
}