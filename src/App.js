import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Tina from "./Tina";
import TinaQuiz from "./TinaQuiz";

function App() {
    return (
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
}

export default App;