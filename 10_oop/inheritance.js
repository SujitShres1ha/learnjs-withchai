class character{
    constructor(name){
        this.name = name
    }
    printMe(){
        console.log(`I am ${this.name}`)
    }
}

class series extends character{
    constructor(charName,seriesName){
        super(charName)
        this.seriesName = seriesName
    }
    printMain(){
        console.log(`Main character in ${this.seriesName} is ${this.name}`)
    }
}             
 