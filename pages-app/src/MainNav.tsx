import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import About from "./pages/About";

export default class MainNav extends React.Component<{}> {
    render() {
        return (
            <React.StrictMode>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </BrowserRouter>
            </React.StrictMode>
        );
    }
}
