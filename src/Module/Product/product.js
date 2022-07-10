import React, { useState, useEffect } from "react";
import { storage } from "../Firebase/firebase";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import styled from "styled-components";
import { readUserData } from "../Firebase/Database";
import {  ref,getDatabase, onValue} from "firebase/database";
const db = getDatabase();


const PhotoGrid = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  flex-flow: wrap;
`;
const Frame = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  height: 300px;
  box-shadow: 0 3px 10px;
  border-radius: 35px;
  border: 2px;
`;
const Title =styled.div`
text-align: center ;
`;

function Product() {

  const [product, setProduct] = useState({
  "profile_picture":"hello",
    "description":"desc"
  });
//Read From database
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setProduct([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data.images).map((todos) => {
          setProduct((oldArray) => [...oldArray, todos]);
          console.log("Product",todos.profile_picture)
        });
      }
    });
  }, );
    
  return (
    <div>
      <Header />
      <PhotoGrid>
        {
          product.map && product.map((row) => (
              <Frame>
                <div style={{display:"flex",flexDirection:"column"}}>
                  <img src={row.profile_picture} style={{ height: "200px", width: "200px",margin:"20px" }} />{" "}
                  <Title>{row.description}</Title>
                </div>
              </Frame>
          ))
        }
      </PhotoGrid>

      <Footer />
    </div>
   
  );
}

export default Product;
