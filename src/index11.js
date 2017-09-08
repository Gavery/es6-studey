//Map与Array的对比
{
    let map = new Map();
    let array = [];
    //增
    map.set('t', 1);
    array.push({
        t: 1
    });
    console.info('map-array', map, array);
    //查
    let map_exist = map.has('t'); //true
    let array_exist = array.find(item => item.t); //返回存在的对象
    console.info('exist', map_exist, array_exist);

    //改
    map.set('t', 2);
    array.forEach(item => item.t ? item.t = 2 : '');
    console.info('change', map, array);

    //删
    map.delete('t');

    let index = array.findIndex(item => item.t);
    array.splice(index, 1);
    console.info('delete', map, array);

}
//set与Array的对比
{
    let set = new Set();
    let array = [];
    //增
    let t = { //必须要声明一个对象  如果set.add({t：1})，下面find方法就会返回false（因为对象是引用类型，地址发生改变了）;
        t: 1
    }
    set.add(t);
    array.push({
        t: 1
    });
    console.info('set-array', set, array);
    //查
    let set_exist = set.has(t); //查的是地址
    let array_exist = array.find(item => item.t);
    console.info('exist', set_exist, array_exist);

    //改
    set.forEach(item => item.t ? item.t = 2 : '');
    array.forEach(item => item.t ? item.t = 2 : '');
    console.info('modify', set, array);
    //删
    set.forEach(item => item.t ? set.delete(item) : '');
    let index = array.findIndex(item => item.t);
    array.splice(index, 1);
    console.info('delete', set, array);
}

//Map，set与Object的对比
{
	let item={t:1};
	let map=new Map();
	let set=new Set();
	let obj={};
	//增
	map.set('t',1);
	set.add(item);
	obj['t']=1;
	console.info('map-set-obj',obj,map,set);
	//查
	console.info('查',{
		map_exist:map.has('t'),
		set_exist:set.has(item),
		obj_exist:'t' in obj
	})
	//改
	map.set('t',2);
	item.t=2;
	obj['t']=2;
	console.info('map-set-obj-modify',obj,map,set);
	//删
	map.delete('t');
	set.delete(item);
	delete obj['t'];
	console.info('map-set-obj-delete',obj,map,set);
}


//总结，map感觉最好
//能使用map不使用数组
//对数据存储要求唯一性，用set

