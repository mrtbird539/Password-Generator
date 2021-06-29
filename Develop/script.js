// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function getLowerCase () {
  return String.fromCharCode.(Math.floor(Math.random() * 26)+ 97);
}

function getUpperCase() {
  return String.fromCharCode.(Math.floor(Math.random() * 26) + 65);
}