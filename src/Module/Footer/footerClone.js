import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  height: 220px;
  display: flex;
  /* background-color: rgb(207, 46, 46); */
`;
const MainContainer = styled.div`
  background-color: rgb(207, 46, 46);
  `;
const QuickLinks = styled.div`
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  margin: 20px 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
`;

const ContactUs = styled.div`
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  margin: 20px 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
`;
const Form = styled.div`
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  margin: 20px 50px;
  color: white;
`;
const Line =styled.div`
height:1px ;
width: 100% ;
background-color : white ;

`;
const CopyRight =styled.div`
height:50px ;
width: 100% ;
display:flex ;
justify-content:center ;
color : white ;
@media (max-width:768px){
  font-size: 12px ;
  flex-direction: column ;
}
`;

function footer() {
  return (
    <MainContainer>
      <Footer>
        <QuickLinks>
          <h3>Quick Links</h3>
          <div>Home</div>
          <div>Product</div>
          <div>Company Profile</div>
          <div>Project Gallery</div>
        </QuickLinks>

        <ContactUs>
          <h3>Contact Us</h3>
          <div>Address</div>
          <div>Mobile no</div>
          <div>Email id</div>
          <div>insta fb</div>
        </ContactUs>
        {/* <Form>
          <h3>Enquiry</h3>

          <input placeholder="Name"></input>

          <input placeholder="Email Id"></input>

          <input placeholder="Mobile No."></input>

          <input placeholder="Product Name"></input>

          <input placeholder="Discription"></input>
        </Form> */}

        
      </Footer>
      <Line></Line>
      <CopyRight> <div>© Copyright 2021 BSR Automation All right reserved. </div> <div>  Designed by Tushar Sahni </div> </CopyRight>
    </MainContainer>
  );
}

export default footer;
