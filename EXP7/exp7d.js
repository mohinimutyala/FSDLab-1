function showMathExamples() {
  let info = "Value of PI: " + Math.PI + "<br>";
  info += "Square root of 16: " + Math.sqrt(16) + "<br>";
  info += "Absolute value of -10: " + Math.abs(-10) + "<br>";
  info += "Random number (0-1): " + Math.random() + "<br>";
  info += "Round 4.7: " + Math.round(4.7) + "<br>";
  info += "Ceil 4.2: " + Math.ceil(4.2) + "<br>";
  info += "Floor 4.9: " + Math.floor(4.9) + "<br>";
  document.getElementById("output").innerHTML = info;
}
