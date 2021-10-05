import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Teacher = (props) => {
    const { id, img, teacherName, designation } = props.teacher;
    return (
        <div>
            <Col className='container'>
                <Card className='d-flex justify-content-center align-items-center'>
                    <Card.Img className='w-50' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{teacherName}</Card.Title>
                        <Card.Text>
                            {designation}
                        </Card.Text>
                        <Link to={`/teacherDetails/${id}`}>
                            <Button variant="danger">Details</Button>{' '}
                        </Link>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Teacher;