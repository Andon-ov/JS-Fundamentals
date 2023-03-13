function solve(input) {
    if (typeof (input) === 'number') {
        console.log(typeof (input));
        console.log(input);
    } else if (typeof (input) === 'string') {
        console.log(typeof (input));
        console.log(input);
    } else {
        console.log(typeof (input));
        console.log('Parameter is not suitable for printing');
    }

}

solve(null)
// console.log(typeof('20'));