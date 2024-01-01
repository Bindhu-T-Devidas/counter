let notes = []; // Array to store entered notes
let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


function addNote() {
    const noteInput = document.getElementById("note-input");
    const note = noteInput.value;

    if (note.trim() !== "") {
        notes.push(note);
        displayNotes();
        noteInput.value = ""; // Clear the input field
    }
}

function displayNotes() {
    const SaveEl = document.getElementById("save-El");
    SaveEl.textContent = "Previous entries: " + notes.join(", ");
}


console.log("Let's count !")