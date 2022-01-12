// Declare global variables with initial values
var passwordLength = 0;
var lowercase = false;
var uppercase = false;
var numeric = false;
var special = false;

var generateBtn = document.querySelector("#generate");

// Write password to the #password textarea
function writePassword() {
  //Reset variables for second password generation if needed
  passwordLength = 0;
  lowercase = false;
  uppercase = false;
  numeric = false;
  special = false;

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  //Get desired password length, with while loop for validation
  var length = 0;
  while(length < 8 || length > 128 || isNaN(length)){
    length = prompt("Please enter the desired password length (8 to 128 characters)");
    passwordLength = length;
  }
  
  characterTypes();
  
  var alphabet = ""; // Allowed characters in final password
  var password = ""; // Password to be built
  var startPos = 0; // Incrementer - for loop below uses this
  var tempstr = ""; // Temp variable for adding initial character types to the front of the password string
  
  // Conditional statements to check for user requested character types
  // Front loads the password string with a single requested character type
  // Ensures that the password string will have at least one of each user requested character type
  // Builds the allowed character string for use in randomly generating characters later (for loop)
  if(lowercase){
    tempstr = "abcdefghijklmnopqrstuvwxyz";
    password += tempstr[Math.floor(Math.random() * tempstr.length)];
    alphabet += tempstr;
    startPos += 1;
  }

  if(uppercase){
    tempstr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    password += tempstr[Math.floor(Math.random() * tempstr.length)];
    alphabet += tempstr;
    startPos += 1;
  }

  if(numeric){
    tempstr = "0123456789";
    password += tempstr[Math.floor(Math.random() * tempstr.length)];
    alphabet += tempstr;
    startPos += 1;
  }

  if(special){
    tempstr = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    password += tempstr[Math.floor(Math.random() * tempstr.length)];
    alphabet += tempstr;
    startPos += 1;
  }

  //Finish the password string with random characters from the allowed character string
  for(var a=startPos;a<passwordLength;a++){
    password += alphabet[Math.floor(Math.random() * alphabet.length)];
  }

   return password;
}
  
// Ask user what character types they want included in the password
function characterTypes(){
  lowercase = confirm("Should the password include lowercase letters? OK-Yes | Cancel-No");
  uppercase = confirm("Should the password include uppercase letters? OK-Yes | Cancel-No");
  numeric = confirm("Should the password include numeric characters? OK-Yes | Cancel-No");
  special = confirm("Should the password include special characters? OK-Yes | Cancel-No");

  // If at least one character type wasn't entered, rerun this function
  if(!lowercase && !uppercase && !numeric && !special){
    alert('You must select at least one character type!');
    characterTypes();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
