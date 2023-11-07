
        function complémentADN(adn) {
  let complément = '';

  for (let i = 0; i < adn.length; i++) {
    const base = adn[i];

    switch (base) {
      case 'A':
        complément += 'T';
        break;
      case 'T':
        complément += 'A';
        break;
      case 'C':
        complément += 'G';
        break;
      case 'G':
        complément += 'C';
        break;
    }
  }

  return complément;
}

console.log(complémentADN("GTAT"));  // Renvoie "CATA"

    