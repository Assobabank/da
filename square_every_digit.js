
        function squareDigits(num) {
  const numStr = num.toString();
  let result = '';
  for (let i = 0; i < numStr.length; i++) {
    const digit = parseInt(numStr[i]);
    const squaredDigit = digit * digit;
    result += squaredDigit;
  }
  return parseInt(result);
}
console.log(squareDigits(9119));

   