function isDivBy(dividend, divisor) {
  return dividend % divisor === 0;
}

function isDivByItSelfOnlyBetweenRange(dividend, divisor) {
  if (isDivBy(dividend, divisor)) {
    return dividend === divisor;
  }

  return isDivByItSelfOnlyBetweenRange(dividend, divisor + 1);
}

function isPrime(primeCandidate) {
  if (primeCandidate < 2) {
    return false;
  }

  return isDivByItSelfOnlyBetweenRange(primeCandidate, 2);

}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(number, actual, expected) {
  let message = "The number " + addQuote(number);
  message = message + " is Prime Number ";
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual) + "'";
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅ ' : '❌ ';
}

function testIsPrime(primeCandidate, expected) {
  const actual = isPrime(primeCandidate);
  const message = makeMessage(primeCandidate, actual, expected);
  console.log(message);
}

function testingFunction() {
  testIsPrime(1, false);
  testIsPrime(2, true);
  testIsPrime(5, true);
  testIsPrime(3, true);
  testIsPrime(9, false);
  testIsPrime(15, false);
  testIsPrime(21, false);
}

testingFunction();