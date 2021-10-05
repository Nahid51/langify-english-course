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
                            Since our founding, Langify Learning And Teaching has had the opportunity to help numerous students acquire foundational skills, develop new techniques and confidently move forward in their learning journey. As an emerging online English course, we provide a wide range of online and in person (depending on your location) courses to support students from all backgrounds and levels. <br /> Actually, we have two different courses. one is an English course and another is a computer basic course. And we have different teachers for those different courses. You may take these courses in any order you like. If you purchase our courses you'll receive a separate certificate for each course you successfully complete.{' '}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
            </>
        </div>
    );
};

export default About;