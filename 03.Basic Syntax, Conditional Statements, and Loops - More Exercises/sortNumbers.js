function solve(one, two, three) {
  let result = [one, two, three].sort((a, b) => b - a);
  console.log(result.join('\n'));
}

