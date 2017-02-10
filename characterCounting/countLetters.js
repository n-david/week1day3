function countLetters(message) {
  var noSpaces = message.replace(/\s+/g, '');
  var uniqueLetters = {};
  for (var i = 0; i < noSpaces.length; i++) {
    if (!(noSpaces[i] in uniqueLetters)) {
      uniqueLetters[noSpaces[i]] = 1;
    } else {
      uniqueLetters[noSpaces[i]] += 1;
    }
  }
  return uniqueLetters;
}

console.log(countLetters('lighthouse in the house'));
