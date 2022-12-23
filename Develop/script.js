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
  console.log(numberOfChars);
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
  numberCharConfirm()  ;
}

function numberCharConfirm (){
  okayToUseNumbers = confirm("Do you want to use numbers?");    
  lowerCharConfirm();
}

function lowerCharConfirm (){
  okayToUseLowerChars = confirm("Do you want to use lower-case letters?");  
  capitalCharConfirm() ;
}
function capitalCharConfirm (){
  okayToUseCapChars = confirm("Do you want to use capital letters?");    
  areYouReady();
}

function areYouReady (){
  confirm("Are you ready to generate your password?");
  generatePassword();
}

function generatePassword(){
  if (okayToUseLowerChars){
    passwordArray = passwordArray.concat(lowerCharacters);
  } 
  if (okayToUseCapChars) {
    passwordArray = passwordArray.concat(capCharacters);
  }
  if (okayToUseNumbers) {
    passwordArray = passwordArray.concat(numberCharacters);
  }
  if (okayToUseSpecialChars) {
    passwordArray = passwordArray.concat(specialCharacters);
  }
  console.log(passwordArray); 

  for (var x = 0; x<= numberOfChars; x++){
      const y = Math.floor(Math.random() * passwordArray.length -1);
      finalPassword = finalPassword + passwordArray[y];
      console.log(x);
      console.log(y);
      console.log(finalPassword);
}

// if they don't get a password, it should be the URL to Spaceballs 12345.


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

askPasswordLength();
console.log(numberOfChars);
console.log(okayToUseSpecialChars);
console.log(okayToUseNumbers);
console.log(okayToUseLowerChars);
console.log(okayToUseCapChars);

// finalPassword += next character //


function start(){  
  askPasswordLength();
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


// start ();
