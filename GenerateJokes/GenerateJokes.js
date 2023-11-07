// variables
const jokeEl = document.getElementById('jokes');
const btnGenerate = document.getElementById('generate');
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
    "How do you organize a space party? You 'planet'!",
    "I used to play piano by ear, but now I use my hands.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I couldn't figure out how to put my seatbelt on. Then it 'clicked.'",
    "I'm on a seafood diet. I see food, and I eat it!"
];
//functionality
btnGenerate.addEventListener('click', () => {
    waiting();
    let interval = setTimeout(() => {
        generateJokes();

        clearTimeout(interval); 
    }, 2000);
});
function generateJokes(){
    jokeEl.style.color = 'white';
    jokeEl.innerText = jokes[random()];
}
function waiting(){
    jokeEl.style.color = 'lightBlue';
    jokeEl.innerText = "Waitings...."
};
function random(){
    return Math.floor(Math.random() * jokes.length);
}
