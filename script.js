"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    console.log("No button clicked, noCount:", noCount); // Debugging line
    const imageIndex = Math.min(noCount, MAX_IMAGES - 1); // Limit the image index to MAX_IMAGES - 1
    changeImage(imageIndex); // Update image
    resizeYesButton();
    updateNoButtonText();
    if (noCount >= MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes"); // This changes to the "yes" image (penguin.png)
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;
  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure?",
    "Bebii please",
    "Lab mo pa ba ako ah?:(",
    "Sakit naman No lagi ih",
    "I'm gonna cry...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}
function changeImage(image) {
    if (image === "yes") {
      catImg.src = "img/penguin.png"; // Ensure this file exists
    } else {
      const validIndex = Math.min(image, MAX_IMAGES - 1); 
      const newSrc = `img/penguin-${validIndex}.png`;
  
      // Check if image exists before updating (prevents disappearing)
      const imgTest = new Image();
      imgTest.src = newSrc;
      imgTest.onload = function () {
        catImg.src = newSrc;
      };
      imgTest.onerror = function () {
        console.error("Image not found:", newSrc);
      };
    }
    console.log("Changed image to:", catImg.src);
  }
  

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
