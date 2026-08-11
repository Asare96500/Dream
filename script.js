const cursorLight = document.querySelector('.cursor-light');

document.addEventListener('mousemove', (e)=> {
    cursorLight.style.setProperty('--x', `${e.clientX}px`);
    cursorLight.style.setProperty('--y', `${e.clientY}px`);

})