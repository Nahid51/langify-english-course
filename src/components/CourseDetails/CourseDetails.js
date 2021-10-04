import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams, NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

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
    // console.log(singleCourse?.id);
    return (
        <div>
            <Header />
            <div className='my-5'>
                <Card className='mx-auto' style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={singleCourse?.img} />
                    <Card.Body>
                        <Card.Title>Category: {singleCourse?.category}</Card.Title>
                        <Card.Text>Course Start: {singleCourse?.started}</Card.Text>
                        <Card.Text>Total Cost:{singleCourse?.totalCost}</Card.Text>
                        <Card.Text>Admission Cost: {singleCourse?.admissinCost}</Card.Text>
                        <Card.Text>Duration: {singleCourse?.duration}</Card.Text>
                        <Card.Text>Language: {singleCourse?.language}</Card.Text>
                        <NavLink to='/home'><Button variant="primary">Home</Button></NavLink>
                    </Card.Body>
                </Card>
            </div>
            <Footer />
        </div>
    );
};

export default CourseDetails;