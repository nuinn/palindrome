const accentMatrix = [['á', 'à', 'ä'], ['é', 'è', 'ë'], ['í', 'ì', 'ï'], ['ó', 'ò', 'ö'], ['ú', 'ù', 'ü'],['Á','À','Ä'],['É','È','Ë'],['Í','Ì','Ï'],['Ó','Ò','Ö'],['Ú','Ù','Ü'],];
function removeAccents(phrase) {
  for (let i = 0; i < accentMatrix.length; i++) {
    const letterGroup = accentMatrix[i];
    for (const letter of letterGroup){
      const hasAccent = phrase.includes(letter);
      if (hasAccent) {
        switch (true) {
          case (i == 0):
            phrase = phrase.replace(letter, 'a');
            break;
          case (i == 1):
            phrase = phrase.replace(letter, 'e');
            break;
          case (i == 2):
            phrase = phrase.replace(letter, 'i');
            break;
          case (i == 3):
            phrase = phrase.replace(letter, 'o');
            break;
          case (i == 4):
            phrase = phrase.replace(letter, 'u');
            break;
          case (i == 5):
            phrase = phrase.replace(letter, 'A');
            break;
          case (i == 6):
            phrase = phrase.replace(letter, 'E');
            break;
          case (i == 7):
            phrase = phrase.replace(letter, 'I');
            break;
          case (i == 8):
            phrase = phrase.replace(letter, 'O');
            break;
          case (i == 9):
            phrase = phrase.replace(letter, 'U');
            break;
        }
      }
    }
  }
  return phrase;
}

function isPalindrome(phrase,isCaseSensitive,isSpaceSensitive,isAccentSensitive){
  if (isCaseSensitive === false){
    phrase = phrase.toLowerCase();
  }
  if (isSpaceSensitive === false){
    phrase = phrase.replaceAll(' ','');
  }
  if (isAccentSensitive === false){
    phrase = removeAccents(phrase);
  }
  let reversePhrase = phrase.split('');
  reversePhrase = reversePhrase.reverse();
  reversePhrase = reversePhrase.join('');
  return phrase === reversePhrase;
}
console.log(removeAccents('mÄrÁm'));
console.log(isPalindrome('mÄrÁm',true,false,false));