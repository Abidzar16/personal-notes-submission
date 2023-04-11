import React from 'react';
 
function ArchiveButton({ id, archived, onArchive }) {
    const placeholder = archived === false ? "Arsipkan" : "Pindahkan";

    return <button className='note-item__archive-button' onClick={() => onArchive(id)}>{placeholder}</button>
}
 
export default ArchiveButton;