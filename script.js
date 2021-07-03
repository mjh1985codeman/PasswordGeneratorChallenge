// Assignment code here

// step 1 - Prompt for user to input desired character length of password. 
// step 2 - validate length for acceptacne criteria (min number of 8 characters, max number or characters 129)
// step 3 - Prompt user to select desired character types (upper case letters, lower case letters, numbers -or- special characters).
// step 4 - Generate Password according to user's input and validation results.  

// variables. 
const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const special = ['!','@','#','$','%','^','&','*','+'];

// Functions to get user input

function userInputLength() {
  let passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
    if (passwordLength < 8 || passwordLength > 128 || passwordLength === NaN) {
      alert("Your password must be between 8 and 128 characters!");
      userInputLength();
    } else { 
      console.log(passwordLength);
  }
};

function lowerCaseConfirm() {
  let lowerCaseChoice = (confirm("Would you like your password to contain Lowercase Letters?"));
  console.log(lowerCaseChoice);
  if (lowerCaseChoice === true) {
    // I'm not sure what to put here? But I am assuming I need to capture this response and move it into an array that can be concatinated?//
  } else { 
    break;
  }
};

function upperCaseConfirm() {
  let upperCaseChoice = (confirm("Would you like your password to contain Uppercase Letters?"));
  console.log(upperCaseChoice);
  if (upperCaseChoice === true) {
    // I'm not sure what to put here? //
  } 

};

function numbersConfirm() {
  let numbersChoice = (confirm("Would you like your password to contain Numbers?"));
  console.log(numbersChoice);
  if (numbersChoice === true) {
  
  }
};


function specialConfirm() {
  let specialChoice = (confirm("Would you like your password to contain Special Characters?"));
  console.log(specialChoice);
  if (specialChoice === true) {
  }
};

var inputArray = []
// function calls

userInputLength();

lowerCaseConfirm();

upperCaseConfirm();

numbersConfirm();

specialConfirm();

// ****** Starter Code ****** //

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);