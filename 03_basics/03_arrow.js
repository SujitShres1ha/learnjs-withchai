const student = {
    name : "Sumit",
    status: function(){
        console.log(`Congratulations ${this.name}, you passed.`) 
        console.log(this)
    }
}

// student.status()  
// student.name = "Bibek"
// student.status()

// console.log(this)


// const chai = () => {
//     let username = "Sujit"
//     console.log(this.username)
//     console.log(this)
// }
// chai()

// const add = (num1,num2) => {
//     return num1+num2
// }

const add = (num1,num2) => (num1 + num2)
console.log(add(2,3))