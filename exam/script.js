document.getElementById("colorButton").addEventListener("click", () => {
  const colors = ["#f4f4f9", "#e0f7fa", "#ffecb3", "#ffe0b2", "#d1c4e9"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
