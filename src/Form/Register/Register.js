import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const navigate =useNavigate();

  const navigateLogin = () =>{
    navigate('/login')
  }

  if(user){
    navigate('/home');
  }

  const handleRegister = event =>{
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    createUserWithEmailAndPassword( email, password);
  
  }

  return (
    <div className="container w-75 mx-auto pb-5 my-5">
      <h1 className="text-center login-text my-5">Register Here!</h1>
      <Form onSubmit={handleRegister}>
        <Form.Label htmlFor="name">Username</Form.Label>
        <Form.Control
          ref={nameRef}
          type="text"
          placeholder="Type your name"
        />

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>Already have an account on Adventurous Travelling? <Link to="/login" className="text-primary pe-auto text-decoration-none " onClick={navigateLogin}>Login Here!</Link></p>
    </div>
  );
};

export default Register;
