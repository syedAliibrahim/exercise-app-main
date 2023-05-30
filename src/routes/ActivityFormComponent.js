import { Button, Form, FloatingLabel } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorFlag from './ErrorFlag';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import axios from 'axios';

function ActivityFormComp({ setUpdateFlag, activities, oid, isEdit, setModalShow, error, setError }) {

    //to maintain the state of the form fields
    const [activity, setActivity] = useState({
        name: '',
        desc: '',
        activityType: '',
        duration: ''
    });


    const [date, setDate] = useState(new Date());

    const handleDaySelect = (inputDate) => {
        const currentDate = new Date();
        if (inputDate < currentDate) {
            alert('Selected date cannot be before the current date.');
        } else {
            setDate(inputDate);
        }
    }

    const navigate = useNavigate();

    const footer = <p>You selected {format(date, 'PPP')}.</p>;
    useEffect(() => {
        if (oid) {
            const editActivity = activities.filter(item => item._id === oid);
            setActivity(editActivity[0]);
        }
    }, [oid, activities]);

    const handleUpdate = (e) => {
        e.preventDefault();

        if (!activity.name || !activity.desc || !activity.activityType || !activity.duration) {
            setError({
                msg: "Please enter all fields",
                color: 'danger',
            });
            console.log("error")
            // return;
        } else {
            axios.put('http://localhost:3000/api/tracking/' + oid, {
                name: activity.name,
                desc: activity.desc,
                duration: activity.duration,
                date: date,
                activityType: activity.activityType
            }).then((res) => {
                setUpdateFlag(true);
                setActivity({
                    name: '',
                    desc: '',
                    activityType: '',
                    duration: '',
                    date: date,
                });
                setModalShow(false);
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    const handleAdd = (e) => {
        //Prevent the browser from implementing the default behavior of the event
        e.preventDefault();

        //Do not submit if either of the input fields are empty

        if (!activity.name || !activity.desc || !activity.activityType || !activity.duration) {
            setError({
                msg: "Please enter all fields",
                color: 'danger',
            });
            console.log(error);
        } else {

            axios.post('http://localhost:3000/api/tracking', {
                name: activity.name,
                desc: activity.desc,
                duration: activity.duration,
                date: date,
                activityType: activity.activityType
            }).then((res) => {
                setActivity({
                    name: '',
                    desc: '',
                    activityType: '',
                    duration: '',
                    date: date,
                })
                setUpdateFlag(true);
                navigate('/dashboard');
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    return (
        <>
            <Form className='d-grid'>

                <ErrorFlag error={error} setError={setError} />

                <Form.Group>
                    <FloatingLabel controlId="floatingInput" label="Activity Name *" className="mb-3">
                        <Form.Control type="text" placeholder="Activity" value={activity.name} onChange={(e) =>
                        {
                            const inputValue = e.target.value;
                            const sanitizedValue = inputValue.replace(/\s/g, ''); // Remove spaces
                            setActivity({ ...activity, name: sanitizedValue });
                            }}
                             />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group>
                    <FloatingLabel controlId="floatingInput" label="Activity Description" className="mb-3">
                        <Form.Control type="text" placeholder="Description" value={activity.desc} onChange={e => setActivity({ ...activity, desc: e.target.value })} />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group>
                    <FloatingLabel controlId="floatingInput" label="Activity Duration (in hours)" className="mb-3">
                        <Form.Control type="text" placeholder="Activity Duration (in hours)" value={activity.duration} onChange={(e) => {const inputValue = e.target.value;
                            const isValidInput = /^(\d+(\.\d{0,1})?)?$/.test(inputValue);
                            if (isValidInput)
                            setActivity({ ...activity, duration: e.target.value })}} />
                    </FloatingLabel>
                </Form.Group>

                <Form.Select aria-label="Default select example" className="mb-3" onChange={e => setActivity({ ...activity, activityType: e.target.value })}>
                    <option>Select Activity Type</option>
                    <option value="run">Run</option>
                    <option value="bicycle">Bicycle Ride</option>
                    <option value="swim">Swim</option>
                    <option value="walk">Walk</option>
                    <option value="hike">Hike</option>
                </Form.Select>

                <Form.Group>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={handleDaySelect}
                        footer={footer}
                    />
                </Form.Group>

                {
                    !isEdit ? <Button variant="primary" onClick={handleAdd}>
                        Add Activity
                    </Button> : <>
                        <Button variant="primary" onClick={handleUpdate}>
                            Update Activity
                        </Button>
                    </>
                }
            </Form>
        </>
    )
}

export default ActivityFormComp;