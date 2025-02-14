
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NodesList from './components/NodesList';
import EditNote from './components/EditNote';
import AddNote from './components/AddNote';

function App() {
  const[notes, setNotes] = useState([]);
  const [notification, setNotification] = useState("");

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 3000);
  };

  const addNote = (note)=>{
    setNotes([...notes,{id:Date.now(), ...note}]);
    showNotification("New note added!");
    
  };

  const deleteNote = (id)=>{
    setNotes(notes.filter((note)=> note.id !== id));
    showNotification("Note deleted!");
  };

  const updateNote = (id, updatedNote) => {
    setNotes(notes.map((note) => (note.id === id ? { ...updatedNote, id } : note)));
    showNotification("Note updated!");
  };


  return (
    <Router>
    <div className="app container mx-auto p-4">
      {notification && <div className="p-2 bg-green-500 text-white rounded text-center mb-2">{notification}</div>}
      <nav className="flex items-center p-4 bg-blue-500 text-white rounded-lg space-x-6">
        <div className="flex space-x-4">
          <Link to="/" className="font-bold">Home</Link>
          <Link to="/add" className="font-bold">Add Note</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<NodesList notes={notes} deleteNote={deleteNote} />} />
        <Route path="/add" element={<AddNote addNote={addNote} />} />
        <Route path="/edit/:id" element={<EditNote notes={notes} updateNote={updateNote} />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
