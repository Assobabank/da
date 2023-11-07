
        function trierParOrdreDécroissant(n) {
  const chiffres = n.toString().split('').map(Number);

  const chiffresTries = chiffres.sort((a, b) => b - a);

  const nombreMax = parseInt(chiffresTries.join(''));

  return nombreMax;
}
console.log(trierParOrdreDécroissant(42145)); 

   