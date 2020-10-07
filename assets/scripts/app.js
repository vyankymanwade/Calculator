const defaultResult = 0;
let currentResult = defaultResult;
let logHistory = [];
// Get user input
function getUserEnteredNumber() {
  return userInput.value;
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
  console.log(logHistory);
}

function add() {
  const enteredNumber = getUserEnteredNumber();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWrite('+', initialResult, enteredNumber);
  createLog('ADD', initialResult, enteredNumber, currentResult);
}

function substract() {
  const enteredNumber = getUserEnteredNumber();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWrite('-', initialResult, enteredNumber);
  createLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserEnteredNumber();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWrite('*', initialResult, enteredNumber);
  createLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserEnteredNumber();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWrite('/', initialResult, enteredNumber);
  createLog('DIVIDE', initialResult, enteredNumber, currentResult);
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
