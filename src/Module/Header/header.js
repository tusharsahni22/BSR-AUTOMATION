import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Contactus from "../ContactUs/contactus";

const Header = styled.div`
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: red;
  height: 80px;
`;
const HeaderItems = styled.button`
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  background-color: black;
  color: red;
  border: none;
  margin: 15px;
  font-size: 18px;
`;
const Search =styled.input`
height: "20px";
 margin: "30px";
 outline:"none";
`;

const Logo = styled.img`
  height: 60px;
  /* width:20px ; */
`;

function Headers() {
  //   const handleClick = (route) => {
  //     navigate(route);
  // }
  const navigate = useNavigate();
  return (
    <Header>
      <div style={{ marginLeft: "20px", marginTop: "10px" }}>
        <Logo src="./bsr.png" alt="Logo"></Logo>
      </div>
      <div style={{display:"flex"}}>
        <HeaderItems onClick={() => {navigate("/")}}> Home </HeaderItems>
        <HeaderItems  onClick={() => {navigate("/products")}}>Product</HeaderItems>
        <HeaderItems>Company Profile</HeaderItems>
        <HeaderItems>Project Gallery</HeaderItems>
        <HeaderItems>About Us</HeaderItems>
        <Contactus />
       <HeaderItems>
          <Search placeholder="Search here"></Search>
        </HeaderItems>
      </div>
    </Header>
  );
}

export default Headers;
