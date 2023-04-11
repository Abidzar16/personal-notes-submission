import {React} from 'react';

function NoteSearch({query, setQuery}) {
    // const [query, setQuery] = useState("");

    const filterBySearch = (event) => {
        const query = event.target.value;
        setQuery(query);
    };

    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <div class="note-search">
                <input type="text" onChange={filterBySearch} value={query} placeholder="Cari catatan ..." />
            </div>
        </div>
    );
}
 
export default NoteSearch;