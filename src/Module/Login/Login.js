import React, { useState } from "react";
import Styled from "styled-components";
import {Auth} from "../Firebase/firebase";
import {signInWithEmailAndPassword } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

const LoginForm = Styled.div`
width:100% ;
display:flex;
margin-top:200px ;
justify-content:center;
`;
const LoginButton = Styled.button`
background-color: red ;
color:white ;
margin-bottom: 20px ;
`;
const InputLogin = Styled.input`
margin-bottom:20px ;
`;


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError]=useState(false)
    // const errorCode="";
    // const errorMessage="";
    const Navigate =useNavigate()


    const OnLoginHandle = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        Navigate("/addnewitem")
      
        // ...
      })
      .catch((error) => {
        // errorCode = error.code;
        // errorMessage = error.message;
        setError(true)
      });
    
    }
    


  return (
    <LoginForm>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <InputLogin type="email" placeholder="Email" onChange={(e) =>setEmail(e.target.value)} />
        <InputLogin type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        <LoginButton type="Submit" onClick={OnLoginHandle}>Login</LoginButton>
        {error && <div>Wrong Email or Password</div>}
      </div>
    </LoginForm>
  );
}

export default Login;
