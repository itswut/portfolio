import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Tina from './Tina';
import TinaQuiz from './TinaQuiz';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tina" element={<Tina />} />
                <Route path="/tina-quiz" element={<TinaQuiz />} />
            </Routes>
        </Router>
    );
}

export default App;