// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task')
//         resolve()
//     },1000)
   
// })

// promiseOne.then(function(){
//     console.log('promise consumed')
// })

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async 2')
        resolve()
},1000)
}).then(()=>{
    console.log('Async 2 resolved')
})