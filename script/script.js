// Assignment Code
var generateBtn = document.querySelector("#generate");
var userNumber =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var userCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var userlowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var userUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var userLength= "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.getElementById("#password").value = password;

}
function resetText(){
  document.getElementById(aria-label).value = "Your password here";
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function writePassword(){
  var userLength = (prompt("How many characters? No less than 8, no more than 128"));
    while(userLength <= 7 || userLength >= 128) {
      alert("Password length must be between 8-128 characters Try again");
  var userLength = (prompt("How many characters would you like your password to contain?"));
      }
      var userCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
      var userlowercase = confirm("Click OK to confirm if you would like to include lowercase characters");
      var userUppercase = confirm("Click OK to confirm if you would like to include uppercase characters");  
      var passwordText = []

    if (userinputSpecial) {
      passwordText = passwordText.concat(userCharacter)
    } 
    if (userNumber) {
      passwordText = passwordText.concat(userinputNumeric)
    }

    if (userlowercase) {
      passwordText = passwordText.concat(userlowercase)
    }

    if (userUppercase) {
      passwordText = passwordText.concat(userUppercase)
    }
  
    var randomPassword = ""
      for (var i = 0; i < userLength; i++) {
        randomPassword = randomPassword + passwordText[Math.floor(Math.random() * passwordText.length)];
      }
      return randomPassword;
}
