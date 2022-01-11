// Declare global variables with initial values
var passwordLength = 0;
var incLowercase = false;
var incUppercase = false;
var incNumeric = false;
var incSpecial = false;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Reset variables for second password generation if needed
  passwordLength = 0;
  incLowercase = false;
  incUppercase = false;
  incNumeric = false;
  incSpecial = false;

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
  if(incLowercase){
    tempstr = "abcdefghijklmnopqrstuvwxyz";
    password += tempstr[Math.floor(Math.random() * tempstr.length)];
    alphabet += tempstr;
    startPos += 1;
  }

  if(incUppercase){
    tempstr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    password += tempstr[Math.floor(Math.random() * tempstr.length)];
    alphabet += tempstr;
    startPos += 1;
  }

  if(incNumeric){
    tempstr = "0123456789";
    password += tempstr[Math.floor(Math.random() * tempstr.length)];
    alphabet += tempstr;
    startPos += 1;
  }

  if(incSpecial){
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
  
// User prompts to ask what character types to include, with validation
function characterTypes(){
  //Local variables for prompt responses, these will be 'y' or 'n'
  var lowercase = 'a';
  var uppercase = 'a';
  var numeric = 'a';
  var special = 'a';

  // While loops with prompts to ask user what character types they would like included
  // Validation, including checking for null value (cancel button)
  while(lowercase.toLowerCase() != 'y' && lowercase.toLowerCase() != 'n'){
    lowercase = prompt("Should the password include lowercase letters? (Y / N)");
    
    if(lowercase == null){
      incLowercase = false;
      break;
    }else if(lowercase.toLowerCase() === 'y'){
      incLowercase = true;
    }else{
      incLowercase = false;
    }
  }

  while(uppercase.toLowerCase() != 'y' && uppercase.toLowerCase() != 'n'){
    uppercase = prompt("Should the password include uppercase letters? (Y / N");
    if(uppercase == null){
      incUppercase = false;
      break;
    }else if(uppercase.toLowerCase() === 'y'){
      incUppercase = true;
    }else{
      incUppercase = false;
    }
  }

  while(numeric.toLowerCase() != 'y' && numeric.toLowerCase() != 'n'){
    numeric = prompt("Should the password include numeric characters? (Y / N");
    if(numeric == null){
      incNumeric = false;
      break;
    }else if(numeric.toLowerCase() === 'y'){
      incNumeric = true;
    }else{
      incNumeric = false;
    }
  }
 
  while(special.toLowerCase() != 'y' && special.toLowerCase() != 'n'){
    special = prompt("Should the password include special characters? (Y / N");
    if(special == null){
      incSpecial = false;
      break;
    }else if(special.toLowerCase() === 'y'){
      incSpecial = true;
    }else{
      incSpecial = false;
    }
    console.log(special.toLowerCase());
  }

  //Final prompt validation, if at least one character type wasn't entered, rerun this function
  if(!incLowercase && !incUppercase && !incNumeric && !incSpecial){
    alert('You must select at least one character type!');
    characterTypes();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
