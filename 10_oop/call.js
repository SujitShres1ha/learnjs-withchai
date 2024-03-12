function setUserName(username){
    this.username = username
}

function createUser(username,email,password){
    setUserName.call(this,username) //passes the current execution context to another function
    this.email = email
    this.password = password
}

let user1 = new createUser('sujit','sujit@gmail.com','1234')
console.log(user1)


