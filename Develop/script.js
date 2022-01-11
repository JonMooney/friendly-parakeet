// Declare prompt variables with initial values
var length = 0;
var lowercase = 'a'
var uppercase = 'a';
var numeric = 'a';
var special = 'a';


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  //Get desired password length, with while loop for validation
  while(length < 8 || length > 128 || isNaN(length)){
    length = prompt("Please enter the desired password length (8 to 128 characters)");
  }
  console.log(lowercase);
  characterTypes();

}

  
// Ask for character types to include
function characterTypes(){
  while(lowercase.toLowerCase() != 'y' && lowercase.toLowerCase() != 'n'){
    lowercase = prompt("Should the password include lowercase letters? (Y / N)");
    if(lowercase == null){lowercase = 'n';}
    console.log ("lowercase = " + lowercase);
  }

  while(uppercase.toLowerCase() != 'y' && uppercase.toLowerCase() != 'n'){
    uppercase = prompt("Should the password include uppercase letters? (Y / N");
    if(uppercase == null){uppercase = 'n';}
    console.log("uppercase = " + uppercase);
  }

  while(numeric.toLowerCase() != 'y' && numeric.toLowerCase() != 'n'){
    numeric = prompt("Should the password include numeric characters? (Y / N");
    if(numeric == null){numeric = 'n';}
    console.log("numeric = " + numeric);
  }

  while(special.toLowerCase() != 'y' && special.toLowerCase() != 'n'){
    special = prompt("Should the password include special characters? (Y / N");
    if(special == null){special = 'n';}
    console.log("special = " + special);
  }

  if(lowercase.toLowerCase() === 'n' && uppercase.toLowerCase() === 'n' && numeric.toLowerCase() === 'n' && special.toLowerCase() === 'n'){
    alert('You must select at least one character type!');
    //Reset values
    lowercase = 'a'
    uppercase = 'a';
    numeric = 'a';
    special = 'a';

    //If no character types were selected recall function
    characterTypes();
  }
}



  //Check to see if at least one character type



  // console.log ("length = " + length);
  // 
  // 
  // 
  // 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
