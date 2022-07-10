import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import {AiOutlineHome,AiOutlineShopping,AiOutlineProfile,AiOutlineFundProjectionScreen,AiOutlineContacts} from "react-icons/ai"
import {SiAboutdotme} from "react-icons/si"

const Link=styled.div`
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  color: red;
  border: none;
  margin-left: 5px;
  font-size: 12px;
`;
const Item =styled.div`
display:flex;
justify-content: flex-start;
margin: 15px 0px 0 15px;

`;

const SideBar =styled.div`
background-color:black;
color:red;
width: 40% ;
height: 35vh ;
position:absolute;
left: 60%;
z-index:1 ;
@media (min-width:768px){
    display: none ;
  }
`;

function SideBarr() {
    const navigate = useNavigate();
  return (

    <SideBar>
      <Item >
      <AiOutlineHome />
      <Link onClick={() => {navigate("/")}}>Home </Link>
      </Item>
      <Item>
      <AiOutlineShopping />
      <Link onClick={() => {navigate("/products")}}>Product</Link>
      </Item>
        <Item>
          <AiOutlineProfile/>
        <Link onClick={() => {navigate("/CompanyProfile")}}>Company Profile</Link>
        </Item>
        <Item>
          <AiOutlineFundProjectionScreen/>
        <Link onClick={() => {navigate("/ProductGallery")}}>Project Gallery</Link>
        </Item>
        <Item>
          <SiAboutdotme/>
        <Link onClick={() => {navigate("/aboutus")}}>About Us</Link>
        </Item>
        <Item>
          <AiOutlineContacts/>
        <Link onClick={() => {navigate("/contactus")}}>Contact</Link>
        </Item>
    </SideBar>
  )
}

export default SideBarr