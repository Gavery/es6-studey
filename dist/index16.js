'use strict';

//Generator(解决异步编程的，比promise更高级)

{
    // genertaor基本定义
    var tell = regeneratorRuntime.mark(function tell() {
        return regeneratorRuntime.wrap(function tell$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return 'a';

                    case 2:
                        _context.next = 4;
                        return 'b';

                    case 4:
                        return _context.abrupt('return', 'c');

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, tell, this);
    });

    var k = tell();
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
}

{
    //普通话对象不能使用for of（因为没有iterator接口）
    //通过Generator函数给obj对象部署一个iterator接口就可以使用 for of循环
    var obj = {};
    obj[Symbol.iterator] = regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return 1;

                    case 2:
                        _context2.next = 4;
                        return 2;

                    case 4:
                        _context2.next = 6;
                        return 3;

                    case 6:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee, this);
    });
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var value = _step.value;

            console.log('value', value);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

//状态机（高级语法）

//只有几种情况
{
    var state = regeneratorRuntime.mark(function state() {
        return regeneratorRuntime.wrap(function state$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        if (!1) {
                            _context3.next = 9;
                            break;
                        }

                        _context3.next = 3;
                        return 'a';

                    case 3:
                        _context3.next = 5;
                        return 'b';

                    case 5:
                        _context3.next = 7;
                        return 'c';

                    case 7:
                        _context3.next = 0;
                        break;

                    case 9:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, state, this);
    });
    var status = state();
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
    var draw = function draw(count) {
        //具体抽奖逻辑

        console.log('\u5269\u4F59\u6B21\u6570' + count + '\u6B21');
    };

    var residue = regeneratorRuntime.mark(function residue(count) {
        return regeneratorRuntime.wrap(function residue$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        if (!(count > 0)) {
                            _context4.next = 6;
                            break;
                        }

                        count--;
                        _context4.next = 4;
                        return draw(count);

                    case 4:
                        _context4.next = 0;
                        break;

                    case 6:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, residue, this);
    });
    var star = residue(5);

    var btn = document.createElement('button');
    btn.id = 'start';
    btn.textContent = '抽奖';
    document.body.appendChild(btn);

    document.getElementById('start').addEventListener('click', function () {
        star.next();
    }, false);
}

//长轮循
{
    var ajax = regeneratorRuntime.mark(function ajax() {
        return regeneratorRuntime.wrap(function ajax$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.next = 2;
                        return new Promise(function (resolve, reject) {
                            setTimeout(function () {
                                resolve({ code: 0 });
                            }, 200);
                        });

                    case 2:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, ajax, this);
    });
    var pull = function pull() {
        var genertaor = ajax();
        var step = genertaor.next();
        step.value.then(function (d) {
            if (d.code != 0) {
                setTimeout(function () {
                    console.info('wait');
                    pull();
                }, 1000);
            } else {
                console.info(d);
            }
        });
    };
    pull();
}