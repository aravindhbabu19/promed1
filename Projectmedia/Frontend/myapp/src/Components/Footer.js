// import axios from 'axios';
// import React, { useState } from 'react'
// import { FaFacebook, FaGoogle, FaInstagramSquare, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
const Footer = () => {

  // const [number,setNumber]=useState("")
  // const [rating,setRating]=useState(null)
  // const [ratecolor,setColor]=useState(null)

  //  const handleSubmit=(e)=>{
  //       e.preventDefault()
  //       axios.post('http://localhost:3500/api/v1/rating',{number})
  //       .then((result)=>{
  //           console.log(result)
  //           toast.success("your Data Register Successfully")
  //       }
        
  //   )
  //       .catch(err=>console.log(err))
  //   }


  return (
    // <div class='tok text-white'>
    //   <div class='row pt-3'>
    //     {/* <div class='col-12 col-sm-12 col-md-4 col-lg-4 my-2'>
    //         <h4 class='pages-h'>Address</h4>
    //         <p class='pages-p'>Perumalpuram</p>
    //         <p class='pages-p'>KanyaKumari 629000</p>
    //         <h4 class='pages-h'>Email</h4>
    //         <p class='pages-p'>rsmedia@gmail.com</p>
    //     </div> */}
    //     <div class='col-12 col-sm-12 col-md-4 col-lg-4'>
    //         <h4 class='footer-h4'>ADDRESS</h4>
    //         <hr class='' />
    //         <p class='footer-p'>Rs Media Studio,<br></br> Perumalpuram,<br></br> Kottaram,<br></br>        Tamil Nadu 629704</p>
    //         <h4 class=''>Mob :</h4>
    //         <p class='footer-p'>+91 1234567890</p>
    //         <h4 class=''>Email :</h4>
    //         <p class='footer-p'>rsmedia@gmail.com</p>
    //       </div>
    //     {/* <div class='col-12 col-sm-12 col-md-12 col-lg-4 mt-2'>
    //         <h4 class='d-flex justify-content-center'>Rate Us</h4>
    //         <div class='d-flex justify-content-center'>
    //             <div class='ratings mt-auto'>
    //             <div class='rating-outer'>
    //             <div class='rating-inner'><button class=''><FaStar /></button></div>
    //             </div>
    //             </div>
    //         </div>
    //         <>
    //           <div class='d-flex justify-content-center'>
    //         {
    //           [...Array(5)].map((star, index)=>{
    //             const currentRate=index+1
    //             return(
    //               <>
    //                <label>
    //                 <input class='rate' type='radio' name='rate' value={currentRate} onClick={()=>setRating(currentRate)}/>
    //                 <FaStar size={25} color={currentRate <= (ratecolor||rating)? "orange" : "grey"} />
    //                 </label>
    //               </>

    //             )
               
    //           })
           
    //     }
    //         </div>
    //         </>
            
    //         <div class='col d-flex justify-content-center mt-5'>
    //           <p>+91 123 456 7890</p>
    //         </div>
    //     </div> */}
    //       <div class='col-12 col-sm-12 col-md-4 col-lg-4'>
    //         <Link to='https://www.facebook.com/'><FaFacebook class='icon-1 mx-3' type='button'/></Link>
    //         <Link to='https://www.google.com/'><FaGoogle class='icon-2 mx-3' type='button'/></Link>
    //         <Link to='https://www.instagram.com/rs_media_1/'><FaInstagramSquare class='icon-3 mx-3' type='button'/></Link>
    //       </div>
    //       <div class='col-12 col-sm-12 col-md-4 col-lg-4'>
    //         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15799.639442158485!2d77.5345228968429!3d8.110660535294915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04edcecf473c35%3A0x7bbfa795b65efe5c!2sRs%20Media%20Studio!5e0!3m2!1sen!2sin!4v1754993167318!5m2!1sen!2sin" title='add' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    //       </div>
    //   </div>
    //   <div class='row'>
    //       <div class='col mt-3'>
    //       <p>Copyrights © 2025 Rs Media. All Rights Reserved</p>
    //       </div>
    //   </div>
    // </div>
    <div class='footer-footer text-white p-4 mt-1'>
        <div class='row'>
          <div class='col-12 col-sm-12 col-md-4 col-lg-4'>
            <h4 class='footer-h4'>RS VISUAL MEDIA STUDIO</h4>
            <hr class='footer-divider' />
            <p class=''></p><br></br>
            <h4 class='footer-h4'>OUR SOCIAL MEDIA</h4> <br></br>
            
            <Link class='footer-l text-decoration-none text-white' to='https://www.facebook.com/'>Facebook</Link><br></br><br></br>
            <Link class='footer-l text-decoration-none text-white' to='https://www.google.com/maps/place/Rs+Media+Studio/@8.114452,77.535231,13z/data=!4m6!3m5!1s0x3b04edcecf473c35:0x7bbfa795b65efe5c!8m2!3d8.1144524!4d77.535231!16s%2Fg%2F11txq7sx75?hl=en&entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D'>Google</Link><br></br><br></br>
            <Link class='footer-l text-decoration-none text-white' to='https://www.instagram.com/rs_media_1/'>Instagram</Link><br></br><br></br>
            <Link class='footer-l text-decoration-none text-white' to='https://x.com/?lang=en-in'>X</Link><br></br><br></br>
            <Link class='footer-l text-decoration-none text-white' to='https://www.youtube.com/'>Youtube</Link><br></br><br></br>
            <Link class='footer-l text-decoration-none text-white' to='https://www.threads.com/'>Threads</Link><br></br><br></br>
            </div>
          <div class='col-12 col-sm-12 col-md-4 col-lg-4 '>
            <h4 class='footer-h4'>ADDRESS</h4>
            <hr class='' />
            <p class='footer-p'>RS VISUAL MEDIA STUDIO,<br></br> Perumalpuram,<br></br> Kottaram,<br></br>Kanyakumari,<br></br>Tamil Nadu,<br></br> 629704</p>
            <h4 class=''>Mob :</h4>
            <p class='footer-p'>+91 7845367244</p>
            <h4 class=''>Email :</h4>
            <p class='footer-p'>rsvisualmediastudio@gmail.com</p>
          </div>
          <div class='col-12 col-sm-12 col-md-4 col-lg-4'> 
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15799.639442158485!2d77.5345228968429!3d8.110660535294915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04edcecf473c35%3A0x7bbfa795b65efe5c!2sRs%20Media%20Studio!5e0!3m2!1sen!2sin!4v1754993167318!5m2!1sen!2sin" class='service-map' title='add' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div class='row'>
          <div class='col footer-2  mt-3'>
          <p>Copyrights © 2025 RS VISUAL MEDIA STUDIO. All Rights Reserved</p>
          </div>
        </div>
    </div>
  )
}

export default Footer