import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
 function Signup() {
    const redirect = useNavigate();
    const [userName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    // console.log(email);
    const [password, setPassword] = useState('');
    // console.log(password);

    const SubmitSignup = async (e) => {
        e.preventDefault();
        if (userName === "") { alert("please Enter Name fields") }
        else if (email === "") { alert("please Enter Email fields") }
        else if (password === "") { alert("please Enter Password fields") }
        // mongodb://127.0.0.1:27017
        // api/users/

        try {
            // const apiUrl = 'http://localhost:3002/api/users/signup';
            // const response = await axios.post(apiUrl, { userName, email, password });
           const result = await axios.post('http://localhost:3002/signup', { userName, email, password })
            //  axios.post('http://localhost:3002/api/users/signup', { userName, email, password })
            if (result.data === "user created seccessfull") {
                alert("User already exists");
                console.log("user already exists", result.data);
                redirect("/Home");
            } else if (result.data === "user already exist") {
                redirect("/Home");
                console.log("to home", result.data);
            }
            console.log(result);
                // .then(result => {
                //     if (result.data === "user created seccessfull") {
                //         alert("User already exists");
                //         console.log("user already exists", result.data);
                //         redirect("/Home");
                //     } else if (result.data === "user already exist") {
                //         redirect("/Home");
                //         console.log("to home", result.data);
                //     }
                //     console.log(result);
                // })
                // .catch(error => {
                //     console.log(error);
                // })
            // else {
            //     localStorage.setItem("SignUpdata", JSON.stringify([payload]));
            // }
            // console.log(data);
        }
        catch (error) {
            alert(error);
            console.log(error);
        }
    }

    return (
        <div>
            <div className='container text-center  p-4'>
                <h1>Signup </h1>
                <form action="" method='POST' onSubmit={SubmitSignup}  className='container text-center' >

                    {/* <input type="text"  value={userName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter your Full Name" autoComplete='off'/>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" autoComplete='off'/>
                    <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"  autoComplete='off'/>
                    <button></button> */}

                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="text" value={userName} autoComplete='off' onChange={(e) => setFullName(e.target.value)} placeholder="Enter your Full Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <p>Already a member? <Link to="/Login">Login</Link></p>
                    </Form.Group>
                    <Button variant="primary" type="submit"  >
                        Sign up
                    </Button>
                </form>

                {/* <p>Already have an account?</p>
                    <Button variant="primary" type="submit" onClick={SubmitSignup} >
                        login
                    </Button> */}
            
            </div>
        </div>
    )
}

export default Signup;


