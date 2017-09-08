//函数默认参数
{
	function test(x,y='world'){
		console.log('默认值',x,y);
	}
	test('hello');//hello world
	test('hello','kill','wo');//hello kill wo
}
//作用域
{
// 	let x='test';
// 	function test2(x,y=x){
// 		console.log('作用域',x,y);
// 	}
// test2('kill');//kill kill
// test2();//undefined undefined

let x='test';
	function test2(c,y=x){
		console.log('作用域',c,y);
	}
test2('kill');//kill test
test2();//undefined test
}
//rest参数
{
function test3(...arg){//rest参数（把输入的参数转换为一个数组）
	for(let v of arg){
		console.log('rest',v);
	}
}
test3(1,2,3,4,'a');
}
//扩展运算符(rest参数的逆运算)
{
	console.log(...[1,2,4]);//把这个数组拆分成离散的值
	console.log('a',...[1,2,4]);
}

//重要：箭头函数
{
	let arrow = (v,b)=> b*v*2;//有参数
	let arrow2=()=> 5;//无参
	console.log('arrow',arrow(3,2));
	console.log('arrow2',arrow2());
}
//伪调用(提升性能：如递归，函数依赖函数)
{
	function tail(x){
		console.log('tail',x);
	}
	function fx(x){
		return tail(x);
	}
	fx(123);
}