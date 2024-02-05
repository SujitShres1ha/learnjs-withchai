const myObj = {
    js : 'javascript',
    cpp : 'C++',
    py : 'Python'
}

for (const key in myObj) {
    console.log(key,"is for",myObj[key],'.');
} 

const alphabets = ["a","b","c","d"]
for (let alphabet in alphabets){
    console.log(alphabet,alphabets[alphabet])
}

//forin in map object