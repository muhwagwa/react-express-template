import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import Grid from '@mui/material/Grid';
import notes from './note';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <div>
        <Header />
        {isLoggedIn ? 
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {notes.map(noteItem => (
            <Grid item xs={4}>
              <Note
                key={noteItem.key}
                title={noteItem.title}
                content={noteItem.content}
              />
            </Grid>
          ))}
        </Grid>
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
