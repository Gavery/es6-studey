'use strict';

//Map与Array的对比
{
    var map = new Map();
    var array = [];
    //增
    map.set('t', 1);
    array.push({
        t: 1
    });
    console.info('map-array', map, array);
    //查
    var map_exist = map.has('t'); //true
    var array_exist = array.find(function (item) {
        return item.t;
    }); //返回存在的对象
    console.info('exist', map_exist, array_exist);

    //改
    map.set('t', 2);
    array.forEach(function (item) {
        return item.t ? item.t = 2 : '';
    });
    console.info('change', map, array);

    //删
    map.delete('t');

    var index = array.findIndex(function (item) {
        return item.t;
    });
    array.splice(index, 1);
    console.info('delete', map, array);
}
//set与Array的对比
{
    var set = new Set();
    var _array = [];
    //增
    var t = { //必须要声明一个对象  如果set.add({t：1})，下面find方法就会返回false（因为对象是引用类型，地址发生改变了）;
        t: 1
    };
    set.add(t);
    _array.push({
        t: 1
    });
    console.info('set-array', set, _array);
    //查
    var set_exist = set.has(t); //查的是地址
    var _array_exist = _array.find(function (item) {
        return item.t;
    });
    console.info('exist', set_exist, _array_exist);

    //改
    set.forEach(function (item) {
        return item.t ? item.t = 2 : '';
    });
    _array.forEach(function (item) {
        return item.t ? item.t = 2 : '';
    });
    console.info('modify', set, _array);
    //删
    set.forEach(function (item) {
        return item.t ? set.delete(item) : '';
    });
    var _index = _array.findIndex(function (item) {
        return item.t;
    });
    _array.splice(_index, 1);
    console.info('delete', set, _array);
}

//Map，set与Object的对比
{
    var item = { t: 1 };
    var _map = new Map();
    var _set = new Set();
    var obj = {};
    //增
    _map.set('t', 1);
    _set.add(item);
    obj['t'] = 1;
    console.info('map-set-obj', obj, _map, _set);
    //查
    console.info('查', {
        map_exist: _map.has('t'),
        set_exist: _set.has(item),
        obj_exist: 't' in obj
    });
    //改
    _map.set('t', 2);
    item.t = 2;
    obj['t'] = 2;
    console.info('map-set-obj-modify', obj, _map, _set);
    //删
    _map.delete('t');
    _set.delete(item);
    delete obj['t'];
    console.info('map-set-obj-delete', obj, _map, _set);
}

//总结，map感觉最好
//能使用map不使用数组
//对数据存储要求唯一性，用set