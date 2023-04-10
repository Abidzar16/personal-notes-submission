import React from 'react';
import NoteList from './components/NoteList';

function App() {
    return (
      <div className="note-app__body">
        <h2>Catatan Aktif</h2>
        <NoteList is_archived_list={false} />
        <h2>Arsip</h2>
        <NoteList is_archived_list={true} />
      </div>
    );
}

export default App;