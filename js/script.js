// LÓGICA DO CARROSSEL DE DESTAQUE COM TECLADO


const heroCarouselElement = document.getElementById('hero-carousel');
if (heroCarouselElement) {
    const heroCarousel = new bootstrap.Carousel(heroCarouselElement);
    const handleHeroKeydown = (event) => {
        const key = event.key.toLowerCase(); 

        if (key === 'arrowright' || key === 'd') {
            heroCarousel.next(); 
        } 
        else if (key === 'arrowleft' || key === 'a') {
            heroCarousel.prev(); 
        }
    };

    
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.addEventListener('keydown', handleHeroKeydown);
            } 
            else {
                document.removeEventListener('keydown', handleHeroKeydown);
            }
        });
    }, { 
        threshold: 0.5 // Ativa quando 50% do carrossel estiver visível
    });

    heroObserver.observe(heroCarouselElement);
}