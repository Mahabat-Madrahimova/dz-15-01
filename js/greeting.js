const a = document.querySelector('.button0');
const b = document.querySelector('.button1');
const c = document.querySelector('.h1');

let num = 0

a.onclick = () => {
    num = num + 1
    c.innerHTML = num
} 
b.onclick = () => {
    num = num - 1
    c.innerHTML = num
}