import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='h-'>
            <img src="https://cdn.dribbble.com/users/62549/screenshots/3894903/media/c3a11496923b170c18c947fe93d13261.gif" alt="" /> <br />
            <Link to='/home'><Button className='btn btn-danger mt-3'>BACK TO HOME PAGE</Button></Link>
        </div>
    );
};

export default NotFound;