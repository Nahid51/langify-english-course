import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const CourseDetails = (props) => {
    let { courseId } = useParams([]);
    const [courseDetails, setCourseDetails] = useState([]);
    const [singleCourse, setSingleCourse] = useState([]);
    // data loaded
    useEffect(() => {
        fetch('/languages.json')
            .then(res => res.json())
            .then(data => setCourseDetails(data))
    }, []);

    // data loaded after calling and set dependency
    useEffect(() => {
        const foundCourse = courseDetails.find(course => course.id === courseId);
        setSingleCourse(foundCourse);
    }, [courseDetails, courseId]);

    return (
        <div>
            <div className='my-5'>
                <Card className='mx-auto' style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={singleCourse?.img} />
                    <Card.Body>
                        <Card.Title>Category: {singleCourse?.category}</Card.Title>
                        <Card.Text>Course Start: {singleCourse?.started}</Card.Text>
                        <Card.Text>Total Cost: &#2547; {singleCourse?.totalCost}</Card.Text>
                        <Card.Text>Admission Cost: &#2547; {singleCourse?.admissinCost}</Card.Text>
                        <Card.Text>Duration: {singleCourse?.duration} month</Card.Text>
                        <Card.Text>Language: {singleCourse?.language}</Card.Text>
                        <Link to='/services'><Button className='mx-auto' variant="danger">Back</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default CourseDetails;