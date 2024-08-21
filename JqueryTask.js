// JavaScript source code

/*the function is used to check whether the email id entered by the user if 
it is entered it will validate the emai-ld id and the if there is no issues then it will show email id valid */
    $(document).ready(function () {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        $(".email-input").hover(function () {
            if ($(".email-input").val() === "") {
                $(".emailError").addClass("errorInput");
                $(".emailError").text("Enter the email ID");
            }
            else if (!pattern.test($(".email-input").val())) {
                $(".emailError").addClass("errorInput");
                $(".emailError").text("Enter the valid email ID");
                
            }
            else {
                $(".emailError").text("mail-Id enterted sucessfully");
                $(".emailError").addClass("correctInput");
            }
        });
    });
/*the function is used to check whether the password entered by the user and if it is entered
 it will start to  validate the password.If there is no issues then it will show password id valid */
    $(document).ready(function () {
        $(".passKey-input").hover(function () {
            if ($(".passKey-input").val() === "") {
                $(".passKey-Error").text("Enter the password");
                $(".passKey-Error").addClass("errorInput");
            }
            else if ($(".passKey-input").val().length < 7) {
                $(".passKey-Error").text("Password should above 8 characters");
                $(".passKey-Error").addClass("errorInput");
            } else {
                $(".passKey-Error").text("Password ok");
                $(".passKey-Error").addClass("correctInput");
            }
        });
    });

$(document).ready(function () {
    $("#loginForm").on("submit", function () {
        let isValid = true;  
        const mail = $(".email-input").val().trim();
        const password = $(".passKey-input").val().trim();
        if (mail === "" || password === "") {
            isValid = false;
        }
        return isValid; 
 });
});