// variables
const score = document.getElementById('score');
const question = document.getElementById('question');
const input = document.getElementById('input');
const submit = document.getElementById('submit');
let scoree = 0;
let answer;
let num1;
let num2;
// functionality
questions();
submit.addEventListener('click', () => {
    correctAnswer();
    score.innerHTML = `score: ${scoree}`;
    questions();
});
function questions(){
    num1 = randomNum1();
    num2 = randomNum2();
    let questionHtml = `
        What is ${num1} multiply by ${num2}?
    `;
    question.innerHTML = questionHtml;
}
function correctAnswer(){
    answer = num1 * num2;
    console.log(answer);
    console.log(input.value);
    if (answer == input.value){
        scoree++;
    }else{
        scoree--;
    }
    input.value = "";
}
function randomNum1(){
    return Math.floor(Math.random() * 10) + 1
}
function randomNum2(){
    return Math.floor(Math.random() * 10) + 1
}