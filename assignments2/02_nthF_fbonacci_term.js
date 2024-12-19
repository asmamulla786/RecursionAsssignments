function nthTerm(previousTerm, currentTerm, termPosition) {
  if (termPosition === 1) {
    return previousTerm;
  }

  return nthTerm(currentTerm, previousTerm + currentTerm, termPosition - 1);
}

function nthFibonacciTerm(number) {
  return nthTerm(0, 1, number);
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(n, actual, expected) {
  let message = "Fibonacci term at position " + addQuote(n) + " is";
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual);
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testNthFibonacci(n, expected) {
  const actual = nthFibonacciTerm(n);
  console.log(makeMessage(n, actual, expected));
}

function testingFunction() {
  testNthFibonacci(2, 1);
  testNthFibonacci(1, 0);
  testNthFibonacci(4, 2);
  testNthFibonacci(6, 5);
  testNthFibonacci(7, 8);
}

testingFunction();