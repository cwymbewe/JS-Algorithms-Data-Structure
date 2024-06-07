const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const result = document.getElementById('results-div');

checkBtn.addEventListener('click', () => {
    
    return userInput.value === "" ? alert("Please provide a phone number") : 
        validate(userInput.value);
})

const validFormats = [
    "1 555-555-5555",
    "1 (555) 555-5555",
    "1(555)555-5555",
    "1 555 555 5555",
    "5555555555",
    "555-555-5555",
    "(555)555-5555"
]
const regex = /\s?(\d{3}|\(\d{3}\))([\s-])?(\d{3})([\s-])?(\d{4})/

const validate = (str) => {
    const reducedStr = str.replace(regex,"");
    
    return result.innerHTML = (reducedStr === "" || reducedStr === "1") ?  `Valid US number: ${userInput.value}` : `Invalid US number: ${userInput.value}`;
} 


console.log(validateNumber(userInput.value));

clearBtn.addEventListener('click', () => {
    result.innerHTML = "";
    userInput.value = "";
})