import React, { useState } from 'react';
import { Card, Container, InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ErrorFlag from '../ErrorFlag';

function SignUp({ addUser, errorMsg, setErrorMsg }) {
    const [userName, setUserName] = useState('');
    const [pass, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    console.log(userName, pass, firstName, lastName)
    const handleSubmit = (e) => {
        //Prevent the browser from implementing the default behavior of the event
        e.preventDefault();

        //Do not submit if either of the input fields are empty
        if (!userName || !pass || !firstName || !lastName) { 
            setErrorMsg("One (or more) of the required fields (marked by *) are empty");
            return; };

        addUser(userName, pass, firstName, lastName);

        //Reset the input fields
        setUserName('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    return (
        <>

            <Container>
                <Row>
                    <h2 className='display-3 mt-5'>Become a Member of the Exercise Tracker App </h2>
                </Row>
            </Container>

            <Form>

                <Container className='mt-5 mb-5'>
                    <Row xs={2}>
                        <Card className='p-4 shadow bg-body rounded'>
                            <Form className='d-grid'>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">First Name *</InputGroup.Text>
                                    <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={e => setFirstName(e.target.value)} />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">Last Name *</InputGroup.Text>
                                    <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={e => setLastName(e.target.value)} />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">UserName *</InputGroup.Text>
                                    <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={e => setUserName(e.target.value)} />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">Password *</InputGroup.Text>
                                    <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" type='password' onChange={e => setPassword(e.target.value)} />
                                </InputGroup>

                                <ErrorFlag errorMsg={errorMsg} setErrorMsg={setErrorMsg} />

                                <Button variant="primary" href="/signup" onClick={handleSubmit} >
                                    Let's Go!
                                </Button>

                                <hr />

                                <p className='text-center'>Already an existing member?</p>

                                <Button variant="secondary" href="/login">
                                    Log in to your account
                                </Button>

                            </Form>
                        </Card>
                    </Row>
                </Container>

            </Form>

        </>
    )
}

export default SignUp;