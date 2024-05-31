const userInput = document.getElementById("text-input");

const isEmpty = () => {
    if(userInput.value.length === 0){
        alert("Please input a value");
    }
    return false;
}

