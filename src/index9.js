{
    //第一种方式
    let a1 = Symbol(); //独一无二的
    let a2 = Symbol();
    console.log(a1 === a2); //false
    //第二种方式
    let a3 = Symbol.for('a3');//看a3这个变量是否被注册过，如果被注册就返回这个变量
    let a4=Symbol.for('a3');
    console.log(a3===a4);//true
}

{
	let a1=Symbol.for('abc');//如果没有for的话就要报错，下面已经有了abc变量了
	let obj={
		[a1]:'123',
		'abc':345,
		'c':456
	};
	console.log('obj',obj);

	for(let [key,value] of Object.entries(obj)){
		console.log('let of',key,value);//for of 方法拿不到a1的属性值（只能拿到非symbol属性的值）
		console.log('12345',obj.abc);
	}

	Object.getOwnPropertySymbols(obj).forEach(function(item){
		console.log('symbol',obj[item]);//能拿到symbol作为对象属性的值
	})

	Reflect.ownKeys(obj).forEach(function(item){
	console.log('ownKeys',item,obj[item]);
	})

}