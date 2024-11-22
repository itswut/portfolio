import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Tina from "./Tina";
import TinaQuiz from "./TinaQuiz";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename="/">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tina" element={<Tina />} />
            <Route path="/tina-quiz" element={<TinaQuiz />} />
            {/* Fallback route for undefined paths */}
            <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
    </BrowserRouter>
);