import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2 className="logo">Ucol, N. 3A</h2>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>&copy; February 02, 2026 Ucol, N. 3A .</p>
      </footer>
    </BrowserRouter>
  )
}

export default App
