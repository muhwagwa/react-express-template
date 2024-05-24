import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function NoteDetail() {
    const { id } = useParams();
    const [post, setPost] = useState();
    const fetchPost = (id: string) => {
      axios.get('http://localhost:3000/posts/' + id)
        .then(response => {
          setPost(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.log(error);
        });
    }
    useEffect(() => {
      if (id){
        fetchPost(id);
      }
    }, [id])
  return (
    <div>
      {post ? (
        <div>
          <p>{post?.id}</p>
          <p>{post?.title}</p>
          <p>{post?.content}</p>
        </div>
      ) : <p>loading</p>}
    </div>
  );
}

export default NoteDetail;
