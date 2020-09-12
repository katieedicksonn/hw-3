
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);}
       
         
var useSpecial = confirm("do you want special characters?");
var useNumbers = confirm("do you want numbers in password?");
var useLower = confirm("do you want lower case letters?");
var useUpper = confirm("do you want upper case letters in password?");
    


// TODO: After I'm done with the prompts I have to Create the password
var password = "";
var Selection = "";
function NewPassword() {
    for (var i=0; i= length; i++) {
        password = password + Selection.charAt(Math.floor(Math.random()* Math.floor(Selection.length - 1)));
    }}


// TODO: Create arrys with all needed char (an array for lowercase char, one for uppercase char etc)
var special = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


      

// if else statements are next 


// if they just want special
if (useSpecial && !(useNumbers, useLower, useUpper)) {
Selection = special;
    NewPassword();
}
// if they just want numbers
else if (useNumbers && !(useSpecial, useLower,useUpper)) {
    Selection = numbers;
        NewPassword();}
// if they just want lowerCase
else if (useLower && !(useSpecial, useLower, useNumbers)) {
    Selection = lowerCase;
        NewPassword();}

// if they just want upperCase
else if (useUpper && !(useLower, useNumbers, useSpecial)) {
    Selection = upperCase;
        NewPassword();}
// if they just want special and numbers 
else if (useNumbers && useSpecial && !(useLower,useUpper)) {
    Selection = numbers + special;
        NewPassword();}
// if they just want special and lowerCase
else if (useSpecial && useLower && !(useNumbers,useUpper)) {
    Selection = special + lowerCase;
        NewPassword();}
// if they just want special and upperCase
else if (useSpecial && useUpper && !(useLower, useNumbers) ) {
    Selection = special + upperCase;
        NewPassword();}
// if they just want numbers and lowerCase
else if (useNumbers && useLower && !(useSpecial, useUpper)) {
    Selection = numbers + lowerCase;
        NewPassword();}
// if they just want numbers  and upperCase
else if (useSpecial && useLower && !(useUpper, useNumbers)) {
    Selection = special + lowerCase;
        NewPassword();}
// if they just want lowerCase and upperCase
else if (useLower && useUpper && !(useNumbers, useSpecial)) {
    Selection = lowerCase + upperCase;
        NewPassword();}
// if they just want special and upperCase, lowerCase
else if (useSpecial && useLower && upperCase && !useNumbers) {
    Selection = special + lowerCase + upperCase;
        NewPassword();}
// if they just want special and upperCase, Numbers
else if (useSpecial && useNumbers && useUpper && !useLower ) {
    Selection = special + numbers + upperCase;
        NewPassword();}
// if they just want numbers and upperCase, lowerCase
else if (useNumbers && useLower && useUpper && !useSpecial) {
    Selection = lowerCase + numbers + upperCase;
        NewPassword();}
//  if they want them all 
else if (useSpecial && useNumbers && useUpper && useLower) {
    Selection = special + numbers + upperCase + lowerCase;
        NewPassword();}

    

 var length = prompt("how long do you want your password to be friend?");
    if (length < 8 || length > 128){
        alert("sorry forgot to say, it has to be between 8 an 128 characters.")
            
          }
      


Document.querySelector("#password").innerHTML = 
NewPassword;
console.log(NewPassword);
































    
