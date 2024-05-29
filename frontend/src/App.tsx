import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { useAuth } from './hooks/useAuth';
import { AuthContext } from './auth/AuthContext';
import Navbar from './components/Navbar';

const App = () => {

  const { user, login, logout, setUser } = useAuth();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div>{localStorage.getItem("user")}</div>
      <Navbar />
      <Outlet />
      <Footer />
    </AuthContext.Provider>
  )
}

export default App;