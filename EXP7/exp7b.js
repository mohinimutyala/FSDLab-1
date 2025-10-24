function showWindowInfo() {
  let info = "Window Inner Width: " + window.innerWidth + "<br>" +
             "Window Inner Height: " + window.innerHeight + "<br>" +
             "Window Outer Width: " + window.outerWidth + "<br>" +
             "Window Outer Height: " + window.outerHeight + "<br>" +
             "Screen Width: " + window.screen.width + "<br>" +
             "Screen Height: " + window.screen.height;
  document.getElementById("output").innerHTML = info;
}

function openNewWindow() {
  window.open("https://www.example.com", "_blank", "width=600,height=400");
}
