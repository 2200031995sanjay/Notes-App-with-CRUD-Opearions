
import { useNavigate } from "react-router-dom"
import{ useState } from 'react'

// eslint-disable-next-line react/prop-types
const AddNote = ({addNote})=>{
    const [note, setNote] = useState({title:"", content:""});
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!note.title || !note.content) return;
        addNote(note);
        navigate("/");
    };

    return(
        <form onSubmit={handleSubmit} className="mt-4 p-4 border rounded-lg shadow-md">
            <input type="text" placeholder="Title" value={note.title} onChange={(e)=> setNote({...note,title: e.target.value})} className="w-full p-2 border rounded mb-2"/>
            <textarea placeholder="Content" value={note.content} onChange={(e)=>setNote({...note,content: e.target.value})} className="w-full p-2 border rounded mb-2"></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Note</button>

        </form>

    );
};

export default AddNote