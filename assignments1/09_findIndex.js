function isCharMatch(firstChar, secondChar) {
  return firstChar === secondChar;
}

function getFirstIndexOfchar(string, char, index) {
  const isEqual = isCharMatch(string[index], char);

  if (!isEqual && index >= string.length - 1) {
    return -1
  }

  return isEqual ? index : getFirstIndexOfchar(string, char, index + 1);

}
function findIndex(string, char) {
  return getFirstIndexOfchar(string, char, 0);
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(string, target, actual, expected) {
  let message = "The target character " + addQuote(target);
  message = message + " in " + addQuote(string) + " is found at position";
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual);
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testFindIndex(string, substring, expected) {
  const actual = findIndex(string, substring);
  const message = makeMessage(string, substring, actual, expected);
  console.log(message);
}

function testingFunction() {
  testFindIndex('a', 'a', 0);
  testFindIndex('abbbbb', 'b', 1);
  testFindIndex('hello world', 'a', -1);
  testFindIndex('hello world', '', -1);
  testFindIndex('', '', -1);
}

testingFunction();
