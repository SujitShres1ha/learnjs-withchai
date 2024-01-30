//singleton object

const sym = Symbol("123")

const student1 = {
    name: "Sujit Shrestha",
    roll: 473,
    grade: "XII",
    [sym]: "123"
}

// console.log(student1.name)
// console.log(student1["grade"])
// console.log(student1[sym])

// Object.freeze(student1)
// student1.grade = "Bachelors"
// console.log(student1)

// student1.result = function(){
//     console.log(`Congratulations ${this.name}, you have passed.`)
// }

// // console.log(student1.result)
// console.log(student1.result())


const teacher1 = {}
teacher1.name = "Ajay Kumar Karn"
teacher1.subject = "Mechanics"

console.log(teacher1);