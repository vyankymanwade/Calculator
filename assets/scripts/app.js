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

function add() {
    const enteredNumber = getUserEnteredNumber();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWrite('+', initialResult, enteredNumber);
    const log = {
        operation: "ADD",
        resultBefore: initialResult,
        number: enteredNumber,
        resultAfter: currentResult
    }
    logHistory.push(log);
    console.log(logHistory);
}

function substract() {
    const enteredNumber = getUserEnteredNumber();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWrite('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserEnteredNumber();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWrite('*', initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserEnteredNumber();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWrite('/', initialResult, enteredNumber);
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);