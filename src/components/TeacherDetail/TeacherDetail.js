import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const TeacherDetail = (props) => {
    let { teacherId } = useParams([]);
    const [teacherDetails, setTeacherDetails] = useState([]);
    const [singleTeacher, setSingleTeacher] = useState([]);
    // load data
    useEffect(() => {
        fetch('/teacher.json')
            .then(res => res.json())
            .then(data => setTeacherDetails(data))
    }, []);

    // data loaded after calling and set dependency
    useEffect(() => {
        const foundTeacher = teacherDetails.find(teacher => teacher.id === teacherId);
        setSingleTeacher(foundTeacher);
    }, [teacherDetails, teacherId]);
    return (
        <div>
            <div className='my-5'>
                <Card className='mx-auto' style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={singleTeacher?.img} />
                    <Card.Body>
                        <Card.Title>Name: {singleTeacher?.teacherName}</Card.Title>
                        <Card.Text>Designation: {singleTeacher?.designation}</Card.Text>
                        <Card.Text>Age:{singleTeacher?.age}</Card.Text>
                        <Card.Text>Salary: &#2547; {singleTeacher?.salary}</Card.Text>
                        <Card.Text>Nationality: {singleTeacher?.nationality}</Card.Text>
                        <Card.Text>About: {singleTeacher?.about}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default TeacherDetail;