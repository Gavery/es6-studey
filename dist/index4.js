'use strict';

var _templateObject = _taggedTemplateLiteral(['i am ', ',', ''], ['i am ', ',', '']),
    _templateObject2 = _taggedTemplateLiteral(['Hi\n', ''], ['Hi\\n', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

{
	console.log('a', 'a');
	console.log('s', '\u20BB7');
	console.log('s', '\uD842\uDFB7');
}
{

	//es5中处理遇到的问题
	var s = '𠮷'; //转换为unicode时候字节为大于2，所以下面的length就把它当做了4个字节处理了（每两个字节为一个长度）


	console.log("length", s.length); //2

	console.log('o', s.charAt(0));
	console.log('1', s.charAt(1));
	console.log('at0', s.charCodeAt(0));
	console.log('at1', s.charCodeAt(1));

	//es6中的处理
	var s1 = "𠮷a";
	console.log("length", s1.length); //3
	console.log('code0', s1.codePointAt(0));
	console.log('code0', s1.codePointAt(0).toString(16)); //20bb7

	console.log(String.fromCharCode("0x20bb7")); //es5
	console.log(String.fromCodePoint("0x20bb7")); //es6
}
{
	var str = '\uD842\uDFB7abc';

	//es5处理
	for (var i = 0; i < str.length; i++) {
		console.log('es5', str[i]); //会出翔乱码的情况，字符编码超了
	}
	//es6处理

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var code = _step.value;
			//处理字符编码大于oxfffff的情况
			console.log('es6', code);
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

//使用率较高
{
	var _str = 'string';
	console.log('includes', _str.includes('r')); //判断字符串中是否包含字母，返回boolean
	console.log('start', _str.startsWith('s')); //判断是某字母开始
	console.log('end', _str.endsWith('g')); //判断某字母结束
}
//使用率很高的
{
	var _str2 = 'abc';
	console.log(_str2.repeat(2)); //重复某字符串的次数
}

//重要：模板字符串(个人觉得很厉害)
{
	var name = 'list';
	var info = 'hello world';
	var m = 'i an ' + name + ',' + info;
	console.log(m);
}

//补白的重用，处理日期数字前的0；（重要）
{
	console.log('1'.padStart(2, '0')); //01（padStart函数参数1是返回的长度，后面参数是长度不够的就用它代替）
	console.log('1'.padEnd(2, '0')); //10
}

//标签模板
{
	var abc = function abc(s, v1, v2) {
		console.log(s, v1, v2);
		return s + v1 + v2;
	};

	var user = {
		name: 'list',
		info: 'hello world'
	};
	console.log(abc(_templateObject, user.name, user.info));
}

//使用频率不高
{
	console.log(String.raw(_templateObject2, 1 + 2)); //不换行
	console.log('Hi\n' + (1 + 2)); //要换行
}