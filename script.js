//Define global variables
var generateBtn = document.querySelector("#generate");

//Define password criteria
function getLenght () {
  let lenght = parseInt(prompt ("Please enter password length of at least 8 characters and no more than 128 characters",12));
  //return  value only if lenght is integer number in the range from 8 to 128
  if (Number.isInteger(lenght) && 8<=lenght && lenght<=128) return lenght; 
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
  let length = getLenght ();
  console.log(length);
  let password = generatePassword(length, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()');
  console.log(password);
  //"test password";//generatePassword();
  var passwordText = document.querySelector("#password");
  if (password){
    passwordText.value = password;
  } else{
    passwordText.value = "To generate password: select <Generate Password> button again and enter password length of at least 8 characters and no more than 128 characters";
    passwordText.style.color = "red";
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
