import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import "./Login.css";
import SocialLogin from "./SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();


  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
      auth
    );

  if (user) {
    navigate(from, {replace:true});
  }
  if (error) {
    errorElement=
        <p className="text-danger">Error: {error?.message}</p>
    ;
  }
  if(loading || sending){
    return <Loading></Loading>
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async()=>{
    const email = emailRef.current.value;
    if(email){
      await sendPasswordResetEmail(email);
    toast('Email Sent!')
    }
    else{
      toast('Type Your Email First!')
    }
  }

  return (
    <div className="container w-75 mx-auto pb-5 my-5">
      <h1 className="text-center login-text my-5">Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
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
            required
          />
        </Form.Group>
        <Button variant="primary w-50 mx-auto d-block my-4" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>
        New to Adventurous Travelling?{" "}
        <Link
          to="/register"
          className="text-primary pe-auto text-decoration-none "
          onClick={navigateRegister}>
          Please Register!
        </Link>
      </p>
      <p>
        Forget Password?{" "}
        <button
          to="/register"
          className="btn btn-link text-primary pe-auto text-decoration-none "
          onClick={resetPassword}>
          Reset Password!
        </button>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
