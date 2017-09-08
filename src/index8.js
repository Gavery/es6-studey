//简洁表示法
{
  let o=1;
  let k=2;

  let es5={
  	0:0,
  	k:k
  };
  let es6={
  	o,
  	k
  };
  console.log(es5,es6);

  let es5_method={
  	hello:function(){
  		console.log('hello');
  	}
  };
  let es6_method={
  	hello(){
  		console.log('hello');
  	}
  };
  console.log(es5_method.hello(),es6_method.hello());
}
//属性表达式
{
let a='b';
let es5_obj={
	a:'c'
	//b:'c'
};

let es6_obj={
	[a]:'c'
};
console.log(es5_obj,es6_obj);//a:c   b:c
}

//常用常用API
{
	//就相当于 === 的作用
 console.log('字符串',Object.is('abc','abc'),'abc'==='abc');
 console.log('数组',Object.is([],[]),[]===[]);//数组是引用类型，地址不一样

 //拷贝
 console.log('拷贝',Object.assign({a:'a'},{b:'b'}));//浅复制（只能拷贝自身的属性）

 //entries(values属于2017  现在兼容有点问题)
 let test={k:123,o:456};
 for(let [key,value] of Object.entries(test)){
 	console.log([key,value]);
 }
}
//扩展运算符(支持度不高)
{
	// let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};
	// c={
	// 	c:'ddd',
	// 	d:'ccc'
	// }
}