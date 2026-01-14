function setBase(file) {
  document.getElementById("base").src = "assets/" + file;
}

function setHair(file) {
  const hair = document.getElementById("hair");
  hair.src = "assets/" + file;
  hair.style.display = "block";
}

function removeHair() {
  const hair = document.getElementById("hair");
  hair.style.display = "none";
}
