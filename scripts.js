const sequence = [
  { text: "Desenvolvedor Front-end Júnior | ", className: "" },
  { text: "HTML", className: "html" },
  { text: ", ", className: "" },
  { text: "CSS", className: "css" },
  { text: ", ", className: "" },
  { text: "JavaScript", className: "js" },
];

const typingElement = document.getElementById("typing");

let partIndex = 0;
let charIndex = 0;
let currentSpan = null;

function typeEffect() {
  if (partIndex >= sequence.length) return;

  const part = sequence[partIndex];

  // cria um span novo quando começa uma parte
  if (charIndex === 0) {
    currentSpan = document.createElement("span");
    if (part.className) {
      currentSpan.className = part.className;
    }
    typingElement.appendChild(currentSpan);
  }

  currentSpan.textContent += part.text.charAt(charIndex);
  charIndex++;

  if (charIndex === part.text.length) {
    partIndex++;
    charIndex = 0;
  }

  setTimeout(typeEffect, 60);
}
const hamburger = document.getElementById("hamburger");
const navList = document.querySelector(".nav-list");
hamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
});
typeEffect();
