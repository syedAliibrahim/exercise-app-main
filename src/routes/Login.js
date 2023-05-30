import { Card, Container, FloatingLabel, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import ErrorFlag from '.././ErrorFlag';

function Login({ errorMsg, setErrorMsg, logUserIn}) {

    const [userName, setUserName] = useState('');
    const [pass, setPassword] = useState('');


    const handleSubmit = (e) => {
        //Prevent the browser from implementing the default behavior of the event
        e.preventDefault();

        //Do not submit if either of the input fields are empty
        if (!userName || !pass) {
            setErrorMsg("One (or more) of the required fields (marked by *) are empty");
            return;
        };

        logUserIn(userName, pass);

        //Reset the input fields
        setUserName('');
        setPassword('');
    }


    return (
        <>
            <Container>
                <Row>
                    <h1 className='display-2 mt-5'>Welcome to Exercise Tracker App!</h1>
                    <h3 className='display-6 mt-3'>Log in to your account to access all the features.</h3>
                </Row>
            </Container>

            <Form>

                <Container className='mt-5 mb-5'>
                    <Row xs={2}>
                        <Card className='p-4 shadow bg-body rounded'>
                            <Form className='d-grid'>

                                <FloatingLabel controlId="floatingInput" label="Username *" className="mb-3">
                                    <Form.Control type="text" placeholder="my_username" value={userName} onChange={e => setUserName(e.target.value)} />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingPassword" label="Password *" className="mb-3"  >
                                    <Form.Control type="password" placeholder="Password" value={pass} onChange={e => setPassword(e.target.value)} />
                                </FloatingLabel>

                                <ErrorFlag errorMsg={errorMsg} setErrorMsg={setErrorMsg} />

                                <Button variant="primary" onClick={handleSubmit}>
                                    Log in
                                </Button>

                                <hr />

                                <p className='text-center'>Not a member yet?</p>

                                <Button variant="secondary" href="/signup">
                                    {/* Have to add a on click handler to this button */}
                                    Sign up
                                </Button>
                            </Form>
                        </Card>
                    </Row>
                </Container>

            </Form>

        </>
    );

}

export default Login;