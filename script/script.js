// Assignment Code
var generateBtn = document.querySelector("#generate");
var userNumber =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var userCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var userlowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var userUppercase = []; 
var userLength= "";
var answers;
var toUpper = function (x) {
  return x.toUpperCase();
  //usure about this part will test and adjsut later
  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var userLength = (prompt("How many characters? No less than 8, no more than 128"));
  while(confirmLength <= 8 || confirmLength >= 128) {
    alert("Password length must be between 8-128 characters Try again");
  var userLength = (prompt("How many characters would you like your password to contain?"));
      } 
};
//not sure of placement debugging needed
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function writePassword(){
  
}
