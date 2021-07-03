// Assignment code here

// step 1 - Prompt for user to input desired character length of password. 
// step 2 - validate length for acceptacne criteria (min number of 8 characters, max number or characters 129)
// step 3 - Prompt user to select desired character types (upper case letters, lower case letters, numbers -or- special characters).
// step 4 - Generate Password according to user's input and validation results.  

// variables. 
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const special = "!@#$%^&*+"

var userChoices = ""
var randomPassword = ""
let passwordLength = 0

// Functions to get user input

function userInputLength() {
  passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Your password must be between 8 and 128 characters!");
      userInputLength();
    } else { 
      console.log(passwordLength);
  }
  charTypeConfirm();
};

function charTypeConfirm() {
  let lowerCaseChoice = (confirm("Would you like your password to contain Lowercase Letters?"));
  let upperCaseChoice = (confirm("Would you like your password to contain Uppercase Letters?"));
  let numbersChoice = (confirm("Would you like your password to contain Numbers?"));
  let specialChoice = (confirm("Would you like your password to contain Special Characters?"));
    
  if (lowerCaseChoice === !true && upperCaseChoice === !true && numbersChoice === !true && specialChoice === !true) { 
      userChoices = alert("You must confirm at least one character type!")
      charTypeConfirm();
    }
      console.log(userChoices);
    if (lowerCaseChoice) {
      userChoices += lowerCase
    }

    if (upperCaseChoice) {
      userChoices += upperCase
    }

    if (numbersChoice) {
      userChoices += numbers
    }

    if (specialChoice) {
      userChoices += special
    }
    console.log(userChoices);
  }; 
  

// Generate Password by for Looping through the userChoices String. 
function generatePassword() {
  for (var i = 0; i < passwordLength; i++) {
    var pwGen = userChoices[Math.floor(Math.random() * userChoices.length)]
    randomPassword += pwGen;
  }
    
  window.alert("Your password is " + randomPassword + ". ");
};


// function calls

userInputLength();

generatePassword();

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