// Functions to change GitHub button on hover

function changeText() {
    document.querySelector('.github').innerHTML = "JRMeyers92"
}

function changeTextBack() {
    document.querySelector('.github').innerHTML = "GitHub";
}


// hire me event listener

document.querySelector('.nav__hire').addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.style.display = 'inline-block'
})

const modalX = document.querySelector('.fa-times');

modalX.addEventListener('click', () => {
    document.querySelector('.modal').style.display = "none";
})
