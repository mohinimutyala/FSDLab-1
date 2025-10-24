function showRegexExamples() {
  let str = "The rain in SPAIN stays mainly in the plain";
  let regex1 = /ain/g;
  let regex2 = /Spain/i;

  let info = "String: " + str + "<br>";
  info += "Search 'ain': " + str.match(regex1) + "<br>";
  info += "Test 'Spain': " + regex2.test(str) + "<br>";
  info += "Replace 'plain' with 'land': " + str.replace(/plain/, "land") + "<br>";

  document.getElementById("output").innerHTML = info;
}
