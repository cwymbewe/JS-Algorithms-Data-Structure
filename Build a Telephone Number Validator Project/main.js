const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const result = document.getElementById('results-div');

checkBtn.addEventListener('click', () => {
    let output = "";
    
    return output = userInput.value.length === 0 ? "Please provide a phone number" : 
        validateNumber(userInput.value);
})

const regex = /\s?(\d{3}|\(\d{3}\))([\s-])?(\d{3})([\s-])?(\d{4})/

const validateNumber = (strNumber) => {
    const reducedFormat = strNumber.reduce(regex,"");
    const isValid = () => {
        return reducedFormat === "" || reducedFormat === "1" ? true : false;
    }

    return result.innerText = isValid ?  `Valid US number: ${strNumber}` : `Invalid US number: ${strNumber}`;
} 


