import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div>
        <div class='service-back'></div>
        <div class='home-ph1'>
          <div class='row my-5'>
            <div class='col-12 col-sm-6 col-lg-3 col-md-4 d-flex justify-content-center '>
              <Link class='text-decoration-none text-dark' to={'/Matri'}>
              <img src='./Images/Media/matri.jpg' alt='' height={300} width={300} class='home-img5'/>
              <h5 class='home-head7'>Matrimonial Photoshoot</h5> 
              </Link>
            </div>
            <div class='col-12 col-sm-6 col-lg-3 col-md-4 d-flex justify-content-center '>
              <Link class='text-decoration-none text-dark' to={'/Couples'}>
              <img src='./Images/Media/couples.jpg' alt='' height={300} width={300} class='home-img1'/>
              <h5 class='home-head3 ms-1'>Couples Photoshoot</h5>
              </Link>
            </div>
            <div class='col-12 col-sm-6 col-lg-3 col-md-4 d-flex justify-content-center'>
              <Link class='text-decoration-none text-dark' to={'/Pre'}>
              <img src='./Images/Media/wed.jpg' alt='' height={300} width={300} class='home-img7'/>
              <h5 class='home-head7'>Pre-Wedding Photoshoot</h5> 
              </Link>
            </div>
            <div class='col-12 col-sm-6 col-lg-3 col-md-4 d-flex justify-content-center'>
              <Link class='text-decoration-none text-dark' to={'/Wed'}>
              <img src='./Images/Media/wed.jpg' alt='' height={300} width={300} class='home-img8'/>
              <h5 class='home-head7'>Wedding Photoshoot</h5> 
              </Link>
            </div>
            </div>
          
              <div class='row my-5'>
              <div class='col-12 col-sm-6 col-lg-3 col-md-4 d-flex justify-content-center'>
              <Link class='text-decoration-none text-dark' to={'/Maternity'}>
              <img src='./Images/Media/maternity.jpeg' alt='' height={300} width={300} class='home-img3'/>
              <h5 class='home-head5'>Maternity Photoshoot</h5> 
              </Link>
              </div>
              <div class='col-12 col-sm-6 col-lg-3 col-md-4 d-flex justify-content-center'>
              <Link class='text-decoration-none text-dark' to={'/New'}>
              <img src='./Images/Media/newborn.jpg' alt='' height={300} width={300} class='home-img4'/>
              <h5 class='home-head6'>Newborn Photoshoot</h5> 
              </Link>
              </div>
              <div class='col-12 col-sm-6 col-lg-3 col-md-4 d-flex justify-content-center'>
              <Link class='text-decoration-none text-dark' to={'/baby'}>
              <img src='./Images/Media/baby.jpg' alt='' height={300} width={300} class='home-img'/>
              <h5 class='home-head2 ms-1'>Baby Photoshoot</h5>
              </Link> 
              </div>
              <div class='col-12 col-sm-6 col-lg-3 col-md-4 d-flex justify-content-center'>
              <Link class='text-decoration-none text-dark' to={'/Family'}>
              <img src='./Images/Media/family.jpg' alt='' height={300} width={300} class='home-img2 mb-2'/>
              <h5 class='home-head4 mt-4'>Family Photoshoot</h5>
              </Link>
              </div>
        </div>
        </div>
    </div>
  )
}

export default Services