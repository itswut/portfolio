import { Link } from 'react-router-dom';
import './App.css';

function HomePage() {
  return (
    <div className="App">
        <Link to="/second">Second Page</Link>
    </div>
  );
}

export default HomePage;