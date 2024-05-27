import { useEffect, useState } from 'react';
import './Home.css';
import Post from './components/Post';
import Grid from '@mui/material/Grid';
import axios from 'axios';


function Home() {
  const [posts, setPosts] = useState<any[]>([])
  
  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  return (
    <>
      <div>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {posts?.map(postItem => (
            <Grid item key={postItem.id} xs={4}>
              <Post
                id={postItem.id}
                title={postItem.title}
                content={postItem.content}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  )
}

export default Home
