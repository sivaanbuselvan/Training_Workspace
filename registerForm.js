// JavaScript source code
/*This jquery code is used to validate the form and and it restrict the form  to get submitted 
if the user has failed to enter any of the feild in
inside the form */
$(document).ready(function () {
    
    /* In this block it will check the entered first name is valid and if 
    The user didn't enter the username it will highlight the particular inbox and instruct the user to enter a valid data*/
    var patternName = /^[A-Za-z]+$/;
    $("#firstName").blur(function () {
        if ($("#firstName").val() === "") {
            $("#errorFirstName").text("Please enter the first name");
            $("#errorFirstName").addClass("errorInput");
            $("#firstName").css('border', '3px solid red');
        }
        else if (!patternName.test($("#firstName").val())) {
            $("#errorFirstName").text("Name should not contain a number");
            $("#errorFirstName").addClass("errorInput");
            $("#firstName").css('border', '3px solid red');
        }
        else {
            $("#errorFirstName").text("Valid Name");
            $("#errorFirstName").addClass("correctInput");
            $("#firstName").css('border', '3px solid greenyellow');
        }
    });
    /* In this block it will check the entered last name is valid and if
    The user didn't enter the lastname  it will highlight the particular inbox and instruct the user to enter a valid data*/
    $("#lastName").blur(function () {
        if ($("#lastName").val() === "") {
            $("#errorLastName").text("Please enter the last name");
            $("#errorLastName").addClass("errorInput");
            $("#lastName").css('border', '3px solid red');
        }
        else if (!patternName.test($("#lastName").val())) {
            $("#errorLastName").text("Name should not contain a number");
            $("#errorLastName").addClass("errorInput");
            $("#lastName").css('border', '3px solid red');
        }
        else {
            $("#errorLastName").text("Valid Name");
            $("#errorLastName").addClass("correctInput");
            $("#lastName").css('border', '3px solid greenyellow');
        }
    });
    /* In this block it will check whether the user has selected a date if not it will instruct the user to select a date from the given calender*/
    $("#birthDate").blur(function () {
        if ($("#birthDate").val() === "") {
            console.log($("#birthDate").val())
            $("#errorBirthDate").text("Please select the date of birth");
            $("#errorBirthDate").addClass("errorInput");
            $("#birthDate").css('border', '3px solid red');
        }
        else {
            $("#errorBirthDate").text("Valid birth date");
            $("#errorBirthDate").addClass("correctInput");
            $("#birthDate").css('border', '3px solid greenyellow');
        }
    });
    /*  This block will start to execute if the user cursered the particular input feild 
      didnt fill up the data or the user entered data is invalid then it will be highlighted and make the user to enter a valid data*/
    patternNumber = /[6-9]\d{9}$/;
    $("#phoneNumber").blur(function () {
        if ($("#phoneNumber").val() === "") {
            $("#phoneNumberError").text("Please enter the phone number");
            $("#phoneNumberError").addClass("errorInput");
            $("#phoneNumber").css('border', '3px solid red');
        }
        else if (!patternNumber.test($("#phoneNumber").val())) {
            $("#phoneNumberError").text("enter a valid phone number");
            $("#phoneNumberError").addClass("errorInput");
            $("#phoneNumber").css('border', '3px solid red');
        }
        else {
            $("#phoneNumberError").text("Valid phone number");
            $("#phoneNumberError").addClass("correctInput");
            $("#phoneNumber").css('border', '3px solid greenyellow');
        }
    });

    /*  This block will start to execute if the user cursered the particular input feild
    didnt fill up the email id or the user entered email id is invalid then it will be highlighted and make the user to enter a valid data*/
    const patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    $("#mailId").blur(function () {
        if ($("#mailId").val() === "") {
            $("#emailError").addClass("errorInput");
            $("#emailError").text("Enter the email ID");
            $("#mailId").css('border', '3px solid red');
        }
        else if (!patternEmail.test($("#mailId").val())) {
            $("#emailError").text("Enter the valid email ID");
            $("#emailError").addClass("errorInput");
            $("#mailId").css('border', '3px solid red');
        }
        else {
            $("#emailError").text("mail-Id enterted sucessfully");
            $("#emailError").addClass("correctInput");
            $("#mailId").css('border', '3px solid greenyellow');
        }
    });
    /*  This block will start to execute if the user cursered the particular input feild
    didnt fill up the data or the user entered data is invalid then it will be highlighted and make the user to enter a valid data*/
    $("#address").blur(function () {
        if ($("#address").val() === "") {
            $("#addressError").text("Please enter the address with door number");
            $("#addressError").addClass("errorInput");
            $("#address").css('border', '3px solid red');
        }
        else {
            $("#addressError").text("Valid Name");
            $("#addressError").addClass("correctInput");
            $("#address").css('border', '3px solid greenyellow');
        }
    });
    /*  This block will start to execute if the user cursered the particular input feild
    select the data  from teh given dropdown list and if  the user selected data is invalid then it will be highlighted and make the user to enter a valid data*/
    $("#state").blur(function () {
        var input = $("#state").val();
        console.log(input);
        if ($("#state").val() === "") {
            $("#stateError").text("Please select a state");
            $("#stateError").addClass("errorInput");
            $("#state").css('border', '3px solid red');
        }
        else {
            $("#stateError").text("Valid Name");
            $("#stateError").addClass("correctInput");
            $("#state").css('border', '3px solid greenyellow');
        }
    });
    /*  This block will start to execute if the user cursered the particular input feild
    select the data  from teh given dropdown list and if  the user selected data is invalid then it will be highlighted and make the user to enter a valid data*/  $("#state").blur(function () {
        $("#city").blur(function () {
            if ($("#city").val() === "") {
                $("#cityError").text("Please select a city");
                $("#cityError").addClass("errorInput");
                $("#city").css('border', '3px solid red');
            }
            else {
                $("#cityError").text("Valid Name");
                $("#cityError").addClass("correctInput");
                $("#city").css('border', '3px solid greenyellow');
            }
        });
        /*  This block will start to execute if the user cursered the particular input feild
         and if it is not filled up the data or the user entered data is invalid then it will be highlighted and make the user to enter a valid data*/
        $("#userName").blur(function () {
            if ($("#userName").val() === "") {
                $("#errorUserName").text("Please enter the user name");
                $("#errorUserName").addClass("errorInput");
                $("#userName").css('border', '3px solid red');
            }
            else {
                $("#errorUserName").text("Valid Name");
                $("#errorUserName").addClass("correctInput");
                $("#userName").css('border', '3px solid greenyellow');
            }
        });
        /*This block will get executed if the user cursered it and didn't enter a valid password it will through some  error messages to correcr the user and */
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
        $("#password").blur(function () {
            if ($("#password").val() === "") {
                $("#passKeyError").text("Enter the password");
                $("#passKeyError").addClass("errorInput");
                $("#password").css('border', '3px solid red');
            }
            else if ($("#password").val().length < 7) {
                $("#passKeyError").text("Password should above 8 characters");
                $("#passKeyError").addClass("errorInput");
                $("#password").css('border', '3px solid red');
            }
            else if (!passwordPattern.test($("#password").val())) {
                $("#passKeyError").text("Password is not strong enough");
                $("#passKeyError").addClass("errorInput");
                $("#password").css('border', '3px solid red');
            } else {
                $("#passKeyError").text("Password ok");
                $("#passKeyError").addClass("correctInput");
                $("#password").css('border', '3px solid greenyellow');
            }
        });
        /*This feild is used to check the password and compare the password with the password entered above  */
        $("#conformpassword").blur(function () {
            if ($("#conformpassword").val() === "") {
                $("#passkeyError").text("Enter the password");
                $("#passkeyError").addClass("errorInput");
                $("#conformpassword").css('border', '3px solid red');
            }
            else if ($("#conformpassword").val().length < 7) {
                $("#passkeyError").text("Password should above 8 characters");
                $("#passkeyError").addClass("errorInput");
                $("#conformpassword").css('border', '3px solid red');
            }
            else if ($("#password").val() != $("#conformpassword").val()) {
                $("#passkeyError").text("Password doesn't match");
                $("#passkeyError").addClass("errorInput");
                $("#conformpassword").css('border', '3px solid red');
            }
            else {
                $("#passkeyError").text("Password ok");
                $("#passkeyError").addClass("correctInput");
                $("#conformpassword").css('border', '3px solid greenyellow');
            }
        });
/* It is used to highlight if the user is select any gender and it will through error*/
        $(".signUpButton").click(function () {
            let selectedGender = $(`[type="radio"][name="gender"]:checked`).val();
            if (!selectedGender) {
                $("#genderError").text("Gender should be selected");
                $("#genderError").addClass("errorInput");
            }
            else {
                $("#genderError").text("Gender entered sucessfully");
                $("#genderError").addClass("correctInput")
            }
        });
        $(".signUpButton").click(function (event) {
            let isValid = true;
            event.preventDefault();
            if (
                !$("#firstName").val() ||
                !$("#lastName").val() ||
                !$("#birthDate").val() ||
                !$("#email").val() ||
                !$("#phoneNumber").val() ||
                !$("#address").val() ||
                !$("#state").val() ||
                !$("#city").val() ||
                !$("#UserName").val() ||
                !$("#password").val() ||
                !$("#confirmPassword").val()
            ) {
                isValid = false;
                $("#allInputError").text("Please enter all input feilds");
                $("#allInputError").css({ "color": "red", "font-size": '25px' })
            }
            if (isValid) {
                $("#registerForm").off('submit').submit();
            }
        });

    });
});
