import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import Grid from '@mui/material/Grid';
// import notes from './note';
import Login from './components/Login';
import axios from 'axios';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
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
        <Header />
        {isLoggedIn ? 
        <div>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {posts?.map(noteItem => (
            <Grid item key={noteItem.id} xs={4}>
              <Note
                id={noteItem.id}
                title={noteItem.title}
                content={noteItem.content}
              />
            </Grid>
          ))}
        </Grid>
        </div>
        : <Login />}
        
      </div>
      <div className="card">
        <button onClick={() => setIsLoggedIn((isLoggedIn) => !isLoggedIn)}>
          isLoggedIn is {String(isLoggedIn)}
        </button>
      </div>
      <Footer />
    </>
  )
}

export default App
