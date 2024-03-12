class User{
    constructor(username){
        this.username = username
    }

    static createId(){
        return 'abc'
    }
}

// let user = new User('kukur')
// console.log(user.createId())

class Teacher extends User{
    constructor(username,id){
        super(username)
        this.id = id
    }
}

let user2 = new Teacher('Gobi')
console.log(user2.createId())