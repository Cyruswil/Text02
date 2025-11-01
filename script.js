function hamburg() {
  document.querySelector(".dropdown").classList.add("active");
}

function cancel() {
  document.querySelector(".dropdown").classList.remove("active");
}

const texts = ["Developer", "Youtuber", "Designer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typewriter-text").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 4000); // Wait 2 seconds before switching
  } else {
    setTimeout(type, 150); // Typing speed
  }
})();
