// JavaScript source code

// by using the oncilck event to change the text inside the text of the paragraph tag
function textChange() {
    // By clicking the button the text inside the paragraph and baground color of the division get changed
    document.getElementById("paragraph").textContent = "Hello World";
    document.getElementsByClassName("main-division")[0].style.backgroundColor = "darkorchid";
    
    
}
// simple calculator application used to perform basic arithmatic calculation
function Calculation()
{
    //
    var num1 = parseInt(document.getElementById("number_one").value);
    var num2 = parseInt( document.getElementById("number_two").value);
    var symbol =  document.getElementById("Arithmatic_Symbols").value;

    if (num1 || num2 == NaN) {
        document.getElementById("result").value =" enter a valid number ";
    }
    if (symbol == "Add") {
        document.getElementById("result").value =   num1 + num2 ;
    } if (symbol == "Subtract") {
        document.getElementById("result").value =   num1 - num2;
    } if (symbol == "Multiply") {
        document.getElementById("result").value =   num1 * num2;
    } if (symbol == "Division") {
        if (num2 == 0) {
         document.getElementById("result").value = "infinity";
        }
        else {
         document.getElementById("result").value = num1 / num2;
}
        
    }

}
// this finction is used to check whether the given number is odd or even 
function Odd_Even_Check(){
     var input = parseInt(document.getElementById("input_number").value);
    if (input % 2 == 0) {
        document.getElementById("result_Paragraph").value = input + " is Even";
        document.getElementById("result_Paragraph").style.color = "chocolate";
    }
    else {
        document.getElementById("result_Paragraph").value = input + " is Odd";
        document.getElementById("result_Paragraph").style.color = "chocolate";
    }

}
function temperature_conversion() {
    var celsius = parseFloat(document.getElementById("in_Celsius").value);
    var farenheit = celsius * (9/5) + 32;
    document.getElementById("in_Farenheit").value = farenheit;
    document.getElementById("in_Farenheit").style.color = "gold";
}
function start_loop() {
    
    var count = parseInt(document.getElementById("loop_count").value);
    document.getElementById("loop_count").value = "";
    let loop = "";
    for (let i = 1; i <= count; i++)
    {
        loop += i +" ";
    }
    document.getElementById("loop_holder").textContent = loop;
    
}

