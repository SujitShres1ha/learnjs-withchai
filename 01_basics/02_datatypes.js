console.log(typeof(null))
console.log(typeof(undefined)) 

// datatype of null

// Primitive - number, string, boolean, bigInt, null, undefined, symbol

const id = Symbol(123)
const id_2 = Symbol(123)
console.log(id === id_2)

// Non-primitive(Reference) - array, object, function 

// Stack(primitive) vs Heap(non-primitive)

let a = 1
let b = a
b = 2
console.log(a,b)


let c = {
    name: "Sujit"
}
let d = c
d.name = "Nobel"
console.log(c.name,d.name)