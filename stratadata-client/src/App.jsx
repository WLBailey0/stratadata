import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage';
import { UserContext, UserProvider } from './contexts/userContext';
import PHEntryForm from "./pages/analysisEntry/PHEntryForm.jsx";


function App() {
  return (
    <div>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/" element={<HomePage />} />
            <Route path="/phEntry" element={<PHEntryForm />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  )
}

export default App
