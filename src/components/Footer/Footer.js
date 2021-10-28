import React from 'react';
import { Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="container-fluid p-5 bg-dark text-white">
            <div className="row">
                <div className="col-3">
                    <h5>Logo</h5>
                    <img src="" alt="" />
                    <p>Lorem ipsum dolor sit ametco nsec te tuer adipiscing elitae</p>
                    <p> setsail@qode.com</p>
                    <p> 1 562 867 5309</p>
                    <p> Broadway & Morris St, New York</p>
                </div>
                <div className="col-3">
                    <h5>Our Recent Posts</h5>
                    <p>Visit Thailand, Bali And China</p>
                    <p>September 7, 2016</p>
                    <p>The Sound Of Our Jungle</p>
                    <p>New Year, New Resolutions!</p>
                </div>
                <div className="col-3">
                    <h5>Subscribe to our Newsletter</h5>
                    <p>Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho</p>
                    <input className="w-75" type="text" placeholder="Name" />
                    <input className="w-75" type="email" placeholder="Email" />
                    <br />
                    <Button variant="outline-info">Subcribe</Button>
                </div>
                <div className="col-3">
                    <h5>Our Instagram</h5>
                    <p>Aliquam lorem ante, dapibus inviver raqui feugiat a, tellus. Phasellus null</p>
                </div>
            </div>
            <div>
                <small>Powered by @ Rafi-rahman 2021</small>
            </div>
        </div>
    );
};

export default Footer;