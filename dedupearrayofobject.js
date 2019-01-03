let arr = [{a: "hello"}, {b: "dsfsdf"}, {a: "hello"}];

var result = [...new Set(arr.map(obj => obj[Object.keys(obj)]   ))]

console.log(result);
