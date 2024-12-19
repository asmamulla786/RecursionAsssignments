function remainder(dividend, divisor) {
  if (dividend < divisor) {
    return dividend;
  }

  return remainder(dividend - divisor, divisor);
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(dividend, divisor, actual, expected) {
  let message = "Remainder when " + addQuote(dividend);
  message = message + " divides with " + addQuote(divisor);
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual) + "'";
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testRemainder(dividend, divisor, expected) {
  const actual = remainder(dividend, divisor);
  const message = makeMessage(dividend, divisor, actual, expected);
  console.log(message);
}

function testingFunction() {
  testRemainder(2, 2, 0);
  testRemainder(8, 2, 0);
  testRemainder(8, 3, 2);
  testRemainder(5, 2, 1);
  testRemainder(0, 2, 0);
  testRemainder(2, 5, 2);
}

testingFunction();