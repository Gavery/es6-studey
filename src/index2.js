{
	let a,b,rest;
	[a,b]=[1,2];//数组解构赋值
	console.log(a,b);
}
{
	let a,b, rest;
	[a,b,...rest]=[1,2,3,4,5,6];
	console.log(a,b,rest);
}
{
	let a,b;
	({a,b}={a:1,b:2});//对象解构赋值
	console.log(a,b);
}
{
	let a,b,c,rest;
	[a,b,c]=[1,2];//数组解构赋值
	console.log(a,b,c);
}

//应用场景

//1：适用于变量交换
{
	let a=1;
	let b=2;
	[a,b]=[b,a];//如果是es5的话就要借助中间变量来进行交换
	console.log(a,b);
}
//2:接受函数的队歌返回值（比较重要）
{
	function f(){
		return [1,2]
	}
	let a,b;
	[a,b]=f();//如果没有解构赋值的话就得要一个变量接受函数的结果再依次取出值
	console.log(a,b);
}
//3:选择性的接受值
{
	function f(){
		return [1,2,3,4,5];
	}
	let a,b,c;
	[a,,,b]=f();//两个逗号之间隔着一个数(可以选择性的接受值)
	console.log(a,b);//1,4
}
//4:这个比较常用（不知道数组的长度，只关心第一个元素）
{
	function f(){
		return [1,2,3,4,5];
	}
	let a,b,c;
	[a,,...b]=f();//两个逗号之间隔着一个数(可以选择性的接受值)
	console.log(b.length);
	console.log(a,b);//1和一个数组
}


//对象的解构赋值
//1:
{
	let o={p:42,q:true};
	let {p,q}=o;//以对象的解构赋值（等号两边都是对象）
	console.log(p,q);

}
{
	let {a=10,b=5}={a:3};
	console.log(a,b);
}

//特别常用  嵌套的场景
{
	let metaData={
		title:'abc',
		test:[{
			title:'test',
			desc:'description'
		}]
	}
	let {title,test:[{title:cnTitle}]}=metaData;
	console.log(title,cnTitle);
}