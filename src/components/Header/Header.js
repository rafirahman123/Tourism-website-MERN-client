import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import logo from '../../image/react-logo-svgrepo-com.svg';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" >
                <Container>

                    <Navbar.Brand href="#home" className="text-secondary">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top "
                            alt=""
                        />
                        Dream Holidays</Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="mx-auto p-3">
                            <NavLink className="mx-3" to="/home">
                                <Button variant="outline-secondary">Home</Button>
                            </NavLink>
                            <NavLink className="mx-3" to="/blogs">
                                <Button variant="outline-secondary">Blogs</Button>
                            </NavLink>
                            <NavLink className="mx-3" to="/manageorder">
                                <Button variant="outline-secondary">Manage Order</Button>
                            </NavLink>
                        </Nav>
                        {user?.email ?

                            <button onClick={logOut} type="button" className="btn btn-outline-secondary mx-3 ">Logout</button> :

                            <Link to="/login">
                                <button type="button" className="btn btn-outline-secondary ">Login</button>
                            </Link>
                        }
                        <Navbar.Text>
                            <span className="text-secondary">Signed in as:</span> <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;