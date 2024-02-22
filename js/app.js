const cardsContainer = document.querySelector('.cards-container');
const cards = document.querySelectorAll('.cards');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

function updateSliderPosition() {
  cardsContainer.style.transform = `translateX(-${currentIndex * 250}px)`;
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




const text = document.querySelector('.sec-text');
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Web-Devoloper";
            }, 0);
            setTimeout(() => {
                text.textContent = "Digital Marketer";
            }, 4000);
            setTimeout(() => {
                text.textContent = "UI/UX Designer";
            }, 8000);
            setTimeout(() => {
                text.textContent = "Freelancer";
            }, 12000);
            setTimeout(() => {
                text.textContent = "Web-Devoloper";
            }, 16000);
            setTimeout(() => {
                text.textContent = "Digital Marketer";
            }, 20000);
            setTimeout(() => {
                text.textContent = "UI/UX Designer";
            }, 24000);
            setTimeout(() => {
                text.textContent = "Freelancer";
            }, 28000);setTimeout(() => {
                text.textContent = "Web-Devoloper";
            }, 32000);
            setTimeout(() => {
                text.textContent = "Digital Marketer";
            }, 36000);
            setTimeout(() => {
                text.textContent = "UI/UX Designer";
            }, 40000);
            setTimeout(() => {
                text.textContent = "Freelancer.";
            }, 44000);
        }
        textLoad();