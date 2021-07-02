// Assignment code here

// step 1 - Prompt for user to input desired character length of password. 
// step 2 - validate length for acceptacne criteria (min number of 8 characters, max number or characters 129)
// step 3 - Prompt user to select desired character types (upper case letters, lower case letters, numbers -or- special characters).
// step 4 - Validate user selction to make sure they selected at least ONE character type. 
// step 5 - Generate Password according to user's input and validation results.  

// variables. 

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var special = ['!','@','#','$','%','^','&','*','+'];

function userInput() {
  var passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
    if (passwordLength < 8 || passwordLength > 128 || passwordLength === NaN) {
      alert("Your password must be between 8 and 128 characters!");
      return;
    }
};




// function calls
userInput();

// ****** Starter Code ****** //

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);