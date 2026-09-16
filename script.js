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




})//domcontent loaded ending

