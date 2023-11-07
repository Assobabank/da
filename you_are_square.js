
function you_are_square(number) {

    if (number < 0) {
        return false;
    }
    const sqrt = Math.sqrt(number);
    return Number.isInteger(sqrt);
}

console.log(you_are_square(-1)); 

