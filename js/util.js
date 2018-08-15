//util.inherits
//util.inherits(constructor, superConstructor)是一个实现对象间原型继承 的函数。
// {
//     var util = require('util'); 
//     function Base() { 
//         this.name = 'base'; 
//         this.base = 1991; 
//         this.sayHello = function() { 
//         console.log('Hello ' + this.name); 
//         }; 
//     } 
//     Base.prototype.showName = function() { 
//         console.log(this.name);
//     }; 
//     function Sub() { 
//         this.name = 'sub'; 
//     } 
//     util.inherits(Sub, Base); 
//     var objBase = new Base(); 
//     objBase.showName(); 
//     objBase.sayHello(); 
//     console.log(objBase); 
//     var objSub = new Sub(); 
//     objSub.showName(); 
//     //objSub.sayHello(); 
//     console.log(objSub);     
// }

//util.inspect
//util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。
// {
//     var util = require('util'); 
//     function Person() { 
//         this.name = 'byvoid'; 
//         this.toString = function() { 
//         return this.name; 
//         }; 
//     } 
//     var obj = new Person(); 
//     console.log(util.inspect(obj)); 
//     console.log(util.inspect(obj, true));     
// }

//util.isArray(object)
// {
//     var util = require('util');

//     util.isArray([])
//       // true
//     util.isArray(new Array)
//       // true
//     util.isArray({})
//       // false    
// }

//util.isRegExp(object)
// {
//     var util = require('util');

//     util.isRegExp(/some regexp/)
//       // true
//     util.isRegExp(new RegExp('another regexp'))
//       // true
//     util.isRegExp({})
//       // false    
// }

//util.isDate(object)
// {
//     var util = require('util');

//     util.isDate(new Date())
//       // true
//     util.isDate(Date())
//       // false (without 'new' returns a String)
//     util.isDate({})
//       // false
// }

//util.isError(object)
// {
//     var util = require('util');
//     util.isError(new Error())
//         // true
//     util.isError(new TypeError())
//         // true
//     util.isError({ name: 'Error', message: 'an error occurred' })
//         // false
// }