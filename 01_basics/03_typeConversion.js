let a = "asdf"
let b = Number(a)
console.log(a)
console.log(b)
console.log(typeof(b))

// null/NaN/false ->(Number)-> 0
// "asdf" ->(Number)-> NaN 
// "" -> false / "asdf" -> true 

let x = 3
console.log(x++,++x)//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
