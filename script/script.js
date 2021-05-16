// Assignment Code
var { generateBtn, userNumber, userlowercase, userUppercase } = passvalue(); 

function newFunction() {
  var generateBtn = document.querySelector("#generate");
  var userNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var userCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
  var userlowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var userUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  return { generateBtn, userNumber, userlowercase, userUppercase };
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function writePassword(){
  var length = parseInt(prompt("How many characters would you like? No more than 128, no less than 8."))
  if (length < 8) {
    alert('The password must be at least 8 characters!');
    return;
}
if (length > 128) {
    alert('The password must be less than 128 characters!');
    return;
}

var shouldIncludeSpecialCharacters = confirm("Do you want to include special characters?");

var shouldIncludeNumeric = confirm("Do you want to include numeric characters?");

var shouldIncludeLowercase = confirm("Do you want to include lowercase characters?");

var shouldIncludeUppercase = confirm("Do you want to include uppercase characters?");

if (!shouldIncludeLowercase && !shouldIncludeUppercase && !shouldIncludeNumeric && !shouldIncludeSpecialCharacters) {
    alert("Your password must contain at least one special, numeric, lowercase, or uppercase character");
    return;
}

var questionOptions = {
    length: length,
    specialCharacters: shouldIncludeSpecialCharacters,
    numeric: shouldIncludeNumeric,
    lowerCase: shouldIncludeLowercase,
    upperCase: shouldIncludeUppercase
}

return questionOptions;

}

function generatePassword() {

var options = generateOptions();
console.log(options)

var passwordPool = [];
console.log(passwordPool)

if (options.specialCharacters) {
    for (i = 0; i < onlySpecial.length; ++i) {
        passwordPool.push(onlySpecial[i]);
    }
} 
if (options.numeric) {
    for (i = 0; i < userNumber.length; ++i) {
    passwordPool.push(userNumber[i]);
    }
}
if (options.lowerCase) {
    for (i = 0; i < userlowercase.length; ++i) {
    passwordPool.push(userlowercase[i]);
    }
}
if (options.upperCase) {
    for (i = 0; i < userUppercase.length; ++i) {
    passwordPool.push(userUppercase[i]);
    }
}

var finalPassword = [];

for (let i = 0; i < options.length; ++i) {
    var randomPicker = Math.floor(Math.random() * Math.floor(passwordPool.length));
     finalPassword.push(passwordPool[randomPicker])
  }
  console.log(finalPassword)

  var superFinal = finalPassword.join('');
  console.log(password)

  document.getElementById("password").textContent = superFinal;
}


