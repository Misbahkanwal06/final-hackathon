import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {
  const redirect = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const SubmitLogin = async (e) => {
    e.preventDefault();
    try {
      // const config = {
      //   header: {
      //     "Content-type": "application/json"
      //   }
      // }
      // const { data } =
      //  await axios.post("/api/users/login", { email, password }, config);

      const res = await axios.post("http://localhost:3002/api/users/login", { email, password })
        .then(res => {
          if (res.data == "user created seccessfull") {
            redirect("/Home");
          }
          else if (res.data == "user already exist") {
            alert("User has not signup");
          }
        })
        .catch(res => {
          alert("Invalid credentials");
        })
      // const getsignupdata = localStorage.getItem("SignUpdata");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (

      <>
      <div className='container text-center  p-4'>
        <h1>Login </h1>
        <Form action="" method='POST' className='container text-center' >
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={SubmitLogin} >
            Submit
          </Button>
        </Form>
      </div>
      </>
  )
  }
  export default  Login;
