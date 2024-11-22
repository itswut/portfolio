import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import
import HomePage from './HomePage';
import SecondPage from './SecondPage'; // Ensure proper case sensitivity

function App() {
  return (
    <div className="App">
      <Router>
        <Routes> {/* Replaced Switch with Routes */}
          <Route path="/portfolio" element={<HomePage />} /> {/* Updated syntax */}
          <Route path="/portfolio/secondpage" element={<SecondPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;