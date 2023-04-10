import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';

function NotesList({id, title, body, createdAt, archived}) {
 return (
    <div className="note-item">
      <NoteItemContent title={title} body={body} createdAt={createdAt}/>
      <NoteItemAction id={id} archived={archived}/>
    </div>
 );
}
 
export default NotesList;