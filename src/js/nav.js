function toggleElement(elementID) {
  var x = document.getElementById(elementID);
  x.style.display == "none"
    ? (x.style.display = "block")
    : (x.style.display = "none");
}
