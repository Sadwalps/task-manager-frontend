import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
    return (
        <>
            <Navbar className="bg-primary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://cdn.dribbble.com/users/857299/screenshots/5279698/tm-01_4x.jpg"
                            width="65"
                            height="50"
                            className="d-inline-block align-top rounded"
                        />{' '}
                    </Navbar.Brand>
                    <span className='ms-auto fs-3 text-light' style={{ fontWeight: "bold" }}>T-Manager</span>
                </Container>
            </Navbar>
        </>
    )
}

export default Header