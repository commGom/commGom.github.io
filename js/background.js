const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
]
const chosenImage = images[parseInt(Math.random() * images.length)];
console.log(chosenImage);
document.querySelector(".container").style.backgroundImage = `url(img/${chosenImage})`;
document.querySelector(".container").style.backgroundRepeat = `no-repeat`;
document.querySelector(".container").style.backgroundSize = `cover`;

