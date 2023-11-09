// variables
const unhappyEl = document.querySelector('.unhappy');
const normalEl= document.querySelector('.normal');
const satisfiedEl = document.querySelector('.satisfied');
const containerPick = document.querySelector('.container');
const containerReview = document.querySelector('.container2');
const submitBtn = document.getElementById('submit-review');
let yourReview = "";
//functionality
unhappyEl.addEventListener('click', () => {
    resetPick();
    unhappySelect();
    yourReview = "unhappy";
    sumbitReview();
});
function unhappySelect(){
    unhappyEl.style.backgroundColor = "lightGreen";
    unhappyEl.style.borderRadius = "10px";
};
normalEl.addEventListener('click', () => {
    resetPick();
    normalSelect();
    yourReview = "normal";
    sumbitReview();
});
function normalSelect(){
    normalEl.style.backgroundColor = "lightGreen";
    normalEl.style.borderRadius = "10px";
};
satisfiedEl.addEventListener('click', () => {
    resetPick();
    satisfiedSelect();
    yourReview = "satisfied";
    sumbitReview();
});
function satisfiedSelect(){
    satisfiedEl.style.backgroundColor = "lightGreen";
    satisfiedEl.style.borderRadius = "10px";
};
// reset pick
function resetPick(){
    unhappyEl.style.backgroundColor = "white";
    normalEl.style.backgroundColor = "white";
    satisfiedEl.style.backgroundColor = "white";
};
// submiting review
function sumbitReview(){
    submitBtn.addEventListener('click', () => {
        containerPick.style.display = "none";
        containerReview.style.display = "block";
        containerReview.style.display = "flex";
        const feedback = document.getElementById('feedback');
        feedback.innerText = `Feedback: ${yourReview}`;
    });
}