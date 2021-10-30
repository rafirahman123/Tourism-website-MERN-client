import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
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
                        <Nav className="me-auto p-3">
                            <NavLink className="mx-1" to="/home">
                                <Button variant="outline-secondary">Home</Button>
                            </NavLink>
                            <NavLink to="/blogs">
                                <Button variant="outline-secondary">Blogs</Button>
                            </NavLink>

                        </Nav>
                        {user?.email ?

                            <nav>
                                <NavLink className="mx-1" to="/manageAllOrder">
                                    <Button variant="outline-secondary">Manage All Order</Button>
                                </NavLink>
                                <NavLink className="mx-1" to="/myOrders">
                                    <Button variant="outline-secondary">Myorders</Button>
                                </NavLink>
                                <NavLink className="mx-1" to="/addPackage">
                                    <Button variant="outline-secondary">Addpackage</Button>
                                </NavLink>
                                <button onClick={logOut} type="button" className="btn btn-outline-secondary mx-1 justify-content-end ">Logout</button>
                            </nav>
                            :

                            <NavLink to="/login">
                                <button type="button" className="btn btn-outline-secondary ">Login</button>
                            </NavLink>
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