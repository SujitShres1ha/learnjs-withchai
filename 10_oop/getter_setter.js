class User{
    constructor(name,id){
        this.name = name
        this.id = id
    }
    get id(){
        return Number(this._id)
    }
    set id(value){
        this._id = value
    }
    }

const user = new User('abc','123')
console.log(user.id)

