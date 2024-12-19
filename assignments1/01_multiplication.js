function addNumberToItSelf(number, numberOfTimes) {
  if (numberOfTimes === 0) {
    return 0;
  }

  return number + addNumberToItSelf(numberOfTimes - 1, number);
}

function multiply(multiplier, multiplicand) {
  if (multiplier === 0 || multiplicand === 0) {
    return 0;
  }

  return addNumberToItSelf(multiplier, multiplicand);
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(multiplier, multiplicand, actual, expected) {
  let message = "the product " + addQuote(multiplier);
  message = message + " and " + addQuote(multiplicand);
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual) + "'";
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testMultiply(multiplier, multiplicand, expected) {
  const actual = multiply(multiplier, multiplicand);
  const message = makeMessage(multiplier, multiplicand, actual, expected);
  console.log(message);
}

function testingFunction() {
  testMultiply(2, 2, 4);
  testMultiply(-2, 2, -4);
  testMultiply(5, 1, 5);
  testMultiply(0, 2, 0);
  testMultiply(0, 0, 0);
}

testingFunction();