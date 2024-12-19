function getNumber(string, index, number) {
  if (index === string.length) {
    return number / 10;
  }

  const digit = +string[index] + number;

  return getNumber(string, index + 1, digit * 10);
}

function stringToNumber(string) {
  if (string[0] === "-") {
    return -1 * getNumber(string, 1, 0);
  }

  return getNumber(string, 0, 0);
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(string, actual, expected) {
  let message = "The string " + addQuote(string) + " in number"
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual) + "'";
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅ ' : '❌ ';
}

function testStringToNumber(string, expected) {
  const actual = stringToNumber(string);
  const message = makeMessage(string, actual, expected);
  console.log(message);
}

function testingFunction() {
  testStringToNumber("123", 123);
  testStringToNumber("1234", 1234);
  testStringToNumber("-123", -123);
  testStringToNumber("-1", -1);
  testStringToNumber("0", 0);
}

testingFunction();