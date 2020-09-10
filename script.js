// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// create a generatepassword function that returns the final password and all of my code lives in this 
// create a prompt to ask the length of the password and save it to the VAR
// create a  confirm to ask the user if they want lowercase char
// create a  confirm to ask the user if they want uppercase char
// create a  confirm to ask the user if they want numbers char
// create a  confirm to ask the user if they want special char
// returns the final password 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// what i need to do
