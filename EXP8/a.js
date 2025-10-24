function findLargerNumber() {
  let num1 = parseInt(prompt("Enter first integer:"));
  let num2 = parseInt(prompt("Enter second integer:"));
  let num3 = parseInt(prompt("Enter third integer:"));
  
  if(num1 === num2 && num2 === num3) {
    alert("EQUAL NUMBERS");
  } else {
    let larger = Math.max(num1, num2, num3);
    alert(larger + " LARGER NUMBER");
  }
}
