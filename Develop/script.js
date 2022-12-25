// Assignment Code  

// this project is about breaking things down into small parts

var generateBtn = document.querySelector("#generate");
// this makes the variable below accessile throughout the code
var numberOfChars;
var okayToUseLowerChars;
var okayToUseNumbers;
var okayToUseSpecialChars;
var okayToUseCapChars;
var finalPassword = "";
var lowerCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var capCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharacters = [ '#', '$', '%', '&', '\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~',];
var numberCharacters = ['0','1','2','3','4','5','6','7','8','9'];
var passwordArray = [];

// i see you in my code, deleting my codez

// HAX0RZ
// LEET


// use global variables to list out all possible and store them in an array
// special characters
// lower case letters
// upper case letters
// numbers

// this is your function. your work starts here 
// hints are as follows



function askPasswordLength(){
    //alert box/prompt
  numberOfChars = parseInt(prompt("How many characters do you want your password to be?"));  
  console.log("number of characters:" + numberOfChars);
  checkLength();
}

function checkLength(){

  if (numberOfChars >=8 && numberOfChars <= 128){
    specialCharConfirm();    
  } else {
    numberOfChars = parseInt(prompt("That's crazy. 8-128 charcters only, please."));
    checkLength()
  }
}

function specialCharConfirm (){
  okayToUseSpecialChars = confirm("Do you want to use special characters?");  
  console.log("special characters? " + okayToUseSpecialChars);
  numberCharConfirm()

}

function numberCharConfirm (){
  okayToUseNumbers = confirm("Do you want to use numbers?");    
  console.log("numbers? " + okayToUseNumbers)
  lowerCharConfirm();
}

function lowerCharConfirm (){
  okayToUseLowerChars = confirm("Do you want to use lower-case letters?");  
  console.log("lower case? " + okayToUseLowerChars)
  capitalCharConfirm() ;
}
function capitalCharConfirm (){
  okayToUseCapChars = confirm("Do you want to use upper-case letters?");    
  console.log("upper case? " + okayToUseCapChars)
  areYouReady();
}

function areYouReady (){
  confirm("Are you ready to generate your password?");
  generatePassword();
}

function generatePassword(){
  passwordArray = []; // shouldn't this be an empty array and not a new string? [Oh derp]
  // that changes concat from a array.concat() to a string.concat() which probably behaves all goofy.   [gotcha]
  // [ahhhh. oka
  // passwordArray = []   try that instead.
  
  if (okayToUseLowerChars){
    console.log("okay for lower case:" + okayToUseLowerChars);
    passwordArray = passwordArray.concat(lowerCharacters);
  } 
  if (okayToUseCapChars) {
    console.log("okay for upper case:" + okayToUseCapChars);
    passwordArray = passwordArray.concat(capCharacters);
  }
  if (okayToUseNumbers) {
    console.log("okay for number case:" + okayToUseNumbers);
    passwordArray = passwordArray.concat(numberCharacters);
  }
  if (okayToUseSpecialChars) {
    console.log("okay for special case:" + okayToUseSpecialChars);
    passwordArray = passwordArray.concat(specialCharacters);
  }
  console.log(passwordArray); 
  finalPassword = "";
  for (var x = 0; x<= numberOfChars; x++){
      const y = Math.floor(Math.random() * (passwordArray.length -1));
      finalPassword = finalPassword + passwordArray[y];
      // console.log(x);
      // console.log(y);
      // console.log(finalPassword);
  }
  writePassword();
}

// before I start the loop, glue all the arrays together as one master list of charcters
// based on which ones are approved

// or
// choose one of the availble random sets
// choose a random character from the set

// click confirm stuff
// okayToUseSpecialChars = confirm("Do you want to use special characters?")  
// okayToUseNumbers = confirm("Do you want to use numbers?")
// okayToUseCapChars = confirm("Do you want to use capital characters?")

// use a loop to grab a random character X times

// console.log(numberOfChars);
// console.log(okayToUseSpecialChars);
// console.log(okayToUseNumbers);
// console.log(okayToUseLowerChars);
// console.log(okayToUseCapChars);

// finalPassword += next character //

function start(){  
  clickTheButton();
}

// Write password to the #password input
function writePassword() {    
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;
  okayToUseLowerChars = false;
  okayToUseCapChars = false;
  okayToUseNumbers = false;
  okayToUseSpecialChars = false;
}

function clickTheButton (){
  // Add event listener to generate button
  generateBtn.addEventListener("click", askPasswordLength);
}

start();

/* merging arrays */

// var arr1 = ["hello", "world"];
// var arr2 = ["bob", "harry"];
// var mergedArr = [...arr1, ...arr2];


// start ();