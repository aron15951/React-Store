import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
    return <h2 className="text-2xl">Inicio</h2>;
}

function About() {
    return <h2 className="text-2xl">Acerca de</h2>;
}

function App() {
    return (
        <div className="p-4">
            <nav className="mb-4">
                <Link to="/" className="mr-4 text-blue-500">Inicio</Link>
                <Link to="/about" className="text-blue-500">Acerca de</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
