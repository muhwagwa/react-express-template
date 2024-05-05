import { useParams } from "react-router-dom";
import { notes } from "../note.json";

function NoteDetail() {
    const { id } = useParams();
    const note = notes.find((x) => String(x?.id) === id)
  return (
    <div>
        <p>{note?.id}</p>
        <p>{note?.title}</p>
        <p>{note?.content}</p>
    </div>
  );
}

export default NoteDetail;
