function Mobile(company, model, year){
    this.company = company
    this.model = model
    this.year = year
    this.info = function(){
        console.log(`${this.company} ${this.model} was released in ${this.year}.`)
    }
}

const mobile1 = new Mobile('Xiaomi','Poco F1',2018)
const mobile2 = new Mobile('Apple','Iphone 14',2023)


console.log(mobile1.company,mobile1.model)