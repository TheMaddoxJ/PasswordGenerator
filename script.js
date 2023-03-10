// Assignment Code
var generateBtn = document.querySelector("#generate");

//Creating the function of generatepassword along with a prompt.
function generatePassword() {
  console.log("Hello! You hit the button!");

  //Creating variable "characters" and leaving the value as empty.
var characters = [];

  var length = parseInt( prompt("How long would you like your password to be? Choose a pass between 8-128 characters."));
  console.log(length);

  //If length of pass is less than 8 or more than 128 then alert the user that it should be 8-128 characters.
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Your password needs to be 8-128 characters!")
    generatePassword()
  }

  //prompt for numbers inclusion or not.
  var numbers = confirm("Would you like your password to include numbers?");
  console.log(numbers);


//All the 'if' conditional statements for password content details.
  if (numbers === "Yes") {
    console.log("Hello" + numbers);
    characters += '0123456789'
  }

  var uppercase = confirm("Would you like your password to be uppercase?");
  console.log(uppercase);

  if (uppercase) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUFWXYZ'
  }

  var lowercase = confirm("Would you like your password to be lowercase?");
  console.log(lowercase);

  if (lowercase) {
    characters += 'abcdefghijklmnopqrstuvwxyz'
  }

  var specialCharacters = confirm("Would you like your password to include special characters?");
  console.log(specialCharacters);

  if (specialCharacters) {
    characters += "!#$%&')(*-./:;<=>?@[]\^_`{|}~"
  }


  //Setting an empty value for the passwordArray variable.
  let passwordArray = [];

  //randomizing the password output with math.random and making sure the password length does not extend past the desired length chosen.
   while (passwordArray.length < length) {
     const singlecharacter = characters[Math.floor(Math.random() * characters.length)];
     passwordArray.push(singlecharacter);
   }
   console.log(passwordArray);


  console.log(characters)
  return passwordArray.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(generatePassword);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
