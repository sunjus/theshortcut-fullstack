let user = {
    name:"John",
    years: 30
};
//신기법. 위에 오브젝트의 내용을 해체해서 변수에 할당하는것
// 아래 name은 위에 user.name에 할당된다. years:age라고 하면 age라는 변수에 user.years를 할당하는 거다.
let {name, years: age, isAdmin=false} = user
//let name= user.name
//let age= user.years
//let isAdmin= user.isAdmin || false
// false  는 reserved word예약어라서 =false로 표현해야 변수로 표현
console.log(name)
console.log(age)
console.log(isAdmin)