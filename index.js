//declare the types of characters that can be used in the password
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&**()_+/";

//declare a passwordLength variable and assign it with an initial value
let passwordLength = 8;

const password1El = document.getElementById("password1-el");
const password2El = document.getElementById("password2-el");
const password3El = document.getElementById("password3-el");
const password4El = document.getElementById("password4-el");

const slider = document.getElementById("slider");
let sliderNumber = document.getElementById("slider-value");

//creating the checkbox variables
const upperCheck = document.getElementById("uppercase");
const lowerCheck = document.getElementById("lowercase");
const numberCheck = document.getElementById("numbers");
const symbolCheck = document.getElementById("symbols");

//Creating a empty string to which the characters will append and give the final password
let password = "";

//creating a function to select random characters above mentioned set of strings
function getRandomData(dataSet){
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

//creating a function to append the random characters to get the final password
function generatePassword(){
    for(let i=0;i<passwordLength;i++){
        if(upperCheck.checked){
            password += getRandomData(upperCase);
        }
        if(lowerCheck.checked){
            password+=getRandomData(lowerCase);
        }
        if(numberCheck.checked){
            password+=getRandomData(numberSet);
        }
        if(symbolCheck.checked){
            password+=getRandomData(symbolSet);
        }
    }
}

function changeColorPasswords(){
    // Gets and stores all elements with generatedPassword class in allPassword variable
    let allPasswords = document.getElementsByClassName("generatedPassword");
    //changing the color to the css color variable
    for(let i=0;i<allPasswords.length;i++){
        allPasswords[i].style.color = "var((--clr-bright-green)";
    }
}

//creating the variables to display the created passwords
let pass1 = generatePassword();
let pass2 = generatePassword();
let pass3 = generatePassword();
let pass4 = generatePassword();

//Create a function to display the generated passwords
function getGeneratedPasswords(){
    password1El.innerHTML = `<input type="text" id="1" value="pass1" onclick="copyToClipboard(1)" readonly>
    `;

    password2El.innerHTML = `<input type="text" id="2" value="pass2" onclick="copyToClipboard(1)" readonly>
    `;

    password3El.innerHTML = `<input type="text" id="3" value="pass3" onclick="copyToClipboard(1)" readonly>
    `;

    password4El.innerHTML = `<input type="text" id="4" value="pass4" onclick="copyToClipboard(1)" readonly>
    `;

    changeColorPasswords();
}

//creating the function to copy the password to the clipboard
//this function will be invoked when the user clicks the sample passwords
function copyToClipboard(index){
    const copyText=document.getElementById(index).value;
    navigator.clipboard.writeText(copyText).then(()=>{
        //display the alert message to inform the password is copied
        alert("Password copied to clipboard");
    });
}

// Create an input event listener for slider element
slider.addEventListener("input", function () {
    // Display the value of the slider
    sliderNumber.textContent = `${slider.value}`;
    // Assign to passwordLength new value
    passwordLength = slider.value;
});