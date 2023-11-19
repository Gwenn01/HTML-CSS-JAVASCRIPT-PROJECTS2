// variables
const add = document.getElementById('add');
const containerNoteEl = document.querySelector('.container');
let index = 1;
// functionality
add.addEventListener('click', () => {
    const newNote = document.createElement('textarea');
    newNote.setAttribute('placeholder', 'Empty Note');
    newNote.setAttribute('class', 'note');
    newNote.setAttribute('index', `${index}`);
    index += 1;
    containerNoteEl.appendChild(newNote);
    console.log(containerNoteEl)
    let notes = document.querySelectorAll('.note');
    notes.forEach(note => {
        note.addEventListener('dblclick', () => {
            if(note && note.parentNode === containerNoteEl){
                containerNoteEl.removeChild(note);
            }
        });
    });
});