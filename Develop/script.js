// Assignment Code
const generateBtn = document.querySelector("#generate");

let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];


function getInfo() {
  let passLength = prompt("How long do you want your password? (enter between 8 and 128)");

  if ((!passLength < 128) && (!passLength > 8)) {
    alert("Enter a valid length")
    return
  }
  let askNumbers = confirm("Do you wish to include numbers?");
  let askLower = confirm("Do you wish to include lower case letters?");
  let askUpper = confirm("Do you wish to include upper case letters?");
  let askSymbol = confirm("Do you wish to include symbols?");

  if ((!askNumbers) && (!askLower) && (!askSymbol) && (!askUpper)) { alert("Please select at least one type.") }

  let answers = {
    length: passLength,
    numbers: askNumbers,
    lower: askLower,
    upper: askUpper,
    symbol: askSymbol
  }
  return answers;
}

function generatePassword() {
  let parameters = getInfo();
  let password = [];

  if (parameters.numbers) {
    for (let i of numbers)
      password.push(i);
  }
  if (parameters.lower) {
    for (let i of lowerCase)
      password.push(i);
  }
  if (parameters.upper) {
    for (let i of upperCase)
      password.push(i);
  }
  if (parameters.symbol) {
    for (let i of special)
      password.push(i);
  }
  console.log(password)
  let randomPassword = ""
  for (let i = 0; i < parameters.length; i++) {
    randomPassword += password[Math.floor(Math.random() * password.length)];
  }
  console.log(randomPassword)
  return randomPassword
}
// Write password to the #password input
function writePassword() {
  let randomPassword = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = randomPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);