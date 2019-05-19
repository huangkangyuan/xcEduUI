var {add} = require('./module.js');
var {add2} = require('./module.js');
var Vue = require('./vue.min.js');

// 实例化Vue对象
//vm :叫做MVVM中的 View Model
var VM = new Vue({
    el: "#app",//表示当前vue对象接管app的div区域
    data: {
        name: '黑马程序员',// 相当于是MVVM中的Model这个角色
        num1: 0,
        num2: 0,
        result: 0,
        url: 'http://www.itcast.cn'
    },
    methods: {
        change: function () {
            this.result = add(Number.parseInt(this.num1),Number.parseInt(this.num2));
        }
    }
});