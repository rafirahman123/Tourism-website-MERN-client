import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';
import './Myorder.css';

const Myorder = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`https://boiling-eyrie-00422.herokuapp.com/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data));
    }, [user?.email]);
    console.log(myOrders);

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
        <div className='myorder-review'>
            <h1>Manage All Orders : {myOrders?.length}</h1>
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
                {myOrders?.map((allOrder, index) => (
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
    );
};

export default Myorder;