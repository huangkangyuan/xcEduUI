//引用html-webpack-plugin插件，作用是根据html模板在内存生成html文件，它的工作原理是根据模板文件在内存中生成一个index.html文件。
var htmlwp = require('html-webpack-plugin');
module.exports={
    entry:'./src/main.js',  //指定打包的入口文件
    output:{
        path : __dirname+'/dist',  // 注意：__dirname表示webpack.config.js所在目录的绝对路径
        filename:'build.js'		   //输出文件
    },
    devtool: 'eval-source-map',//让浏览器看到源代码
    plugins:[
        new htmlwp({
            title: '首页',  //生成的页面标题<head><title>首页</title></head>
            filename: 'index.html', //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
            template: 'vue_02.html' //根据vue_02.html这个模板来生成(这个文件请程序员自己生成)
        })
    ]
}