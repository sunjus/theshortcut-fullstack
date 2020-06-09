let user = {
    name:"John",
    age:30
};

let superUser = {
    isAdmin: true
};

let adminUser = Object.assign({},user,superUser) 

console.log(adminUser)
