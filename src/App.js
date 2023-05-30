import React, { useState , useEffect } from "react";
import ErrorPage from "./routes/404.js";
import SignUp from './routes/SignUp';
import ActivityDashboard from "./routes/ActivityDashboard.js";
import ActivityForm from "./routes/ActivityForm.js";
import axios from 'axios';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Login from "./routes/Login.js";


function App() {

    const [activities, setActivities] = useState([]);
    const [updateFlag, setUpdateFlag] = useState(false);
    const [error, setError] = useState(false);
    const [userList, setUser] = useState([
        {
            userName: 'admin',
            pass: 'admin123',
            firstName: 'Robot',
            lastName: 'Admin',
        },
    ]);                                                                 // Initial User List
    const [loginDetails, setLoginDetails] = useState([]);               // Only stores Username, first, last name
    const [errorMsg, setErrorMsg] = useState(null);                     // To display error flags on login and signup page 
    const [authenticated, setAuthenticated] = useState(false);          // Boolean flag to check if user is signed in or not

    const navigate = useNavigate();                                     // To redirect using react-router's hook

    const fetchData = () => axios.get('http://localhost:3000/api/tracking/').then((res) => {
        setActivities(res.data);
        setUpdateFlag(false);
     })
    .catch((e) => {
      console.log(e.message)
    });

    useEffect(() => {
        fetchData();
      }, [updateFlag])
    const logUserIn = (userName, pass) => {
        let counter = 0;

        userList.forEach((x) => {
            if (x.userName.toLowerCase() === userName.toLowerCase()) {
                if (x.pass === pass) {
                    setLoginDetails({
                        userName,
                        firstName: userList[counter].firstName,
                        lastName: userList[counter].lastName,
                    });
                    setAuthenticated(true);
                    navigate("/dashboard");
                    return;
                }
                setErrorMsg('Password is incorrect.');
                return;
            }
            counter++;
        })

        if (counter === userList.length) {
            setErrorMsg('Username not found.');
        }
    }

    const addUser = (userName, pass, firstName, lastName) => {
        let checkUnique = true;

        //a loop to check if the entered email is a duplicate

        userList.forEach((x) => {
            if (x.userName.toLowerCase() === userName.toLowerCase()) {
                // setShow(true);
                // add a flag to not allow duplicate usernames
                checkUnique = false;
                return;
            }
        })

        // if checkUnique is true, publish changes to the state i.e. add the user

        if (checkUnique) {
            const newUserList = [...userList, { userName, pass, firstName, lastName }];
            setUser(newUserList);
            navigate("/login");
            return;
        }
        setErrorMsg('Username already exists');
        return;
    }

    const logout = () => {
        setLoginDetails([]);
        setAuthenticated(false);
        navigate("/login");
    }

    if (!authenticated) {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Exercise Tracker App</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/signup">Sign up</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

                <br />

                <Routes>
                    <Route path="/" element={
                        <Login
                            errorMsg={errorMsg}
                            setErrorMsg={setErrorMsg}
                            logUserIn={logUserIn}
                        />
                    } />
                    <Route path="/login" element={
                        <Login
                            errorMsg={errorMsg}
                            setErrorMsg={setErrorMsg}
                            logUserIn={logUserIn}
                        />
                    } />
                    <Route path="/signup" element={
                        <SignUp
                            addUser={addUser}
                            errorMsg={errorMsg}
                            setErrorMsg={setErrorMsg}
                        />
                    } />
                    <Route
                        path="/dashboard"
                        element={<Navigate to="/login" replace />}
                    />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>

            </>
        )
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Exercise Tracker App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <NavDropdown title={`Signed in as: ${loginDetails.userName}`} id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <br />

            <Routes>
                <Route path="/dashboard" element={
                   <ActivityDashboard activities={activities} setActivities={setActivities} setUpdateFlag={setUpdateFlag} error={error} setError={setError} />
                } />
                <Route path="/add" element={
                <ActivityForm setUpdateFlag={setUpdateFlag} error={error} setError={setError} />
                } />
                <Route
                    path="/"
                    element={<ActivityDashboard activities={activities} setActivities={setActivities} setUpdateFlag={setUpdateFlag} error={error} setError={setError}/>}
                />
                <Route
                    path="/login"
                    element={<Navigate to="/dashboard" replace />}
                />
                <Route
                    path="/signup"
                    element={<Navigate to="/dashboard" replace />}
                />
                <Route path="*" element={<ErrorPage />} />
            </Routes>

        </>
    )

}

export default App;