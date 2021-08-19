

import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';


import alderneyStyle from "./Styling/AlderneyGarden.module.css"

import image1 from './img/Alderney1.jpg'
import image2 from './img/Alderney2.jpg'
import image3 from './img/Alderney3.jpg'
import image4 from './img/Alderney4.jpg'
import image5 from './img/Alderney5.jpg'
import image6 from './img/Alderney6.jpg'
import image7 from './img/Alderney7.MP.jpg'
import image8 from './img/Alderney8.jpg'
import image9 from './img/Alderney9.jpg'
import image10 from './img/Alderney10.jpg'
import image11 from './img/Alderney11.jpg'
import image12 from './img/Alderney12.jpg'
import image13 from './img/Alderney12a.jpg'
import image14 from './img/Alderney13.jpg'
import image15 from './img/Alderney14.jpg'
import image16 from './img/Alderney15.jpg'
import image17 from './img/Alderney16.jpg'
import image18 from './img/Alderney17.MP.jpg'
import image19 from './img/Alderney18.jpg'
// import image20 from './img/Alderney19.jpg'
import image20 from './img/Alderney20.MP.jpg'
import image21 from './img/Alderney21.jpg'






class AlderneyGarden extends Component {
     render() {   
    return (
          <div         
            style={{
              paddingBottom: '10px',
              position: 'relative'
              }} >
            <div>
              
            <Carousel
    additionalTransfrom={0}
    arrows={true}
    autoPlaySpeed={3000}
    centerMode={false}
    className=""
    containerClass="container-padding-bottom"
    dotListClass=""
    draggable
    focusOnSelect
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    renderButtonGroupOutside={true}
    renderDotsOutside={true}
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 3,
        partialVisibilityGutter: 40
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 2,
        partialVisibilityGutter: 30
      }
    }}
    showDots
    sliderClass=""
    slidesToSlide={1}
    swipeable
                
               
            >
                <div><img src={image1} alt=""  style={{width:'auto', height:'350px', marginRight: '30px'}} /></div>
                <div><img src={image2} alt=""  style={{width:'auto', height:'350px', marginRight: '30px'}} /></div>
                <div><img src={image3} alt=""  style={{width:'auto', height:'350px', marginRight: '30px'}} /></div>
                <div><img src={image4} alt=""  style={{width:'auto', height:'350px', marginRight: '30px'}} /></div>
                <div><img src={image5} alt=""  style={{width:'auto', height:'350px', marginRight: '30px'}} /></div>
                <div><img src={image6} alt=""  style={{width:'auto', height:'350px', marginRight: '30px'}} /></div>
                <div><img src={image7} alt=""  style={{width:'auto', height:'350px', marginRight: '30px'}} /></div>
                <div><img src={image8} alt=""  style={{width:'auto', height:'350px', marginRight: '30px'}} /></div>
                <div><img src={image9} alt=""  style={{width:'auto', height:'350px', marginRight: '30px'}} /></div>
                <div><img src={image10} alt=""  style={{width:'auto', height:'350px', marginRight: '30px'}} /></div>
                <div><img src={image11} alt=""  style={{width:'auto', height:'350px', marginRight: '30px'}} /></div>
                <div><img src={image12} alt=""  style={{width:'auto', height:'350px', marginRight: '30px'}} /></div>
                <div><img src={image13} alt=""  style={{width:'auto', height:'350px', marginRight: '30px'}} /></div>
                <div><img src={image14} alt=""  style={{width:'auto', height:'350px', marginRight: '30px'}} /></div>
                <div><img src={image15} alt=""  style={{width:'auto', height:'350px', marginRight: '30px'}} /></div>
                <div><img src={image16} alt=""  style={{width:'auto', height:'350px', marginRight: '30px'}} /></div>
                <div><img src={image17} alt=""  style={{width:'auto', height:'350px', marginRight: '30px'}} /></div>
                <div><img src={image18} alt=""  style={{width:'auto', height:'350px', marginRight: '30px'}} /></div>
                <div><img src={image19} alt=""  style={{width:'auto', height:'350px', marginRight: '30px'}} /></div>
                <div><img src={image20} alt=""  style={{width:'auto', height:'350px', marginRight: '30px'}} /></div>
                <div><img src={image21} alt=""  style={{width:'auto', height:'350px', marginRight: '30px'}} /></div>
        </Carousel>
              
        </div>
        <div className={alderneyStyle.description}>
          The customer wanted a space which would be low maintenance, seasonal interest, pond and fire pit.
          The southern coastal location of this garden meant it had rarely frosted with an abundance of sunshine.
          The soil was particularly poor quality so we added organic compost and the planting has been chosen suitable for the soil. 
        </div>
        <br></br>
        <div className={alderneyStyle.description}>
          The design composed of patio with planting islands, block paving, pond and fire pit seating area. 
          For the pond area we were able to reclaim stone already on site from an existing rockery.
        </div>
        <br></br>
        <div className={alderneyStyle.description}>
          The patio space in dotted with planting spaces which will be planted up with, a mixture of perennials and shrubs including Achillea, Corokia and Digitalis and a specimen rowan. 
          With the most sun exposed bed featured mediterranean style plants suited to the aspect and poor soil, such as lavendar, nepeta, verbena and sedum. 
          A fire pit area was created to give the clients an area to enjoy the warm summer evenings, whilst offering privacy from the house. 
          The bespoke fire pit was constructed to complement the patio material.
        </div>
        <br></br>
        <div className={alderneyStyle.description}>
          (The project was carried out over winter and the pictures taken before majority of planting occurred 
          so we really look forward to seeing how it looks after the planting and the space develops) 
        </div>
          <div style={{padding:'20px'}} ><Link to='/Pictures' style={{textDecoration: 'none', color: 'rgb(28, 70, 54)'}}><div style={{textAlign: 'center', padding: '10px',borderRadius: '15px', border: 'rgb(28, 70, 54) solid 2px', width: '160px', margin:'auto' }} > Back to Pictures</div></Link></div>
        </div>
    
        
        
        );
    };
}
    
export default AlderneyGarden;