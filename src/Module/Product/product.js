import React, { useState, useEffect } from "react";
import {  getDownloadURL, listAll,ref } from "firebase/storage";
import { storage } from "../Firebase/firebase";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import styled from "styled-components";
import { readUserData } from "../Firebase/Database";

const imagesListRef = ref(storage, "images/");
let data =readUserData();

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
  height: 250px;
  box-shadow: 0 3px 10px;
  border-radius: 35px;
  border: 2px;
`;

function Product() {
 
  const [imageUrls, setImageUrls] = useState([]);
  // const [data,setData] = useState({desc:""})

    useEffect(() => {
      setImageUrls([])
      listAll(imagesListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageUrls((prev) => [...prev, url]);

          });
        });
      });       
    }, []);

    
    // useEffect(()=>{
    //   let data =readUserData();
    //   console.log("data",data)
      
   

    // },[])

  

    
  return (
    <div>
      <Header />
      <PhotoGrid>
  

{/* {data.images.map((url) => {
  console.log("uuidd",url)
          return (
            <Frame>
              {" "}
              <img src={url.profile_picture } style={{ height: "200px", width: "200px",margin:"20px" }} />{" "}
              
            </Frame>
          );
        })} */}

{imageUrls.map((url) => {
          return (
            <Frame>
              {" "}
              <img src={url} style={{ height: "200px", width: "200px",margin:"20px" }} />{" "}
             {console.log("11",data)}
              
            </Frame>
          );
        })}  

        {Object.keys(data).map((keyName, i)=>(<li> {keyName.description}</li>) )}
      </PhotoGrid>
      <Footer />
    </div>
   
  );
}

export default Product;
