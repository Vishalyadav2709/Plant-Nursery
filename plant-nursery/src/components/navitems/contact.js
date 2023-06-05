import React from 'react'

import "../homepage/homepage.css"
import './contact.css'

import Header from '../header/header';
import Footer from '../Footer/footer';
import { TextField } from '@mui/material';

const Contact = ({setLoginUser}) => {
  return (
   
       <div className="Homepage">
   <Header />
   <div className='Main'>

   <h1 className='contact-head'>Contact Us</h1>
          <div className='contact-details'>
            <div>
              <img src='https://springtownrodandgunclub.weebly.com/uploads/1/3/4/0/13408236/contact-3_orig.jpg' alt='contact' height={'300px'}></img>
            </div>
            <div className='details1' >
                <ul>Address : <span style={{fontSize:'26px'}}> Indira Nagar Pathanwadi Rani Sati Marg Malad East</span></ul>
                <ul>Contact : <span style={{fontSize:'26px'}}> 9920067825</span></ul>
                <ul>Email : <span style={{fontSize:'26px'}}> vishal.tyadav2709@gmail.com</span></ul>
                <ul>Open Hours : <span style={{fontSize:'26px'}}>Mon to Sat from 9am to 9pm</span></ul>
            </div>
          </div>



   <h1 className='contact-head'>Get in Touch</h1>
    <div className='contact'>
      <div className='details'>
        
        <TextField placeholder='Your Name' className='field'></TextField>
        <TextField placeholder='Your Email'></TextField>
        <TextField placeholder='Your Contact'></TextField>
        <TextField placeholder='Subject'></TextField>
        <TextField placeholder='Message'></TextField>
        <button> Submit</button>
      </div>
    <div class="map-area mb-100">
    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=10CbFc3K7w-vlxS988FP1t8xhUFUSq1I&ehbc=2E312F" width="640" height="480" title='map'></iframe>
                    </div>
    </div>
    </div>
    <Footer/>
    </div>
   
  )
}

export default Contact
