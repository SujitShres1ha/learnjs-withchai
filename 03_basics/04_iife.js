// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
//named iife
(function welcome(){
    console.log("Welcome to js")
})()
//;
//unnamed iife
( (name) => (console.log(`Welcome ${name}`)))('Sujit')