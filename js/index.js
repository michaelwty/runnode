var server = require("./server");
var router = require("./router");
 
server.start(router.route);

//http://127.0.0.1:8888/start

console.log( __filename );
console.log( __dirname );
console.log('当前目录: ' + process.cwd());
console.log('当前版本: ' + process.version);
console.log(process.memoryUsage());
process.stdout.write("Hello World!" + "\n");
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});
console.log('获取执行路径: ' + process.execPath);
console.log('平台信息: ' + process.platform);