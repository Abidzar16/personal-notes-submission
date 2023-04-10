import React from 'react';
 
function NoteItemContent({ id, archived }) {
    const placeholder = archived === false ? "Arsipkan" : "Pindahkan";
    return (
        <div className="note-item__action">
            <button class="note-item__delete-button">Delete</button>
            <button class="note-item__archive-button">{placeholder}</button>
        </div>
    );
}
 
export default NoteItemContent;