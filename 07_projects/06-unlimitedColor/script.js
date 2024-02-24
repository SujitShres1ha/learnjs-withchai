const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const body = document.querySelector('body')
let x

function colorGenerator(){
    const r = Math.floor(Math.random()*256)
     const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
    const randomColor = `rgb(${r},${g},${b})`
    return randomColor
}

function changeColor(){
    console.log('start')
    if (!x){x = setInterval(function(){
        body.style.backgroundColor = colorGenerator()
    },1000)}
}

start.addEventListener('click',changeColor)
stop.addEventListener('click',function(){
    clearInterval(x)
    x = null
    console.log('stop')
})

