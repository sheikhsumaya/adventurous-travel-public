import React from "react";
import logo from "../../../Images/image8-2.png";
import logo2 from "../../../Images/github_PNG40.png";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  
  let errorElement;

  if (error || error1) {
    errorElement=
        <p className="text-danger">Error: {error?.message} {error1?.message}</p>
    ;
  }
  if(loading || loading1){
    return <Loading></Loading>
  }
  if(user || user1){
      navigate('/home');
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="pt-2 mx-2">Or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div>
        <button 
        onClick={() => signInWithGoogle()}
        className="btn btn-info w-50 d-block mx-auto my-3">
          <img src={logo} alt="" />
          <span className="px-1">Google Sign In</span>
        </button>
        <button 
        onClick={() => signInWithGithub()}
        className="btn btn-info w-50 d-block mx-auto my-3">
          <img src={logo2} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
