import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" >
                <Container>

                    <Navbar.Brand href="#home" className="text-info">Navbar</Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="mx-auto">
                            <NavLink className="mx-3" to="/home">
                                <Button variant="outline-info">Home</Button>
                            </NavLink>
                            <NavLink className="mx-3" to="/blogs">
                                <Button variant="outline-info">Blogs</Button>
                            </NavLink>
                            <NavLink className="mx-3" to="/manageOrders">
                                <Button variant="outline-info">Manage Order</Button>
                            </NavLink>
                        </Nav>
                        {user?.email ?

                            <button onClick={logOut} type="button" className="btn btn-outline-info ">Logout</button> :

                            <Link to="/login">
                                <button type="button" className="btn btn-outline-info ">Login</button>
                            </Link>
                        }
                        <Navbar.Text>
                            <span className="text-info">Signed in as:</span> <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;