import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${import.meta.env.VITE_SITE_URL}`} element={<Home />} />
        <Route path={`${import.meta.env.VITE_SITE_URL}/about`} element={<About />} />
        <Route path={`${import.meta.env.VITE_SITE_URL}/contact`} element={<Contact />} />
      </Routes>
      <ul>
        <li><Link to={`${import.meta.env.VITE_SITE_URL}`}>Home</Link></li>
        <li><Link to={`${import.meta.env.VITE_SITE_URL}/about`}>About</Link></li>
        <li><Link to={`${import.meta.env.VITE_SITE_URL}/contact`}>Contact</Link></li>
      </ul>
    </BrowserRouter>
  )
}

export default App
