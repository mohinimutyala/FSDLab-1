function getInputNumber() {
  return parseInt(document.getElementById("numberInput").value);
}

function computeFactorial() {
  let num = getInputNumber();
  if(isNaN(num) || num < 0) {
    document.getElementById("output").innerHTML = "Enter a valid non-negative number!";
    return;
  }
  let fact = 1;
  for(let i=1; i<=num; i++) fact *= i;
  document.getElementById("output").innerHTML = "Factorial of " + num + " is: " + fact;
}

function computeFibonacci() {
  let n = getInputNumber();
  if(isNaN(n) || n < 1) {
    document.getElementById("output").innerHTML = "Enter a valid positive number!";
    return;
  }
  let fib = [0,1];
  for(let i=2; i<n; i++) fib[i] = fib[i-1] + fib[i-2];
  document.getElementById("output").innerHTML = "Fibonacci Series up to " + n + " terms: " + fib.slice(0,n).join(", ");
}

function showPrimes() {
  let n = getInputNumber();
  if(isNaN(n) || n < 2) {
    document.getElementById("output").innerHTML = "Enter a number greater than 1!";
    return;
  }
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
  let num = getInputNumber();
  if(isNaN(num)) {
    document.getElementById("output").innerHTML = "Enter a valid number!";
    return;
  }
  let str = num.toString();
  let reversed = str.split("").reverse().join("");
  let result = (str === reversed) ? "is a Palindrome" : "is NOT a Palindrome";
  document.getElementById("output").innerHTML = str + " " + result;
}
