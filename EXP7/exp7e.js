function showStringExamples() {
  let str = "Hello World";
  let info = "String: " + str + "<br>";
  info += "Length: " + str.length + "<br>";
  info += "Uppercase: " + str.toUpperCase() + "<br>";
  info += "Lowercase: " + str.toLowerCase() + "<br>";
  info += "Character at index 4: " + str.charAt(4) + "<br>";
  info += "Substring (0,5): " + str.substring(0,5) + "<br>";
  info += "Split by space: " + str.split(" ") + "<br>";
  document.getElementById("output").innerHTML = info;
}
