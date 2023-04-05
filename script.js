//Define global variables
var generateBtn = document.querySelector("#generate");

//Define password criteria
function getLenght () {
  let lenght = parseInt(prompt ("Please enter password length of at least 8 characters and no more than 128 characters",12));
  //return  value only if lenght is integer number in the range from 8 to 128
  if (Number.isInteger(lenght) && 8<=lenght && lenght<=128) return lenght; 
}

//Define allowed symbols
function getAllowedSymbols(){
  // Define allowed symbols sets
  const charactersTypes = ['numeric', 'lowercase', 'uppercase', ' special symbols']
  const charMap = {
    [charactersTypes[0]]: '0123456789',                        // numeric
    [charactersTypes[1]]: 'abcdefghijklmnopqrstuvwxyz',        // lowercase
    [charactersTypes[2]]: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',        // uppercase
    [charactersTypes[3]]: '!@#$%^&*()_+~`|}{[]\\:;?><,./-='    // special symbols
  };

  //Denine variables
  let result = '';
  let characters = '';
  //Get user choice
  for (var i=0; i<4; i++) {
    result = confirm('do you want include '+ charactersTypes[i] +' ?') 
    if (result) characters += charMap[[charactersTypes[i]]]; 
  }
  //console.log (characters)
  return characters;

}

//Generate Password
function generatePassword(length, allowedSymbols) {
  let result = '';
  const symbols = allowedSymbols.split('');
  const symbolsLength = symbols.length;

  for (let i = 0; i < length; i++) {
    result += symbols[Math.floor(Math.random() * symbolsLength)];
  }
  return result;
}

// Write password to the #password input
function writePassword() {
  // Define function parameters
  
  let length = getLenght ();
  let allowedSymbols = getAllowedSymbols();
  let password = generatePassword(length, allowedSymbols);

  //"test password";//generatePassword();
  var passwordText = document.querySelector("#password");
  if (password){
    passwordText.value = password;
  } else{
    passwordText.value = "To generate password: select <Generate Password> button again and" + "enter password length in the range from 8 to 128 and define allowed symbols";
    passwordText.style.color = "red";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
