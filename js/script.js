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

// --- LÓGICA DE BUSCA (MODELOS) ---

const searchInput = document.getElementById('buscaCarro');
const cardsContainer = document.querySelector('.cards-container');

if (searchInput && cardsContainer) {
    searchInput.addEventListener('input', (e) => {
        const termo = e.target.value.toLowerCase();
        // Seleciona todos os wrappers de cartão
        const cartoes = cardsContainer.querySelectorAll('.car-card-wrapper');

        cartoes.forEach(cartao => {
            // Busca o título dentro do cartão
            const titulo = cartao.querySelector('.card-title').textContent.toLowerCase();
            
            if (titulo.includes(termo)) {
                // Mostra o cartão (remove d-none se estiver lá)
                cartao.classList.remove('d-none');
            } else {
                // Esconde o cartão usando a classe utilitária do Bootstrap
                cartao.classList.add('d-none');
            }
        });
    });
}

// --- LÓGICA DO AVISO LEGAL (POP-UP) ---
document.addEventListener('DOMContentLoaded', () => {
    const avisoLegal = document.getElementById('avisoLegal');
    const btnFechar = document.getElementById('btnFecharAviso');

    if (avisoLegal && btnFechar) {

        if (!sessionStorage.getItem('avisoLegalVisto')) {
            
            avisoLegal.style.display = 'block';
            avisoLegal.classList.add('fade-in-up'); // Vamos criar essa animação no CSS rapidinho
        }

        btnFechar.addEventListener('click', () => {
            avisoLegal.style.display = 'none';
            
            sessionStorage.setItem('avisoLegalVisto', 'true');
        });
    }
});