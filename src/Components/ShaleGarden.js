

import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import alderneyStyle from "./Styling/AlderneyGarden.module.css"

import image1 from './img/garden_patio_02.jpg'
import image2 from './img/full_garden_design.jpg'
import image3 from './img/IMG-20210105-WA0007(1)_copy.jpg'
import image4 from './img/Garden_fencing_05.jpg'
import image5 from './img/garden_pond_03.jpg'
import image6 from './img/IMG-20210129-WA0002.jpg'
import image7 from './img/IMG-20210129-WA0003.jpg'


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.

class ShaleGarden extends Component {
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
    
export default ShaleGarden;