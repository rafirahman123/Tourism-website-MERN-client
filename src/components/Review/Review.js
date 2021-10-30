import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hook/useAuth';
import './Review.css';

const Review = () => {
    const { reviewId } = useParams();

    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [singleReview, setSingleReview] = useState({});
    useEffect(() => {
        fetch('https://boiling-eyrie-00422.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                const foundReview = data.find(review => review._id == reviewId)
                setSingleReview(foundReview);
                console.log(foundReview);

            })
    }, [reviewId]);

    const onSubmit = data => {
        data.email = user?.email;
        data.status = 'Pending';
        fetch('https://boiling-eyrie-00422.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (data) {
                    alert('Ordered successfully');
                    reset();
                }
            });
        console.log(data);
    }
    return (
        <div className="review-section">
            <div className="row">
                <div class="card col-lg-6 col-sm-12 mb-5 mt-5 mx-auto">
                    <img src={singleReview.img} class="details-image" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-info">{singleReview.packajeName}</h5>
                        <p class="card-text">{singleReview.description}</p>
                        <h3 class="card-text text-info">${singleReview.price}</h3>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 mx-auto">
                    <h4 className="booking-text text-info">Information for Booking</h4>
                    <div className="login-box w-50 mx-auto mt-5">
                        <div className="package-box d-flex justify-content-center align-items-center">
                            <div className="login-form">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input defaultValue={singleReview?.packajeName}
                                        {...register("packajeName", { required: true })}
                                        placeholder="Package Name"
                                        className="p-3 m-2 w-100"
                                    />
                                    <br />
                                    <input defaultValue={user?.displayName}
                                        {...register("name", { required: true })}
                                        placeholder="Name"
                                        className="p-2 m-2 w-100"
                                    />
                                    <br />
                                    <input defaultValue={user?.email}
                                        {...register("email", { required: true })}
                                        placeholder="Email"
                                        className="p-2 m-2 w-100"
                                    />
                                    <br />
                                    <input defaultValue={singleReview?.price}
                                        {...register("price", { required: true })}
                                        placeholder="Price"
                                        className="p-2 m-2 w-100"
                                    />
                                    <br />
                                    <input
                                        {...register("date")}
                                        placeholder="Date"
                                        type="date"
                                        className="p-2 m-2 w-100"
                                    />
                                    <br />
                                    <input
                                        {...register("address", { required: true })}
                                        placeholder="Address"
                                        className="p-2 m-2 w-100"
                                    />
                                    <br />
                                    <input
                                        {...register("phone", { required: true })}
                                        placeholder="Phone Number"
                                        className="p-2 m-2 w-100"
                                    />
                                    <br />

                                    {errors.exampleRequired && <span>This field is required</span>}

                                    <input type="submit" value="Confirm-Booking" className="btn btn-outline-success m-2" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;