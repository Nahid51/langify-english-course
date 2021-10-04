import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <h5>Page Not Found</h5>
            <Link to='/home'><Button className='btn btn-primary'>Home</Button></Link>
        </div>
    );
};

export default NotFound;