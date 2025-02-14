import { Link } from "react-router-dom"

export default function NodesList({notes,deleteNote}) {
  return (
    <div className="mt-4">
    <h2 className="text-2xl font-bold mb-4">Notes</h2>
    {notes.length === 0 ? <p className="text-gray-500">No notes available</p>:(
        <ul className="space-y-4">
         {notes.map((note)=>(
            <li key={note.id} className="p-4 border rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">{note.title}</h3>
                  <p className="text-gray-700">{note.content}</p>
                  <div className="mt-2 flex space-x-4">
                    <Link to={`/edit/${note.id}`} className="text-blue-500">Edit</Link>
                    <button onClick={()=>deleteNote(note.id)} className="text-red-500">Delete</button>
                  </div>

            </li>
         ))}

        </ul>
    )}

    </div>
  )
}
