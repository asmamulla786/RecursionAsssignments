function isCharAtLeftRightSame(string, left, right) {
  if (left <= right) {
    const isSame = string[left] === string[right];
    
    return isSame ? isCharAtLeftRightSame(string, left + 1, right - 1) : false;
  }

  return true;
}

function isPalindrome(palindromeCandidate) {
  if (palindromeCandidate === "") {
    return true;
  }

  const left = 0;
  const right = palindromeCandidate.length - 1;

  return isCharAtLeftRightSame(palindromeCandidate, left, right);
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "'" + textToQuote + "'";
}

function makeMessage(palindromeCandidate, actual, expected) {
  let message = "The string " + addQuote(palindromeCandidate);
  message = message + " is Palindrome ";
  message = message + "expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual) + "'";
  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅ ' : '❌ ';
}

function testIsPalindrome(palindromeCandidate, expected) {
  const actual = isPalindrome(palindromeCandidate);
  const message = makeMessage(palindromeCandidate, actual, expected);
  console.log(message);
}

function testingFunction() {
  testIsPalindrome("", true);
  testIsPalindrome("1221", true);
  testIsPalindrome("121", true);
  testIsPalindrome("123421", false);
  testIsPalindrome("asdf", false);
}

testingFunction();