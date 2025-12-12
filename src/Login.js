import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from "react-router-dom";

import axios from "axios";



function Login(){

     const nav=useNavigate();


  const [user_details, setdetails] = useState()

  useEffect(()=>{
    axios.get('https://assignment-9fe0f-default-rtdb.firebaseio.com/users.json').then(r1=>{
      //console.log(r1.data)
      setdetails(r1.data)
    })
  },[])


  const [login, setlogin] = useState({
    Email: '',
    Password: '',
  })

console.log('user :', user_details)



  const Userlogin = (e) =>{
    e.preventDefault();
    for(let x of Object.keys(user_details) ){
      if(user_details[x].Email == login.Email){
        if(user_details[x].Password == login.Password){
            alert('login sucess')
           nav('/addnotes')
        

      }
    }
  }
    
  }



    return(
        <>
        <div className="col-6 offset-3">
            <center><h2><b> Login Page </b></h2></center>

            <form onSubmit={Userlogin}>
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="text" name="Email" onChange={(e)=>setlogin({...login,[e.target.name]: e.target.value})}   class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Password</label>
                <input type="text" name="Password" onChange={(e)=>setlogin({...login,[e.target.name]: e.target.value})}   class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
              </div>

              <div className="text-center">
              <button type="submit" class="btn btn-primary">Submit</button>
              </div>
              <div className="text-center">
                <p>If you Don't have an account Register<a href="/reg">Here</a></p>
               
              
              </div>
  

            </form>

            
        </div>
            
            </>
    )
}

export default Login;