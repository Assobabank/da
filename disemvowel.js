
        function removeVowels(inputString) {
  const vowels = "AEIOUaeiou";
  let result = "";
  for (let i = 0; i < inputString.length; i++) {
    if (vowels.indexOf(inputString[i]) === -1) {
      result += inputString[i];
    }
  }
  return result;
}

const inputString = "This website is for losers LOL!";
const outputString = removeVowels(inputString);
console.log(outputString);  

  