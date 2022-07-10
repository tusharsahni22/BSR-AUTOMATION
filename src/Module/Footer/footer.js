import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaAddressCard,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const MainContainer = styled.div`
  background: linear-gradient(rgb(117, 203, 231) 0%, rgb(19, 143, 194) 100%);
  height: 100%;
  color: rgb(255, 255, 255);
  font-family: Poppins, sans-serif;
`;
const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 0 80px;
  @media(max-width:768px){
  padding:50px 0 80px
  }
`;
const Contact = styled.div`
  font-size: 28px;
  font-weight: 600;
  position: relative;
`;
const AddressDiv = styled.div`
  justify-content: space-between;
  display: flex;
  @media (max-width:768px){
    display: block;
    padding: 0 2% ;
  }
`;

const Address = styled.div`
  margin: 0 15px;
  @media (max-width:768px){
    margin: 0 ;
  }
`;

const ContactForm = styled.div`
  width: 100%;
  margin: 0 100px;
  @media (max-width:768px){
    margin: 2% 0 ;
  }
`;
const Details = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const H4 = styled.h4`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  padding-bottom: 6px;
  font-weight: bold;
`;
const P = styled.p`
  box-sizing: border-box;
  font-size: 16px;
  margin: 0;
  padding: 0;
  font-family: Poppins, sans-serif;
  @media(max-width:768px){
    font-size: 12px ;
  }
`;
const ParaContact = styled.p`
@media(max-width:768px){

 font-size: 12px;
    text-align: center;
    margin: 3% 2%;
  }
`;

const EmailName = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  width: 100%;
  margin-bottom: 24px;
  /* padding: 12px 20px; */
  padding: 12px 0px 12px 0px;
  border: none;
  outline: none;
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 1px inset;
  border-radius: 4px;
  resize: none;
  color: rgb(85, 85, 85);
`;
const InputName = styled.input`
  width: 45%;
  margin-bottom: 24px;
  /* padding: 12px 20px; */
  padding: 12px 0px 12px 0px;
  border: none;
  outline: none;
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 1px inset;
  border-radius: 4px;
  resize: none;
  color: rgb(85, 85, 85);
`;
const InputEmail = styled.input`
  width: 45%;
  margin-bottom: 24px;
  /* padding: 12px 20px; */
  padding: 12px 0px 12px 0px;
  border: none;
  outline: none;
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 1px inset;
  border-radius: 4px;
  resize: none;
  color: rgb(85, 85, 85);
`;
const InputMessage = styled.input`
  width: 100%;
  margin-bottom: 24px;
  /* padding: 12px 20px; */
  padding: 12px 0px 12px 0px;
  border: none;
  outline: none;
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 1px inset;
  border-radius: 4px;
  resize: none;
  color: rgb(85, 85, 85);
  height: 160px;
`;
const Message = styled.div``;
const MessageTopic = styled.div``;
const Submit = styled.button`
  border: none;
  background: rgb(47, 96, 195);
  color: rgb(255, 255, 255);
  border-radius: 4px;
  padding: 11px 43px;
  letter-spacing: 1.3px;
  margin: 0px;
`;
const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px 10px;
  @media (max-width:768px){
    margin: 0 10px ;
  }
`;
const Desc = styled.div`
  padding: 60px 0px;
  @media(max-width:768px){
    font-size: 12px ;
  }
`;
const Icons = styled.div`
  width: 100%;
  padding: 60px 0px;
  margin: 0px auto;
  position: relative;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: flex-end;
  -webkit-box-align: center;
  align-items: center;
`;
const CopyRight = styled.div`
  width: 100%;
  padding: 28px 0px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: rgb(255, 255, 255);
  text-align: center;
  position: relative;
  @media(max-width:768px){
    font-size: 12px ;
  }
`;

function footer() {
  return (
    <MainContainer>
      <ContactUs>
        <Contact>CONTACT WITH US</Contact>
        <ParaContact>
        </ParaContact>
      </ContactUs>
      <AddressDiv>
        <Address>
          <Details>
            <FaAddressCard
              style={{ marginRight: "30px", width: "70px", height: "70px" }}
            />
            <div>
              <H4>Address:</H4>
              <P>Shop No. GF-2/643 </P>
              <P>Sector 2B Vashundhra</P>
              <P>Ghaziabad UP-201012</P>
            </div>
          </Details>

          <Details>
            <FiPhoneCall
              style={{ marginRight: "30px", width: "70px", height: "70px" }}
            />
            <div>
              <H4>TelePhone:</H4>
              <P>+91 9910268735</P>
              <P>+91 7503980590</P>
            </div>
          </Details>

          <Details>
            <MdEmail
              style={{ marginRight: "30px", width: "70px", height: "70px" }}
            />
            <div>
              <H4>E-mail:</H4>
              <P>BsrAutomation17@gmail.com</P>
              {/* <P>BsrAutomation17@gmail.com</P> */}
            </div>
          </Details>
        </Address>
        <ContactForm>
          <EmailName>
            <InputName placeholder="You Name" />
            <InputEmail placeholder="Email Addesss" />
          </EmailName>

          <MessageTopic>
            <Input placeholder="Message Topic" />
          </MessageTopic>
          <Message>
            <InputMessage placeholder="Your Message" />
          </Message>
          <Submit>Submit</Submit>
        </ContactForm>
      </AddressDiv>

      <SocialMedia>
        <Desc>Manufacture of Main L.T. Panel Distribution Board, Cable Tray, & Bus Ducts, Control Panel, PLC Panel, AC/DC Drive Control Panel, Rotogravure Printing Machine, AC/DC Drive Repairs, AC/DC Drive Installation & Commissioning and Programing.</Desc>
        <Icons>
          <FaFacebookF style={{padding:"0 10px"}} />
          <FaInstagram style={{padding:"0 10px"}}/>
          <FaTwitter style={{padding:"0 10px"}}/>
          <SiGmail  style={{padding:"0 10px"}}/>
        </Icons>
      </SocialMedia>

      <CopyRight>
        <p>
          <p>
            © Copyright 2022 BSR Automation all right reserved. Designed by
            Tushar Sahni
          </p>
        </p>
      </CopyRight>
    </MainContainer>
  );
}

export default footer;
