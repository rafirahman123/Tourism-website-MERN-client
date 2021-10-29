import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';
import './Manageorder.css';

const Manageorder = () => {
    const { user } = useAuth();
    const [allOrder, setAllOrder] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch('https://boiling-eyrie-00422.herokuapp.com/manageAllOrder')
            .then(res => res.json())
            .then(data => setAllOrder(data));
    }, [control]);

    const handleDelete = (id) => {
        fetch(`https://boiling-eyrie-00422.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setControl(!control);
                } else {
                    setControl(false);
                }
            })
    };

    return (
        <div className="manage-container">
            <div className='my-5'>
                <h1>Manage All Orders {allOrder?.length}</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Order No</th>
                            <th>Name</th>
                            <th>Package Name</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {allOrder?.map((allOrder, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{allOrder?.name}</td>
                                <td>{allOrder?.packajeName}</td>
                                <td>{allOrder?.price}</td>
                                <td>{allOrder?.email}</td>
                                <button onClick={() => handleDelete(allOrder?._id)} className="btn bg-danger p-2">Delete</button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default Manageorder;