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
  
};
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function writePassword(){
  var userLength = (prompt("How many characters? No less than 8, no more than 128"));
    while(userLength <= 8 || userLength >= 128) {
      alert("Password length must be between 8-128 characters Try again");
  var userLength = (prompt("How many characters would you like your password to contain?"));
      }
      var userCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
      var userlowercase = confirm("Click OK to confirm if you would like to include lowercase characters");
      var userUppercase = confirm("Click OK to confirm if you would like to include uppercase characters");  
      var passwordCharacters = []

    if (userCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    } if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }

    if (userlowercase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (userUppercase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }
  
      for (var i = 0; i < userLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}
