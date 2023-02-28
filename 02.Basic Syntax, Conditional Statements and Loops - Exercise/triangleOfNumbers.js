function solve(n) {
    for (let j = 1; j < n + 1; j++) {
        console.log(`${j} `.toString().repeat(j))
    }
}

solve(5)