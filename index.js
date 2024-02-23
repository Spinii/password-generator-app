
let uppercaseLetters = "QWERTZUIIOPŠASDFGHJKLČĆŽYXCVBNM";
let lowercaseLetters = "qwertzuiopšđasdfghjklčćžyxcvbnm";
let numbers = "1234567890";
let symbols = "!#$%&/()=?*";
const checkUppercase = document.getElementById("uppercase");
const checkLowercase = document.getElementById("lowercase");
const checkNumbers = document.getElementById("numbers");
const checkSymbols = document.getElementById("symbols");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let isUppercase = false;
let isLowercase = false;
let isNumbers = false;
let isSymbols = false;
const copyPass = document.getElementById("copy");


checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        const id = checkbox.id;

        switch(id){
            case "uppercase":
                isUppercase = checkbox.checked;
                break;
            case "lowercase":
                isLowercase = checkbox.checked;
                break;
            case "numbers":
                isNumbers = checkbox.checked;
                break;
            case "symbols":
                isSymbols = checkbox.checked;
                break;
                default:
                    break;
        }
    })
})


function generatePassword(){


    let passwordOutput = document.getElementById("passwordOutput");

    let passwordLength = document.querySelector(".length").value;

    let allowedChars = "";

    if(isUppercase){
        allowedChars += uppercaseLetters;
    }

    if(isLowercase){
        allowedChars += lowercaseLetters;
    }

    if(isNumbers){
        allowedChars += numbers;
    }

    if(isSymbols){
        allowedChars += symbols;
    }

    let password = "";
    const allowedCharsLength = allowedChars.length;

    for(let i = 0; i < passwordLength; i++){

        if(allowedCharsLength === 0){
            passwordOutput.textContent = "Please select at least one set of characters!";
            return;
        }
        else{
            const randomIndex = Math.floor(Math.random() * allowedCharsLength);
            password += allowedChars[randomIndex];
        }
    }

    
    passwordOutput.textContent = password;
    copyPass.style.display = "block";
}



function copy(){
    navigator.clipboard.writeText(passwordOutput.textContent);
    passwordOutput.textContent = "Password copied to clipboard!";
}