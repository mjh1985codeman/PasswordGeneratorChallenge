// Assignment code here

// step 1 - Prompt for user to input desired character length of password. 
// step 2 - validate length for acceptacne criteria (min number of 8 characters, max number or characters 129)
// step 3 - Prompt user to select desired character types (upper case letters, lower case letters, numbers -or- special characters).
// step 4 - Validate user selction to make sure they selected at least ONE character type. 
// step 5 - Generate Password according to user's input and validation results.  

// variables. 

function password() {
  window.prompt(" Enter the Number of Characters you would like your password to be. ");
}

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


// function calls

password();