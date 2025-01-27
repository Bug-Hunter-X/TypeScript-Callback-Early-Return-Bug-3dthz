function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This works fine

function printNumbersWithCallback(n: number, callback: (i: number) => void): void {
  for (let i = 1; i <= n; i++) {
    if (!callback(i)) {
      break; // Stop if the callback returns false 
    }
  }
}

printNumbersWithCallback(5, (i) => {
  if (i === 3) {
    return false; // Stop the loop
  }
  console.log(i);
  return true; // Continue the loop
});
// Expected Output: 1 2 