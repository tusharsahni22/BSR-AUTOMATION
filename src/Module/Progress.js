import { useState, useEffect } from "react";
import {ref,uploadBytes,getDownloadURL,listAll,} from "firebase/storage";
import { storage } from "./Firebase/firebase";
import { v4 } from "uuid";
import writeUserData from "./Firebase/Database"
import styled from "styled-components";

const ROWONE =styled.div`
display:flex ;
flex-direction:column ;
width: 50%;
margin: 50px;
`;
const ROWTWO =styled.div`
display:flex ;
flex-direction:column ;
width: 50%;
margin: 50px;

`;
const Form =styled.div`
display:flex ;
flex-direction: row;
justify-content: space-evenly;
`;
const Submit =styled.div`
width: 100% ;
display: flex ;
justify-content: center ;
`;

function Progress() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageDesc, setImageDesc] = useState([]);
  const [Price, setPrice] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const uuid = v4();
    const imageRef = ref(storage, `images/${uuid}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        writeUserData(uuid,imageDesc,url)
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

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
    <div className="App">
      <h1>Input for Product Page</h1>
      <Form>
      <ROWONE >
      <h6>Upload Image</h6>
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <h6>Description</h6>
       <input
        type="text"
        onChange={(event) => {
          setImageDesc(event.target.value);
          console.log("22",imageDesc)
        }}
      />
      <h6>Price</h6>
      <input
        type="text"
        onChange={(event) => {
          setPrice(event.target.value);
          console.log("22",imageDesc)
        }}
      />
      <h6>Material</h6>
      <input
        type="text"
        onChange={(event) => {
          setPrice(event.target.value);
          console.log("22",imageDesc)
        }}
      />
      <h6>Rated Voltage</h6>
      <input
        type="text"
        onChange={(event) => {
          setPrice(event.target.value);
          console.log("22",imageDesc)
        }}
      />
      <h6>Packaging Details</h6>
      <input
        type="text"
        onChange={(event) => {
          setPrice(event.target.value);
          console.log("22",imageDesc)
        }}
      />
      
      <h6>Supply Ability</h6>
      <input
        type="text"
        onChange={(event) => {
          setPrice(event.target.value);
          console.log("22",imageDesc)
        }}
      />
      <h6>Offered By</h6>
      <input
        type="text"
        onChange={(event) => {
          setPrice(event.target.value);
          console.log("22",imageDesc)
        }}
      />
      </ROWONE>
      <ROWTWO>
      <h6>Frequency (MHz)</h6>
      <input
        type="text"
        onChange={(event) => {
          setPrice(event.target.value);
          console.log("22",imageDesc)
        }}
      />
      <h6>Rated Current</h6>
      <input
        type="text"
        onChange={(event) => {
          setPrice(event.target.value);
          console.log("22",imageDesc)
        }}
      />
      <h6>Base Material</h6>
      <input
        type="text"
        onChange={(event) => {
          setPrice(event.target.value);
          console.log("22",imageDesc)
        }}
      />
      <h6>Surface Color</h6>
      <input
        type="text"
        onChange={(event) => {
          setPrice(event.target.value);
          console.log("22",imageDesc)
        }}
      />
      <h6>Main Export Market(s)</h6>
      <input
        type="text"
        onChange={(event) => {
          setPrice(event.target.value);
          console.log("22",imageDesc)
        }}
      />
      <h6>Delivery Time</h6>
      <input
        type="text"
        onChange={(event) => {
          setPrice(event.target.value);
          console.log("22",imageDesc)
        }}
      />
      <h6>Main Domestic Market</h6>
      <input
        type="text"
        onChange={(event) => {
          setPrice(event.target.value);
          console.log("22",imageDesc)
        }}
      />
      </ROWTWO>
      </Form>
        <Submit>

      <button onClick={uploadFile}> Submit Details</button>
        </Submit>
    </div>
  );
}

export default Progress;