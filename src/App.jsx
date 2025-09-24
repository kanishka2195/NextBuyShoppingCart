import { ThemeContext, ThemeProvider } from './context/ThemeContext'
import './App.css'
import { useContext } from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import About from './pages/About';
import Layout from './Layout';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Login from './components/Login';
import SignUp from './components/SignUp';

function AppContent() {
  const { theme } = useContext(ThemeContext);
  const appStyle={
      backgroundColor: theme == "light" ? "#fff" : "#333",
      color: theme == "light" ? "#000" : "#fff"
    }
  return (
    <div style={appStyle}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>} >
              <Route index element={<Home/>} />
              <Route path="cart" element={<Cart/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="about" element={<About/>} />
              <Route path="*" element={<h2>Page Not Found: 404</h2>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default function App(){
  return(
    <ThemeProvider>
      <AppContent/>
    </ThemeProvider>
  )
}
