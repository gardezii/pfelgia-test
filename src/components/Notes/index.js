import { useState } from "react";

import NoteForm from "./components/NotesHeader";
import NotesList from "./components/NotesList"

import './index.css';

const Notes = () => {
    const [notes, setNotes] = useState([]);

    const onAddNote = (note) => {
        setNotes([
            ...notes,
            {
                id: notes.length+1,
                text: note,
                isDone: false
            }
        ]);
    };

    const onRemoveNote = (noteId) => {
        setNotes([
            ...notes.slice(0, noteId-1),
            ...notes.slice(noteId)
        ])
    }

    const onNoteClick = (noteId) => {
        setNotes([
            ...notes.slice(0, noteId-1),
            {
                ...notes[noteId-1],
                isDone: !notes[noteId-1].isDone
            },
            ...notes.slice(noteId)
        ])
    };
    
    return (
        <div classsName="notes">
           <NoteForm onAddNote={onAddNote} />
           <NotesList 
                notes={notes} 
                onNoteClick={onNoteClick} 
                onRemoveNote={onRemoveNote} 
            />
        </div>
    )
}

export default Notes;