import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hook/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="button-section">
            <h2>Login with Google</h2>
            <Button onClick={signInUsingGoogle} variant="outline-info">Google</Button>
        </div>
    );
};

export default Login;