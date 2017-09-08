//Array.of()
{
    let arr = Array.of(3, 4, 7, 9, 11); //把这里面的参数转换为数组
    console.log('arr', arr);
    let empty = Array.of();
    console.log('empty', empty);
}
//Array.from()
{
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p); //把一个集合转换为了一个数组，以便能够循环遍历
    pArr.forEach(function(item) {
        console.log(item.textContent);
    });

    console.log(Array.from([1, 3, 5], function(item) {
        return item * 2
    })); //map映射原理，把数组遍历了一下，把值重新处理了一哈
}
//fill()
{
    console.log('fill-7', [1, 'a', undefined].fill(7)); //7,7,7
    console.log('fill,pos', ['a', 'b', 'c'].fill(3, 1, 3)); //'a',3,3
}
//遍历：常用key entries values
{
    for (let index of['1', 'c', 'ks'].keys()) {
        console.log('keys', index); //0,1,2返回下标
    }

    //values有兼容性问题 import 'babel-polyfill'
    // for (let value of['1', 'c', 'ks'].values()) {
    //     console.log('values', value); //遍历数组的值
    // }
    for (let [index,value] of['1', 'c', 'ks'].entries()) {
        console.log('keys and value', index,value); //返回下标和值
    }
}

//不常用的API
{
	console.log([1,2,3,4,5].copyWithin(0,2,5));
}

//查找：重要find ,findIndex
{
	console.log([1,2,3,4,5,6].find(function(item){return item>3}))//4
	console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}))//3
	
}
{
	console.log('number',[1,2,NaN].includes(1));
	console.log('NAN',[1,2,NaN].includes(NaN));//es中可以查找NaN  es5中不能实现NaN=NaN的运算
}

