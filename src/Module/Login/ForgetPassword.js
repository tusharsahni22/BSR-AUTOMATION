import React, { useState } from "react";
import {Auth} from "../Firebase/firebase";
import {signInWithEmailAndPassword } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import styled from 'styled-components';

const Input = styled.input`
margin-bottom: 20px ;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: white;
    font-weight: 100;
    font-size: 1rem;
  }
`;
const Button= styled.button`
background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  `;

  const Background=styled.div`
  background-image: url("./background.jpg");
  height: 100vh ;
  width: 100% ;
  padding-top: 100px;
 
  `;


function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [error,setError]=useState(false)
    const Navigate =useNavigate()


    const OnForgetHandle = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("login")
        Navigate("/addnewitem")
      
        // ...
      })
      .catch((error) => {
       
        setError(true)
      });
    
    }
  return (
      <Background>
    <MainContainer>
      <WelcomeText>Reset Password</WelcomeText>
      <InputContainer>
        <Input type="text" placeholder="Email" onChange={(e) =>setEmail(e.target.value)} />
      </InputContainer>
      <ButtonContainer>
        <Button onClick={OnForgetHandle}>Forget Password</Button>
        
      </ButtonContainer>
      <LoginWith>{error && <div>Wrong Email or Username</div>}</LoginWith>
      <HorizontalRule />
      <Login onClick={() => {Navigate("/login")}}>Login</Login>
      {/* <ForgotPassword>Forgot Password ?</ForgotPassword> */}
    </MainContainer>
      </Background>
  );
}

const MainContainer = styled.div`
  display: flex;
  margin: 0 auto ;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const Login = styled.h4`
  cursor: pointer;
`;

export default ForgotPassword;
