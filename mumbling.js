
        function accum(s) {
    let result = ''; 
    
    for (let i = 0; i < s.length; i++) {
    
        result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + '-';
    }

    result = result.slice(0, -1);
    
    return result;
}
console.log(accum("abcd"));     
