import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import img from '../../images/study.jpg'

const Cover = () => {
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} />
                </Card>
                <Card>
                    <Card.Body className='py-5'>
                        <Card.Title className='fs-1'>Langify Learning And Teaching Welcomes You</Card.Title>
                        <Card.Text className='fs-5'>
                            We are help you to grow up your english language skills and some computer based technial knowledge.{' '}
                        </Card.Text>
                        <Card.Text className='fs-5'>
                            Our innovative teaching methods and techniques helps you be the best version of yourself when speaking English or computing. Watch our videos in our video library to check our CEO explaing these methods for each level.{' '}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Cover;