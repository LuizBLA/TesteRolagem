document.querySelector('.next-button').addEventListener('click', function() {
    document.querySelector('.carousel').scrollBy({
        left: window.innerWidth, // Ajuste conforme a largura do slide
        behavior: 'smooth'
    });
});

document.querySelector('.prev-button').addEventListener('click', function() {
    document.querySelector('.carousel').scrollBy({
        left: -window.innerWidth,
        behavior: 'smooth'
    });
});

var swiper = new Swiper('.swiper-container', {
    // Parâmetros opcionais
    slidesPerView: 'auto', // Quantidade de slides visíveis simultaneamente
    spaceBetween: 10, // Espaço entre os slides
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Adicione mais configurações conforme necessário
});