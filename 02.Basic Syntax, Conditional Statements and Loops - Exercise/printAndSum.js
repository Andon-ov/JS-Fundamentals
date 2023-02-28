function solve(n, m) {
    let ll = []
    let sum = 0;
    for (let i = n; i <= m; i++) {
        ll.push(i)
        sum += i
    }
    console.log(ll.join(' '))
    console.log(`Sum: ${sum}`)
}
