import { useState } from "react"
import { useParams,useNavigate } from "react-router-dom"

export default function EditNote({notes,updateNote}) {

    const {id} = useParams();
    const navigate = useNavigate();
    const existingNote =  notes.find((note)=> note.id === parseInt(id));
    const [note, setNote] = useState(existingNote || {title: "", content: ""});
   
    const handleSubmit = (e)=>{
        e.preventDefault();
        updateNote(parseInt(id), note);
        navigate("/")
    }


  return (
    <div>
            <form onSubmit={handleSubmit} className="mt-4 p-4 border rounded-lg shadow-md">
                <input type="text" value={note.title} onChange={(e)=> setNote({...note,title:e.target.value})} className="w-full p-2 border rounded mb-2" />
                <textarea value={note.content} onChange={(e) => setNote({ ...note, content: e.target.value })} className="w-full p-2 border rounded mb-2"></textarea>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Update Note</button>


            </form>
          


    </div>
  )
}
