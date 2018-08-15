// var net = require('net');
// var client = net.connect({port: 8888}, function() {
//    console.log('connect to server');  
// });
// client.on('data', function(data) {
//    console.log(data.toString());
//    client.end();
// });
// client.on('end', function() { 
//    console.log('disconnected');
// });

{
    var http = require('http');
 
    // 用于请求的选项
    var options = {
       host: 'localhost',
       port: '8888',
       path: '/index.html'  
    };
     
    // 处理响应的回调函数
    var callback = function(response){
        debugger
       // 不断更新数据
       var body = '';
       response.on('data', function(data) {
          body += data;
       });
       
       response.on('end', function() {
          // 数据接收完成
          console.log(body);
       });
    }
    // 向服务端发送请求
    var req = http.request(options, callback);
    req.end();    
}