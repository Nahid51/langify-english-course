import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Cover from '../Cover/Cover';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import Teacher from '../Teacher/Teacher';

const Home = () => {
    const [services, setServices] = useState([]);
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('./languages.json')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 4)))
    }, []);

    useEffect(() => {
        fetch('./teacher.json')
            .then(res => res.json())
            .then(data => setTeachers(data.slice(0, 4)))
    }, []);
    return (
        <div>
            <Cover></Cover>
            <About></About>
            <div>
                <h2 className='my-3'>Our All Cources Level</h2>
                <Row xs={2} md={4} className="g-4">
                    {services.map(service => (
                        <Course
                            key={service.id}
                            service={service}
                        ></Course>
                    ))}
                </Row>
            </div>

            <div>
                <h2 className='mt-5 mb-3'>Meet the DB Learning And Teaching Team</h2>
                <Row xs={2} md={4} className="g-4">
                    {teachers.map(teacher => (
                        <Teacher
                            key={teacher.id}
                            teacher={teacher}
                        ></Teacher>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Home;