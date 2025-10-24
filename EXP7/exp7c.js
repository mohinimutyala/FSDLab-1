function showArrayInfo() {
  let fruits = ["Apple", "Banana", "Orange", "Mango"];

  let info = "Array Elements: " + fruits + "<br>";
  info += "Length of Array: " + fruits.length + "<br>";
  info += "First Element: " + fruits[0] + "<br>";
  
  fruits.push("Pineapple");
  info += "After push(): " + fruits + "<br>";
  
  fruits.pop();
  info += "After pop(): " + fruits + "<br>";
  
  fruits.unshift("Strawberry");
  info += "After unshift(): " + fruits + "<br>";
  
  fruits.shift();
  info += "After shift(): " + fruits + "<br>";
  
  fruits.sort();
  info += "After sort(): " + fruits + "<br>";
  
  fruits.reverse();
  info += "After reverse(): " + fruits + "<br>";

  document.getElementById("output").innerHTML = info;
}
