/* find second largest no. by finding the max element value in array and comparing it with other elems of array */

const arr = [10, 51, 69, 45, 40,  67, 30, 48, 50, 56, 56, 7777, 7777];

let largest = null

arr.sort()

arr.forEach(elem => {
	if(elem > largest) largest = elem
})

let diff = 0, noToFind = null
arr.forEach(elem => {
	let temp = +largest - elem;
  
  if(temp < diff && temp != 0){
  	noToFind = elem
  }
  diff = temp
})

console.log(noToFind)
