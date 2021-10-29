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
                        <Nav className="mx-auto p-3">
                            <NavLink className="mx-1" to="/home">
                                <Button variant="outline-secondary">Home</Button>
                            </NavLink>
                            <NavLink className="mx-1" to="/blogs">
                                <Button variant="outline-secondary">Blogs</Button>
                            </NavLink>

                        </Nav>
                        {user?.email ?

                            <nav>
                                <NavLink className="mx-1" to="/manageorder">
                                    <Button variant="outline-secondary">Manage All Order</Button>
                                </NavLink>
                                <NavLink className="mx-1" to="/myorder">
                                    <Button variant="outline-secondary">My orders</Button>
                                </NavLink>
                                <NavLink to="/addPackage">
                                    <button type="button" className="btn btn-outline-secondary ">Addpackage</button>
                                </NavLink>
                                <button onClick={logOut} type="button" className="btn btn-outline-secondary mx-1 ">Logout</button>
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