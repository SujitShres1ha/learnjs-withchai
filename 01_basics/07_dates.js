let date = new Date()
// console.log(date.toLocaleString())

// let createDate = new Date(2005,11,29)
// console.log(date.toString())

// console.log(Date.now())

console.log(date.getMonth()+1) 

console.log(date.toLocaleString('default',{
    year: "2-digit",
    weekday: "long",
    month:"long",
    day:"numeric"
    
}))