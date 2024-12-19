function matchAtPosition(string, target, index, subIndex) {
  if (subIndex < target.length) {
    const isSame = string[index + subIndex] === target[subIndex];

    return isSame ? matchAtPosition(string, target, index, subIndex + 1) : false;
  }

  return true;
}

function isSubStringFound(string, target, index) {
  if (index < string.length) {
    const isMatch = matchAtPosition(string, target, index, 0);

    return isMatch ? true : isSubStringFound(string, target, index + 1);
  }

  return false;

}

function isSubString(string, otherString) {
  if (otherString === "") {
    return false;
  }

  return isSubStringFound(string, otherString, 0);
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(string, substring, actual, expected) {
  let message = "The substring " + addQuote(substring) + " in ";
  message = message + addQuote(string) + " is found is";
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual);
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅ ' : '❌ ';
}

function testIsSubstring(string, substring, expected) {
  const actual = isSubString(string, substring);
  const message = makeMessage(string, substring, actual, expected);
  console.log(message);
}

function testingFunction() {
  testIsSubstring('', '', false);
  testIsSubstring('asdfg', '', false);
  testIsSubstring('asdfg', 'sd', true);
  testIsSubstring('asdfg', 'ad', false);
  testIsSubstring('asdfg', 'asdfg', true);
}

testingFunction();