import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Teacher = (props) => {
    const { img, teacherName, designation } = props.teacher;
    return (
        <div>
            <Col>
                <Card className='d-flex justify-content-center align-items-center'>
                    <Card.Img className='w-50' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{teacherName}</Card.Title>
                        <Card.Text>
                            {designation}
                        </Card.Text>
                        <Button variant="danger">Details</Button>{' '}
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Teacher;