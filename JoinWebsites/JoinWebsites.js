// variables 
const joinNow = document.getElementById('join-now');
const signUp = document.querySelector('.sign-up');

// functionality
joinNow.addEventListener('click', () => {
    join();
    removing();
    submiting();
});

function join(){
    signUp.style.display = "block";
    signUp.style.display = "flex";
};
function removing(){
    let x = document.querySelector('#remove');
    let submit = document.querySelector('#submit');
    x.addEventListener('click', () => {
        signUp.style.display = "none";
    });
};
function submiting(){
    let inputs = document.querySelectorAll('input');
    let submit = document.querySelector('#submit');
    let count = inputs.length;
    submit.addEventListener('click', () => {
        inputs.forEach((input) => {
            if (input.value != ""){
                count--;
            }
        });
        if(count == 0){
            inputs.forEach((input) => {
               input.value = "";
            });
            signUp.style.display = "none";
            count = inputs.length;
        }
    });
};
    