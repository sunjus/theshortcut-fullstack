

let john ={name:"John", age:25};
let pete ={name:"Pete", age:30};
let mary ={name:"Mary", age:28};

let users = [pete,john,mary];

function sortByAge(users) {
    return users.slice().sort((a,b)=>(a.age<b.age ? -1 : 1))
}

 
let names = sortByAge(users).map(item => item.name)

console.log(names);