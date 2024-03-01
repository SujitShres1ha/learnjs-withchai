// function add(a,b){
//     return a+b
// }
// add.count = 2

// console.log(add(1,2))
// console.log(add.count)
// console.log(add.prototype)

function fullName(fname,lname){
    this.fname = fname
    this.lname = lname
}

fullName.prototype.greeting = function(){
    console.log(`Hello ${this.fname}`)
}

const name = new fullName('Gobi','Prasad')  

name.greeting()


 /*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
