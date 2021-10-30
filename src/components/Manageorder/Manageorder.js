import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './Manageorder.css';

const Manageorder = () => {

    const [allOrder, setAllOrder] = useState([]);


    useEffect(() => {
        fetch('https://boiling-eyrie-00422.herokuapp.com/manageAllOrder')
            .then(res => res.json())
            .then(data => setAllOrder(data));
    }, [allOrder?._id]);

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
                        const remainingOrders = allOrder?.filter(myOrder => myOrder._id !== id);
                        setAllOrder(remainingOrders);
                    }
                });
        }
    };

    return (
        <div className="manage-container">
            <div className='my-5'>
                <h1 className="text-info m-5">Manage All Orders {allOrder?.length}</h1>
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