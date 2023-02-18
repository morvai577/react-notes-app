/* eslint-disable jsx-a11y/label-has-associated-control */

import { useState } from 'react';
import './App.css';

interface Note {
  id: number;
  title: string;
  content: string;
}

function App() {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
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
      <div className="CreateNoteSection">
        <h3>Create new note</h3>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const newNote = {
              id: Date.now(),
              title: noteTitle,
              content: noteContent,
            };
            setNotes([...notes, newNote]);
            setNoteTitle('');
            setNoteContent('');
          }}
        >
          <label htmlFor="note-title">Title:</label>
          <input
            type="text"
            id="note-title"
            value={noteTitle}
            required
            onChange={(event) => {
              setNoteTitle(event.target.value);
            }}
          />
          <label htmlFor="note-content">Content:</label>
          <input
            type="textarea"
            id="note-title"
            value={noteContent}
            onChange={(event) => {
              setNoteContent(event.target.value);
            }}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}

export default App;
