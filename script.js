// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var number = [0,1,2,3,4,5,6,7,8,9]
for(var i =0 ; i < number.length; i++){}

// create a generatepassword function that returns the final password and all of my code lives in this 
// create a prompt to ask the length of the password and save it to the VAR
// create a  confirm to ask the user if they want lowercase char
// create a  confirm to ask the user if they want uppercase char
// create a  confirm to ask the user if they want numbers char
// create a  confirm to ask the user if they want special char
// add validations to make sure at least one type of char is selected and alert the user if there are no types being selected
// add validation to the length to make sure it is between 8 and 128 char
// after im done with the prompt i have to create the password 

// create arrays with all needed char (one for lowercase, one for upper, one for numbers and one with special char)
// create a conditional situation that saves the chosen char from our confirms to a new collection
// create a new var that holds all of the chosen char 
// we have to select the specific number of char randomly from our final collection
//       based on the users answer to how long they want the length of their password to be 
        // we will need to use Math.floor(Math.random()) to get the random number 
        // use a for loop that runs as long as the prompt to the length of the answer [for (var i=0; i<"charactor length prompt" ; i++ ){"logic goes here"}]
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// what i need to do
