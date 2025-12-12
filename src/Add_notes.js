import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add_notes(){

    const nav = useNavigate();

const [note, setnotes] =    useState({
        Book_name:'',
        Contact:'',
        Book_price : '',
      
    })


    const Notesubmit = (e) =>{
        e.preventDefault();
        axios.post('https://assignment-9fe0f-default-rtdb.firebaseio.com/notes.json', note).then(r1=>{
            //console.log(r1);
            alert("Notes added")
            nav('/notedetails')
        })
    }



    return(
        <>
        <div className="col-6 offset-3">
            
             <center><h2><b>Add Notes</b></h2></center>
            <form onSubmit={Notesubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Book Name </label>
                    <input type="text" name="Book_name" onChange={(e)=>setnotes({...note,[e.target.name]:[e.target.value]})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
                    <input type="tel" name="Contact" onChange={(e)=>setnotes({...note,[e.target.name]:[e.target.value]})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
                 </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Book Price</label>
                    <input type="number" name="Book_price" onChange={(e)=>setnotes({...note,[e.target.name]:[e.target.value]})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                </div>

        
           
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    

        <div>
           
        </div>
        </>
    )
}

export default Add_notes;