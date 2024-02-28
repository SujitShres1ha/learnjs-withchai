// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task')
//         resolve()
//     },1000)
   
// })

// promiseOne.then(function(){
//     console.log('promise consumed')
// })



// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('Async 2')
//         resolve()
// },1000)
// }).then(()=>{
//     console.log('Async 2 resolved')
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({'name':'Sujit', 'roll':473})
//     })
// })

// promiseThree.then(function(student){
//     console.log(student.name)
// })




// const promiseFour = new Promise((resolve,reject)=>{
//     const error = false
//     if (error){
//         reject('Error!!!')
//     }
//     else{
//         resolve({username : 'Sujit', age: 19})
//     }
// })

// promiseFour.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>(
//     console.log(username)
// )).catch((error)=>{
//     console.log(error)
// }).finally(()=>(console.log('Promise rejected or resolved.')))




// const promiseFive = new Promise(function(resolve,reject){
//     const error = true
//     if (error){
//         reject('Error!!!')
//     }
//     else{
//         resolve({username : 'Sujit', age: 19})
//     }
// })

// async function consumePromise(){
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromise()


// async function userDetails(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
//     const data = await response.json()
//     console.log(data)
// }

// userDetails()

fetch('https://jsonplaceholder.typicode.com/todos/')
.then(function(response){
    return response.json()
})
.then(function (data){
    console.log(data)
})
.catch(function (error){
    console.log('E:',error)
})