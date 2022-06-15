import { useState, useEffect } from "react";
import projectStorage from "../Firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const UseStorage = (file) => {
  const [Progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [Url, setUrl] = useState(null);


  useEffect(() => {
    const storageRef = ref(projectStorage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
          let percentage =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(percentage);
      },
      (err) => {
          setError(err);
      },
      () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) =>
              setUrl(url)
          );
      }
  );
}, [file]);

  //   storageRef.put(file).on(
  //     "state_changed",
  //     (snapshot) => {
  //       let percentage =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       setProgress(percentage);
  //     },
  //     (err) => {
  //       setError(err);
  //     },
  //     ()=>{
  //         const url=storageRef.getDownloadURL()
  //         setUrl(url);
  //     }
      
  //   );
  // }, [file]);

  return {Progress,error,Url}

};

export default UseStorage
