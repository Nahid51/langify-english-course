import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
    return (
        <div className='m-5'>
            <>
                <Card className='p-5'>
                    <Card.Body>
                        <Card.Title className='fs-1 mb-5'>About Our English Language Course</Card.Title>
                        <Card.Text className='fs-5'>
                            Since our founding, Langify Learning And Teaching has had the opportunity to help numerous students acquire foundational skills, develop new techniques and confidently move forward in their learning journey. As an emerging online English course, we provide a wide range of online and in person (depending on your location) courses to support students from all backgrounds and levels.{' '}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
            </>
        </div>
    );
};

export default About;