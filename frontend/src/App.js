import "./App.css";
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data,setData]=useState({})
  
  const handleChange=(event)=>{
    const name=event.target.id
    const value=event.target.value
    setData({...data,[name]:value})
    console.log(data)
  }


  const submitData=async (event)=>{
    event.preventDefault()
    let result=await fetch('http://localhost:3001/',{
      method:'post',
      body:JSON.stringify(data),
      headers:{
        'Content-Type':'application/json'
      }
    })

    result=await result.json();
    console.log(result)
    event.target.reset();

    if(result["result"]==1)
    {
      console.log("successssss");
      toast.success('Data inserted successfully', {
        position: toast.POSITION.TOP_CENTER,
        className:"toastmessage"
    });
    }
    else
    {
      console.log("failllll");
      toast.error('Failed to insert data',{
        position: toast.POSITION.TOP_CENTER,
        className:"toastmessage",
        color:"red",
    });
    }
  }



  return (
    <>
      <h2>Vymo Assignment:Onboard Restaurant</h2>
        <form id="form" onSubmit={submitData}>
          <div>
            <label for="name">Name</label>
            <br />
            <input id="name" onChange={handleChange}/>
          </div>

          <div>
            <label for="contact">Contact</label>
            <br />
            <input
              id="contact"
              onChange={handleChange}
            />
          </div>

          <div>
            <label for="pincode">Pincode</label>
            <br />
            <input
              id="pincode"
              onChange={handleChange}
            />
          </div>

          <div>
            <label for="location">Location</label>
            <br />
            <input
              id="location"
              onChange={handleChange}
            />
          </div>

          <div>
            <label for="website">Website</label>
            <br />
            <input
              id="website"
              onChange={handleChange}
            />
          </div>

          <div>
            <label for="phonennumber">Phone Number</label>
            <br />
            <input
              id="phonenumber"
              onChange={handleChange}
            />
          </div>

          <div>
            <label for="averagedailytransaction">
              Average Daily Transaction
            </label>
            <br />
            <input
              id="averagedailytransaction"
              onChange={handleChange}
            />
          </div>
          <button>Submit</button>
        </form>

        <ToastContainer/>
    </>
  );
}

export default App;
