// varibles 
let listItem = []
// for adding item
const enterItem = document.getElementById('enterItem');
const addItem = document.getElementById('addItem');
const clearAll = document.getElementById('clearAll');

let listItemsContainer = document.querySelector('.listItems');

// functionality
addItem.addEventListener('click', () => {
    if (enterItem.value != ""){
        listItem.push(enterItem.value);
    }
    enterItem.value = "";
    genereteHtml();
});

clearAll.addEventListener('click', () => {
    listItem = [];
    genereteHtml();
});

function genereteHtml(){
    let temp = "";
    listItem.forEach((item, index) => {
        let generate = `
            <div class="item">
            <span id="name">${item}</span>
            <button class="remove" onclick="removing(${index})">x</button>
            </div>
        `;
        temp += generate;
    });
    listItemsContainer.innerHTML = temp;
    console.log(listItem);
}
function removing(index){
    listItem.splice(index, 1);
    genereteHtml();
}