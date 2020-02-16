/**
 * 
 * 简易promise实现
 */
(function(){ 
    const PENDING = 'pending';
    const RESOLVED = 'resolved';
    const REJECTED = 'rejected';

    function TestPromise(fn) {
        var that = this;
        that.state = PENDING;
        that.value = null;
        that.resolvedCallbacks = [];
        that.rejectedCallbacks = [];

        function resolve(value) {
            console.log('resolve', value)
            if(that.state == PENDING) {
                that.state = RESOLVED;
                that.value = value;
                that.resolvedCallbacks.forEach(cb=> cb(that.value));
            }
        }
        function reject(value) {
            console.log('reject', value)
            if(that.state = PENDING) {
                that.state = REJECTED;
                that.value = value;
                that.rejectedCallbacks.forEach(cb=> cb(that.value));
            }
        }

        try {
            fn(resolve, reject);
        }catch(e) {
            reject(e);
        }
    }
    TestPromise.prototype.then = function(onFulfilled, onRejected) {
        var _self = this;
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
        onRejected = typeof onRejected === 'function' ? onRejected: r => {throw r}

        var thenCb = null;
        //如果promise的状态还是pending，这里先行将then中的回调函数存储
        if (_self.state === PENDING) { 
            _self.resolvedCallbacks.push(onFulfilled);
            _self.rejectedCallbacks.push(onRejected);
            //...这个条件如何return promise出去供下个then使用
        }
        if (_self.state === RESOLVED) {
            thenCb = onFulfilled(_self.value);
            if(thenCb !=null) {
                return new TestPromise((resolve, reject)=> {
                    resolve(thenCb);
                })
            }
        }
        if (_self.state === REJECTED) {
            thenCb = onRejected(_self.value);
            if(thenCb !=null) {
                return new TestPromise((resolve, reject)=> {
                    reject(thenCb);
                })
            }
        }
    }

    new TestPromise((resolve, reject) => {
        //setTimeout(() => { //延时.then undefined
          resolve(6)
        //}, 0)
    }).then((value) => {
        alert('resolve1'+ '_______'+ value)
        return value+4
    }, (err)=> {
        alert('reject'+ '_______'+ err)
    }).then((value) => {
        alert('resolve2'+ '_______'+ value)
        return value+4
    }).then((value) => {
        alert('resolve3'+ '_______'+ value)
    })
})()