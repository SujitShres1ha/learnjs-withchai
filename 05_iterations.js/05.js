// #Chaining

let nums = [1,2,3,4,5,6 ]
const new_nums = nums.map((num)=> num*10).map((num)=>num+2).filter((num)=>{return num < 50})
// console.log(new_nums)

// REDUCE
let s = nums.reduce(function (acc,curr){
    console.log(`Accumulator:${acc} and Current value:${curr}`)
    return acc + curr
},0)

// let s = nums.reduce((acc,curr)=> (acc+curr),0)



console.log(s)