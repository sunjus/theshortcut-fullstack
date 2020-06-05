<!DOCTYPE html>
<html>
    <script>
        // Logical Operators; log in process
        /* solution 1
        let userName = prompt('username');
        
        
        if (userName == 'admin') {
            let password = prompt('password'); {
                if (password =='TheMaster') {
                    alert("Welcome!")
                } else {
                  if (password == null || password =="") {
                      alert("Canceled")
                  } else {
                      alert("Wrong password")
                  }
                }
            }
        } else {
            if (userName == null || userName =="") {
                alert("Canceled")
            } else {
                alert("I don't know you");
            }
        }
           */

          //solution2
          let userName = prompt('username');
        
        
        if (userName === 'admin') {
            let password = prompt('password');
            if (password ==='TheMaster') {
                alert("Welcome!")
            } else if (password === null || password === "") {
                alert("Canceled")
            } else {
                alert("Wrong password")
            }
        } else if (userName === null || userName === "") {
                alert("Canceled")
        } else {
                alert("I don't know you");
        }
        
        /* Using function
        function askPassword() {
            let password = prompt('password');
            if (password =='TheMaster') {
                alert("Welcome!")
            } else if (password == null || password=="") {
                alert("Canceled")
            } else {
                alert("Wrong password")
            }
        }
        
        function askUsername() {
            if (userName == 'admin') {
                askPassword()
            } else if (userName == null || userName=="") {
                    alert("Canceled")
            } else {
                    alert("I don't know you");
            }
        }

        askUserName()

        */

        /* Zeriab's code
        function my_function () {
          var person = prompt("Please enter your name");
             if (person != "Admin") {
                 alert("Wrong User")
            } else {
               var pass = prompt("Please enter your password");
                 if(pass == "Admin") {
                    alert("Welcome")
                 }else{
                    alert("Wrong password")
                 }
            }
        }
  */

 /* Mira's code
 let username = prompt("Username");

if (username == "Admin") {
    let password = prompt("Password");
    if (password == "TheMaster") {
        alert("Welcome!")
    } else {
        alert("Wrong password")
    }
} else if (username == " " || null) {
    alert("Cancelled")
} else {
    alert("I don't know you")
}
*/
/* david's
let question = prompt('Please enter your password', 'answer')

if (question === 'admin') {
    document.getElementById('demo').innerHTML =
    'Welcome, you have access.' + prompt('Please enter your username')
} else if (question !== 'admin') {
    prompt ('You do not have access. Please contact your administrator.')
}
*/
    </script>
</html>

