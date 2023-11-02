// variables
const input = document.getElementById('input');
const totalEle = document.getElementById('total');
const remainningEle = document.getElementById('remaining');
let character = "";
let total = 0;
let ramainning = 50;
// functionality
input.addEventListener('input', () => {
    ramainning = 50;
    character = input.value;
    total = character.length;
    ramainning -= total;

    remainningEle.innerHTML = ramainning;
    totalEle.innerHTML = total;
    if (total >= 50) {
        input.value = character.substring(0, 49); // Truncate the input
    }
});