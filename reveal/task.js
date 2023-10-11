const divElements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    divElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        element.classList.toggle('reveal_active', isVisible);
    })
})