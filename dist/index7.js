'use strict';

//函数默认参数
{
	var test = function test(x) {
		var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'world';

		console.log('默认值', x, y);
	};

	test('hello'); //hello world
	test('hello', 'kill', 'wo'); //hello kill wo
}
//作用域
{
	var test2 = function test2(c) {
		var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

		console.log('作用域', c, y);
	};

	// 	let x='test';
	// 	function test2(x,y=x){
	// 		console.log('作用域',x,y);
	// 	}
	// test2('kill');//kill kill
	// test2();//undefined undefined

	var x = 'test';

	test2('kill'); //kill test
	test2(); //undefined test
}
//rest参数
{
	var test3 = function test3() {
		for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
			arg[_key] = arguments[_key];
		}

		//rest参数（把输入的参数转换为一个数组）
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var v = _step.value;

				console.log('rest', v);
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
	};

	test3(1, 2, 3, 4, 'a');
}
//扩展运算符(rest参数的逆运算)
{
	var _console, _console2;

	(_console = console).log.apply(_console, [1, 2, 4]); //把这个数组拆分成离散的值
	(_console2 = console).log.apply(_console2, ['a'].concat([1, 2, 4]));
}

//重要：箭头函数
{
	var arrow = function arrow(v, b) {
		return b * v * 2;
	}; //有参数
	var arrow2 = function arrow2() {
		return 5;
	}; //无参
	console.log('arrow', arrow(3, 2));
	console.log('arrow2', arrow2());
}
//伪调用(提升性能：如递归，函数依赖函数)
{
	var tail = function tail(x) {
		console.log('tail', x);
	};

	var fx = function fx(x) {
		return tail(x);
	};

	fx(123);
}