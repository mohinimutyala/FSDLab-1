function printNumbers() {
  let output = "Using for loop: ";
  for(let i=1; i<=10; i++) output += i + " ";
  
  output += "<br>Using while loop: ";
  let i=1;
  while(i<=10) {
    output += i + " ";
    i++;
  }

  output += "<br>Using do-while loop: ";
  i=1;
  do {
    output += i + " ";
    i++;
  } while(i<=10);

  document.getElementById("output").innerHTML = output;
}
