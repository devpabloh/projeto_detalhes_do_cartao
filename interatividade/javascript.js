// JavaScript para o funcionamento do carrossel
const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const carouselItems = carousel.querySelectorAll('.carousel-item');

let currentIndex = 0;
const totalItems = carouselItems.length;
let itemWidth = carousel.clientWidth;

// Configura o tamanho do contêiner interno
carouselInner.style.width = `${totalItems * 100}%`;

// Ajusta o tamanho de cada item
carouselItems.forEach(item => {
  item.style.width = `${itemWidth}px`;
});

// Função para mover o carrossel para o próximo item
function moveToNext() {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // volta ao primeiro item ao chegar ao final
  }
  updateCarousel();
}

// Função para mover o carrossel para o item anterior
function moveToPrev() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 1; // vai para o último item ao chegar ao início
  }
  updateCarousel();
}

// Função para atualizar a posição do carrossel
function updateCarousel() {
  const offset = -currentIndex * itemWidth;
  carouselInner.style.transform = `translateX(${offset}px)`;
}

// Atualizar largura dos itens ao redimensionar a janela
window.addEventListener('resize', () => {
  itemWidth = carousel.clientWidth;
  carouselItems.forEach(item => {
    item.style.width = `${itemWidth}px`;
  });
  updateCarousel();
});
