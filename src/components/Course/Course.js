import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = (props) => {
    const { id, img, category, duration, started } = props.service;
    return (
        <div>
            <Col className='container'>
                <Card>
                    <Card.Img style={{ height: '20rem' }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{category}</Card.Title>
                        <Card.Text>Start on: {started}</Card.Text>
                        <Card.Text>Duration: {duration} month</Card.Text>
                        <Link to={`/courseDetails/${id}`}>
                            <Button variant="danger">Details</Button>{' '}
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;