// Assignment Code
//var { generateBtn, userNumber, userlowercase, userUppercase,userCharacter } = finalPassword(); 

// function newFunction() {
  
//   var userNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   var userCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
//   var userlowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//   var userUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//   return { generateBtn, userNumber, userlowercase, userUppercase };
  
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function thePassword(){
  var length = prompt("How many characters would you like? No more than 128, no less than 8.")
  if (length <= 8 || length >= 128) {
    return thePassword;
  } else{
    alert('The password will be ' + length + 'characters!');
  }
    
var count = 0

 var shouldIncludeSpecialCharacters = confirm("Do you want to include special characters?");
   if (shouldIncludeSpecialCharacters=== false) {
     count++;
  //   return questionOptions
  // }else {
  //   alert ("Alrighty!")
  }

var shouldIncludeNumeric = confirm("Do you want to include numeric characters?");
 if (shouldIncludeNumeric=== false) {
  count++;
 }

var shouldIncludeLowercase = confirm("Do you want to include lowercase characters?");
 if (shouldIncludeLowercase=== false) {
   count++;
//   return questionOptions
// } else {
//   alert ("Alrighty!")
 }

var shouldIncludeUppercase = confirm("Do you want to include uppercase characters?");
 if (shouldIncludeUppercase=== false) {
   count++;
//   return questionOptions
// }else {
//   alert ("Alrighty!")
 }
 if (count > 2) {
  alert("Your password must contain at least one special, numeric, lowercase, or uppercase character")
  return(thePassword);
  
 }

//     shouldIncludeLowercase = shouldIncludeLowercase.toUpperCase(); 
//     shouldIncludeUppercase= shouldIncludeUppercase.toUpperCase();
//     shouldIncludeNumeric = shouldIncludeNumeric.toUpperCase();
//     shouldIncludeSpecialCharacters = shouldIncludeSpecialCharacters.toUpperCase(); 


var Pass = {
     shouldIncludeSpecialCharacters,
     shouldIncludeNumeric,
     shouldIncludeLowercase,
     shouldIncludeUppercase, 
    };
    
     

    //  if (shouldIncludeLowercase === "Y" || shouldIncludeUppercase === "Y" || shouldIncludeNumeric === "Y" || shouldIncludeSpecialCharacters === "Y") {
     return Pass;
// }
;
  };
// };


function generatePassword() {

var options = thePassword();
console.log(options)
var userNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var userCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
  var userlowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var userUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // return { generateBtn, userNumber, userlowercase, userUppercase };

var passwordPool = [];
console.log(passwordPool)

 if (options.specialCharacters) {
    for (i = 0; i < userCharacter.length; ++i) {
         passwordPool.push(onlySpecial[i]);
     }
 }; 
 if (options.numeric) {
     for (i = 0; i < userNumber.length; ++i) {
     passwordPool.push(userNumber[i]);
    }
 };
 if (options.lowerCase) {
     for (i = 0; i < userlowercase.length; ++i) {
     passwordPool.push(userlowercase[i]);
    }
 };
 if (options.upperCase) {
    for (i = 0; i < userUppercase.length; ++i) {
    passwordPool.push(userUppercase[i]);
    }
 };

var finalPassword = [];

for (let i = 0; i < options.length; ++i) {
    var randomPicker = Math.floor(Math.random() * Math.floor(passwordPool.length));
     finalPassword.push(passwordPool[randomPicker])
};

  
console.log(finalPassword)
  // var superFinal = finalPassword.join('');
  // //console.log(password)

  // document.getElementById("#password").textContent = superFinal;
  return finalPassword.join("")
};
generateBtn.addEventListener("click", writePassword);
