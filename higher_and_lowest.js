
        function HighAndLow(numbers) {
  const numberArray = numbers.split(" ").map(Number);

  const maxNumber = Math.max(...numberArray);
  const minNumber = Math.min(...numberArray);

  return `${maxNumber} ${minNumber}`;
}
console.log(HighAndLow("1 2 3 4 5"));    
