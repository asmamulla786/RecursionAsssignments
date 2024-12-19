function getSubstring(string, start, end) {
  if (start > end) {
    return "";
  }

  return string[start] + getSubstring(string, start + 1, end);
}

function max(number1, number2) {
  return number1 > number2 ? number1 : number2;
}

function min(number1, number2) {
  return number1 < number2 ? number1 : number2;
}

function slice(text, start, end) {
  return getSubstring(text, max(start, 0), min(end, text.length - 1));
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(text, start, end, actual, expected) {
  let message = "The string slice of " + addQuote(text);
  message = message + " from position " + addQuote(start);
  message = message + " to " + addQuote(end) + " is";
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual);
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testStringSlice(text, start, end, expected) {
  const actual = slice(text, start, end);
  const message = makeMessage(text, start, end, actual, expected);
  console.log(message);
}

function testingFunction() {
  testStringSlice('hello world', 0, 4, 'hello');
  testStringSlice('negative start', 1, 8, 'egative ');
  testStringSlice('negative start', -1, 18, 'negative start');
  testStringSlice('negative start', -1, -18, '');
  testStringSlice('negative start', 6, 2, '');
  testStringSlice('negative start', 1, 1, 'e');
  testStringSlice('', 0, 10, '');
}

testingFunction();
