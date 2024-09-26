document.addEventListener("DOMContentLoaded", () => {
    let insideOfDonut = document.getElementById("Layer_5");
    insideOfDonut.addEventListener("click", () => {
      document.getElementById("textbox").innerText = "You have clicked on the inside of the donut!";
    });
  });
  