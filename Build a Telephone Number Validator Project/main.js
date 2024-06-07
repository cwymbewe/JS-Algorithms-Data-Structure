
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
    
} 


/*
//TEST REGEX
const validFormat = ['1 555-555-5555', '1(555) 555-5555', '1(555)555-5555', '1 555 555 5555', '5555555555', '555-555-5555', '(555)555-55655n'];
const reducedFormat = validFormat.map(el => el.replace(regex,""));
console.log(reducedFormat);
*/