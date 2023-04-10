import React from 'react';
import NotesList from './components/NotesList';
import NoteInput from './components/NoteInput';
import { getInitialData, showFormattedDate } from './utils/index';

function App() {
    return (
      <div className="note-app__body">
        <NoteInput />
        <h2>Catatan Aktif</h2>
        <NotesList is_archived_list={false} />
        <h2>Arsip</h2>
        <NotesList is_archived_list={true} />
      </div>
    );
}

export default App;