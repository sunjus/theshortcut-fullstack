/*
let mailSubject = prompt("Subject:", "")

checkSpam = () => {
    let lowercase = mailSubject.toLowerCase()
    let messageCheck = lowercase.includes('million')||lowercase.includes('virus');
    return(messageCheck ? 'It is a spam': 'Here is your mail')
}

alert(checkSpam())
*/


function checkSpam(mailSubject){
    let lowercase = mailSubject.toLowerCase()
    let messageCheck = lowercase.includes('million')||lowercase.includes('virus');
    if (messageCheck) {
        return 'It is a spam'
    } 
    return 'Here is your mail'   
}

let mailSubject = prompt("Subject:", "")
alert(checkSpam(mailSubject))

let mailsubject2 = prompt(...)
alert(checkSpam(mailsubject2))