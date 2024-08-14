document.addEventListener('DOMContentLoaded', function () {
    // Ajustar el margen superior del carrusel según la altura del navbar
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.style.marginTop = `${navbarHeight}px`;
    }
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > navbarHeight) {
            navbar.classList.add('scrolled');
            carousel.style.marginTop = '50px'; // Ajusta el margen según el tamaño del navbar cuando se hace scroll
        } else {
            navbar.classList.remove('scrolled');
            carousel.style.marginTop = `${navbarHeight}px`; // Ajusta el margen según el tamaño del navbar en la parte superior
        }
    }); 
    // Carousel setup
    if (carousel) {
        var carouselItems = carousel.querySelectorAll('.carousel-item');
        if (carouselItems.length === 0) {
            console.error('No se encontraron elementos en el carrusel.');
            return;
        }

        carousel.addEventListener('slide.bs.carousel', function (e) {
            var currentIndex = Array.prototype.indexOf.call(carouselItems, e.relatedTarget);
            var prevIndex = Array.prototype.indexOf.call(carouselItems, e.from);

            if (carouselItems[prevIndex]) {
                carouselItems[prevIndex].classList.add('expand-exit');
            }
            if (carouselItems[currentIndex]) {
                carouselItems[currentIndex].classList.add('expand-enter');
            }
        });

        carousel.addEventListener('slid.bs.carousel', function (e) {
            carouselItems.forEach(function (item) {
                item.classList.remove('expand-enter', 'expand-exit');
            });
        });
    }
});
    