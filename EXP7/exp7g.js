function showDateExamples() {
  let now = new Date();
  let info = "Current Date & Time: " + now + "<br>";
  info += "Year: " + now.getFullYear() + "<br>";
  info += "Month: " + (now.getMonth()+1) + "<br>";
  info += "Date: " + now.getDate() + "<br>";
  info += "Day: " + now.getDay() + "<br>";
  info += "Hours: " + now.getHours() + "<br>";
  info += "Minutes: " + now.getMinutes() + "<br>";
  info += "Seconds: " + now.getSeconds() + "<br>";
  document.getElementById("output").innerHTML = info;
}
