document.addEventListener('DOMContentLoaded', () => {

const sky = document.querySelector('.sky');
const cursorLight = document.querySelector('.cursor-light');
const cursorToggle = document.querySelector(' .cursor-toggle');
const productsLink = document.getElementById('products-link');
const exploreBtn = document.querySelector('.explore-btn');
const logoBrand = document.querySelector('.logo-brand');
const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const navToggle = document.querySelector('.nav-toggle');
const primaryNavigation = document.getElementById('primary-navigation');
const productDetailsModal = document.querySelector('.products-section-sidebar');
const closeProductDetailsButton = document.querySelector('.active-item-close');
const productDetailsHome = {
    parent: productDetailsModal.parentElement,
    nextSibling: productDetailsModal.nextSibling
};
let productDetailsTrigger = null;

function closeMobileProductDetails(restoreFocus = false) {
    productDetailsModal.classList.remove('is-detail-open');
    productDetailsModal.removeAttribute('aria-modal');
    productDetailsModal.setAttribute(
        'aria-hidden',
        String(window.matchMedia('(max-width: 700px)').matches)
    );

    if (productDetailsModal.parentElement !== productDetailsHome.parent) {
        productDetailsHome.parent.insertBefore(productDetailsModal, productDetailsHome.nextSibling);
    }

    if (restoreFocus && productDetailsTrigger?.isConnected) {
        productDetailsTrigger.focus();
    }
}

productDetailsModal.setAttribute(
    'aria-hidden',
    String(window.matchMedia('(max-width: 700px)').matches)
);

function openMobileProductDetails(trigger) {
    if (!window.matchMedia('(max-width: 700px)').matches) return;

    productDetailsTrigger = trigger;
    document.body.appendChild(productDetailsModal);
    productDetailsModal.classList.add('is-detail-open');
    productDetailsModal.setAttribute('aria-modal', 'true');
    productDetailsModal.setAttribute('aria-hidden', 'false');
    closeProductDetailsButton.focus();
}

closeProductDetailsButton.addEventListener('click', () => closeMobileProductDetails(true));

productDetailsModal.addEventListener('click', (event) => {
    if (event.target === productDetailsModal) closeMobileProductDetails(true);
});

window.matchMedia('(min-width: 701px)').addEventListener('change', (event) => {
    if (event.matches) closeMobileProductDetails();
});

const setMobileNavOpen = (isOpen) => {
    document.querySelector('header').classList.toggle('is-menu-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
};

navToggle.addEventListener('click', () => {
    setMobileNavOpen(navToggle.getAttribute('aria-expanded') !== 'true');
});

primaryNavigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMobileNavOpen(false);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        setMobileNavOpen(false);
        closeMobileProductDetails(true);
    }
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('header')) setMobileNavOpen(false);
});

window.matchMedia('(min-width: 701px)').addEventListener('change', (event) => {
    if (event.matches) setMobileNavOpen(false);
});

/*Cursor Light */
cursorToggle.classList.toggle('active');
cursorToggle.addEventListener('click', () =>{
    cursorLight.classList.toggle('hidden');
    cursorToggle.classList.toggle('active');
})

document.addEventListener('mousemove', (e)=> {
    cursorLight.style.setProperty('--x', `${e.clientX}px`);
    cursorLight.style.setProperty('--y', `${e.clientY}px`);

});

/* Page Switching */

const setPlane = (planeName) => {
    sky.setAttribute('data-plane', planeName);
    setMobileNavOpen(false);
    closeMobileProductDetails();

    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    const activeLink = document.getElementById(`${planeName}-link`)
    if(activeLink){
        activeLink.classList.add('active');
    }

};

if(homeLink) homeLink.addEventListener('click', (e) => { e.preventDefault(); setPlane('home'); });
if(logoBrand) logoBrand.addEventListener('click', (e) =>  setPlane('home'));
if(productsLink) productsLink.addEventListener('click', (e) => { e.preventDefault(); setPlane('products'); });
if(exploreBtn) exploreBtn.addEventListener('click', (e) => { e.preventDefault(); setPlane('products'); });
if(aboutLink) aboutLink.addEventListener('click', (e) => { e.preventDefault(); setPlane('about'); });

const perfumes = [
    {
        id: 1,
        title: 'Velvet Oud',
        rating: '4.8',
        category: 'Signature Scent',
        details: 'Warm · Floral',
        description: 'A rich blend of velvet florals and warm woods, crafted for lingering evening impressions.',
        image: 'assests/Products/1.webp'
    },
    {
        id: 2,
        title: 'Celestial Noir',
        rating: '5.0',
        category: 'Night Bloom',
        details: 'Amber · Musk',
        description: 'Deep amber and smoky rose notes shimmer with midnight elegance and a modern sensual trail.',
        image: 'assests/Products/3.webp'
    },
    {
        id: 3,
        title: 'Saffron & Smoke',
        rating: '4.6',
        category: 'Culinary Aura',
        details: 'Spice · Resin',
        description: 'An atmospheric fusion of saffron, cedar, and smoky woods for a layered signature statement.',
        image: 'assests/Products/7.webp'
    },
    {
        id: 4,
        title: 'Midnight Bloom',
        rating: '4.9',
        category: 'Velvet Bloom',
        details: 'Rose · Jasmine',
        description: 'A luminous floral veil layered with sensual petals and silky musks for unforgettable nights.',
        image: 'assests/Products/9.webp'
    },
    {
        id: 5,
        title: 'Amber Royale',
        rating: '4.7',
        category: 'Golden Hour',
        details: 'Amber · Citrus',
        description: 'Golden amber and bright citrus open into a plush, luxe finish that feels rich and radiant.',
        image: 'assests/Products/2.webp'
    },
    {
        id: 6,
        title: 'Elysian Spice',
        rating: '4.4',
        category: 'Sunset Notes',
        details: 'Citrus · Spice',
        description: 'A breezy spice trail with citrus edges and a warm skin-soft finish.',
        image: 'assests/Products/8.webp'
    },
    {
        id: 7,
        title: 'Golden Vanilla',
        rating: '4.8',
        category: 'Sweet Heat',
        details: 'Vanilla · Sandal',
        description: 'Creamy vanilla blooms into soft sandalwood and warm woods for a comforting luxury aura.',
        image: 'assests/Products/5.webp'
    },
    {
        id: 8,
        title: 'Oceanic Drift',
        rating: '4.3',
        category: 'Coastal Mist',
        details: 'Marine · Musk',
        description: 'Fresh marine nuances meet soft musk and airy florals for a clean, luminous drift.',
        image: 'assests/Products/6.webp'
    },
    {
        id: 9,
        title: 'Iris & Cedar',
        rating: '4.5',
        category: 'Powdered Woods',
        details: 'Iris · Cedar',
        description: 'A polished blend of iris petals and cedarwood that feels crisp, elegant, and quietly bold.',
        image: 'assests/Products/4.webp'
    },
    {
        id: 10,
        title: 'Solar Nectar',
        rating: '4.9',
        category: 'Radiant Glow',
        details: 'Fruit · Bloom',
        description: 'A bright floral-fruity opening with honeyed warmth and a luminous golden finish.',
        image: 'assests/Products/10.webp'
    }
];

const cardsWrapper = document.getElementById('cards-wrapper');
const searchInput = document.querySelector('.search-input');
const activeItemImage = document.getElementById('active-item-image');
const activeItemName = document.getElementById('active-item-name');
const activeItemRating = document.getElementById('active-item-rating');
const activeItemDetails = document.getElementById('active-item-details');
const activeItemDescription = document.getElementById('active-item-description');

function getVisiblePerfumes() {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    if (!query) return perfumes;

    return perfumes.filter((perfume) => {
        return (
            perfume.title.toLowerCase().includes(query) ||
            perfume.category.toLowerCase().includes(query) ||
            perfume.details.toLowerCase().includes(query)
        );
    });
}

function renderCards(items) {
    if (!cardsWrapper) return;

    if (!items.length) {
        cardsWrapper.innerHTML = '<div class="no-products">No fragrance matches your search.</div>';
        return;
    }

    cardsWrapper.innerHTML = items.map((perfume) => `
        <article class="product-card${perfume.id === 1 ? ' is-active' : ''}" data-id="${perfume.id}">
            <div class="card-img-box">
                <img src="${perfume.image}" alt="${perfume.title}" loading="lazy">
            </div>
            <h3 class="card-title">${perfume.title}</h3>
            <div class="card-footer">
                <button class="discover-btn" type="button" data-id="${perfume.id}">Discover</button>
                <div class="card-rating">
                    <span class="star-icon">★</span>
                    <span class="rating-value">${perfume.rating}</span>
                </div>
            </div>
        </article>
    `).join('');
}

function showDetails(productId) {
    const product = perfumes.find((item) => item.id === Number(productId)) || perfumes[0];

    activeItemImage.src = product.image;
    activeItemImage.alt = product.title;
    activeItemName.textContent = product.title;
    activeItemRating.textContent = product.rating;
    activeItemDetails.textContent = product.details;
    activeItemDescription.textContent = product.description;

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card) => {
        const isActive = Number(card.dataset.id) === product.id;
        card.classList.toggle('is-active', isActive);
    });
}

renderCards(perfumes);

cardsWrapper.addEventListener('click', (event) => {
    const discoverBtn = event.target.closest('.discover-btn');
    if (!discoverBtn) return;

    showDetails(discoverBtn.dataset.id);
    openMobileProductDetails(discoverBtn);
});

if (searchInput) {
    searchInput.addEventListener('input', () => {
        const filteredPerfumes = getVisiblePerfumes();
        renderCards(filteredPerfumes);

        if (filteredPerfumes.length) {
            showDetails(filteredPerfumes[0].id);
        }
    });
}

showDetails(1);

})//domcontent loaded ending

