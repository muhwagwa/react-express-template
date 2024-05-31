import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { useAuth } from './hooks/useAuth';
import { AuthContext } from './auth/AuthContext';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App = () => {

  const { user, login, logout, setUser } = useAuth();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Navbar />
      <div className='content-zone'>
        <Outlet />
      </div>
      <div className='footer-zone'>
        <Footer />
      </div>
    </AuthContext.Provider>
  )
}

export default App;