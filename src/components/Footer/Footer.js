import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <>
                <Card className="bg-dark text-white">
                    <Card.Body className='d-flex justify-content-between align-items-center p-5'>
                        <div>
                            <Card.Title className="fs-2">
                                Come Work with Us
                            </Card.Title>
                            <Card.Text><small>Join the Team</small><br />
                                Are you passionate about teaching English or simply like the idea <br /> of being part of something innovative and exciting? Apply for a position and be part of the team.
                            </Card.Text>
                            <Card.Text><small>Contact Us</small><br />
                                Phone: +88017******** <br /> Email: codder94@gmail.com
                            </Card.Text>
                        </div>
                        <div>
                            <Form className="text-start mb-2 fs-3">Give Us Your FeedBack</Form>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Your Comment</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Card.Body>
                    <small>&copy;2021 by Langify Learning And Teaching. Proudly created by myself.</small>
                </Card>
            </>
        </div>
    );
};

export default Footer;