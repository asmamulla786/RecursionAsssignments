function isCharMatch(firstChar, secondChar) {
  return firstChar === secondChar;
}

function getLastIndexOfchar(string, char, index) {
  const isEqual = isCharMatch(string[index], char);

  if (!isEqual && index < 0) {
    return -1
  }

  return isEqual ? index : getLastIndexOfchar(string, char, index - 1);

}

function findLastIndex(string, char) {
  return getLastIndexOfchar(string, char, string.length - 1);
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(string, target, actual, expected) {
  let message = "The target character " + addQuote(target);
  message = message + " in " + addQuote(string) + " is found at position";
  message = message + " from last expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual);
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testFindLastIndex(string, char, expected) {
  const actual = findLastIndex(string, char);
  const message = makeMessage(string, char, actual, expected);
  console.log(message);
}

function testingFunction() {
  testFindLastIndex('a', 'a', 0);
  testFindLastIndex('ab', 'b', 1);
  testFindLastIndex('abbbbb', 'b', 5);
  testFindLastIndex('hello world', 'a', -1);
  testFindLastIndex('hello world', '', -1);
  testFindLastIndex('', '', -1);
}

testingFunction();
