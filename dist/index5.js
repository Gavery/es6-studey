'use strict';

{
	console.log(438); //二进制表示法
	console.log(3813); //八进制表示法
}

//了解，使用不高
{
	console.log('15', Number.isFinite(15)); //是否是有尽的
	console.log('NaN', Number.isFinite(NaN));
	console.log('1/0', Number.isFinite('true' / 0));
	console.log('NaN', Number.isNaN(NaN)); //true
	console.log('NaN', Number.isNaN(0)); //false
}

//判断是否为整数isInteger(参数必须为数值)
{
	console.log('26', Number.isInteger(26)); //true
	console.log('26.0', Number.isInteger(26.0)); //true
	console.log('26.1', Number.isInteger(26.1)); //true
	console.log('26', Number.isInteger('26')); //false
}

{
	console.log(Number.MAX_SAFE_INTEGER); //表示数的上限
	console.log(Number.MIN_SAFE_INTEGER);
	console.log('10', Number.isSafeInteger(10)); //true
	console.log('a', Number.isSafeInteger('a')); //false
}

//小数处理部分
{
	console.log(4.1, Math.trunc(4.1)); //4
	console.log(4.6, Math.trunc(4.6)); //4
}

//有用：sign函数（判断是否为正数，负数，0,非数值）
{
	console.log('-5', Math.sign(-5)); //-1
	console.log('0', Math.sign(0)); //0
	console.log('5', Math.sign(5)); //1
	console.log('50', Math.sign('50')); //1
	console.log('a', Math.sign('a')); //NaN
}

//立方根计算
{
	console.log('-1', Math.cbrt(-1)); //-1
	console.log('8', Math.cbrt(8)); //2
}