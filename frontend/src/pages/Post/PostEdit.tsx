import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Stack, TextField } from "@mui/material";

function PostEdit() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const navigatePost=()=>{
      navigate("/posts/" + id);
    }

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        axios.put('http://localhost:3000/posts/' + id, {
            title: title,
            content: content,
        })
        .then(resp => {
            navigate("/posts/" + id);
        })
        .catch(error => {
            console.log(error);
        });
    }

    const fetchPost = (id: string) => {
      axios.get('http://localhost:3000/posts/' + id)
        .then(resp => {
          setTitle(resp.data.title);
          setContent(resp.data.content);
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
    <Stack spacing={2}>
        {title && content ? (
            <form className="form" noValidate onSubmit={handleSubmit}>
            <Stack spacing={1} direction="column">
                <h4>Title</h4>
                <TextField
                    variant="outlined"
                    required
                    name="title"
                    autoFocus
                    defaultValue={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <h4>Content</h4>
                <TextField
                    variant="outlined"
                    required
                    id="outlined-multiline-static"
                    name="content"
                    multiline
                    rows={10}
                    type="content"
                    defaultValue={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Submit
                </Button>  
            </Stack>
          </form>
      ) : <p>loading</p>}
      <Button onClick={() => navigatePost()} type="button"> Back </Button>
    </Stack>
  );
}

export default PostEdit;
