import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function NavBar(){
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand >Netflix Movies</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">All Movies</Nav.Link>
                        <Nav.Link href="/favoriteMovies">Favorite Movies</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

