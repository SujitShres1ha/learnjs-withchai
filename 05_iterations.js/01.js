numbers = [12,4,83,79,50]
for (const num of numbers) {
    // console.log(num)
}

// Maps
const map = new Map()
map.set(1,"a")
map.set(2,"b")
map.set(3,"c")

// map.set(1,"z")

// console.log(map)

for (const [key,val] of map){
    // console.log(key,val)
}

const obj = {
    1: "a",
    2: "b",
    3: "c"
}
// for (const [key,value] of obj){
//     console.log(key)
// }