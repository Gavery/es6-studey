'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

{
	var list = new Set();
	list.add(5);
	list.add(7);
	console.log('size', list.size);
}
{
	var arr = [1, 2, 3, 4, 5];
	var _list = new Set(arr);
	console.log('size', _list.size);
}
{
	var _list2 = new Set();
	_list2.add(1);
	_list2.add(2);
	_list2.add(1); //没有成功添加，不会生效，不会报错的（去重复的功能）
	console.log('list', _list2);

	var _arr = [1, 2, 3, 1, 2];
	var list2 = new Set(_arr);
	console.log('list2', list2); //去掉重复数据

	var arr1 = [1, 2, 3, 1, '2'];
	var list3 = new Set(arr1);
	console.log('list3', list3); //不会进行强制转换会显示字符串的 2
}

//set集合增加，删除

{
	var _arr2 = ['add', 'delete', 'clear', 'has'];
	var _list3 = new Set(_arr2);

	console.log('has', _list3.has('add')); //true
	console.log('delete', _list3.delete('add'), _list3);
	_list3.clear();
	console.log('clear', _list3);
}

//set遍历集合
{
	var _arr3 = ['add', 'delete', 'clear', 'has'];
	var _list4 = new Set(_arr3);

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = _list4.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var key = _step.value;

			console.log('key', key);
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

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = _list4.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var value = _step2.value;

			console.log('value', value);
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = _list4[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var _value = _step3.value;

			console.log('value', _value);
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}

	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {
		for (var _iterator4 = _list4.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
			var _step4$value = _slicedToArray(_step4.value, 2),
			    _key = _step4$value[0],
			    _value2 = _step4$value[1];

			console.log('value', _key, _value2);
		}
	} catch (err) {
		_didIteratorError4 = true;
		_iteratorError4 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion4 && _iterator4.return) {
				_iterator4.return();
			}
		} finally {
			if (_didIteratorError4) {
				throw _iteratorError4;
			}
		}
	}

	_list4.forEach(function (item) {
		console.log(item);
	});
}

//WeakSet(只支持对象)
{
	var weakList = new WeakSet();
	var arg = {};
	weakList.add(arg);
	//weakList.add(2);//报错，只支持对象存储
	console.log('weaklist', weakList);
}

//Map
{
	var map = new Map();
	var _arr4 = ['123'];
	map.set(_arr4, 456);
	console.log('map', map, map.get(_arr4));
}
{
	var _map = new Map([['a', 123], ['b', 456]]);
	console.log('map arg', _map);

	console.log('size', _map.size);
	console.log('delete', _map.delete('a'), _map);
	console.log('clear', _map.clear(), _map);
}
//map遍历（和set一样）

//weakMap(只能接受对象，不能遍历，没有set属性，没有clear属性)
{
	var weakmap = new WeakMap();
	var o = {};
	weakmap.set(o, 123);
	console.log('weakMap', weakmap.get(o));
}