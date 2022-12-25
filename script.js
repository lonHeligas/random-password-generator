var generateBtn = document.querySelector("#generate");

// global variables are below
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


function askPasswordLength(){
    //alert box/prompt
  numberOfChars = parseInt(prompt("How many characters do you want your password to be?"));  
  console.log("number of characters:" + numberOfChars);
  checkLength();
}

function checkLength(){
  // checks the length of the passowrd to ensure it's between 8 and 128 characters
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
    passwordCheck();
}

function passwordCheck (){
  if (!okayToUseCapChars && !okayToUseNumbers && !okayToUseSpecialChars && !okayToUseLowerChars) {
    confirm("You didn't select any character paramaters. Your password should be 1 2 3 4 5, but I'll just have you do the whole thing again.")
    askPasswordLength();
  } else {
    areYouReady();
  }

}

function areYouReady (){
  confirm("Are you ready to generate your password?");
  generatePassword();
}

function generatePassword(){
  // generates the password from the answers given by the user
  // clears out the array in case the user has already generated a password
  passwordArray = [];   
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



// console.log(numberOfChars);
// console.log(okayToUseSpecialChars);
// console.log(okayToUseNumbers);
// console.log(okayToUseLowerChars);
// console.log(okayToUseCapChars);



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

