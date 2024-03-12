class User{
    constructor(name,password,email){
        this.name = name
        this.password = password
        this.email = email
    }
    encryptPassword(){
        return `${this.password}sdfjkal`
    }

}

const x = new User('Jonas Kahnwald','Dark','jonaskahnwald@gmail.com')
console.log(x.encryptPassword())