// varibales 
const rollDice = document.getElementById('roll-dice');
const dice = document.getElementById('dice');
const diceHistory = document.querySelector('.history');
let history = "";
let roll = 1;
// functionality
rollDice.addEventListener('click', () => {
    let randomDice = random();
    dice.innerHTML = `<img src="Image/dice${randomDice}.png" alt="dice" class="dice-pic">`;
    
    history += `
    <div class="roll">
        <h2>Roll ${roll}: </h2>
        <span id="dice-istory"><img src="Image/dice${randomDice}.png" alt="dice" class="dice-his"></span>
    </div>
    `;
    roll++;
    diceHistory.innerHTML = history;
})

function random(){
    return Math.floor(Math.random() * 6) + 1;
}
