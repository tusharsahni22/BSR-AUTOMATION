import React, { useState, useEffect } from "react";
import {  ref,getDatabase, onValue} from "firebase/database";
import Header from "../Header/header";
import Footer from "../Footer/footer";
const db = getDatabase();

function CompanyProfile() {

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

  return (
    <div>
      <Header />
      <h1>Company Profile</h1>

      {todo.map&&todo.map((row) => (
        <>
          <img src={row.profile_picture} style={{ height: "200px", width: "200px",margin:"20px" }} />{" "}
        </>
      ))}
        <Footer />
    </div>
    
  )
}

export default CompanyProfile