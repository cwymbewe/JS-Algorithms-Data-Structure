const userInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.querySelector('#output');

convertBtn.addEventListener('click', () => {
    if(userInput.value === ""){
        output.innerHTML = `Please enter a valid number;`
    }
    return output.innerHTML;
})

const numeralsLibrary = [
    {value: 1000, numeral: "M"},
    {value: 900, numeral: "CM"},
    {value: 500, numeral: "D"},
    {value: 400, numeral: "CD"},
    {value: 100, numeral: "C"},
    {value: 90, numeral: "XC"},
    {value: 50, numeral: "L"},
    {value: 40, numeral: "XL"},
    {value: 10, numeral: "X"},
    {value: 9, numeral: "IX"},
    {value: 5, numeral: "V"},
    {value: 4, numeral: "IV"},
    {value: 1, numeral: "I"}
]
const converter = (number) => {
    let numeral = "";
    numeralsLibrary.forEach(el => {
        while(number >= el.value){
            numeral += el.numeral;
            number -= el.value;
        }
    })
    return numeral;
}
