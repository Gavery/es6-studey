'use strict';

//异步操作
{
  //（es5中的回调方式来处理）
  var ajax = function ajax(callback) {
    console.log('执行');
    setTimeout(function () {
      callback && callback.call();
    }, 1000);
  };
  ajax(function () {
    console.log('timeout1');
  });
}

{
  //es6中处理异步
  var _ajax = function _ajax() {
    console.log('执行2');
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, 1000);
    });
  };
  _ajax().then(function () {
    console.log('promise', 'timeout2');
  }); //ajax函数返回Promise实例，这个实例有then方法（第一个参数代表resolve,第二个参数代表reject）
}

{
  //连续调用（重要）
  var _ajax2 = function _ajax2() {
    console.log('执行3');
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, 1000);
    });
  };
  _ajax2().then(function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, 1000);
    });
  }).then(function () {
    console.log('timeout3');
  });
}

{
  var _ajax3 = function _ajax3(num) {
    console.log('执行4');
    return new Promise(function (resolve, reject) {
      if (num > 5) {
        resolve();
      } else {
        throw new Error('出错了');
      }
    });
  };
  _ajax3(6).then(function () {
    console.log('log', 6);
  }).catch(function (err) {
    console.log('catch', err);
  });
  _ajax3(3).then(function () {
    console.log('log', 3);
  }).catch(function (err) {
    console.log('catch', err);
  });
}

//使用场景
{
  //所有图片加载完再添加到页面
  var loadImg = function loadImg(src) {
    return new Promise(function (resolve, reject) {
      var img = document.createElement('img');
      img.src = src;
      img.onload = function () {
        resolve(img);
      };
      img.onerror = function (err) {
        reject(err);
      };
    });
  };

  var showImgs = function showImgs(imgs) {
    imgs.forEach(function (img) {
      document.body.appendChild(img);
    });
  };

  //promise.all()方法把所有的promise实例当做一个promise实例处理	{这个方法的返回结果就是一个promise实例，所以它才能用then方法}


  Promise.all([loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'), loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'), loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png')]).then(showImgs);
}

{
  //Promise.race()
  //发回图片的先后顺序，谁先加载完就显现谁,其它不管
  var _loadImg = function _loadImg(src) {
    return new Promise(function (resolve, reject) {
      var img = document.createElement('img');
      img.src = src;
      img.onload = function () {
        resolve(img);
      };
      img.onerror = function (err) {
        reject(err);
      };
    });
  };

  var _showImgs = function _showImgs(img) {
    var p = document.createElement('p');
    p.appendChild(img);
    document.body.appendChild(p);
  };

  Promise.race([_loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'), _loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'), _loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png')]).then(_showImgs);
}