function solve(age) {
    if (age < 0) {
        console.log("out of bounds");
    } else if (2 >= age) {
        console.log('baby');
    } else if (13 >= age) {
        console.log('child');
    } else if (19 >= age) {
        console.log('teenager');
    } else if (65 >= age) {
        console.log('adult');
    } else if (age >= 66) {
        console.log('elder');
    }

}