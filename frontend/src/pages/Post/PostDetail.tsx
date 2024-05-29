import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Stack } from "@mui/material";

function PostDetail() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [post, setPost] = useState();

    const navigateEdit=()=>{
      navigate("edit");
    }

    const fetchPost = (id: string) => {
      axios.get('http://localhost:3000/posts/' + id)
        .then(response => {
          setPost(response.data);
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
        <Stack spacing={2}>
          <h3>{post?.title}</h3>
          <div>{post?.content}</div>
          <Button onClick={() => navigateEdit()}> Edit </Button>
        </Stack>
      ) : <p>loading</p>}
    </div>
  );
}

export default PostDetail;
