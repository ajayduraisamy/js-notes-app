let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes(){
    localStorage.setItem("notes", JSON.stringify(notes));
}

function addNote(){
    const input = document.getElementById("noteInput");
    const text = input.value.trim();

    if(!text) return;

    notes.push(text);
    input.value = "";

    saveNotes();
    renderNotes();
}

function renderNotes(){
    const list = document.getElementById("notesList");
    list.innerHTML = "";

    notes.forEach((note, index) => {

        const div = document.createElement("div");
        div.className = "note";

        const span = document.createElement("span");
        span.innerText = note;

        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.onclick = () => editNote(index);

        const delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.onclick = () => deleteNote(index);

        div.appendChild(span);
        div.appendChild(editBtn);
        div.appendChild(delBtn);

        list.appendChild(div);
    });
}

function editNote(index){
    const updated = prompt("Edit note:", notes[index]);

    if(updated !== null && updated.trim() !== ""){
        notes[index] = updated.trim();
        saveNotes();
        renderNotes();
    }
}

function deleteNote(index){
    notes.splice(index, 1);
    saveNotes();
    renderNotes();
}

// Load stored notes
renderNotes();
