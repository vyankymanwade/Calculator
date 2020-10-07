const defaultResult = 0;
let currentResult = defaultResult;
let logHistory = [];
// Get user input
function getUserEnteredNumber() {
    return parseInt(userInput.value);
}

// Generate and output recent calculation log
function createAndWrite(operator, resultBefore, number) {
    const desc = `${resultBefore} ${operator} ${number}`;
    outputResult(currentResult, desc); // from vendor file
}

function createLog(operation, resultBefore, number, resultAfter) {
    const log = {
        operation: operation,
        resultBefore: resultBefore,
        number: number,
        resultAfter: resultAfter,
    };
    logHistory.push(log);
}

function calculate(operation) {
    enteredNumber = getUserEnteredNumber();
    if (
        (operation !== 'ADD' &&
            operation !== 'SUBSTRACT' &&
            operation !== 'MULTIPLY' &&
            operation !== 'DIVIDE') ||
        enteredNumber === 0
    ) {
        return;
    }

    const initialResult = currentResult;
    let mathOperator;
    if (operation === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (operation === 'SUBSTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (operation === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (operation === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    createAndWrite(mathOperator, initialResult, enteredNumber);
    createLog(operation, initialResult, enteredNumber, currentResult);
}
function add() {
    calculate('ADD');
}

function substract() {
    calculate('SUBSTRACT');
}

function multiply() {
    calculate('MULTIPLY');
}

function divide() {
    calculate('DIVIDE');
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
