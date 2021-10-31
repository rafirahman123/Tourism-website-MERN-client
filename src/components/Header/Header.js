import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import logo from '../../image/react-logo-svgrepo-com.svg';
import './Header.css';

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
                                <NavDropdown title="Others Menu" id="collasible-nav-dropdown" className="mx-1 btn btn-outline-secondary text-white">
                                    <NavDropdown.Item href="#action/3.1">
                                        <NavLink className="mx-1" to="/manageAllOrder">
                                            <Button variant="outline-secondary">Manage All Order</Button>
                                        </NavLink></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2"><NavLink className="mx-1" to="/myOrders">
                                        <Button variant="outline-secondary">Myorders</Button>
                                    </NavLink></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3"><NavLink className="mx-1" to="/addPackage">
                                        <Button variant="outline-secondary">Addpackage</Button>
                                    </NavLink></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4"><button onClick={logOut} type="button" className="btn btn-outline-secondary mx-1 justify-content-end ">Logout</button></NavDropdown.Item>
                                </NavDropdown>

                            </nav>
                            :

                            <NavLink to="/login">
                                <button type="button" className="btn btn-outline-secondary ">Sign In</button>
                            </NavLink>
                        }
                        {user?.email ?
                            <Navbar.Text><span className="text-secondary mx-2">{user?.displayName}</span>
                                <img className='profile-image' src={user?.photoURL} alt='' />
                            </Navbar.Text> : ''}
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;