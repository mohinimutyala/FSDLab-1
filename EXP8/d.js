function showObjectData() {
  const student = {name: "Alice", age: 20, course: "FSD"};

  let output = "Using for-in loop:<br>";
  for(let key in student) {
    output += key + ": " + student[key] + "<br>";
  }

  const arr = ["Red", "Green", "Blue"];
  output += "<br>Using forEach loop:<br>";
  arr.forEach(color => output += color + "<br>");

  output += "<br>Using for-of loop:<br>";
  for(let color of arr) {
    output += color + "<br>";
  }

  document.getElementById("output").innerHTML = output;
}
