const cardsContainer = document.getElementById('cardsContainer');
let isDragging = false;
let startPosition = 0;
let scrollLeft = 0;
let slideIndex = 0;
let cardWidth = 220; // Lebar kartu + margin
let visibleCards = Math.floor(cardsContainer.offsetWidth / cardWidth);

// Update jumlah kartu yang terlihat ketika ukuran layar berubah
window.addEventListener('resize', () => {
    visibleCards = Math.floor(cardsContainer.offsetWidth / cardWidth);
});

// Auto scroll function per group
function autoScroll() {
    slideIndex += visibleCards;
    if (slideIndex >= cardsContainer.children.length) {
        slideIndex = 0;
    }
    cardsContainer.style.transform = `translateX(-${slideIndex * cardWidth}px)`;
}

// Set interval untuk scroll otomatis
setInterval(autoScroll, 3000); // Ganti angka ini untuk mengatur kecepatan

// Mouse and touch events for drag-to-scroll
cardsContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPosition = e.pageX - cardsContainer.offsetLeft;
    scrollLeft = cardsContainer.scrollLeft;
});

cardsContainer.addEventListener('mouseleave', () => {
    isDragging = false;
});

cardsContainer.addEventListener('mouseup', () => {
    isDragging = false;
});

cardsContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - cardsContainer.offsetLeft;
    const walk = (x - startPosition) * 2;
    cardsContainer.scrollLeft = scrollLeft - walk;
});

// Event untuk touch screen support
cardsContainer.addEventListener('touchstart', (e) => {
    isDragging = true;
    startPosition = e.touches[0].pageX - cardsContainer.offsetLeft;
    scrollLeft = cardsContainer.scrollLeft;
});

cardsContainer.addEventListener('touchend', () => {
    isDragging = false;
});

cardsContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - cardsContainer.offsetLeft;
    const walk = (x - startPosition) * 2;
    cardsContainer.scrollLeft = scrollLeft - walk;
});
