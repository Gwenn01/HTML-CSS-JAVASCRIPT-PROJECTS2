// variables 
const btnShows = document.querySelectorAll('.show');
const answersEle = document.querySelectorAll('.answers');
let isShow = [true, true, true];
// functionality
btnShows.forEach((btnShow, index) => {
    btnShow.addEventListener('click', () => {
        shwowingAnswers(btnShow, index);
    });
});

function shwowingAnswers(btnShow, index){
    // checking if its already shows
    if (isShow[index]){
        answersEle[index].style.display = 'block';
        btnShow.innerHTML = "-";
        isShow[index] = false;
    }else{
        answersEle[index].style.display = 'none';
        btnShow.innerHTML = "+";
        isShow[index] = true;
    };
}