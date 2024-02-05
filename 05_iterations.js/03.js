const coding = ["js","c","php","python","html"]

// coding.forEach( function (item) {console.log(item)} )

// coding.forEach( (val) => {console.log(val)})

function print(val){
    // console.log(val)
}
// coding.forEach(print)

// coding.forEach((key,index,arr) => {
//     console.log(key,index,arr)
// })

const xyz = [
{
    player : "Messi",
    jersey : 10
},
{
    player : "Neymar",
    jersey : 11
}
]
xyz.forEach((info) => {
    console.log(info.player,':',info.jersey)
})