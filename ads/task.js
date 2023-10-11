const rotatorCases = document.querySelectorAll('.rotator__case');

function rotate(index) {
    const activeCase = document.querySelector('.rotator__case_active');
    activeCase.classList.remove('rotator__case_active');

    const speed = rotatorCases[index].getAttribute('data-speed');
    const color = rotatorCases[index].getAttribute('data-color');
    rotatorCases[index].classList.add('rotator__case_active');
    rotatorCases[index].style.color = color;

    setTimeout(() => {
        rotate((index + 1) % rotatorCases.length);
    }, speed);
}

rotate(0);