import React from 'react';

import NoteItem from "./NoteItem"
import { showFormattedDate } from '../utils';

function NotesList({is_archived_list, notes, onDelete, onArchive}) {
    
    const count = Object.values(notes).filter(note => note.archived === is_archived_list).length

    let list_notes = notes.map((note) => {
        if (note.archived === is_archived_list){
            return (
                <NoteItem id={note.id} archived={note.archived} title={note.title} body={note.body} createdAt={showFormattedDate(note.createdAt)} onDelete={onDelete} onArchive={onArchive} />    
            )
        } else {
            return <></>
        }
    })

    if (count === 0){
        return (
            <p class="notes-list__empty-message">Tidak ada catatan</p>
        )
    } else {
        return (
            <div className="notes-list">
                {list_notes}
            </div>
        );
    }
}

export default NotesList;