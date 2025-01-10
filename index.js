const display = document.getElementById('display');
let shouldClearDisplay = false;
let shouldBackspace = true;

function appendtoDisplay(input) {
    if (shouldClearDisplay) {
        display.value = '';
        shouldClearDisplay = false;
    }
    display.value += input;
}

function clearDisplay() {
    display.value = ""; 
}

function backspace(){
    if(shouldBackspace){
    display.value = display.value.slice(0, -1);
    }
}
function calculate() {
    try {
        display.value = eval(display.value);
        shouldClearDisplay = true; 
        shouldBackspace = true;
    } catch (error) {
        display.value = "Error";
        shouldClearDisplay = true;
        shouldBackspace = false;
    }
}
document.addEventListener('keyup', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        appendtoDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    }
      else if (key === 'Backspace'){
        backspace();
      }
});

