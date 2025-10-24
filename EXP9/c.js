function validateForm() {
  let name = document.getElementById("name").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let email = document.getElementById("email").value.trim();
  let output = "";

  
  let namePattern = /^[A-Za-z][A-Za-z0-9]{5,}$/;
  if(!namePattern.test(name)) {
    output += "Invalid Name! Must start with letter, alphanumeric, min 6 chars.<br>";
  }

  
  let mobilePattern = /^[0-9]{10}$/;
  if(!mobilePattern.test(mobile)) {
    output += "Invalid Mobile! Must be 10 digits.<br>";
  }

  
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(!emailPattern.test(email)) {
    output += "Invalid Email! Must be in format xxxxxxx@xxxxxx.xxx<br>";
  }

  if(output) {
    document.getElementById("output").innerHTML = output;
    return false;
  } else {
    document.getElementById("output").style.color = "green";
    document.getElementById("output").innerHTML = "Registration Successful!";
    return false; 
  }
}
