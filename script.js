let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lowerCase = ["a","b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
let numeric = ["0","1","2","3","4","5","6","7","8","9"];
let specialCharacter = ["~","!","@","#","$","%","^","&","*","(",")","-","+","=","_","{","}","[","]","?","<",">"];


let textBox = document.querySelector("#password");

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


function writePassword(){
    //clears the textbox so old PW doesn't just get added @ end of newly generated PW
    textBox.textContent = "";
    
    //Prompt for PW length btwn 8 and 128 characters
    let characterPrompt = prompt("How many characters would you like your password to be? (Must be between 8 and 128 characters)");
    let characterNumber = parseInt(characterPrompt);
    if (8 <= characterNumber && characterNumber <= 128){

        let characterSet = [];
    
        //Prompt user to confirm desired variables, if they opt-in then concat variable array to characterSet array
        let confirmUpperCase = confirm("Do you want uppercase letters? (Ok = Yes, Cancel = No)");
        if (confirmUpperCase) {
            characterSet = characterSet.concat(upperCase);
        }

        let confirmLowerCase = confirm("Do you want lowercase letters? (Ok = Yes, Cancel = No)");
        if (confirmLowerCase) {
            characterSet = characterSet.concat(lowerCase);
        }

        let confirmNumber = confirm("Do you want numbers? (Ok = Yes, Cancel = No)");
        if (confirmNumber) {
            characterSet = characterSet.concat(numeric);
        }

        let confirmSpecialCharacter = confirm("Do you want special characters? (Ok = Yes, Cancel = No)");
        if (confirmSpecialCharacter) {
            characterSet = characterSet.concat(specialCharacter);
        }

        //Iterate through for each character that gets printed out 
        for(let i = 0; i < characterNumber; i++){

            let randomIndex = Math.floor(Math.random() * characterSet.length);
                
            textBox.textContent = textBox.textContent + characterSet[randomIndex];  //Print the PW to the textbox
        }

        
    }
    else{
        alert("Please enter a number between 8 and 128"); 
    }
    
    // //Not working, Need to clear the form when done
    // generateBtn.addEventListener("click", function({
    //     textBox.reset();
    // });
    

    
}



