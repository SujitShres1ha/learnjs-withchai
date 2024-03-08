Object.prototype.hello = function(){
    console.log('Hello World')
} 

Array.prototype.hi = ()=>console.log('Hi World')

let obj = new Object()
// obj.hello()
// // obj.hi()

let arr = new Array()
// arr.hello()
// arr.hi()


//  INHERITANCE
const school = {
    'name': 'GMS',
    'location': 'Gorkha'
}

const status = {
    'isOpen' : true
}

const students = {
    'boys': 100,
    'girls': 120,
    __proto__: status
}
// school.__proto__ = students
// console.log(school.isOpen )

//modern syntax
// Object.setPrototypeOf(school,status)
// console.log(school.boys)

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`${this.trim().length}`)
}

let str = 'sd  '
str.trueLength()
'Tomodachi  '.trueLength()