//类和对象
{
    //类的基本定义和生成实例
    class Parent {
        constructor(name = '高嘉银') {
            this.name = name;
        }
    }
    let v_parent = new Parent('v');
    console.log('构造函数和实例', v_parent);
} {
    //类的继承
    class Parent {
        constructor(name = '高嘉银') {
            this.name = name;
        }
    }
    class Child extends Parent {

    }
    console.log('继承实例', new Child());
} {
    //继承传递参数
    class Parent {
        constructor(name = '高嘉银') {
            this.name = name;
        }
    }
    class Child extends Parent {
        constructor(name = 'child') {
            //super();
            super(name); //完成子类向父类传递参数(只能放在第一行)
            this.type = 'child';
        }
    }
    console.log('继承实例传参数', new Child('廖立晴·'));
}

{
    //getter和setter方法
    class Parent {
        constructor(name = '高嘉银') {
            this.name = name;
        }
        get longName() { //不是方法，是属性
            return 'mk' + this.name;
        }
        set longName(value) {
            this.name = value;
        }
    }
    let v = new Parent();
    console.log('getter', v.longName);
    v.longName = '我爱你';
    console.log('setter', v.longName)
}

{
    //静态方法
    class Parent {
        constructor(name = '高嘉银') {
            this.name = name;
        }
        static tell() { //静态方法是通过类去调用，而不是通过类的实例去调用
            console.log('tell');
        }
    }
    Parent.tell(); //tell
} {
    //静态属性
    class Parent {
        constructor(name = '高嘉银') {
            this.name = name;
        }
        static tell() { //静态方法是通过类去调用，而不是通过类的实例去调用
            console.log('tell');
        }

    }
    Parent.type = 'test'; //静态属性（也是通过类直接调用）;
    console.log('静态属性', Parent.type);
}