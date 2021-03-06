import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Table from "./Table";
import styled from "styled-components";
import Slides from "./SlideShow/slide";

function CompanyProfile() {
  const TableDiv = styled.div`
    padding-left: 10%;
    padding-right: 10%;
    width: auto;
  `;
  const Description = styled.div`
    font-size: 20px;
    padding: 20px;
  `;

  return (
    <div>
      <Header />
      <h1>Company Profile</h1>

      <Slides></Slides>

      <Description>
        BSR Automation, a quality electrical items serving entity, is based in
        Ghaziabad, Uttar Pradesh (India), for more than 05 years. So many years
        of experience in producing electrical products has gained us the power
        to innovate products for commercial and residential use. Our electrical
        products like Dry Type Transformer , Distribution Panel, Motor Starter
        Panel, Lighting Distribution Board, Distribution With Automatic Power
        Factor Panel and more, are durable and performance-oriented. Systems and
        tools, which are modern in technology are outfitted in our setup of
        production, using which our production experts present before customers,
        a cost-effective electrical range.
      </Description>

      <TableDiv>
        <Table />
      </TableDiv>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default CompanyProfile;
