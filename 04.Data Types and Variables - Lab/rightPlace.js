function solve(str, char, result) {
    let word = str.replace('_', char);
    let output = word === result ? "Matched" : "Not Matched";
    console.log(output);
}
solve('Str_ng', 'i', 'String')