function isDivBy(dividend, divisor) {
  return dividend % divisor === 0;
}

function primeNumberAboveNumber(number, factor) {
  if (isDivBy(number, factor)) {
    return number === factor ? number : primeNumberAboveNumber(number + 1, 2);
  }

  return primeNumberAboveNumber(number, factor + 1);
}

function firstPrimeAbove(number) {
  if (number < 2) {
    return 2;
  }

  return primeNumberAboveNumber(number + 1, 2);
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(number, actual, expected) {
  let message = "The first Primenumber above " + addQuote(number);
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual) + "'";
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅ ' : '❌ ';
}

function testFirstPrimeAbove(primeCandidate, expected) {
  const actual = firstPrimeAbove(primeCandidate);
  const message = makeMessage(primeCandidate, actual, expected);
  console.log(message);
}

function testingFunction() {
  testFirstPrimeAbove(0, 2);
  testFirstPrimeAbove(1, 2);
  testFirstPrimeAbove(2, 3);
  testFirstPrimeAbove(7, 11);
  testFirstPrimeAbove(11, 13);
}

testingFunction();