import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Login";
import Registrations from "./Registrations";
import Navbar from "./Navbar";
import Home from "./Home";

import Add_notes from "./Add_notes";
import Notes_details from "./Notes_details";




function App_index(){
    return(
        <>
        <div>
            <BrowserRouter>
            <Navbar />
            
            <Routes>
                
                <Route path={'/'} element={<Login />} />
                <Route path={'/reg'} element={<Registrations />} />
                <Route path={'/home'} element={<Home />}/>
                
                <Route path={'/addnotes'} element={<Add_notes />} />
                <Route path={'/notedetails'} element={<Notes_details />} />
              
                
            </Routes>
            </BrowserRouter>
        </div>
        </>
    )
}

export default App_index;