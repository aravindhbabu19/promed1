// import React, { useState } from 'react'
// import axios from 'axios';
// import {  FaInstagram, FaPhoneAlt } from 'react-icons/fa'
// import { toast } from 'react-toastify';
// import { Link } from 'react-router-dom';

const Contact = () => {
//     const [first,setFirst]=useState("")
//     const [last,setLast]=useState("")
//     const [contact,setContact]=useState("")
//     const [email,setEmail]=useState("")
//     const [message,setMessage]=useState("")
   
  
//     const handleSubmit=(e)=>{
//       e.preventDefault()
//       axios.post('http://localhost:3500/api/v1/form',{first,last,email,contact,message})
//       .then((result)=>{
//           console.log(result)
//           toast.success("your Data Register Successfully")
//       }
      
//   )
//       .catch(err=>console.log(err))
//   } 
  return (
    <div>
        <div class='contact-div'></div>
        {/* <div class='contact-br'>
            <div class='row'>
                <div class='col-12 col-sm-12 col-md-12 col-lg-4 mt-5 d-flex justify-content-center'>
                    <p class='contact-head'>Contact Us:</p>
                </div>
                <div class='col-12 col-sm-12 col-md-12 col-lg-4 mt-5 d-flex justify-content-center'>
                    <p class='contact-cl1'><FaPhoneAlt/> +91 123 456 7890</p>
                </div>
                <div class='col-12 col-sm-12 col-md-12 col-lg-4 mt-5 d-flex justify-content-center'>
                  <Link class='text-decoration-none text-dark' to={'https://www.instagram.com/rs_media_1/'}>
                    <p class='contact-inst1'><FaInstagram/> rsmedia</p>
                  </Link>
                </div>
                 
            </div>
            <div class=''>
                <div class='my-5 d-flex justify-content-center'>
                    <form class='contact-form ' onSubmit={handleSubmit}>
                        <label class='form-label'>Full Name</label>
                        <input type="text" required='true' name='nam' class='form-control' placeholder='Enter Your Full Name' size="50" value={first} onChange={(e)=>setFirst(e.target.value)} />
                        <label class='form-label'>Contact Number</label>
                        <input type="text" required='true' name='cont' class='form-control' placeholder='Enter Your Contact No' size="50" value={contact} onChange={(e)=>setContact(e.target.value)} />
                        <label class='form-label'>Email</label> 
                        <input type="text" required='true' name='ema' class='form-control' placeholder='Enter Your Email' size="50" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <label class='form-label'>What is your instagram?Let's be friends</label> 
                        <input type="text" required='true' name='ema' class='form-control' placeholder='@rsmedia' size="50" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <label class='form-label'>What are the dates of your celebration?</label> 
                        <textarea rows='5' required='true' cols='50' name='mess' class='form-control' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                        <label class='form-label'>Where are you getting married?What is the name of your venue?</label> 
                        <textarea rows='5' required='true' cols='50' name='mess' class='form-control' placeholder='Wedding venue/Location' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                        <label class='form-label'>Message</label>
                        <textarea rows='5' required='true' cols='50' name='mess' class='form-control' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                        <button type='submit'  class='btn btn-dark mt-3'>Submit</button>
                    </form>
                </div>
                
            </div>
        </div> */}
       <div>
          <p class='d-flex justify-content-center my-3'>Contact Us</p>
          <h3 class='d-flex justify-content-center my-3'>Get In Touch</h3>
        </div>
        <div class='row'>
            <div class='col my-5 d-flex justify-content-center'>
                <form class='contact-form'>
                    <label class='form-label'>Full Name</label>
                    <input type="text" required='true' name='nam' class='form-control' placeholder='Enter Your Full Name' size="50" /><br></br>
                    <label class='form-label'>Contact Number</label>
                    <input type="text" required='true' name='cont' class='form-control' placeholder='Enter Your Contact Number' size="50" /><br></br>
                    <label class='form-label'>Email</label> 
                    <input type="text" required='true' name='ema' class='form-control' placeholder='Enter Your Email' size="50" /><br></br>
                    <label class='form-label'>What is your instagram?Let's be friends</label> 
                    <input type="text" required='true' name='ema' class='form-control' placeholder='@rsmedia' size="50" /><br></br>
                    <label class='form-label'>What are the dates of your celebration?</label> 
                    <textarea rows='5' required='true' cols='50' name='mess' class='form-control'></textarea><br></br>
                    <label class='form-label'>Where are you getting married?What is the name of your venue?</label> 
                    <textarea rows='5' required='true' cols='50' name='mess' class='form-control' placeholder='Wedding venue/Location'></textarea><br></br>
                    <label class='form-label'>How did you hear about us?</label><br></br> 
                    <select class='w-100'>
                        <option value=''>Instagram Ad</option>
                        <option value=''>Facebook Ad</option>
                        <option value=''>Google</option>
                        <option value=''>We're friends</option>
                        <option value=''>Through my Friends</option>
                        <option value=''>Youtube</option>
                    </select><br></br><br></br>
                    <label class='form-label'>Message</label>
                    <textarea rows='5' required='true' cols='50' name='mess' class='form-control'></textarea>
                    <button type='submit'  class='btn btn-dark mt-3'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact