
function sumOfAP(firstTerm, difference, noOfTerms) {
  if (noOfTerms === 0) {
    return 0;
  }

  return firstTerm + sumOfAP(firstTerm + difference, difference, noOfTerms - 1);
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(firstTerm, difference, noOfTerms, actual, expected) {
  let message = "Sum of Ap with FirstTerm :: " + addQuote(firstTerm) + " and";
  message = message + " difference ::  " + addQuote(difference);
  message = message + " number of times ::  " + addQuote(noOfTerms) + " is";
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual);
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testSumOfAP(firstTerm, difference, noOfterms, expected) {
  const actual = sumOfAP(firstTerm, difference, noOfterms);
  console.log(makeMessage(firstTerm, difference, noOfterms, actual, expected));
}

function testingFunction() {
  testSumOfAP(1, 1, 10, 55);
  testSumOfAP(-5, -2, 5, -45);
  testSumOfAP(0, 0, 5, 0);
  testSumOfAP(10, 20, 1, 10);
  testSumOfAP(1, 1, 0, 0);
}

testingFunction();
