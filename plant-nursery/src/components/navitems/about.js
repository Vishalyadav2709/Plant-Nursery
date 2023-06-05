import React from 'react'
import "../homepage/homepage.css"
import "./about.css"

import Header from '../header/header';
import Footer from '../Footer/footer';
import Carousels, { CarouselsItem } from '../carousels/carousels';




const About = ({setLoginUser}) => {
  return (
    <div className='about'>
    <Header />

    <div className='Main'>
    <Carousels >
        <CarouselsItem ><img src={'https://clubrunner.blob.core.windows.net/00000008602/Images/Kayako/2017-carousel/Partner-With-Us-Alt3.jpg'} alt={"Book"} width="100%" /></CarouselsItem>
        <CarouselsItem><img src={'https://clubrunner.blob.core.windows.net/00000008602/Images/Kayako/2017-carousel/Partner-With-Us-Alt4.jpg'} alt={"Book"} width="100%" /></CarouselsItem>
        <CarouselsItem><img src={'https://clubrunner.blob.core.windows.net/00000008602/Images/Kayako/2017-carousel/Take-Action-Alt4.jpg'} alt={"Book"} width="100%" /></CarouselsItem>

      </Carousels>


      <h1 className='abouthead'>About Us</h1>
      <div className='aboutbox'>
        
        <div className='box1'>
           
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8HLqqPGlC29dvPRg8DCxabYDSBEcREch9A&usqp=CAU' alt='img'></img>
            <h2>Quality Products</h2>
            <br></br>
            <h3>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</h3>
            <br></br>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8HLqqPGlC29dvPRg8DCxabYDSBEcREch9A&usqp=CAU' alt='img'></img>
            <h2>Quality Products</h2>
            <br></br>
            <h3>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</h3>
        </div>
        <div className='box2'>
            
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8HLqqPGlC29dvPRg8DCxabYDSBEcREch9A&usqp=CAU' alt='img'></img>
            <h2>Quality Products</h2>
            <br></br>
            <h3>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</h3>
            <br></br>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8HLqqPGlC29dvPRg8DCxabYDSBEcREch9A&usqp=CAU' alt='img'></img>
            <h2>Quality Products</h2>
            <br></br>
            <h3>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</h3>
        </div>
        <div className='box3'>
            
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8HLqqPGlC29dvPRg8DCxabYDSBEcREch9A&usqp=CAU' alt='img'></img>
            <h2>Quality Products</h2>
            <br></br>
            <h3>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</h3>
            <br></br>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8HLqqPGlC29dvPRg8DCxabYDSBEcREch9A&usqp=CAU' alt='img'></img>
            <h2>Quality Products</h2>
            <br></br>
            <h3>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</h3>

        </div>
        

      </div>
      <h1 className='abouthead'>Our Team</h1>
      <div className='teams'>
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0rfm7ulLh-hULWlR8NBtrIwRCCWql8VQ9zw&usqp=CAU' alt='team1'></img>
            <br/>
            <div className='team-mem'>
            <h2>Vishal yadav</h2>
            <h3>Founder and ceo</h3>
            </div>
        </div>
        <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0rfm7ulLh-hULWlR8NBtrIwRCCWql8VQ9zw&usqp=CAU' alt='team1'></img>
            <br/>
            <div className='team-mem'>
            <h2>Vishal yadav</h2>
            <h3>Founder and ceo</h3>
            </div>
        </div>
        <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0rfm7ulLh-hULWlR8NBtrIwRCCWql8VQ9zw&usqp=CAU' alt='team1'></img>
            <br/>
            <div className='team-mem'>
            <h2>Vishal yadav</h2>
            <h3>Founder and ceo</h3>
            </div>
        </div>
        <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0rfm7ulLh-hULWlR8NBtrIwRCCWql8VQ9zw&usqp=CAU' alt='team1'></img>
            <br/>
            <div className='team-mem'>
            <h2>Vishal yadav</h2>
            <h3>Founder and ceo</h3>
            </div>
        </div>
      </div>
     
    </div>
    <Footer/>
</div>
  )
}

export default About