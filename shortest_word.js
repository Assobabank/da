
        function findShort(s) {
  const words = s.split(" ");
  let minLength = words[0].length;

  for (let i = 1; i < words.length; i++) {
    const wordLength = words[i].length;
    if (wordLength < minLength) {
      minLength = wordLength;
    }
  }

  return minLength;
}
console.log(findShort("La chaine de mots renvoie la longueur du ou des mots les plus courts")); // Renvoie 2
