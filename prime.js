function isPrime(num) {
  // Edge cases: 0, 1 and negative numbers are not prime
  if (num <= 1) return false;
  
  // Check from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Example usage
let number = 29;
if (isPrime(number)) {
  console.log(`${number} is a prime number.`);
} else {
  console.log(`${number} is not a prime number.`);
}
