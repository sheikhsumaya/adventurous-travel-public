import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../Login/SocialLogin/SocialLogin";
import { async } from "@firebase/util";
import Loading from "../Loading/Loading";

const Register = () => {
  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});

  const [updateProfile, updating, error1] = useUpdateProfile(auth);

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  if(loading || updating){
    return <Loading></Loading>
  }

  if (user) {
    navigate("/home");
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;


   await createUserWithEmailAndPassword(email, password);
   await updateProfile ({displayName:name});
   navigate('/home')
    
  };

  return (
    <div className="container w-75 mx-auto pb-5 my-5">
      <h1 className="text-center login-text my-5">Register Here!</h1>
      <Form onSubmit={handleRegister}>
        <Form.Label htmlFor="name">Username</Form.Label>
        <Form.Control ref={nameRef} type="text" placeholder="Type your name" />

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={() => setAgree(!agree)}
            className={agree ? " text-primary" : " text-secondary"}
            type="checkbox"
            label="Accept our Terms and Conditions"
          />
        </Form.Group>
        <Button 
        disabled={!agree}
         variant="primary w-50 mx-auto d-block my-4" type="submit">
          Register
        </Button>
      </Form>
      <p>
        Already have an account on Adventurous Travelling?{" "}
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none "
          onClick={navigateLogin}
        >
          Login Here!
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
