    function XO(str)
        
    {
  const lowerCaseStr = str.toLowerCase();
  const countX = (lowerCaseStr.match(/x/g) || []).length;
  const countO = (lowerCaseStr.match(/o/g) || []).length;
  
  
  return countX === countO;
}
console.log(XO("ooxx"));     
