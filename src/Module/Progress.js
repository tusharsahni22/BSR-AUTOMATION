import { useState, useEffect } from "react";
import {ref,uploadBytes,getDownloadURL,listAll,} from "firebase/storage";
import { storage } from "./Firebase/firebase";
import { v4 } from "uuid";
import writeUserData from "./Firebase/Database"

function Progress() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageDesc, setImageDesc] = useState([]);
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
          //readUserData(item)
          // console.log("data55","hi")
          // console.log("data55 ",require('./Firebase/Database').ImageData)
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
       <input
        type="text"
        onChange={(event) => {
          setImageDesc(event.target.value);
          console.log("22",imageDesc)
        }}
      />

      <button onClick={uploadFile}> Upload Image</button>
      {/* {imageUrls.map((url) => {
        return <img src={url} />;
      })} */}
    </div>
  );
}

export default Progress;