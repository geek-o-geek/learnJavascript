/* Call, Apply, Bind */

var obj = {
            a: 3
           }

var add = function (...arg){
	return arg.reduce((accumulator, current) => {
  	return accumulator + current
  }, 0) 
}

console.log(add.apply(obj, [12, 2]))
console.log(add.call(obj, 9))
var obj1 = add.bind(obj)
console.log(obj1(6))
