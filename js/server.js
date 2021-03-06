// var http = require("http");
// var url = require("url");
 
// function start(route) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");
 
//     route(pathname);
 
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
//   }
 
//   http.createServer(onRequest).listen(8888);
//   console.log("Server has started.");
// }
 
// exports.start = start;

// {
//     var net = require('net');
//     var server = net.createServer(function(connection) { 
//        console.log('client connected');
//        connection.on('end', function() {
//           console.log('客户端关闭连接');
//        });
//        connection.write('Hello World!\r\n');
//        connection.pipe(connection);
//     });
//     server.listen(8888, function() { 
//       console.log('server is listening');
//     });
// }

//http://localhost:8888


{
  var http = require('http');
  var fs = require('fs');
  var url = require('url');
   
   
  // 创建服务器
  http.createServer( function (request, response) {  
     // 解析请求，包括文件名
     debugger
     var pathname = url.parse(request.url).pathname;
     
     // 输出请求的文件名
     console.log("Request for " + pathname + " received.");
     
     // 从文件系统中读取请求的文件内容
     fs.readFile('../'+pathname.substr(1), function (err, data) {
        if (err) {
           console.log(err);
           // HTTP 状态码: 404 : NOT FOUND
           // Content Type: text/plain
           response.writeHead(404, {'Content-Type': 'text/html'});
        }else{             
           // HTTP 状态码: 200 : OK
           // Content Type: text/plain
           response.writeHead(200, {'Content-Type': 'text/html'});    
           
           // 响应文件内容
           response.write(data.toString());        
        }
        //  发送响应数据
        response.end();
     });   
  }).listen(8888);
   
  // 控制台会输出以下信息
  console.log('Server running at http://127.0.0.1:8888/');
}