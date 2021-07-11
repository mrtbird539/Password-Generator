// Assignment Code
var generateBtn = document.querySelector("#generate");

function getLowerCase () {
  return String.fromCharCode.Math.floor((Math.random() * 26)+ 97);
}

function getUpperCase() {
  return String.fromCharCode.Math.floor((Math.random() * 26) + 65);
}

function getNumber() {
  return String.fromCharCode.Math.floor((Math.random() * 10) + 48);
}

function getSymbol() {
  let symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    return randomSymbol;
}

function getInfo() {
  let passLength = prompt("How long do you want your password? (enter between 8 and 128)");
  
  if ((passLength < 128) && (passLength > 8)) {
  let askNumbers = confirm("Do you wish to include numbers?");
  let askLower = confirm("Do you wish to include lower case letters?");
  let askUpper = confirm("Do you wish to include upper case letters?");
  let askSymbol = confirm("Do you wish to include symbols?");
  }
  else{
    alert("Enter a valid length")
  }

  if ((!askNumbers) && (!askLower) && (!askSymbol) && (!askUpper)) {alert("Please select at least one type.")}

  let answers = {
  length: passLength,
  numbers: askNumbers,
  lower: askLower,
  upper: askUpper,
  symbol: askSymbol
  }
  return answers;
}

generatePassword(answers);


getInfo()
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);