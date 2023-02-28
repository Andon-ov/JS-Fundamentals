function solve(text) {
  let result = [];
  for (let i = text.length - 1; i > -1; i--) {
    result.push(text[i]);
  }
  console.log(result.join(''));
}
solve("SoftUni");

