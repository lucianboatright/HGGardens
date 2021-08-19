

import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';


import alderneyStyle from "./Styling/AlderneyGarden.module.css"

import image1 from './img/roundgarden_1.jpg'
import image2 from './img/roundgarden4.jpg'
import image3 from './img/shale04garden.jpg'
import image4 from './img/hedge-2928338_1920.jpg'
import image5 from './img/trimmed-hedge-3414725_1920.jpg'



class PalletGarden extends Component {
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
                <div><img src={image5} alt=""  style={{width:'auto', height:'350px'}} /></div>
                <div><img src={image1} alt=""  style={{width:'auto', height:'350px'}} /></div>
                <div><img src={image2} alt=""  style={{width:'auto', height:'350px'}} /></div>
                <div><img src={image3} alt=""  style={{width:'auto', height:'350px'}} /></div>
                <div><img src={image4} alt=""  style={{width:'auto', height:'350px'}} /></div>
            
   
        </Carousel>
              
        </div>
        <div className={alderneyStyle.description}>We maintain many gardens of all sizes and types. 
        We work on lawns, hedge trimming and many more like stone gardens. 
        All these gardens require different types of care from feeding, cleaning or trimming.  </div>
          <div style={{padding:'20px'}} ><Link to='/Pictures' style={{textDecoration: 'none', color: 'rgb(28, 70, 54)'}}><div style={{textAlign: 'center', padding: '10px',borderRadius: '15px', border: 'rgb(28, 70, 54) solid 2px', width: '160px', margin:'auto' }} > Back to Pictures</div></Link></div>
        </div>
    
        
        
        );
    };
}
    
export default PalletGarden;