const buttonPlus = document.querySelector('.btnPlus')
const buttonMinus = document.querySelector('.btnMinus')
const result = document.querySelector('.result')
const button2 =document.querySelector('.btn2')
const button3 =document.querySelector('.btn3')
let num = 0
result.innerText = num
console.log(result)
buttonPlus.addEventListener('click',() =>{
    if( num < 10 ){
        num +=1
        result.innerText = num
        buttonMinus.disabled = false
    } else {
        buttonPlus.disabled = true
    }


})

buttonMinus.addEventListener('click',() =>{
    if (num > 0){
        num -=1
        result.innerText = num
        buttonPlus.disabled = false
    }else {
        buttonMinus.disabled = true
    }
})

button2.addEventListener('click',() =>{
    if( num < 100 ){
        num =num**2
        result.innerText = num
        button2.disabled = false
    } else {
        button2.disabled = true
    }


})
button3.addEventListener('click',() => {
    if (num > 0) {
        num /= 2
        result.innerText = num
        button3.disabled = false
    } else {
        button3.disabled = true
    }
})