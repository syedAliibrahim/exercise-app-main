import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ErrorPage() {
    // const error = useRouteError();
    // console.error(error);

    return (
        <Container>
            <Row>
                <Col>
                    <div id="error-page" class="position-absolute top-50 start-50 translate-middle">
                        <h1 className="display-4">Oops!</h1>
                        <p>Sorry, an unexpected error has occurred.</p>
                        <p>
                            {/* <i>{error.statusText || error.message}</i> */}
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ErrorPage;