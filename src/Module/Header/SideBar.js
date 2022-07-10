import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

const Link=styled.div`
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  color: red;
  border: none;
  margin: 15px;
  font-size: 10px;
`;

const SideBar =styled.div`
background-color:black;
color:red;
width: 30% ;
height: 100vh ;
position:absolute;
left: 70%;
z-index:1 ;
@media (min-width:768px){
    display: none ;
  }
`;

function SideBarr() {
    const navigate = useNavigate();
  return (

    <SideBar>
      <Link onClick={() => {navigate("/")}}>Home </Link>
        <Link onClick={() => {navigate("/products")}}>Product</Link>
        <Link onClick={() => {navigate("/CompanyProfile")}}>Company Profile</Link>
        <Link onClick={() => {navigate("/ProductGallery")}}>Project Gallery</Link>
        <Link onClick={() => {navigate("/aboutus")}}>About Us</Link>
        <Link onClick={() => {navigate("/contactus")}}>Contact</Link>
    </SideBar>
  )
}

export default SideBarr