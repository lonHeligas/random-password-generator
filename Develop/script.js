// Assignment Code  

// this project is about breaking things down into small parts

var generateBtn = document.querySelector("#generate");
// this makes the variable below accessile throughout the code
var numberOfChars;
var okayToUseNumbers;
var okayToUseNumbers;
var okayToUseCapChars;
var finalPassword = "";

// use global variables to list out all possible and store them in an array
// special characters
// lower case letters
// upper case letters
// numbers

// this is your function. your work starts here 
// hints are as follows
function askQuestions(){
  //alert box/prompt
  var numberOfChars = parseInt(prompt("How many characters do you want your password to be?"));
  // limit the number of characters with an if statement. And convert it to a number. parse.Int
  // click confirm stuff
  var okayToUseSpecialChars = confirm("Do you want to use special characters?")
  var okayToUseNumbers = confirm("Do you want to use numbers?")
  var okayToUseCapChars = confirm("Do you want to use capital characters?")
}

// use a loop to grab a random character X times



// finalPassword += next character //


function generatePassword(){
  askQuestions();
  // this is the part that controls the actual generation of the password

  

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




/* merging arrays */

// var arr1 = ["hello", "world"];
// var arr2 = ["bob", "harry"];
// var mergedArr = [...arr1, ...arr2];

