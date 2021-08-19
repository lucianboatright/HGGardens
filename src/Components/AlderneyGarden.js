

import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';


import alderneyStyle from "./Styling/AlderneyGarden.module.css"

import image1 from './img/IMG-20201214-WA0000(1)_copy.jpg'
import image2 from './img/IMG-20201214-WA0005(1)_copy.jpg'
import image3 from './img/IMG-20210105-WA0007(1)_copy.jpg'
import image4 from './img/IMG-20210129-WA0000.jpg'
import image5 from './img/IMG-20210129-WA0001.jpg'
import image6 from './img/IMG-20210129-WA0002.jpg'
import image7 from './img/IMG-20210129-WA0003.jpg'






class AlderneyFinish extends Component {
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
    centerMode={true}
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
                <div><img src={image1} alt=""  style={{width:'auto', height:'350px'}} /></div>
                <div><img src={image2} alt=""  style={{width:'auto', height:'350px'}} /></div>
                <div><img src={image3} alt=""  style={{width:'auto', height:'350px'}} /></div>
                <div><img src={image4} alt=""  style={{width:'auto', height:'350px'}} /></div>
                <div><img src={image5} alt=""  style={{width:'auto', height:'350px'}} /></div>
                <div><img src={image6} alt=""  style={{width:'auto', height:'350px'}} /></div>
                <div><img src={image7} alt=""  style={{width:'auto', height:'350px'}} /></div>
        </Carousel>
              
        </div>
        <div className={alderneyStyle.description}>This garden was a great oppertunity for me to design and build for a client who wanted a complete change. 
          The garden is a family garden though it is mainly designed around the parents who live there.
          As you can see from the images the garden had a lot of untamed growth leading to a lot of lost space. 
          There was a drive to keep and imporve certain parts of the garden like the herb bed and the area at the end of the 
          garden for relaxing and socialising. I also had the oppertunity to install pond to help suport wildlife and a fire pit for evening entertainment.  </div>
          <div style={{padding:'20px'}} ><Link to='/Pictures' style={{textDecoration: 'none', color: 'rgb(28, 70, 54)'}}><div style={{textAlign: 'center', padding: '10px',borderRadius: '15px', border: 'rgb(28, 70, 54) solid 2px', width: '160px', margin:'auto' }} > Back to Pictures</div></Link></div>
        </div>
    
        
        
        );
    };
}
    
export default AlderneyFinish;