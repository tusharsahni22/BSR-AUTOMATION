import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./Module/Main/main";
import ContactUs from "./Module/ContactUs/contactus";
import Products from "./Module/Product/product";
import Prog from "./Module/Progress";
import Login from "./Module/Login/Login";
// import Slide from "./Module/Main/Slidesss"
function App() {

  const currentUser =true;

  const RequiredAuth=({children}) =>{
    return currentUser ? children: <Navigate to="/"/>
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>          
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/addnewitem" element={<RequiredAuth><Prog /> </RequiredAuth>} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/Slide" element={<Slide />} /> */}
        {/* <Route path="*" element={<ContactUs />} /> */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
