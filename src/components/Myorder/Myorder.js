import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';
import './Myorder.css';

const Myorder = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`https://boiling-eyrie-00422.herokuapp.com/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data));
    }, [user?.email]);
    console.log(myOrders);

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete?");
        if (proceed) {
            fetch(`https://boiling-eyrie-00422.herokuapp.com/orders/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then(res => res.json())
                .then(data => {

                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remainingOrders = myOrders?.filter(myOrder => myOrder._id !== id);
                        setMyOrders(remainingOrders);
                    }
                });
        }
    };


    const handleUpdate = (id) => {

    }

    return (
        <div className='myorder-review'>
            <h1 className="text-info m-5">My order: {myOrders?.length}</h1>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Order No</th>
                        <th>Name</th>
                        <th>Package Name</th>
                        <th>Price</th>
                        <th>Email</th>
                        <th>Status</th>
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
                            <td className="text-warning">{allOrder?.status}</td>
                            <button onClick={() => handleUpdate(allOrder?._id)} className="btn bg-danger p-2">Update</button>
                            <button onClick={() => handleDelete(allOrder?._id)} className="btn bg-danger p-2">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default Myorder;