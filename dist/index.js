'use strict';

//let 和 const命令

function test() {
	var a = 1;
	for (var i = 1; i < 3; i++) {
		console.log(i, 'a', a);
	}
}

test();

function last() {
	var pi = 3.14; //const赋值不能被修改
	var k = { //可以修改（修改的事对象，但是const指向的对象的指针并没有改变）
		a: 1
	};
	k.b = 3;

	console.log(k.b);
}
last();