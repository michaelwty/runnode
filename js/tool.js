//Node.js OS 模块
// {
//     var os = require("os");
//     var util = require("util");

//     // CPU 的字节序
//     console.log('endianness : ' + os.endianness());
    
//     // 操作系统名
//     console.log('type : ' + os.type());
    
//     // 操作系统名
//     console.log('platform : ' + os.platform());
    
//     // 系统内存总量
//     console.log('total memory : ' + os.totalmem() + " bytes.");
    
//     // 操作系统空闲内存量
//     console.log('free memory : ' + os.freemem() + " bytes.");

//     console.log(os.arch());
//     //返回操作系统 CPU 架构，可能的值有 "x64"、"arm" 和 "ia32"。

//     console.log(util.inspect(os.cpus()));
//     //返回一个对象数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、时间（一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象）。

// 	console.log(os.networkInterfaces());
//     //获得网络接口列表。
// }

//Node.js Path 模块
// {
//     var path = require("path");

//     // 格式化路径
//     console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));
    
//     // 连接路径
//     console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));
    
//     // 转换为绝对路径
//     console.log('resolve : ' + path.resolve('tool.js'));
    
//     // 路径中文件的后缀名
//     console.log('ext name : ' + path.extname('tool.js'));    
// }

//Node.js DNS 模块
// {
//     var dns = require('dns');

//     dns.lookup('www.github.com', function onLookup(err, address, family) {
//        console.log('ip 地址:', address);
//        dns.reverse(address, function (err, hostnames) {
//        if (err) {
//           console.log(err.stack);
//        }
    
//        console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
//     });  
//     });    
// }

//Node.js Domain 模块
// {
//     var EventEmitter = require("events").EventEmitter;
//     var domain = require("domain");
    
//     var emitter1 = new EventEmitter();
    
//     // 创建域
//     var domain1 = domain.create();
    
//     domain1.on('error', function(err){
//        console.log("domain1 处理这个错误 ("+err.message+")");
//     });
    
//     // 显式绑定
//     domain1.add(emitter1);
    
//     emitter1.on('error',function(err){
//        console.log("监听器处理此错误 ("+err.message+")");
//     });
    
//     emitter1.emit('error',new Error('通过监听器来处理'));
    
//     emitter1.removeAllListeners('error');
    
//     emitter1.emit('error',new Error('通过 domain1 处理'));
    
//     var domain2 = domain.create();
    
//     domain2.on('error', function(err){
//        console.log("domain2 处理这个错误 ("+err.message+")");
//     });
    
//     // 隐式绑定
//     domain2.run(function(){
//        var emitter2 = new EventEmitter();
//        emitter2.emit('error',new Error('通过 domain2 处理'));   
//     });
    
    
//     domain1.remove(emitter1);
//     emitter1.emit('error', new Error('转换为异常，系统将崩溃!'));    
// }