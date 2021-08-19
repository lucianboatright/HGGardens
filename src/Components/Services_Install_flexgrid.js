import React, { Component } from 'react';


import image1 from './img/garden_fencing_02.jpg'
import image3 from './img/garden_patio_02.jpg'
import image2 from './img/full_garden_design.jpg'

import "./Styling/ServicesDesign.css"

class Install extends Component {
  render() {
    return (
     

    <div class="wrapper">
        {/* <header class="header">Header</header> */}
        <article class="main">
            <p style={{fontWeight: "bold", textAlign: "right"}}>Fencing</p>  
            <p style={{ textAlign: "right"}}>We can construct fences in traditional feather edge style or fabricate fences in more contemporary forms.</p>  
            <br></br>
            <p style={{fontWeight: "bold", textAlign: "right"}}>Patios</p>  
            <p style={{ textAlign: "right"}}>Using natural stone or pre-formed concrete.</p>  
            <br></br>
            <p style={{fontWeight: "bold", textAlign: "right"}}>Ponds</p>  
            <p style={{ textAlign: "right"}}>Water features can add further interest in the garden and will be great for wildlife.</p>  
            <br></br>
            <p style={{fontWeight: "bold", textAlign: "right"}}>Soft Landscaping</p>  
            <p style={{ textAlign: "right"}}>Variety of different “soft” practices: turfing, meadow creation, planting of schemes, specimen and hedge. Both domestic and commercial</p>  
        </article>
        <aside style={{fontWeight: "bold", fontSize: "50px", color: "rgb(199, 68, 24)"}} class="aside aside-1">
            <img class="img" alt="complex" src={image1} />
            <br></br>
            <img class="img" alt="complex" src={image2} />
            <br></br>
            <img class="img" alt="complex" src={image3} />
        </aside>
        <aside style={{fontWeight: "bold", fontSize: "50px", color: "rgb(199, 68, 24)"}} class="aside aside-2">  
         Install
        </aside>
        
    </div>


    );
  }
}
export default Install;