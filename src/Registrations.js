import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

    function Registrations(){
      const [reg, setreg] = useState({
          Name : '',
          Mobile: '',
          Email: '',
          Password: '',
        })


    const nav = useNavigate();

    const register = (e) =>{

      e.preventDefault();
      if(!reg.Name || !reg.Mobile || !reg.Email || !reg.Password){
        alert("All fields are required");
        return;
      }

      if(reg.Mobile.length !== 10){
        alert("Mobile number must be 10 digits");
        return;
      }

      if(reg.Password.length < 6){
        alert("Password must be at least 6 characters");
        return;
      }
        axios.post('https://assignment-9fe0f-default-rtdb.firebaseio.com/users.json', reg).then(r1=>{
          alert("Registration sucessful")
        })
      

        nav('/')
      }



    return(
        <>
        <div className="col-6 offset-3">
            <center><h2><b>Registration Form</b></h2></center>
            <form onSubmit={register}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Name</label>
                  <input type="text" name="Name" onChange={(e)=>setreg({...reg, [e.target.name]: e.target.value})}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
                  <input type="text" name="Mobile" onChange={(e)=>setreg({...reg, [e.target.name]: e.target.value})}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email Address</label>
                  <input type="text" name="Email" onChange={(e)=>setreg({...reg, [e.target.name]: e.target.value})}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" name="Password" onChange={(e)=>setreg({...reg, [e.target.name]: e.target.value})} class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>

                <div className="text-center">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                    <div className="text-center">
                        
                        <a href="/">Go To User Login</a>
                    
                    </div>
                
      </form>
              </div>
        </>
    )
}

export default Registrations;