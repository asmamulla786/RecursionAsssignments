function quotient(dividend, divisor) {
  if (dividend < divisor) {
    return 0;
  }

  return 1 + quotient(dividend - divisor, divisor);
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(dividend, divisor, actual, expected) {
  let message = "Quotient when " + addQuote(dividend);
  message = message + " divides with " + addQuote(divisor);
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual) + "'";
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testQuotient(dividend, divisor, expected) {
  const actual = quotient(dividend, divisor);
  const message = makeMessage(dividend, divisor, actual, expected);
  console.log(message);
}

function testingFunction() {
  testQuotient(2, 2, 1);
  testQuotient(5, 2, 2);
  testQuotient(0, 2, 0);
  testQuotient(2, 5, 0);
}

testingFunction();