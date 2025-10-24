function showDenomination() {
  let amount = parseInt(prompt("Enter the amount:"));
  let notes = [100,50,20,10,5,2,1];
  let output = "Denomination of " + amount + ":<br>";
  
  for(let note of notes) {
    let count = Math.floor(amount / note);
    if(count > 0) {
      output += count + " - " + note + "'s<br>";
      amount = amount % note;
    }
  }
  
  document.getElementById("output").innerHTML = output;
}
