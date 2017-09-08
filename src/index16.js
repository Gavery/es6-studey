//Generator(解决异步编程的，比promise更高级)

{
    // genertaor基本定义
    let tell = function*() {
        yield 'a';
        yield 'b';
        return 'c'
    };

    let k = tell();
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
}

{
    //普通话对象不能使用for of（因为没有iterator接口）
    //通过Generator函数给obj对象部署一个iterator接口就可以使用 for of循环
    let obj = {};
    obj[Symbol.iterator] = function*() {
        yield 1;
        yield 2;
        yield 3;
    }
    for (let value of obj) {
        console.log('value', value);
    }
}

//状态机（高级语法）

//只有几种情况
{
    let state = function*() {
        while (1) {
            yield 'a';
            yield 'b';
            yield 'c';
        }
    }
    let status = state();
    console.log('状态机', status.next());
    console.log('状态机', status.next());
    console.log('状态机', status.next());
    console.log('状态机', status.next());
    console.log('状态机', status.next());
    console.log('状态机', status.next());
}


//需要插件才能执行
// {
//     let state = async function(){
//         while (1) {
//             await 'a';
//             await 'b';
//             await 'c';
//         }
//     }
//     let status=state();
//     console.log('状态机',status.next());
//     console.log('状态机',status.next());
//     console.log('状态机',status.next());
//     console.log('状态机',status.next());
//     console.log('状态机',status.next());
//     console.log('状态机',status.next());
// }


//实例场景
//抽奖次数
{
    let draw = function(count) {
        //具体抽奖逻辑

        console.log(`剩余次数${count}次`)
    };

    let residue = function*(count) {
        while (count > 0) {
            count--;
            yield draw(count);
        }
    };
    let star = residue(5);


    let btn = document.createElement('button');
    btn.id = 'start';
    btn.textContent = '抽奖';
    document.body.appendChild(btn);


    document.getElementById('start').addEventListener('click', function() {
        star.next();
    }, false)
}

//长轮循
{
	let ajax=function*(){
		yield new Promise(function(resolve,reject){
			setTimeout(function(){
				resolve({code:0})
			},200);
		})
	}
	let pull=function(){
		let genertaor=ajax();
		let step=genertaor.next();
		step.value.then(function(d){
			if(d.code!=0){
				setTimeout(function(){
					console.info('wait');
					pull();
				},1000)
			}else{
				console.info(d);
			}
		})
	}
	pull();
}