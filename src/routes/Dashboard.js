import React from "react";
import { Container, Row } from 'react-bootstrap';

function Dashboard({ loginDetails }) {

    return (
        <>
            <Container>
                <Row>
                    <h1 className='display-2 mt-5'>Welcome {loginDetails.firstName} {loginDetails.lastName}!</h1>
                    <hr />
                </Row>
            </Container>
        </>
    )
}

export default Dashboard;