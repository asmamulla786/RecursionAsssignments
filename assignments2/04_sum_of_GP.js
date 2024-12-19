function sumOfGP(firstTerm, ratio, noOfTerms) {
  if (noOfTerms === 0) {
    return 0;
  }

  return firstTerm + sumOfGP(firstTerm * ratio, ratio, noOfTerms - 1);
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(firstTerm, ratio, noOfTerms, actual, expected) {
  let message = "Sum of GP with FirstTerm :: " + addQuote(firstTerm) + " and";
  message = message + " ratioDifference ::  " + addQuote(ratio);
  message = message + " number of times ::  " + addQuote(noOfTerms) + " is";
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual);
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testSumOfGP(firstTerm, ratio, noOfTerms, expected) {
  const actual = sumOfGP(firstTerm, ratio, noOfTerms);
  console.log(makeMessage(firstTerm, ratio, noOfTerms, actual, expected));
}

function getGP(a, r, n) {
  return a * (1 - r ** n) / (1 - r);
}

function testingFunction() {
  testSumOfGP(0, 4, 5, getGP(0, 4, 5));
  testSumOfGP(3, 0, 5, getGP(3, 0, 5));
  testSumOfGP(3, 2, 4, getGP(3, 2, 4));
  testSumOfGP(3, 2, 0, getGP(3, 2, 0));
  testSumOfGP(3, 0.5, 3, getGP(3, 0.5, 3));
  testSumOfGP(3, -2, 4, getGP(3, -2, 4));
  testSumOfGP(-3, -2, 4, getGP(-3, -2, 4));
  testSumOfGP(-3, -0.5, 4, getGP(-3, -0.5, 4));
}

testingFunction();