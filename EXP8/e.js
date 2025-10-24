function checkArmstrong() {
  let num = parseInt(prompt("Enter a number:"));
  let sum = 0;
  let temp = num;
  while(temp > 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
  }
  if(sum === num) alert(num + " is an Armstrong Number");
  else alert(num + " is NOT an Armstrong Number");
}
