import { Button, Modal, Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import ActivityFormComp from './ActivityFormComponent'

function ActivityDashboard({ activities, setActivities, setUpdateFlag, setEditRequest, error, setError }) {

    const [modalShow, setModalShow] = useState(false);
    const [oid, setOid] = useState('');
    const navigate = useNavigate();

    const deleteHandler = (oid) => {
        const confirmed = window.confirm("Are you sure you want to delete this item?");
        let updatedActivities = []
        if(confirmed){
        updatedActivities = activities.filter(item => item._id !== oid);
        axios.delete('http://localhost:3000/api/tracking/' + oid).then(
            (res) => setActivities(updatedActivities)
        ).catch((error) => console.log(error))
            }
        }
    const editHandler = (object_id) => {
        setOid(object_id);
        setModalShow(true);
    }

    function ModalFunction(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Activity
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <ActivityFormComp setUpdateFlag={setUpdateFlag} oid={oid} activities={activities} isEdit={true} setModalShow={setModalShow} error={error} setError={setError} />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }


    return (
        <>
            <Container className='pb-2'>

                <Card className='p-4 shadow bg-body rounded mb-5'>
                    <h5 className='display-5'>Activity list</h5>
                    
                    <Button variant="warning" className="mt-3 mb-3" onClick={() => navigate('/add')}>
                        Add New Activity
                    </Button>

                    {/* Modal start */}

                    <ModalFunction
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />

                    {/* Modal end */}

                    <div className='row ps-4 col-md-12 justify-content-center'>

                        {
                            // A map function to return the cards
                            activities.map((item, key) => (
                                <Card className="col-sm-4 border-0 my-2">
                                    <Card.Body className="shadow rounded-2 border border-1">
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                            {item.desc}
                                        </Card.Text>
                                        <Card.Text>
                                            <span className='fw-bold'>Duration</span><br /> {item.duration}
                                        </Card.Text>
                                        <Card.Text>
                                            <span className='fw-bold'>Activity Type</span><br /> {item.activityType || null}
                                        </Card.Text>

                                        <Card.Text>
                                            <span className='fw-bold'>Date</span><br /> {item.date}
                                        </Card.Text>
                                        <Button variant="primary" className='me-2' id={key} onClick={
                                            () => { editHandler(item._id) }
                                        }>
                                            Edit Activity
                                        </Button>

                                        <Button variant="danger" id={key} onClick={
                                            () => { deleteHandler(item._id) }
                                        }>
                                            Delete Task
                                        </Button>
                                    </Card.Body>
                                </Card>
                            ))
                        }

                    </div>
                </Card>

            </Container>
        </>
    )
}

export default ActivityDashboard;