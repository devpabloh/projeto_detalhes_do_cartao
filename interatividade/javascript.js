const carousel = document.querySelector('.carousel');
  const carouselInner = carousel.querySelector('.carousel-inner');
  const carouselItems = carousel.querySelectorAll('.carousel-item');

  let currentIndex = 0;
  const totalItems = carouselItems.length;
  const itemWidth = carousel.clientWidth;

  // Configura o tamanho do contêiner interno
  carouselInner.style.width = `${totalItems * 100}%`;

  // Configura o tamanho de cada item
  carouselItems.forEach(item => {
    item.style.width = `${itemWidth}px`;
  });

  // Função para mover o carrossel para o próximo item
  function moveToNext() {
    if (currentIndex < totalItems - 1) {
      currentIndex++;
      carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  }

  // Função para mover o carrossel para o item anterior
  function moveToPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  }