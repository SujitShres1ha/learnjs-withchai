numbers = [1,2,3,4,5]

// const num = numbers.forEach((val) =>{
// // console.log(val)
// return val
// })
// console.log(num)

// const nums = numbers.filter((num) => {
//     return num < 5
// })
// console.log(nums)   

const nums = []
numbers.forEach((num) => {
    if (num < 5){
        nums.push(num)
    }
})
console.log(nums)