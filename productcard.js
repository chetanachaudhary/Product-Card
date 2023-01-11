const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const tshirts = document.querySelectorAll('.t-shirt')
const gradients = document.querySelectorAll('.gradient');

function changeSize() {
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}
function changeColor() {
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');

    let tshirts = document.querySelector(`.t-shirt[color="${color}]`);
    let gradient = document.querySelector(`.gradient[color="${color}]`)

    colors.forEach(change => change.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);
    tshirts.forEach(t => t.classList.remove('show'));
    tshirts.classList.add('show');

    gradients.forEach(g => g.classList.remove('first'));
    gradient.classList.add('first');
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(change => change.addEventListener('click', changeColor));


function changeHeight() {
    let x = window.matchMedia("(max-width:1000px");

    if (x.matches) {
        let tshirtsHeight = tshirts[0].offsetHeight;
        console.log(tshirtsHeight);
    }
}

window.addEventListener('resize', changeHeight);
