/*This function is used to check whether the username is entered or not . By using onfocusout event and 
 retrieve the data  using the document by using the id and by using the regex to conform the pattern of the username */
function checkFirstName() {
    const first_name = document.getElementById("first-Name").value.trim(); 
    const first_name_error = document.getElementById("firstName_error");
    const firstname_pattern = /^[A-Za-z]+$/;
    if (!first_name) {
        first_name_error.innerHTML = "Name is required";
        first_name_error.style.color = "orange";
    }
    else if (!firstname_pattern.test(first_name)) {
        first_name_error.textContent = "Name should contain only alphabets";
        first_name_error.style.color = "orange";
    }
    else {
        first_name_error.textContent = "FirstName";
        first_name_error.style.color = "green";
    }
}
// This function is used to check whether the user's last name is entered or not . By using onfocusout event and
// retrieve the data  using the document by using the id and by using the regex to conform the pattern of the lastname
function checkLastName()
{
    const last_name = document.getElementById("last_Name").value.trim();
    const last_Name = document.getElementById("last_name");
    const last_Name_pattern = /^[A-Za-z]+$/;
    if (!last_name) {
        last_Name.innerHTML = " Last name is required";
        last_Name.style.color = "orange";
    }
    else if (!last_Name_pattern.test(last_name)) {
        last_Name.textContent = "Name should contain only alphabets";
        last_Name.style.color = "orange";
    }
    else {
        last_Name.textContent = "Lastname";
        last_Name.style.color = "green";
    } 
}
/* This function is used to check whether the email id is entered or not .By using onfocusout event and
 retrieve the data  using the document by using the id and by using the regex to conform the pattern of the email id to be printed*/
function checkEmail() {
    const email_id = document.getElementById("email").value.trim();
    const email_error = document.getElementById("label_email");
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email_id) {
        email_error.innerHTML = " Please enter a mail id";
        email_error.style.color = "orange";
    }
    else if (!email_pattern.test(email_id)) {
        email_error.textContent = "Enter a valid email id";
        email_error.style.color = "orange";
    }
    else {
        email_error.textContent = "Email_id done";
        email_error.style.color = "green";
    }
}
/* This function is used to check whether the phonenumber is entered or not . By using onfocusout event and
 retrieve the data  using the document by using the id and by using the regex
 to conform the pattern of the phone number and length of the phonenumber and css styles to change the text and color.*/
function checkPhoneNumber() {
    const phone_number = document.getElementById("mobileNumber").value.trim();
    const pattern_number = /[6-9]\d{9}$/;
    if (!phone_number) {
        document.getElementById("error_message").textContent = "Phone number must be filled";
        document.getElementById("error_message").style.color = "orange";
        
    }
    else if (phone_number.length != 10) {
        document.getElementById("error_message").textContent = "Phone number must contain 10 digits";
        document.getElementById("error_message").style.color = "orange";
    }
    else if (!pattern_number.test(phone_number)) {
        document.getElementById("error_message").textContent = "Enter a valid phone number";
        document.getElementById("error_message").style.color = "orange";
    }
    else {
        document.getElementById("error_message").textContent = " ";
        
    }
  }
/* This function is used to check whether the company name is entered or not .By using onfocusout event and
 retrieve the data  using the document by using the id and using the css styles to change the color and text.*/
function checkCompanyName() {
    const company_name = document.getElementById("companyName").value.trim();
    if (!company_name) {
        document.getElementById("company_error").innerHTML = "Company name is required";
        document.getElementById("company_error").style.color = "orange";
    }
   else {
        document.getElementById("company_error").innerHTML = "companyname done";
        document.getElementById("company_error").style.color = "green ";
    }
}
/* This function is used to check whether the address is entered or not. By using onfocusout event and
 retrieve the data  using the document by using the id and by change the text by styles and innerText.*/
function checkAddress() {
    const address = document.getElementById("userAddress").value.trim();
    if (!address) {
        document.getElementById("address_error").innerHTML = "Address is mandatory";
        document.getElementById("address_error").style.color = "orange";
    }
    else {
        document.getElementById("address_error").innerHTML = "Street/address";
        document.getElementById("address_error").style.color = "green";

    }
}
/* This function is used to check whether the city name of the username is entered or not by using onfocusout event and
 retrieve the data  using the document by using the id and by using innerhtml and color for highlighting the error message.*/
function checkCityName() {
    const city = document.getElementById("cityName").value.trim();
    if (!city) {
        document.getElementById("error_city").innerHTML = "Enter the city Name ";
        document.getElementById("error_city").style.color = "orange";
    }
    else {
        document.getElementById("error_city").innerHTML = "City";
        document.getElementById("error_city").style.color = "green";
    }
}
/* This function is used to check whether the user state  is entered or not . By using onfocusout event and
 retrieve the data  using the document by using the id and by using the innerhtml and color to highlight the error messages.*/
function checkStateName() {
    const state = document.getElementById("state_province").value.trim();
    if (!state) {
        document.getElementById("label-state").innerHTML = "City must be entered";
        document.getElementById("label-state").style.color = "orange";
    }
    else {
        document.getElementById("label-state").innerHTML = "City done";
        document.getElementById("label-state").style.color = "green";
    }
}
/* This function is used to check whether the postal code  is entered or not . By using onfocusout event and
 retrieve the data  using the document by using the id and by using the innerhtml and color to highlight the error messages.*/
function checkZipCode() {
    const postal_code = document.getElementById("postalCode").value.trim();
    
    if (!postal_code) {
        document.getElementById("zipCode_error").innerHTML = "Zipcode must be filled ";
        document.getElementById("zipCode_error").style.color = "orange";
    }
    else if (postal_code.length != 6) {
        document.getElementById("zipCode_error").innerHTML = "Enter a valid zip code ";
        document.getElementById("zipCode_error").style.color = "orange";
    }
    else {
        document.getElementById("zipCode_error").innerHTML = " Zip code done ";
        document.getElementById("zipCode_error").style.color = "green";
    }
}
/* This function is used to check whether the user country name is entered or not . By using onfocusout event and
 retrieve the data  using the document by using the id and by using the innerhtml and color to highlight the error messages.*/
function checkCountryName() {
    const country = document.getElementById("country").value.trim();
    if (!country) {
        document.getElementById("label-country").innerHTML = "Enter the country name ";
        document.getElementById("label-country").style.color = "orange";
    }
    else {
        document.getElementById("label-country").innerHTML = "Country entered ";
        document.getElementById("label-country").style.color = "green";
    }
}
/* This function is used to check whether the quantity of is entered or not . By using onfocusout event and
 retrieve the data  using the document by using the id and by using the innerhtml and color to highlight the error messages. */
function checkQuantity() {
    const quantity = document.getElementById("quantity_input").value.trim();
    if (!quantity) {
        document.getElementById("error_quantity").innerHTML = " Enter the quantity";
        document.getElementById("error_quantity").style.color = " orange ";
    }
    else {
        document.getElementById("error_quantity").innerHTML = " Quantity entered";
        document.getElementById("error_quantity").style.color = " green ";
    }
}
/* This function is used to check whether the count is entered or not . By using onfocusout event and
 retrieve the data  using the document by using the id and by using the innerhtml and color to highlight the error messages.*/
function checkCount() {
    const total = document.getElementById("total-Count").value.trim();
    if (!total) {
        document.getElementById("count_error").innerHTML = " Total count missing";
        document.getElementById("count_error").style.color = " orange ";
    }
    else {
        document.getElementById("count_error").innerHTML = " Total count entered";
        document.getElementById("count_error").style.color = " green ";
    }
}
/* This function is used to check whether the user
 select  any of the given option and if user doesn't select any option it will not let the form to submit and in here i used to group
 the inputs in the form of loop and retriving them and used the checked function */
function validateHeardAbout() {
    let check = false;
    const info = document.querySelectorAll('input[name="info"]');
    for (let infos of info) {
        if (infos.checked) {
            check = true;
        }
    }
    if (!check) {
        document.getElementById("info_Error").innerHTML = "please select any value";
        document.getElementById("info_Error").style.color = "orange";
    }
    return check; 
}
// This function is used to stop the form to get submitted if the user didn't select input feilds
document.getElementById('formSubmit').addEventListener('click', stopSubmit)
function stopSubmit(event) {
    event.preventDefault();
    if (validateHeardAbout()) {
        alert("sucess");
    }
   
}