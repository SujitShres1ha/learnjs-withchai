const user = {
    email: "aforapple@gmail.com",
    fullname: {
        firstname: "Paul",
        lastname: "Scholes"
    }
}

// console.log(user.fullname.firstname)

const obj1 = {1:"Andres",2:"Xavi"}
const obj2 = {3:"Sergio",4:"David"}

// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3)

// const obj3 = {...obj1,...obj2}
// console.log(obj3)

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))
// console.log(user.hasOwnProperty('fullname'))

const {fullname: name} = user
console.log(name.firstname)