import React, { useState, useEffect } from "react";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../Firebase/firebase";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import styled from "styled-components";

const imagesListRef = ref(storage, "images/");

const types = ["image/png", "image/jpg"];

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
const DetailText = styled.div`
  width: 100%;
  color: red;
  margin: auto;
  text-align: center;
`;

function Product() {
//   useEffect(() => {
//     listAll(imagesListRef).then((response) => {
//       response.items.forEach((item) => {
//         getDownloadURL(item).then((url) => {
//           setImageUrls((prev) => [...prev, url]);
//         });
//       });
//     });
//   }, []);

//   const [file, setFile] = useState(null);
//   const [error, setError] = useState(null);

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

//   const changedHander = (e) => {
//     let selected = e.target.files[0];
//     if (selected && types.includes(selected.type)) {
//       setFile(setFile);
//       setError(null);
//       //   console.log("file",file);
//     } else {
//       setFile(null);
//       setError("Select valid image type png or jpeg");
//       //   console.log("error",error)
//     }
//   };
    useEffect(() => {
      listAll(imagesListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageUrls((prev) => [...prev, url]);
          });
        });
      });
    }, []);
  return (
    <div>
      <Header />
      <PhotoGrid>
        {imageUrls.map((url) => {
          return (
            <Frame>
              {" "}
              <img src={url} style={{ height: "200px", width: "200px",margin:"20px" }} />{" "}
            </Frame>
          );
        })}

        {/* <Frame>
          <img src="url" alt="product"></img>
          <DetailText>More Details</DetailText>
        </Frame> */}
        {/* <Frame>
          <img src="./logo192.png" alt="product"></img>
        </Frame>
        <Frame>
          <img src="./logo192.png" alt="product"></img>
        </Frame>
        <Frame>
          <img src="./logo192.png" alt="product"></img>
        </Frame> */}
        {/* <Frame>
          <img src="./logo192.png" alt="product"></img>
        </Frame> */}
      </PhotoGrid>

      {/* <div>Upload Photos</div>
      <input type="file" onChange={changedHander} />
      <div>{error}</div> */}
      {/* <Progress file={File} setFile={setFile}/> */}
      {/* <div>file={file} setFile{setFile}</div> */}
      <Footer />
    </div>
  );
}

export default Product;
