import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import gardenStyle from "./Styling/WallGarden.module.css"

import image1 from './img/vertical-pallet-garden-grey-wall-lawn-creative-diy-succulents-decoration_copy.jpg'
import image2 from './img/vertical-white-pallet-flower-garden-stone-decorated copy.jpg'
import image3 from './img/very-happy-with-how-this-pallet-herb-garden-turned-out. copy.jpg'
import image4 from './img/6597098_orig_copy.jpg'
import image5 from './img/palletgarden_annegibson-560x410 copy.jpg'
import image6 from './img/PGI34-600x400 copy.jpg'




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

class WallGarden extends Component {
     render() {   
    return (
          <div         style={{
            paddingBottom: '30px',
            position: 'relative'
          }} >
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                renderDotsOutside="renderButtonGroupOutside"
            >
                <div><img src={image1} alt="" style={{width:'400px', height:'350px'}} /></div>
                <div><img src={image2} alt=""  style={{width:'400px', height:'350px'}} /></div>
                <div><img src={image3} alt=""  style={{width:'400px', height:'350px'}} /></div>
                <div><img src={image4} alt=""  style={{width:'400px', height:'350px'}} /></div>
                <div><img src={image5} alt=""  style={{width:'400px', height:'350px'}} /></div>
                <div><img src={image6} alt=""  style={{width:'400px', height:'350px'}} /></div>

        </Carousel>
        <div className={gardenStyle.description}>Above you can see a range of garden planters. 
        We are keen to upcycle so we have used palets to create walled gardens whcih take up much less space and offten covers an ugly spot in the garden, turing it into a beautiful and useful attraction. 
        We have also done this with fruit and veg baskets, again making great use of someone else's rubbish  </div>
          <div style={{padding:'20px'}} ><Link to='/Pictures' style={{textDecoration: 'none', color: 'rgb(28, 70, 54)'}}><div style={{textAlign: 'center', padding: '10px',borderRadius: '15px', border: 'rgb(28, 70, 54) solid 2px', width: '160px', margin:'auto' }} > Back to Pictures</div></Link></div>
        </div>
    
       
        
        );
    };
}
    
export default WallGarden;