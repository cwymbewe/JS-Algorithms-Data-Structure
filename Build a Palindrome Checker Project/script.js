const userInput = document.getElementById("text-input");
const eventResult = document.getElementById('check-btn');
const isEmpty = () => {
    if(userInput.value.length === 0){
        alert("Please input a value");
    }
    return false;
}

eventResult.addEventListener('click', isEmpty);

