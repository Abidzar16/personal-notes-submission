import {React, useState} from 'react';

function NoteInput({notes, setNotes}) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [left, setLeft] = useState(50);

    const handleTitle = (event) => {
        const value = event.target.value;
        if (value.length <= 50){
            setTitle(value);
            setLeft(left => left-1);
        }
    };

    const handleBody = (event) => {
        const value = event.target.value;
        setBody(value);
    };

    const handleNote = (event) => {
        event.preventDefault()
        const note = {
            id: notes.length+1,
            title: title,
            body: body,
            createdAt: new Date().toLocaleString() + "",
            archived: false
        }
        setNotes(notes => [...notes, note])
    };

    return (
        <div className="note-input">
            <h2>Buat catatan</h2>
            <form>
                <p className="note-input__title__char-limit">Sisa karakter: {left}</p>
                <input className="note-input__title" type="text" onChange={handleTitle} value={title} placeholder="Ini adalah judul ..." required="" />
                <textarea className="note-input__body" type="text" onChange={handleBody} value={body} placeholder="Tuliskan catatanmu di sini ..." required=""></textarea>
                <button type="submit" onClick={handleNote}>Buat</button>
            </form>
        </div>
    );
}
 
export default NoteInput;