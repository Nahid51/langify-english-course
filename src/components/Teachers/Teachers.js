import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('./teacher.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, []);
    return (
        <div>
            <h2 className='my-3'>Meet the DB Learning And Teaching Team</h2>
            <Row xs={1} md={4} className="g-4">
                {teachers.map(teacher => (
                    <Teacher
                        key={teacher.id}
                        teacher={teacher}
                    ></Teacher>
                ))}
            </Row>
        </div>
    );
};

export default Teachers;