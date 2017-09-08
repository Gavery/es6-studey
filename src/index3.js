{
    //es5常用方法
    let regex = new RegExp('xyz', 'i'); //i代表忽略大小写
    let regex2 = new RegExp(/xyz/i); //只能放一个参数（对比下面）
    console.log(regex.test('xyz123'), regex2.test('xyz123'));

    //es6方法
    let regex3 = new RegExp(/xyz/ig, 'i');
    console.log(regex3.flags); //获取正则修饰符的es6属性
}


//y修饰符


//新增的y匹配符（都是全局匹配{
//区别在于如果再进行一次匹配g不是按照第一次匹配后紧挨着的进行匹配
//y则是紧挨着进行匹配
//}）
{
    let s = 'bbb_bb_b';
    let a1 = /b+/g;
    let a2 = /b+/y;
    console.log('one', a1.exec(s), a2.exec(s)); //两个都匹配到
    console.log('two', a1.exec(s), a2.exec(s)); //第二个没有匹配到是按照上一次匹配后的字母紧挨着的进行匹配（从_开始匹配）

    console.log(a1.sticky, a2.sticky); //判断是否开启了y匹配模式
}

//u修饰符（unicode编码）


{
    console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));//把匹配的当做了两个字符  true
    console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A'));//把匹配的当做了一个字符（在unicode中的字符编码形式） false
    console.log(/\u{61}/.test('a'));
    console.log(/\u{61}/u.test('a'));
}