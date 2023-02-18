import { useState } from 'react';
import './App.css';

interface Note {
  id: number;
  title: string;
  content: string;
}

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  return (
    <div className="App">
      <div className="NotesSection">
        <h3>Your Notes:</h3>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <h4>{note.title}</h4>
              <p>{note.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
