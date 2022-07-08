import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Contactus from "../ContactUs/contactus";

const Header = styled.div`
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  display: flex;
  justify-content: space-between;
  width:100% ;
  background-color: black;
  color: red;
  height: 80px;
  @media (min-width:0px) and (max-width :767px){
    font-family: "Palatino Linotype","Book Antiqua",Palatino,serif;
    background-color: black;
    color: red;
    margin: 14px 3px;
    font-size: 10px;
    
  }
`;
const HeaderItems = styled.div`
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  background-color: black;
  color: red;
  border: none;
  margin: 15px;
  font-size: 18px;
  @media (min-width:0px) and (max-width :767px){
    width: auto ;
    
  }
`;
const Search =styled.input`
height: "20px";
 margin: "30px";
 outline:"none";
`;

const Logo = styled.img`
  height: 60px;
@media (max-width:767px){
  margin-left: 5px;
    margin-top: 5px;
  height: 22px;
}
`;

function Headersreplaced() {
  //   const handleClick = (route) => {
  //     navigate(route);
  // }
  const navigate = useNavigate();
  return (
    <Header>
      
        <Logo src="./bsr.png" alt="Logo"></Logo>
      
      <div style={{display:"flex"}}>
        <HeaderItems onClick={() => {navigate("/")}}> Home </HeaderItems>
        <HeaderItems onClick={() => {navigate("/products")}}>Product</HeaderItems>
        <HeaderItems onClick={() => {navigate("/CompanyProfile")}}>Company Profile</HeaderItems>
        <HeaderItems onClick={() => {navigate("/ProductGallery")}}>Project Gallery</HeaderItems>
        <HeaderItems onClick={() => {navigate("/aboutus")}}>About Us</HeaderItems>
        <HeaderItems onClick={() => {navigate("/contactus")}}>Contact Us</HeaderItems>
       <HeaderItems><Search placeholder="Search here"></Search></HeaderItems>
      </div>
    </Header>
  );
}

export default Headersreplaced;
