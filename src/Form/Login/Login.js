import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
import SocialLogin from "./SocialLogin/SocialLogin";

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
    await sendPasswordResetEmail(email);
    alert('Email Sent!')
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
        <Link
          to="/register"
          className="text-primary pe-auto text-decoration-none "
          onClick={resetPassword}>
          Reset Password!
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
