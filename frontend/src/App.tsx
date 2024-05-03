import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import Grid from '@mui/material/Grid';
import notes from './note';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
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
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Footer />
    </>
  )
}

export default App
