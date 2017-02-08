function countLetters(message) {
  var uniqueLetters = {};
  for (var i = 0; i < message.length; i++) {
    if (!(message[i] in uniqueLetters)) {
      uniqueLetters[message[i]] = [];
    }
    uniqueLetters[message[i]].push(i);
  }
  return uniqueLetters;
}

console.log(countLetters('lighthouse in the house'));
