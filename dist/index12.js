'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Proxy和Reflect
{
    var obj = {
        time: '2017-03-11',
        name: 'net',
        _r: 123
    };
    var monitor = new Proxy(obj, {
        //拦截对象属性的读取
        get: function get(target, key) {
            //target指的是obj对象
            return target[key].replace('2017', '2018');
        },

        //拦截对象设置属性
        set: function set(target, key, value) {
            if (key === 'name') {
                return target[key] = value;
            } else {
                return target[key];
            }
        },

        //判断当前对象是否有某个属性
        //拦截key in object操作
        has: function has(target, key) {
            if (key === 'name') {
                return target[key];
            } else {
                return false;
            }
        },

        //拦截删除请求
        deleteProperty: function deleteProperty(target, key) {
            if (key.indexOf('_') > -1) {
                delete target[key];
                return true;
            } else {
                return target[key];
            }
        },

        //拦截object.keys,object.getOwnpropertySymbols,objectOwnpropertyNames
        ownKeys: function ownKeys(target) {
            return Object.keys(target).filter(function (item) {
                return item != 'time';
            });
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
    var _obj = {
        time: '2017-03-11',
        name: 'net',
        _r: 123
    };
    console.log('reflect get', Reflect.get(_obj, 'time'));
    Reflect.set(_obj, 'name', '廖立晴');
    console.log('reflect set', _obj);
    console.log('has', Reflect.has(_obj, 'name')); //true
}

//应用场景(数据校验)：重要
{
    var validator = function validator(target, _validator) {
        return new Proxy(target, {
            _validator: _validator,
            set: function set(target, key, value, proxy) {
                if (target.hasOwnProperty(key)) {
                    var va = this._validator[key];
                    if (!!va(value)) {
                        return Reflect.set(target, key, value, proxy);
                    } else {
                        throw Error('\u4E0D\u80FD\u8BBE\u7F6E' + key + '\u5230' + value);
                    }
                } else {
                    throw Error(key + '\u4E0D\u5B58\u5728');
                }
            }
        });
    };

    var personValidators = {
        name: function name(val) {
            return typeof val === 'string';
        },
        age: function age(val) {
            return typeof val === 'number' && val > 18;
        },
        mobile: function mobile(val) {}
    };

    var Person = function Person(name, age) {
        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
        this.mobil = '1111';
        return validator(this, personValidators);
    };

    var person = new Person('lilei', 30);

    //person.name=48;报错
    person.name = "廖立晴";
    console.info('person', person);
}