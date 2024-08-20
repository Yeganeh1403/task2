const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

const handleFocus = (e) => {
  input1.style.width = "200px";
  input2.style.width = "200px";
  e.target.style.width = "300px";
};

input1.addEventListener("focus", handleFocus);
input2.addEventListener("focus", handleFocus)