function addNote(){
    const note = document.getElementById("noteInput").value.trim();
    if(!note) return;

    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
    document.getElementById("noteInput".value = "");
    renderNotes();
}

function renderNotes(){
    const notes= JSON.parse(localStorage.getItem("notes") || "[]");
    const list = document.getElementById("noteList");
    list.innerHTML = "";

    notes.forEach((note, i) => {
        const li = document.createElement("li");
        li.innerText = note;
        const delButton = document.createElement("button");
        delButton.innerText = "Delete";
        delButton.onclick = () => deleteNote(i);
        li.appendChild(delButton);
        list.appendChild(li);        
    });
}

function deleteNote(index){
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes();
}

window.onload = renderNotes;