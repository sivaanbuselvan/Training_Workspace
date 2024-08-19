// JavaScript source code

function retrieve() {
    
    var name = document.getElementById("user_name").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("mail_id").value;
    var pattern = "[a-zA-Z]{3,10}[0-9]{2,4}@gmail[.]{1}com";
   
    if (!name) {
        alert("please enter the username");
        return false;
    }
    if (name.match(/[0-9]/) != null)
    {
        alert("enter name correctly");
        return false;
    }
    if (!password) {
        alert("enter the password");
        return false;
    }
    if (password.length < 7 ) {
        alert("password must contain 8 characters  ");
        return false;
    }
    
    if (email.match(!pattern)) {
        alert("invalid email id");
        return false;
    }

    return true;
}

