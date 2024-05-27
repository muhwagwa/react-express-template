import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { useAuth } from './hooks/useAuth';
import { AuthContext } from './auth/AuthContext';

const App = () => {

  const { user, login, logout, setUser } = useAuth();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div>{localStorage.getItem("user")}</div>
      <Header />
      <Outlet />
      <Footer />
    </AuthContext.Provider>
  )
}

export default App;