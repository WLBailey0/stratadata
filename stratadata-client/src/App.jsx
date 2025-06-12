import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css'
import LoginPage from './pages/LoginPage'


function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/" element={<HomePage />} /> */}
      </Routes>
    </Router>
    </div>
  )
}

export default App
