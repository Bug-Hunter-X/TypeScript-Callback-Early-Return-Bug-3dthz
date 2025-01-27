function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This works fine

function printNumbersWithCallback(n: number, callback: (i: number) => void): void {
  for (let i = 1; i <= n; i++) {
    callback(i);
  }
}

printNumbersWithCallback(5, (i) => {
  if (i === 3) {
    return; // Early exit from callback, but loop continues
  }
  console.log(i);
});
// Expected Output: 1 2 
// Actual Output: 1 2 3 4 5