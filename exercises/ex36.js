function greetHi(name) {
  console.log("Hi" + name);
}

function greetBye(name) {
  console.log("Bye" + name);
}

function userInfo(firstName, lastName, callback) {
  let fullName = firstName + " " + lastName;
  callback(fullName);
}

userInfo("John", "Loi", greetHi);
userInfo("John", "Loi", greetBye);

/*mojo
let greetHi = name => console.log(`Hi ${name}`)
let greetBye = name => console.log(`Bye ${name}`)


let userInfo = (firstName, lastName, callback) => {
  const fullName = `${firstName} ${lastName}`
  callback(fullName)
}

userInfo ("Pete","Walker", greetHi)
userInfo ("Pete","Walker", greetBye)
*/
