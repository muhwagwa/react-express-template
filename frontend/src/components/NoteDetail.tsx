import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function NoteDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null)
    useEffect(() => {
      axios.get('http://localhost:3000/posts/' + id)
        .then(response => {
          setPost(response.data);
          console.log(post)
        })
        .catch(error => {
          console.log(error);
        });
    }, [id])
  return (
    post && <div>
        <p>{post?.id}</p>
        <p>{post?.title}</p>
        <p>{post?.content}</p>
    </div>
  );
}

export default NoteDetail;
