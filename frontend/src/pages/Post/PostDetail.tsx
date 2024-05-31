import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Stack } from "@mui/material";
import './PostDetail.css'
import { useAuth } from "../../hooks/useAuth";

function PostDetail() {
    const { user } = useAuth();
    const { id } = useParams();
    const navigate = useNavigate()
    const [post, setPost] = useState();

    const navigateEdit=()=>{
      navigate("edit");
    }

    const navigateHome=()=>{
      navigate("/posts");
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
        <>
        <div className="btn-grp-postdetail">
          <Button variant="outlined" onClick={() => navigateHome()}> Back </Button>
          {user == post?.author && <Button variant="outlined" onClick={() => navigateEdit()}> Edit </Button>}
        </div>
        <Stack spacing={2}>
          <h1 className="post-title">{post?.title}</h1>
          <div>{post?.content}</div>
        </Stack>
        </>
      ) : <p>loading</p>}
    </div>
  );
}

export default PostDetail;
