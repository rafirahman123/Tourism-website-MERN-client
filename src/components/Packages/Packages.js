import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Package from '../Package/Package';
import './Packages.css';

const Packages = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className="packages-container">
            {
                items.map(item => <Package
                    key={item._id}
                    item={item}
                ></Package>)
            }
        </div>
    );
};

export default Packages;