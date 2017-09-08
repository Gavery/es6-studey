{
	let list=new Set();
	list.add(5);
	list.add(7);
	console.log('size',list.size);
}
{
	let arr=[1,2,3,4,5];
	let list=new Set(arr);
	console.log('size',list.size);
}
{
	let list=new Set();
	list.add(1);
	list.add(2);
	list.add(1);//没有成功添加，不会生效，不会报错的（去重复的功能）
	console.log('list',list);

	let arr=[1,2,3,1,2];
	let list2=new Set(arr);
	console.log('list2',list2);//去掉重复数据

	let arr1=[1,2,3,1,'2'];
	let list3=new Set(arr1);
	console.log('list3',list3);//不会进行强制转换会显示字符串的 2
}


//set集合增加，删除

{
	let arr=['add','delete','clear','has'];
	let list=new Set(arr);

	console.log('has',list.has('add'));//true
	console.log('delete',list.delete('add'),list);
	list.clear();
	console.log('clear',list);
}

//set遍历集合
{
	let arr=['add','delete','clear','has'];
	let list=new Set(arr);

	for(let key of list.keys()){
		console.log('key',key);
	}
	for(let value of list.values()){
		console.log('value',value);
	}
	for(let value of list){
		console.log('value',value);
	}
	for(let [key,value] of list.entries()){
		console.log('value',key,value);
	}

	list.forEach(function(item){
		console.log(item);
	})
}

//WeakSet(只支持对象)
{
	let weakList=new WeakSet();
	let arg={};
	weakList.add(arg);
	//weakList.add(2);//报错，只支持对象存储
	console.log('weaklist',weakList);
}

//Map
{
	let map=new Map();
	let arr=['123'];
	map.set(arr,456);
	console.log('map',map,map.get(arr));
}
{
	let map=new Map([['a',123],['b',456]]);
	console.log('map arg',map);

	console.log('size',map.size);
	console.log('delete',map.delete('a'),map);
	console.log('clear',map.clear(),map);

}
//map遍历（和set一样）

//weakMap(只能接受对象，不能遍历，没有set属性，没有clear属性)
{
	let weakmap=new WeakMap();
	let o={};
	weakmap.set(o,123);
	console.log('weakMap',weakmap.get(o));
}