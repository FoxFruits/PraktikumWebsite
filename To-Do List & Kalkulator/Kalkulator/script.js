function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (display.value === '0' && !isNaN(value)) {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}

function negateNumber() {
    let display = document.getElementById('display');
    let currentValue = display.value;
    
    if (currentValue !== '0') {
        if (currentValue.startsWith('-')) {
            display.value = currentValue.slice(1);
        } else {
            display.value = '-' + currentValue;
        }
    }
}

function calculate() {
    try {
        let expression = document.getElementById('display').value;
        
        // Handle power (^) operation
        expression = expression.replace(/(\d+(?:\.\d+)?)\s*\^\s*(\d+(?:\.\d+)?)/g, 'Math.pow($1, $2)');
        
        const result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}