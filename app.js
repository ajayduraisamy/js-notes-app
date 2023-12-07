let notes = [];

function addNote(){
    const input = document.getElementById("noteInput");
    const text = input.value.trim();

    if(!text) return;

    notes.push(text);
    input.value = "";

    renderNotes();
}

function renderNotes(){
    const list = document.getElementById("notesList");
    list.innerHTML = "";

    notes.forEach(note => {
        const div = document.createElement("div");
        div.className = "note";
        div.innerText = note;

        list.appendChild(div);
    });
}
