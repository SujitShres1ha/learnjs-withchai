const form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
e.preventDefault()
const height = parseInt(document.getElementById('height').value)
const weight = parseInt(document.getElementById('weight').value)
const results = document.getElementById('results')
if (height === '' || height < 0 || isNaN(height)){
    results.innerHTML = 'Enter a valid height'
}
else if (weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = 'Enter a valid weight'
}
else{
    result = (weight / ((height*height)/10000)).toFixed(2)
    let message
    if (result < 18.6){
        message = 'Under Weight'
    }
    else if (result > 24.9){
        message = 'Over Weight'
    }
    else{
        message = 'Normal'
    }
    results.innerHTML = `<span>${result}<br>${message}</span>`
}
}
)


