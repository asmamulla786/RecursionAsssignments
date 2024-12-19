function getcompoundPrinciple(principal, rateOfInterest, years) {
  if (years === 0) {
    return principal;
  }

  const interest = principal * rateOfInterest / 100;

  return getcompoundPrinciple(interest + principal, rateOfInterest, years - 1);
}

function compoundInterest(principal, rateOfInterest, time) {
  return getcompoundPrinciple(principal, rateOfInterest, time) - principal;
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(p, r, t, actual, expected) {
  let message = "Compound interest with \nPrincipal       :: " + addQuote(p);
  message = message + "\nratioDifference ::  " + addQuote(r);
  message = message + "\nnumber of times ::  " + addQuote(t);
  message = message + "\nexpected " + addQuote(expected);
  message = message + "\nactual " + addQuote(actual);
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testCompoundInterest(p, r, t, expected) {
  const actual = compoundInterest(p, r, t);
  console.log(makeMessage(p, r, t, actual, expected));
}

function testingFunction() {
  testCompoundInterest(100, 5, 2, 10.25);
  testCompoundInterest(0, 5, 2, 0);
  testCompoundInterest(100, 0, 2, 0);
  testCompoundInterest(100, 5, 0, 0);
}

testingFunction();