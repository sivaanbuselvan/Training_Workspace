// JavaScript source code

function retrieve() {
    
    var name = document.getElementById("user_name").value;
    var password = document.getElementById("password").value;
    var pattern = /^(?: [a - z] + [0 - 9] | [A - Z] + [!@#$ %^&*])$/;
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
    if (password.length < 7 && password.match(!pattern)) {
        alert("password must contain 8 characters  and it should contain number and a special character");
        return false;
    }

    return true;
}
