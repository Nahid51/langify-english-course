import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
    const [services, setServices] = useState([]);

    // load data
    useEffect(() => {
        fetch('./languages.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <h2 className='my-3'>Our All Cources Level</h2>
            <Row xs={1} md={4} className="g-4">
                {services.map(service => (
                    <Course
                        key={service.id}
                        service={service}
                    ></Course>
                ))}
            </Row>
        </div>
    );
};

export default Courses;