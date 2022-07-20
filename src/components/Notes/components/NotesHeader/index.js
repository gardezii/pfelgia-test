import { useState } from "react";
import "./index.css"

const NoteForm = ({ onAddNote }) => {
    const [note, setNote] = useState("")

    const addNote = () => {
        onAddNote(note);
        setNote("");
    }

    return (
        <div class="header">
            <h2 className="header-h2">My To Do List</h2>
            <div className="form-container">
                <input value={note} type="text" onChange={value => setNote(value.target.value)}/>
                <button className="addBtn" onClick={addNote}> Add</button>
                
            </div>
        </div>
    )
}

export default NoteForm;