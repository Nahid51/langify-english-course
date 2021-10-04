import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        // const url = '';
        fetch('./languages.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className='my-5'>
            <h2 className='my-3'>Our All Cources Level</h2>
            <Row xs={1} md={3} className="g-4">
                {services.map(service => (
                    <Service
                        key={service.id}
                        service={service}
                    ></Service>
                ))}
            </Row>
        </div>
    );
};

export default Services;