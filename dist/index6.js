'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//Array.of()
{
    var arr = Array.of(3, 4, 7, 9, 11); //把这里面的参数转换为数组
    console.log('arr', arr);
    var empty = Array.of();
    console.log('empty', empty);
}
//Array.from()
{
    var p = document.querySelectorAll('p');
    var pArr = Array.from(p); //把一个集合转换为了一个数组，以便能够循环遍历
    pArr.forEach(function (item) {
        console.log(item.textContent);
    });

    console.log(Array.from([1, 3, 5], function (item) {
        return item * 2;
    })); //map映射原理，把数组遍历了一下，把值重新处理了一哈
}
//fill()
{
    console.log('fill-7', [1, 'a', undefined].fill(7)); //7,7,7
    console.log('fill,pos', ['a', 'b', 'c'].fill(3, 1, 3)); //'a',3,3
}
//遍历：常用key entries values
{
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = ['1', 'c', 'ks'].keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var index = _step.value;

            console.log('keys', index); //0,1,2返回下标
        }

        //values有兼容性问题 import 'babel-polyfill'
        // for (let value of['1', 'c', 'ks'].values()) {
        //     console.log('values', value); //遍历数组的值
        // }
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

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = ['1', 'c', 'ks'].entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _step2$value = _slicedToArray(_step2.value, 2),
                _index = _step2$value[0],
                value = _step2$value[1];

            console.log('keys and value', _index, value); //返回下标和值
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
}

//不常用的API
{
    console.log([1, 2, 3, 4, 5].copyWithin(0, 2, 5));
}

//查找：重要find ,findIndex
{
    console.log([1, 2, 3, 4, 5, 6].find(function (item) {
        return item > 3;
    })); //4
    console.log([1, 2, 3, 4, 5, 6].findIndex(function (item) {
        return item > 3;
    })); //3
}
{
    console.log('number', [1, 2, NaN].includes(1));
    console.log('NAN', [1, 2, NaN].includes(NaN)); //es中可以查找NaN  es5中不能实现NaN=NaN的运算
}