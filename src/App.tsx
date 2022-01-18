import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Hello from "./components/hello/Hello";
import World from "./components/world/World";

import "./App.scss";

const App = () => (
    <BrowserRouter>
        <div>
            <div><Link to="/hello">hello</Link></div>
            <div><Link to="/world">world</Link></div>
            <div>
                <Routes>
                    <Route path="/" element={<Hello />} />
                    <Route path="/hello" element={<Hello />} />
                    <Route path="/world" element={<World />} />
                </Routes>
            </div>
        </div>
    </BrowserRouter>
);

export default App;
