import React from 'react';
// import { useState } from 'react';

import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';
import { getInitialData, showFormattedDate } from '../utils';

function NotesList({is_archived_list}) {
    const initial_data = getInitialData();
    const count = Object.values(initial_data).filter(note => note.archived === is_archived_list).length

    let notes = initial_data.map((note) => {
        if (note.archived === is_archived_list){
            // setCount(a => a + 1);
            // console.log(count);
            return (
                <div className='note-item'>
                    <NoteItemContent title={note.title} body={note.body} createdAt={showFormattedDate(note.createdAt)} />
                    <NoteItemAction id={note.id} archived={note.archived} />
                </div>
            )
        } else {
            // console.log(count);
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
                {notes}
            </div>
        );
    }
}

export default NotesList;