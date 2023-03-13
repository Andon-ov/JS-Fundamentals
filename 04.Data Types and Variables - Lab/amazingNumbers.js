function solve(input) {
    let num = Array.from(input.toString());
    let sum = num.reduce((a, b) => Number(a) + Number(b));
    let result = sum.toString().includes('9');
    console.log(result ?
        `${input} Amazing? True` :
        `${input} Amazing? False`);
}
solve(1233);