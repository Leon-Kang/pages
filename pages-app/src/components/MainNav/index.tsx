import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import { Navbar, Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class MainNav extends React.Component<{}> {
    render() {
        return (
            <React.StrictMode>
                <Navbar variant="light" bg="white" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">Home</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </BrowserRouter>

            </React.StrictMode>

        );
    }
}
