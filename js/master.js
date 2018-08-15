// const fs = require('fs');
// const child_process = require('child_process');

// var arystdout = [];
// for(var i=0; i<3; i++) {
//     var workerProcess = child_process.exec('node support.js ' + i, function (error, stdout, stderr) {
//         if (error) {
//             console.log(error.stack);
//             console.log('Error code: '+error.code);
//             console.log('Signal received: '+error.signal);
//         }
//         if(stdout != '')
//         {
//             console.log('stdout: ' + stdout);
//             arystdout.push(stdout);
//         }
//         if(stderr != '')
//             console.log('stderr: ' + stderr);
//     });    
 
//     workerProcess.on('exit', function (code) {
//         console.log('子进程已退出，退出码 '+code);
//         //console.log(arystdout);
//     });
// }

// {
//     const fs = require('fs');
//     const child_process = require('child_process');
     
//     for(var i=0; i<3; i++) {
//        var workerProcess = child_process.spawn('node', ['support.js', i]);
     
//        workerProcess.stdout.on('data', function (data) {
//           console.log('stdout: ' + data);
//        });
     
//        workerProcess.stderr.on('data', function (data) {
//           console.log('stderr: ' + data);
//        });
     
//        workerProcess.on('close', function (code) {
//            debugger
//           console.log('子进程'+process.argv+'已退出，退出码 '+code);
//        });
//     }    
// }

{
    const fs = require('fs');
    const child_process = require('child_process');
     
    for(var i=0; i<3; i++) {
       var worker_process = child_process.fork("support.js", [i]);    
     
       worker_process.on('close', function (code) {
          console.log('子进程已退出，退出码 ' + code);
       });
    }    
}