var lowercaseArr = "abcdefghijklmnopqrstuvwxyz".split("")

var uppercaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

var numberArr = "0123456789".split("")

var specialArr = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("")

var userArr = ""

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var password = ""
  var userSelectedTypePassword = ""
  var passwordLength = prompt("How many characters for your password? (min 8, max 128)")
  passwordLength = parseInt(passwordLength)

  if (passwordLength >= 8 && passwordLength <= 128){
  
    var lowercase = confirm("Do you want to include lowercase letters?")

    var uppercase = confirm("Do you want to include uppercase letters?")

    var number = confirm("Do you want to include numbers?")

    var special = confirm("Do you want to include special characters?")

    if(lowercase){
        var lowercaseIndex = Math.floor(Math.random() * lowercaseArr.length )
        password = password + lowercaseArr[lowercaseIndex]
        userSelectedTypePassword = userSelectedTypePassword + lowercaseArr.join("")

    }

    if(uppercase){
        var uppercaseIndex = Math.floor(Math.random() * uppercaseArr.length )
        password = password + uppercaseArr[uppercaseIndex]
        userSelectedTypePassword = userSelectedTypePassword + uppercaseArr.join("")
  
    }

    if(number){
        var numberIndex = Math.floor(Math.random() * numberArr.length )
        password = password + numberArr[numberIndex]
        userSelectedTypePassword = userSelectedTypePassword + numberArr.join("")

    }
    
    if(special){
        var specialIndex = Math.floor(Math.random() * specialArr.length )
        password = password + specialArr[specialIndex]
        userSelectedTypePassword = userSelectedTypePassword + specialArr.join("")
    
    }
    
    var leftoverPasswordLength = passwordLength - password.length
    var userArr = userSelectedTypePassword

    for (var i = 1; i <= leftoverPasswordLength; i++){

        var userIndex = Math.floor(Math.random() * userArr.length)
        password = password + userArr[userIndex]
        
        console.log(password);
        }
         

  }else {
   alert("Invalid entry") 
  }

return password

}

