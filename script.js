// Assignment code here  

// variables. 
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const special = "!@#$%^&*+"

// call variables to be used for functions.
var userChoices = ""
var randomPassword = ""
let passwordLength = 0

// Functions to get user input to get values for passwordLength and userChoices.

function userInputLength() {
  //parseInt to convert passwordLength from string to a number. 
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

    generatePassword();
  }; 
  

// Generate Password by for Looping through the userChoices String. 
function generatePassword() {
  for (var i = 0; i < passwordLength; i++) {
    var pwGen = userChoices[Math.floor(Math.random() * userChoices.length)]
    randomPassword += pwGen;
  }
    
  window.alert("Your password is " + randomPassword + "");
};


// function calls
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", userInputLength);

//userInputLength();

//generatePassword();

// ****** Starter Code ****** //

/*

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", userInputLength, charTypeConfirm, generatePassword);

*/