let cardResults = ["Win", "Fail", "Fail"];

function flipCard(cardElement, index) {

const backFace = cardElement.querySelector(".card-back");

const result = cardResults[index];

backFace.textContent = result;

if (result === "Win") {
backFace.style.backgroundColor = "#27ae60";
} else {
backFace.style.backgroundColor = "#e74c3c";
}

cardElement.classList.add("is-flipped");

}

function shuffleArray() {
cardResults.sort(() => Math.random() - 0.5);
}

function resetGame() {

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
card.classList.remove("is-flipped");

const backFace = card.querySelector(".card-back");
backFace.textContent = "";
backFace.style.backgroundColor = "#ecf0f1";

});

shuffleArray();
}

shuffleArray();
