function computeFactorial() {
  let num = parseInt(prompt("Enter a number for factorial:"));
  let fact = 1;
  for(let i=1; i<=num; i++) fact *= i;
  document.getElementById("output").innerHTML = "Factorial of " + num + " is: " + fact;
}

function computeFibonacci() {
  let n = parseInt(prompt("Enter the number of terms for Fibonacci series:"));
  let fib = [0,1];
  for(let i=2; i<n; i++) {
    fib[i] = fib[i-1] + fib[i-2];
  }
  document.getElementById("output").innerHTML = "Fibonacci Series up to " + n + " terms: " + fib.slice(0,n).join(", ");
}

function showPrimes() {
  let n = parseInt(prompt("Enter a number to show primes up to it:"));
  let primes = [];
  for(let i=2; i<=n; i++) {
    let isPrime = true;
    for(let j=2; j<=Math.sqrt(i); j++) {
      if(i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if(isPrime) primes.push(i);
  }
  document.getElementById("output").innerHTML = "Prime numbers up to " + n + ": " + primes.join(", ");
}

function checkPalindrome() {
  let str = prompt("Enter a string or number to check palindrome:");
  let reversed = str.split("").reverse().join("");
  let result = (str === reversed) ? "is a Palindrome" : "is NOT a Palindrome";
  document.getElementById("output").innerHTML = str + " " + result;
}
