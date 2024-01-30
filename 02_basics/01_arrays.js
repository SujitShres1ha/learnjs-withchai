const arr1 = new Array(1,2,3,4,5)

// arr1.unshift(0)
// arr1.shift()
// arr1.push(6)
// arr1.pop()

let a = arr1.slice(0,2)
console.log(a)
 
console.log(arr1)
//slice vs splice
let b = arr1.splice(0,2)
console.log(b)



console.log(arr1)