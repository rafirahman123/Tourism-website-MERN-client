import React from 'react';
import { Link } from 'react-router-dom';
import './Package.css';

const Package = ({ item }) => {
    const { packajeName, description, img, id } = item;
    return (
        <div>
            <div class="col-4 mb-5">
                <div class="card">
                    <img src={img} class="card-image" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{packajeName}</h5>
                        <p class="card-text">{description}</p>
                        <Link to={`/review/${id}`}>
                            <button type="button" class="btn btn-outline-info m-2">Book:
                                {packajeName.toLowerCase()}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;