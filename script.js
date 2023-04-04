const wrapper = document.querySelector('.wrapper')
const checkbox = document.querySelector('.checkbox')

const array = [
    {src: './assets/balloon.png', id: '1'},
    {src: './assets/balloon.png', id: '2'},
    {src: './assets/balloon.png', id: '3'},
    {src: './assets/balloon.png', id: '4'},
    {src: './assets/balloon.png', id: '5'},
    {src: './assets/balloon.png', id: '6'},
    {src: './assets/balloon.png', id: '7'},
    {src: './assets/balloon.png', id: '8'},
    {src: './assets/balloon.png', id: '9'},
]
wrapper.innerHTML = array.map(item => {
    return `<div class="col-4">
           <img src="${item.src}" alt="alt"/>
    </div>`
}).join('');


const balloons = document.querySelectorAll('img')
balloons.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('bg')
        setCheckbox();
    })
})

checkbox.addEventListener('click', () => {
    if (checkbox.checked === true) {
        balloons.forEach(item => {
            item.classList.add('bg')
        })
    } else {
        console.log(1);
        balloons.forEach(item => {
            item.classList.remove('bg')
        })
    }
})

function setCheckbox() {
    console.log('start');
    const backgrounds = [];

    balloons.forEach(baloon => {
        if (baloon.classList.contains('bg')) {
            backgrounds.push(true)
        }
    })

    checkbox.checked = backgrounds.length === balloons.length
}