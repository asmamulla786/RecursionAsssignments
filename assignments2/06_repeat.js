function repeat(string, noOfTimes) {
  if (noOfTimes < 1) {
    return "";
  }

  return string + repeat(string, noOfTimes - 1);
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(string, n, actual, expected) {
  let message = "The string  " + addQuote(string);
  message = message + " repeated " + addQuote(n) + " times is";
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual);
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testRepeat(string, n, expected) {
  const actual = repeat(string, n);
  console.log(makeMessage(string, n, actual, expected));
}

function testingFunction() {
  testRepeat("a", 5, "aaaaa");
  testRepeat("abc", 3, "abcabcabc");
  testRepeat("", 3, "");
  testRepeat("abc", -1, "");
}

testingFunction();
