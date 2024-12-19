function charToBeAdded(character, target, replacement) {
  return target === character ? replacement : character;
}

function replacedString(text, target, replacement, index, newString) {
  if (index === text.length) {
    return newString;
  }

  newString = newString + charToBeAdded(text[index], target, replacement);

  return replacedString(text, target, replacement, index + 1, newString);
}

function replace(text, target, replacement) {
  if (text === "") {
    return "";
  }

  return replacedString(text, target, replacement, 0, "");
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(text, target, replacement, actual, expected) {
  let message = "The text " + addQuote(text) + " after replacing the character";
  message += addQuote(target) + " with " + addQuote(replacement) + "is";
  message = message + " expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual);
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testStringReplace(text, target, replacement, expected) {
  const actual = replace(text, target, replacement);
  const message = makeMessage(text, target, replacement, actual, expected);
  console.log(message);
}

function testingFunction() {
  testStringReplace('', 'd', 'e', '');
  testStringReplace('hello', '', 'e', 'hello');
  testStringReplace('hello world', 'l', 'n', 'henno wornd');
  testStringReplace('no spaces in here', ' ', '_', 'no_spaces_in_here');
}

testingFunction();