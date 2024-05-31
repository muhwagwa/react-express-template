import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Button, Stack, TextField } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";

function PostCreate() {
    const { user } = useAuth();

    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const navigatePost=()=>{
      navigate("/posts/");
    }

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        axios.post('http://localhost:3000/posts/', {
            title: title,
            content: content,
            author: user,
        })
        .then(resp => {
            navigate("/posts/");
        })
        .catch(error => {
            console.log(error);
        });
    }

  return (
    <Stack spacing={2}>
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
      <Button onClick={() => navigatePost()} type="button"> Back </Button>
    </Stack>
  );
}

export default PostCreate;
