// import React, { useState } from 'react'

// import axios from 'axios'
// import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const Home = () => {
  //   const [name,setName]=useState("")
  //   const [mobile,setMobile]=useState("")
  //   const [date,setDate]=useState("")
  //   const [message,setMessage]=useState("")
    
   
  
  //   const handleSubmit=(e)=>{
  //     e.preventDefault()
  //     axios.post('http://localhost:3500/api/v1/applicationpath',{name,mobile,date,message})
  //     .then((result)=>{
  //         console.log(result)
  //         toast.success("your Data Register Successfully")
  //     }
      
  // )
  //     .catch(err=>console.log(err))
  // }
  return (
   
   
    <div>
        <div class='home-div1'></div>
          {/* <h1 class='home-new'>Best Photograher in Kanyakumari</h1>
          <p class='home-new1'>At RS Visual Media,We Believe that photography is about capturing memories.</p> */}
        
        {/* <img src='./Images/Media/cam1.jpg' alt='' class='home-div1' /> */}
        {/* <h2 class='home-head mt-3 ms-2'>Get The best photoshoot in Kanyakumari</h2>
        <h5 class='home-head1'>Book photoshoot in Kanyakumari to experience moments of joy with beautiful styles from Conceptual, Candid and Lifestyle. </h5> */}
        {/* <div class='home-ph mt-5'>
          <div class='row my-5 mx-5'>
              <div class='col-12 col-sm-6 col-lg-4 col-md-4 d-flex justify-content-center'>
              <Link class='text-decoration-none text-dark' to={'/baby'}>
              <img src='./Images/Media/baby.jpg' alt='' height={300} width={300} class='home-img'/>
              <h5 class='home-head2 ms-1'>Baby Photoshoot</h5>
              </Link> 
              </div>
              <div class='col-12 col-sm-6 col-lg-4 col-md-4 d-flex justify-content-center'>
              <Link class='text-decoration-none text-dark' to={'/Couples'}>
              <img src='./Images/Media/couples.jpg' alt='' height={300} width={300} class='home-img1'/>
              <h5 class='home-head3 ms-1'>Couples Photoshoot</h5>
              </Link>
              </div>
              <div class='col-12 col-sm-6 col-lg-4 col-md-4 d-flex justify-content-center'>
              <Link class='text-decoration-none text-dark' to={'/Family'}>
              <img src='./Images/Media/family.jpg' alt='' height={300} width={300} class='home-img2 mb-2'/>
              <h5 class='home-head4 mt-4'>Family Photoshoot</h5>
              </Link>
              </div>
              <div class='row my-5'>
              <div class='col-12 col-sm-6 col-lg-4 col-md-4 d-flex justify-content-center'>
              <Link class='text-decoration-none text-dark' to={'/Maternity'}>
              <img src='./Images/Media/maternity.jpeg' alt='' height={300} width={300} class='home-img3'/>
              <h5 class='home-head5'>Maternity Photoshoot</h5> 
              </Link>
              </div>
              <div class='col-12 col-sm-6 col-lg-4 col-md-4 d-flex justify-content-center'>
              <Link class='text-decoration-none text-dark' to={'/New'}>
              <img src='./Images/Media/newborn.jpg' alt='' height={300} width={300} class='home-img4'/>
              <h5 class='home-head6'>Newborn Photoshoot</h5> 
              </Link>
              </div>
              <div class='col-12 col-sm-6 col-lg-4 col-md-4 d-flex justify-content-center'>
              <Link class='text-decoration-none text-dark' to={'/Matri'}>
              <img src='./Images/Media/matri.jpg' alt='' height={300} width={300} class='home-img5'/>
              <h5 class='home-head7'>Matrimonial Photoshoot</h5> 
              </Link>
              </div>
              </div>
          </div>
        </div> */}
          {/* <h1 class='home-h'>How every session is unique ?</h1>     */}
          {/* <div class='row my-5 mx-1 link'>
              <div class='home-col col-12 col-sm-6 col-lg-3 col-md-4 '>
              <h1 class='home-h1'>01</h1> 
              <h2 class='home-h2'>Curated experience</h2>
              </div>
              <div class='home-col col-12 col-sm-6 col-lg-3 col-md-4 '>
              <h1 class='home-h1'>02</h1> 
              <h2 class='home-h2'>Fun filled session</h2>
              </div>
              <div class='home-col col-12 col-sm-6 col-lg-3 col-md-4 '>
              <h1 class='home-h1'>03</h1> 
              <h2 class='home-h2'>Artistic editing</h2>
              </div>
              <div class='home-col col-12 col-sm-6 col-lg-3 col-md-4 '>
              <h1 class='home-h1'>04</h1> 
              <h2 class='home-h2'>Premium Wall Art</h2>
              </div>
          </div> */}
          {/* <div class='home-br1'>
            <h1 class='home-cl'> In the heart of Kanyakumari</h1>
            <hr></hr>
            <p class='home-para'>Our premium photoshoot Studio in KanyaKumari allows us to offer curated experience for maternity photoshoot in bangalore, newborn photoshoot , baby photoshoot , couple photoshoot , family photoshoot , matrimonial photoshoot , professional headshots , weddings & event photography and much more...</p>
            <img src='./Images/Media/stud1.jpg' alt='' class='home-back'/>
          </div> */}
          {/* <div class='home-br2'>
            <h1 class='home-para1'>Premium Photo Frames</h1>
            <hr class='home-hr1'></hr>
            <p class='home-para2'>Our premium photo frames are carved with unique designs and customized with curated prints that gives the vision of true to life as there is no glass or acrylic used. Each print is curated through water and dust resistant process.</p>
          <div class=' row my-5 mx-5'>
            <div class='home-col1 col-12 col-sm-6 col-lg-3 col-md-4 '>
            <img src='./Images/Media/frame.jpg' alt='' height={400} width={250} class='rounded'/>
            </div>
            <div class='home-col2 col-12 col-sm-6 col-lg-3 col-md-4 '>
            <img src='./Images/Media/frame1.jpg' alt='' height={400} width={250} class='rounded'/>
            </div>
            <div class='home-col3 col-12 col-sm-6 col-lg-3 col-md-4 '>
            <img src='./Images/Media/frame2.jpg' alt='' height={400} width={250} class='rounded'/>
            </div>
            <div class='home-col4 col-12 col-sm-6 col-lg-3 col-md-4 '>
            <img src='./Images/Media/frame3.jpg' alt='' height={400} width={250} class='rounded'/>
            </div>
          </div>  
          </div> */}
          <div class='d-flex justify-content-center mt-3'>
            <h1 class='home-h1'>Capturing timeless moments with heart photography that lets your story be felt, not just seen.</h1>
          </div>
          <div class='d-flex justify-content-center mt-3'>
            <p class='home-h2'>Every photo should hold a memory<br></br> you can feel again and again that’s what we create for you.</p>
          </div>
          <div class='d-flex justify-content-center mt-3'>
            <Link class='text-decoration-none' to={'/Contact'}>
            <button class='home-button'>Start Your Journey</button>
            </Link>
          </div>
          <div class='row my-5 mx-5'>
          <div class='col-12 col-sm-12 col-md-12 col-lg-6 mt-3 '>
            <img src='./Images/Media/cam1.jpg' alt='' class='aboutus-img'/>
          </div>
          <div class='col-12 col-sm-12 col-md-12 col-lg-6 mt-1 home-about'>
            <h1 class='about-head'>RS VISUAL MEDIA STUDIO</h1>
            <p class='about-para mt-3'>At RS Visual Media Studio, photography and videography are not just services they are our passion, our craft, and our way of transforming fleeting moments into timeless stories. Founded in 2015 and backed by over a decade of professional expertise, we have become a trusted name in wedding photography, cinematic films, family portraits, maternity shoots, event coverage, and corporate brand storytelling. Operating from a fully equipped visual media studio, we provide both indoor and outdoor shoot options, along with professional camera gear and equipment rentals for creators and filmmakers. With state-of-the-art cameras, advanced lighting systems, and globally sourced post-production tools, we ensure every frame reflects creativity, clarity, and authentic emotion. What truly sets us apart is our commitment to Photography, Creativity, and Empathy our team goes beyond technical excellence to connect with people, making clients feel at ease while capturing the emotions that matter most. From intimate engagement sessions and wedding shoots to high-end commercial campaigns, we focus on creating visuals that feel real, personal, and powerful. At the same time, we stand by our values of sustainability and community support, adopting eco-friendly practices and nurturing local talent to leave a positive impact beyond the lens. Whether you’re looking for a wedding photographer near you, planning a maternity or family photoshoot, or aiming to elevate your brand with professional photography and videography, RS Visual Media Studio is your trusted creative partner. Our brand promise is simple to deliver customer value, timeless memories, and visuals that speak louder than words.
            </p>
            <p>RS Visual Media Studio – Capturing Emotions, Creating Stories, Cherishing Memories.</p>
            
            <Link class='text-decoration-none' to={'/Contact'}>
            <button class='home-button1'>Know more...</button>
            </Link>
          </div>
          </div>
          <div class='row'>
            <div class='col'>
              <img src='./Images/Media/mrg.jpg' alt='' height={450} width={370} class='ms-4 mt-5'/>
            </div>
            <div class='col'>
              <h1 class='home-para mt-5 my-3'>Your Story. Your Authentic Style.</h1>
              <p class='home-para1 mt-5'>At RS Visual Media Studio, we capture your big day with raw emotion, genuine energy, and timeless frames photography that lets your story truly breathe.</p>
              <Link class='text-decoration-none d-flex justify-content-center' to={'/Contact'}>
              <button class='home-button1'>Know more...</button>
              </Link>
            </div>
            <div class='col'>
              <img src='./Images/Media/mrg1.jpg' alt='' height={450} width={370} class='ms-4 mt-5'/>
            </div>
          </div>
          <div class='row'>
            <div class='col'>
              <img src='./Images/Media/mrg2.jpg' alt='' height={450} width={370} class='ms-4 mt-5'/>
            </div>
            <div class='col'>
              <img src='./Images/Media/mrg3.jpg' alt='' height={450} width={370} class='ms-4 mt-5'/>
            </div>
            <div class='col'>
              <img src='./Images/Media/mrg4.jpg' alt='' height={450} width={370} class='ms-4 mt-5'/>
            </div>
          </div>
          <div>
            <Link class='text-decoration-none d-flex justify-content-center' to={'https://www.instagram.com/rs_media_1/'}>
            <button class='home-button1 mt-5 '>View Instagram</button>
            </Link>
          </div>
    </div>
    
  )
}

export default Home