// varibales 
const input = document.getElementById('input');
const result = document.getElementById('result');
//functionality
input.addEventListener('input', () => {
    let value = parseInt(input.value);
    result.innerText = value * 0.45
})