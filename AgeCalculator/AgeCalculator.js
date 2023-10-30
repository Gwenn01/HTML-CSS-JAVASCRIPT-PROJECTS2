// variables
const inputBirthday = document.getElementById('input-birthday');
const btnCalculateAge = document.getElementById('calculate-age');
const yourAge = document.getElementById('your-age');
let age = 0;
// functionality
btnCalculateAge.addEventListener('click', () => {
    let input = inputBirthday.value
    input.toString();
    input = parseInt(input.slice(0, 4))
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    yourAge.innerHTML = `Your age is ${calculateYourAge(input, year)} years old`;
    age = 0;
});

function calculateYourAge(input, year){
    while (input < year){
        age++;
        input++;
    }
    return age;
}