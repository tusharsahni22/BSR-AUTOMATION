import React, { useState, useEffect } from "react";
import {  ref,getDatabase, onValue} from "firebase/database";
import Footer from "../Footer/footer";
import Header from '../Header/header'
const db = getDatabase();

function ProductGallery() {

  const [todo, setTodo] = useState("");

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodo([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data.images).map((todos) => {
          setTodo((oldArray) => [...oldArray, todos]);
          console.log("first",todos.profile_picture)
        });
      }
    });
  }, []);


  return (<div>

    <Header/>
    <div>Product Galary</div>

    {todo.map&&todo.map((row) => (
        <>
          <img src={row.profile_picture} style={{ height: "200px", width: "200px",margin:"20px" }} />{" "}
        </>
      ))}
     
    <Footer/>
  </div>
  )
}

export default ProductGallery