function solve(n) {
    let divisionNum = false
    let division = [10, 7, 6, 3, 2,]

    for (const num of division) {
        if (n % num === 0) {
            console.log(`The number is divisible by ${num}`)
            divisionNum = true
            break
        }
    }

    if (!divisionNum) {

        console.log("Not divisible")

    }
}

// solve(1643)
solve(10)

// division.forEach((value,) => {
//         if (n % value === 0) {
//             console.log(`The number is divisible by ${value}`)
//             divisionNum = true
//
//         }
//     })