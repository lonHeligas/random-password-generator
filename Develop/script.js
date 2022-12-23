// Assignment Code  

// this project is about breaking things down into small parts

var generateBtn = document.querySelector("#generate");
// this makes the variable below accessile throughout the code
var numberOfChars;
var okayToUseNumbers;
var okayToUseSpecialChars;
var okayToUseCapChars;
var finalPassword = "";
var lowerCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','+','-','='];
var numberCharacters = ['0','1','2','3','4','5','6','7','8','9']




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
  if (numberOfChars > 30){
    numberOfChars = parseInt(prompt("That's crazy. Try 30 characters or less"));    
  } // limit the number of characters with an if statement. And convert it to a number. parse.Int
  // click confirm stuff
  
}

function specialCharConfirm (){
  okayToUseSpecialChars = parseInt(prompt("Do you want to use special characters?"));  
}
function numberCharConfirm (){
  okayToUseNumbers = parseInt(prompt("Do you want to use numbers?"));  
  
}
function capitalCharConfirm (){
  okayToUseCapChars = parseInt(prompt("Do you want to use capital letters?"));  
  
}



function checkLength(){
  if numberOfChars > 30
}

// okayToUseSpecialChars = confirm("Do you want to use special characters?")  
// okayToUseNumbers = confirm("Do you want to use numbers?")
// okayToUseCapChars = confirm("Do you want to use capital characters?")









// use a loop to grab a random character X times

askQuestions();8
console.log(numberOfChars);
console.log(okayToUseSpecialChars);
console.log(okayToUseNumbers);
console.log(okayToUseCapChars);

// finalPassword += next character //


function start(){  
  askPasswordLength();
}

function generatePassword(){

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
