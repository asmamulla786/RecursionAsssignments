function getReversed(string, index) {
  return index < 0 ? "" : string[index] + getReversed(string, index - 1);
}

function reverse(string) {
  if (string.length === 0) {
    return "";
  }

  return getReversed(string, string.length - 1);
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(string, actual, expected) {
  let message = "The reversed string of " + addQuote(string);
  message = message + " is " + "expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual) + "'";
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅ ' : '❌ ';
}

function testReverse(string, expected) {
  const actual = reverse(string);
  const message = makeMessage(string, actual, expected);
  console.log(message);
}

function testingFunction() {
  testReverse("", "");
  testReverse("  ", "  ");
  testReverse("121", "121");
  testReverse("asdf", "fdsa");
}

testingFunction();