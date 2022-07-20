import "./index.css"

const NotesList = ({notes, onNoteClick, onRemoveNote}) => {
    return (
        <ul>
            {notes.map(note => (
                <li 
                    className={note.isDone ? "checked" : ""} 
                >
                    <span 
                        className="note-text" 
                        onClick={() => onNoteClick(note.id)}
                    >
                        {note.text}
                    </span>
                    <span class="close" onClick={() => onRemoveNote(note.id)}>×</span>
                </li>  

            ))}
        </ul>
    )
}

export default NotesList