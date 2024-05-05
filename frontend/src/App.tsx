import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import Grid from '@mui/material/Grid';
// import notes from './note';
import Login from './components/Login';
import { notes } from './note.json';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <div>
        <Header />
        {isLoggedIn ? 
        <div>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {notes.map(noteItem => (
            <Grid item xs={4}>
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
