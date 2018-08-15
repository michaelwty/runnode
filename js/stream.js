//从流中读取数据
// {
//     var fs = require("fs");
//     var data = '';
    
//     // 创建可读流
//     var readerStream = fs.createReadStream('../input.txt');
    
//     // 设置编码为 utf8。
//     readerStream.setEncoding('UTF8');
    
//     // 处理流事件 --> data, end, and error
//     readerStream.on('data', function(chunk) {
//        data += chunk;
//     });
    
//     readerStream.on('end',function(){
//        console.log(data);
//     });
    
//     readerStream.on('error', function(err){
//        console.log(err.stack);
//     });
    
//     console.log("程序执行完毕");
// }

//写入流
{
    var fs = require("fs");
    var data = 'PS C:\Users\TERRYWANG-MSI\Documents\GitHub\runnode\js> node stream \n' + 
    '程序执行完毕 \n etst \n afaf \n vvv \n PS C:\Users\TERRYWANG-MSI\Documents\GitHub\runnode\js> node stream' + 
    '程序执行完毕\n'
    '写入完成';
    
    // 创建一个可以写入的流，写入到文件 output.txt 中
    var writerStream = fs.createWriteStream('../output.txt');
    
    // 使用 utf8 编码写入数据
    writerStream.write(data,'UTF8');
    
    // 标记文件末尾
    writerStream.end();
    
    // 处理流事件 --> data, end, and error
    writerStream.on('finish', function() {
        console.log("写入完成。");
    });
    
    writerStream.on('error', function(err){
       console.log(err.stack);
    });
    
    console.log("程序执行完毕");    
}

//链式流
// {
//     var fs = require("fs");
//     var zlib = require('zlib');
//     function compress(){
//         // 压缩 input.txt 文件为 input.txt.gz
//         return new Promise((resolve, reject) => {
//             fs.createReadStream('../input.txt')
//             .pipe(zlib.createGzip())
//             .pipe(fs.createWriteStream('../input.txt.gz'))
//             .then(resolve("文件压缩完成"));
//         });
//     }
//     function decompress(){
//         // 解压 input.txt.gz 文件为 input.txt
//         return new Promise((resolve, reject) => {
//             fs.createReadStream('../input.txt.gz')
//             .pipe(zlib.createGunzip())
//             .pipe(fs.createWriteStream('../input.txt'))
//             .then(resolve("文件解压完成"));
//         });        
//     }
    
//     async function stream(){
//         await compress().then(resolve => {console.log(resolve)});
//         await decompress().then(resolve => {console.log(resolve)});;    
//     }
    
//     stream();
// }

// {
//     let fs = require('fs');
//     let data = '';
//     let data2 = '你的小青蛙是真的可爱';
//     //1.读取流
//     //创建可读流
//     let readStream = fs.createReadStream("input.txt");
//     //设置utf-8编码
//     readStream.setEncoding('UTF8');
//     //处理流事件
//     readStream.on('data', chunk => data += chunk);
//     readStream.on('end', () => writeS(data));
//     readStream.on("error", err => console.log(err.strck));
//     console.log("程序1执行完毕");
//     //2.写入流
//     //创建可写流
//     let writeS = dataS =>{
//         let writeStream = fs.createWriteStream("outInput.txt");
//         //使用utf-8写入流    
//         writeStream.write(data2+dataS, "UTF8");
//         //标记文件末尾
//         writeStream.end();
//         //处理事件流    
//         writeStream.on("finish", () => console.log("写入完成")); 
//         writeStream.on("error", err => console.log(err.stack));   
//         console.log("程序2执行完毕");
//     }    
// }