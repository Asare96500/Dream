document.addEventListener('DOMContentLoaded', () => {

const sky = document.querySelector('.sky');
const cursorLight = document.querySelector('.cursor-light');
const cursorToggle = document.querySelector(' .cursor-toggle');
const productsLink = document.getElementById('products-link');
const exploreBtn = document.querySelector('.explore-btn');
const logoBrand = document.querySelector('.logo-brand');
const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');

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

const createProductArt = (palette) => {
    const [base, glow, accent, highlight] = palette;
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${base}"/>
            <stop offset="45%" stop-color="${glow}"/>
            <stop offset="100%" stop-color="${accent}"/>
          </linearGradient>
          <radialGradient id="orb1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="${highlight}" stop-opacity="0.9"/>
            <stop offset="100%" stop-color="${highlight}" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="orb2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="rgba(255,255,255,0.65)"/>
            <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
          </radialGradient>
          <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="34"/>
          </filter>
        </defs>

        <rect width="1200" height="900" fill="url(#bg)"/>
        <circle cx="880" cy="220" r="330" fill="url(#orb1)" filter="url(#softBlur)"/>
        <circle cx="340" cy="670" r="290" fill="url(#orb2)" filter="url(#softBlur)" opacity="0.75"/>

        <g opacity="0.42">
          <path d="M0 720C180 610 260 580 390 560C560 535 650 590 805 640C930 681 1050 685 1200 625V900H0Z" fill="rgba(255,255,255,0.18)"/>
          <path d="M0 790C200 700 320 660 470 670C620 680 760 740 890 770C980 790 1090 790 1200 740V900H0Z" fill="rgba(255,255,255,0.12)"/>
        </g>

        <rect x="110" y="120" width="980" height="660" rx="42" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.14)"/>
        <path d="M250 560C340 450 410 400 520 350C640 295 790 255 930 330" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="8" stroke-linecap="round"/>
        <path d="M290 630C420 530 550 500 690 520C790 534 875 565 955 620" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="7" stroke-linecap="round"/>
        <circle cx="210" cy="290" r="68" fill="rgba(255,255,255,0.1)"/>
        <circle cx="930" cy="365" r="90" fill="rgba(255,255,255,0.08)"/>
      </svg>
    `;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

const perfumes = [
    {
        id: 1,
        title: 'Velvet Oud',
        rating: '4.8',
        category: 'Signature Scent',
        details: 'Warm · Floral',
        description: 'A rich blend of velvet florals and warm woods, crafted for lingering evening impressions.',
        image: createProductArt(['#090d1f', '#3f2d59', '#b67d5e', '#f7d7a3'])
    },
    {
        id: 2,
        title: 'Celestial Noir',
        rating: '5.0',
        category: 'Night Bloom',
        details: 'Amber · Musk',
        description: 'Deep amber and smoky rose notes shimmer with midnight elegance and a modern sensual trail.',
        image: createProductArt(['#090d14', '#372b46', '#a95f60', '#f0c6b2'])
    },
    {
        id: 3,
        title: 'Saffron & Smoke',
        rating: '4.6',
        category: 'Culinary Aura',
        details: 'Spice · Resin',
        description: 'An atmospheric fusion of saffron, cedar, and smoky woods for a layered signature statement.',
        image: createProductArt(['#18110d', '#553828', '#c28346', '#f4d5a0'])
    },
    {
        id: 4,
        title: 'Midnight Bloom',
        rating: '4.9',
        category: 'Velvet Bloom',
        details: 'Rose · Jasmine',
        description: 'A luminous floral veil layered with sensual petals and silky musks for unforgettable nights.',
        image: createProductArt(['#1a1528', '#6d436f', '#d06ea6', '#f2d2e7'])
    },
    {
        id: 5,
        title: 'Amber Royale',
        rating: '4.7',
        category: 'Golden Hour',
        details: 'Amber · Citrus',
        description: 'Golden amber and bright citrus open into a plush, luxe finish that feels rich and radiant.',
        image: createProductArt(['#1f1a12', '#7a552c', '#d89d49', '#f8e5a8'])
    },
    {
        id: 6,
        title: 'Elysian Spice',
        rating: '4.4',
        category: 'Sunset Notes',
        details: 'Citrus · Spice',
        description: 'A breezy spice trail with citrus edges and a warm skin-soft finish.',
        image: createProductArt(['#231813', '#8d4632', '#f29c63', '#ffe2af'])
    },
    {
        id: 7,
        title: 'Golden Vanilla',
        rating: '4.8',
        category: 'Sweet Heat',
        details: 'Vanilla · Sandal',
        description: 'Creamy vanilla blooms into soft sandalwood and warm woods for a comforting luxury aura.',
        image: createProductArt(['#201812', '#5f463f', '#c79d72', '#f5ddc0'])
    },
    {
        id: 8,
        title: 'Oceanic Drift',
        rating: '4.3',
        category: 'Coastal Mist',
        details: 'Marine · Musk',
        description: 'Fresh marine nuances meet soft musk and airy florals for a clean, luminous drift.',
        image: createProductArt(['#0a1b2d', '#295174', '#82bddf', '#d9f3ff'])
    },
    {
        id: 9,
        title: 'Iris & Cedar',
        rating: '4.5',
        category: 'Powdered Woods',
        details: 'Iris · Cedar',
        description: 'A polished blend of iris petals and cedarwood that feels crisp, elegant, and quietly bold.',
        image: createProductArt(['#1a1a25', '#4f4d7a', '#a7a0d8', '#f0ebff'])
    },
    {
        id: 10,
        title: 'Solar Nectar',
        rating: '4.9',
        category: 'Radiant Glow',
        details: 'Fruit · Bloom',
        description: 'A bright floral-fruity opening with honeyed warmth and a luminous golden finish.',
        image: createProductArt(['#26190e', '#7c4b1f', '#d9aa47', '#fde7a2'])
    }
];

const cardsWrapper = document.getElementById('cards-wrapper');
const searchInput = document.querySelector('.search-input');
const activeItemImage = document.getElementById('active-item-image');
const activeItemCategory = document.getElementById('active-item-category');
const activeItemName = document.getElementById('active-item-name');
const activeItemRating = document.getElementById('active-item-rating');
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
    activeItemCategory.textContent = product.category;
    activeItemName.textContent = product.title;
    activeItemRating.textContent = product.rating;
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

