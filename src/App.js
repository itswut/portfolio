import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route 
                    path="/about" 
                    element={
                        <div className="App">
                            <h1>About</h1>
                        </div>
                    } 
                />
            </Routes>
        </Router>
    );
}

export default App;
