function checkVoterEligibility() {
  let name = prompt("Enter your name:");
  let ageInput = prompt("Enter your age:");
  let age = Number(ageInput);

  if (!name || isNaN(age)) {
    alert("Please enter valid name and age.");
    return;
  }

  let eligibility = age >= 18 ? "Eligible to Vote" : "Not Eligible to Vote";

  let tableHTML = "<table>";
  tableHTML += "<tr><th>Name</th><th>Age</th><th>Voting Eligibility</th></tr>";
  tableHTML += "<tr><td>" + name + "</td><td>" + age + "</td><td>" + eligibility + "</td></tr>";
  tableHTML += "</table>";

  document.getElementById("voterTable").innerHTML = tableHTML;
}
