function showDocumentInfo() {
  let info = "Document URL: " + document.URL + "<br>" +
             "Document Title: " + document.title + "<br>" +
             "Document Domain: " + document.domain + "<br>" +
             "Document Last Modified: " + document.lastModified + "<br>" +
             "Number of Links: " + document.links.length;
  document.getElementById("output").innerHTML = info;
}

function changeTitle() {
  document.title = "New Page Title";
  alert("Page title changed to: " + document.title);
}
