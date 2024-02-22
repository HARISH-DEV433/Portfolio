const cardsContainer = document.querySelector('.cards-container');
const cards = document.querySelectorAll('.cards');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

function updateSliderPosition() {
  cardsContainer.style.transform = `translateX(-${currentIndex * 370}px)`;
}

function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateSliderPosition();
}

function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateSliderPosition();
}

prevButton.addEventListener('click', prevCard);
nextButton.addEventListener('click', nextCard);

function autoSlide() {
    nextCard();
    setTimeout(autoSlide, 3000); // Change card every 3 seconds
}

autoSlide();

