import {React, useState} from 'react';
import NotesList from './components/NotesList';
import NoteInput from './components/NoteInput';
import NoteSearch from './components/NoteSearch';
import { getInitialData } from './utils/index';

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [query, setQuery] = useState("");

  const onDelete = (noteId) => {
      const updatedNotes = notes.filter(note => note.id !== noteId);
      setNotes(updatedNotes);
  };

  const onArchive = (noteId) => {
      const updatedNotes = notes.filter((note) => {
          if (note.id === noteId){
              note.archived = !note.archived;
          }
          return note
      });
      setNotes(updatedNotes);
  };

  const filteredList = notes.filter((item) => {
    return (item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1) || (item.body.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  });

  return (
    <>
      <NoteSearch query={query} setQuery={setQuery}/>
      <div className="note-app__body">
        <NoteInput notes={notes} setNotes={setNotes}/>
        <h2>Catatan Aktif</h2>
        <NotesList is_archived_list={false} notes={filteredList} onDelete={onDelete} onArchive={onArchive}/>
        <h2>Arsip</h2>
        <NotesList is_archived_list={true} notes={filteredList} onDelete={onDelete} onArchive={onArchive}/>
      </div>
    </>
  );
}

export default App;