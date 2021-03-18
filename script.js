// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = prompt("Well hello there! Would you like me to create you a secure password?");
var length = Number(prompt("How many characters would you like your password to be?"));
// Password can be no fewer than 8 and no greater than 128 characters
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("I'm sorry but your password has to be between 8 and 128 characters long. Please select a number you would like!"));

//Prompts boxes to confirm what to put in the password
var uppers = confirm("Would you like to use uppercase letters?");
var lowers = confirm("Would you like to use lowercase letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");

while (!uppers && !lowers && !numbers && !symbols) {
    //prompt if user does not select at least one variable for password
  alert("Please select at least one character type for your password!");
  uppers = confirm("Would you like to use uppercase letters?");
  lowers = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use special characters?");
}

window.addEventListener('load', function() {
    generateNewPassword();
  });

function generateNewPassword() {
    var password = "";
  
    var allowed = {};
    if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
    if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
    if (numbers) password += rando(allowed.numbers = "1234567890");
    if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");
  
    for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);
  
    document.getElementById("password").value = randoSequence(password).join("");
  }





  


