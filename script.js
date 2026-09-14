const cursorLight = document.querySelector('.cursor-light');
const cursorToggle = document.querySelector(' .cursor-toggle');

cursorToggle.classList.toggle('active');

cursorToggle.addEventListener('click', () =>{
    cursorLight.classList.toggle('hidden');
    cursorToggle.classList.toggle('active');
})

document.addEventListener('mousemove', (e)=> {
    cursorLight.style.setProperty('--x', `${e.clientX}px`);
    cursorLight.style.setProperty('--y', `${e.clientY}px`);

});

