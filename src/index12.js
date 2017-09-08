//Proxy和Reflect
{
    let obj = {
        time: '2017-03-11',
        name: 'net',
        _r: 123
    };
    let monitor = new Proxy(obj, {
        //拦截对象属性的读取
        get(target, key) { //target指的是obj对象
            return target[key].replace('2017', '2018');
        },
        //拦截对象设置属性
        set(target, key, value) {
            if (key === 'name') {
                return target[key] = value;
            } else {
                return target[key];
            }
        },
        //判断当前对象是否有某个属性
        //拦截key in object操作
        has(target, key) {
            if (key === 'name') {
                return target[key];
            } else {
                return false;
            }
        },
        //拦截删除请求
        deleteProperty(target, key) {
            if (key.indexOf('_') > -1) {
                delete target[key];
                return true;
            } else {
                return target[key];
            }
        },
        //拦截object.keys,object.getOwnpropertySymbols,objectOwnpropertyNames
        ownKeys(target) {
            return Object.keys(target).filter(item => item != 'time');
        }
    });
    console.log('get', monitor.time);
    monitor.time = '2018';
    monitor.name = '高嘉银';
    console.log('set', monitor.time);
    console.log('set', monitor.name, monitor);

    console.log('拦截 key in', 'name' in monitor); //true
    console.log('拦截 key in', 'time' in monitor); //false

    // delete monitor.time;
    // console.log('delete', monitor);
    // delete monitor._r;
    // console.log('delete', monitor);

    console.log('ownKeys', Object.keys(monitor));

}

//refelct
{
    let obj = {
        time: '2017-03-11',
        name: 'net',
        _r: 123
    };
    console.log('reflect get', Reflect.get(obj, 'time'));
    Reflect.set(obj, 'name', '廖立晴');
    console.log('reflect set', obj);
    console.log('has', Reflect.has(obj, 'name')); //true

}

//应用场景(数据校验)：重要
{
	function validator(target,validator){
		return new Proxy(target,{
			_validator:validator,
			set(target,key,value,proxy){
				if(target.hasOwnProperty(key)){
					let va=this._validator[key];
					if(!!va(value)){
						return Reflect.set(target,key,value,proxy);
					}else{
						throw Error(`不能设置${key}到${value}`);
					}
				}else{
					throw Error(`${key}不存在`);
				}
			}
		})}

		const personValidators={
			name(val){
				return typeof val==='string'
			},
			age(val){
				return typeof val==='number' && val>18
			},
			mobile(val){

			}
		}
		class Person{
			constructor(name,age){
				this.name=name;
				this.age=age;
				this.mobil='1111';
				return validator(this,personValidators);
			}
		}

		const person=new Person('lilei',30);
		
		//person.name=48;报错
		person.name="廖立晴";
		console.info('person',person);
}
