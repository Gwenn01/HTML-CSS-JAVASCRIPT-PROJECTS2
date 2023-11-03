// variables 
const colors = document.querySelectorAll('.colors');
const generate = document.getElementById('generate');
let hexadecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
// functionality
generateRnadomColors();
generate.addEventListener('click', () => {
    generateRnadomColors();
});
function generateRnadomColors(){
    colors.forEach((color) => {
        let hexa = "#";
        for(let i = 0; i < 6; i++){
            hexa += hexadecimal[random()];
        }
        color.style.backgroundColor = hexa;
        color.innerHTML = hexa;
    })
}
function random(){
    return Math.floor(Math.random() * hexadecimal.length);
}