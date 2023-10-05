import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav.jsx'
import Home from './components/home.jsx'
import Services from './components/services.jsx'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import Login from './components/login'
import Admin from './components/admin-panel'

function Rou() {
  return (
    <>
      <Nav />
      <Home />
      <Services />
      <About />
      <Contact />
    </>
  )
}

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Rou />} />
          <Route path="/login" element={<Login />} />
          <Route path="admin" element={<Admin />}/>
        </Routes>
      </>
    </Router>
  )
}

export default App
