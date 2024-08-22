// JavaScript source code

$(document).ready(function () {
    var patternName = /^[A-Za-z]+$/;
    $("#firstName").blur(function () {
        if ($("#firstName").val() === "") {
            $("#errorFirstName").text("Please enter the first name");
            $("#errorFirstName").addClass("errorInput");
        }
        else if (!patternName.test($("#firstName").val())) {
            $("#errorFirstName").text("Name should not contain a number");
            $("#errorFirstName").addClass("errorInput");
        }
        else {
            $("#errorFirstName").text("Valid Name");
            $("#errorFirstName").addClass("correctInput");
        }
    });
    $("#lastName").blur(function () {
        if ($("#lastName").val() === "") {
            $("#errorLastName").text("Please enter the first name");
            $("#errorLastName").addClass("errorInput");
        }
        else if (!patternName.test($("#lastName").val())) {
            $("#errorLastName").text("Name should not contain a number");
            $("#errorLastName").addClass("errorInput");
        }
        else {
            $("#errorLastName").text("Valid Name");
            $("#errorLastName").addClass("correctInput");
        }
    });
    $("#birthDate").blur(function () {
        console.log($("#birthDate").val())
       
        if ($("#birthDate").val() === "") {
            console.log($("#birthDate").val())
            $("#errorBirthDate").text("Please select the date of birth");
            $("#errorBirthDate").addClass("errorInput");
        }
        else {
            $("#errorBirthDate").text("Valid birth date");
            $("#errorBirthDate").addClass("correctInput");
        }
    });

    $("#phoneNumber").blur(function () {
        if ($("#phoneNumber").val() === "") {
            $("#phoneNumberError").text("Please enter the phone number");
            $("#phoneNumberError").addClass("errorInput");
        }
        else if (!patternNumber.test($("#phoneNumber").val())) {
            $("#phoneNumberError").text("enter a valid phone number");
            $("#phoneNumberError").addClass("errorInput");
        }
        else {
            $("#phoneNumberError").text("Valid phone number");
            $("#phoneNumberError").addClass("correctInput");
        }
    });

    const patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    $("#mailId").blur(function () {
        if ($("#mailId").val() === "") {
            $("#emailError").addClass("errorInput");
            $("#emailError").text("Enter the email ID");
        }
        else if (!patternEmail.test($("#mailId").val())) {
            $("#emailError").addClass("errorInput");
            $("#emailError").text("Enter the valid email ID");

        }
        else {
            $("#emailError").text("mail-Id enterted sucessfully");
            $("#emailError").addClass("correctInput");
        }
    });
    $("#address").blur(function () {
        if ($("#address").val() === "") {
            $("#addressError").text("Please enter the address with door number");
            $("#addressError").addClass("errorInput");
        }
        else {
            $("#addressError").text("Valid Name");
            $("#addressError").addClass("correctInput");
        }
    });
    
    $("#state").blur(function () {
        var input = $("#state").val();
        console.log(input);
        if ($("#state").val() === "") {
            $("#stateError").text("Please select a state");
            $("#stateError").addClass("errorInput");
        }
        else {
            $("#stateError").text("Valid Name");
            $("#stateError").addClass("correctInput");
        }
    });
    $("#city").blur(function () {
        if ($("#city").val() === "") {
            $("#cityError").text("Please select a city");
            $("#cityError").addClass("errorInput");
        }
        else {
            $("#cityError").text("Valid Name");
            $("#cityError").addClass("correctInput");
        }
    });

    $("#userName").blur(function () {
        if ($("#userName").val() === "") {
            $("#errorUserName").text("Please enter the first name");
            $("#errorUserName").addClass("errorInput");
        }
        else if (!patternName.test($("#firstName").val())) {
            $("#errorUserName").text("Name should not contain a number");
            $("#errorUserName").addClass("errorInput");
        }
        else {
            $("#errorUserName").text("Valid Name");
            $("#errorUserName").addClass("correctInput");
        }
    });
    $("#password").blur(function () {
        if ($("#password").val() === "") {
            $("#passKeyError").text("Enter the password");
            $("#passKeyError").addClass("errorInput");
        }
        else if ($("#password").val().length < 7) {
            $("#passKeyError").text("Password should above 8 characters");
            $("#passKeyError").addClass("errorInput");
        } else {
            $("#passKeyError").text("Password ok");
            $("#passKeyError").addClass("correctInput");
        }
    });
    $("#conformpassword").blur(function () {
        if ($("#conformpassword").val() === "") {
            $("#passkeyError").text("Enter the password");
            $("#passkeyError").addClass("errorInput");
        }
        else if ($("#conformpassword").val().length < 7) {
            $("#passkeyError").text("Password should above 8 characters");
            $("#passkeyError").addClass("errorInput");
        }
        else if ($("#password").val() == $("#conformpassword").val()) {
            $("#passkeyError").text("Password doesn't match");
            $("#passkeyError").addClass("errorInput");
        }
        else {
            $("#passkeyError").text("Password ok");
            $("#passkeyError").addClass("correctInput");
        }
    });

   
});

