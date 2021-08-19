import React, { Component } from 'react';

import image1 from './img/lawn-mower-2430725_1920.jpg'
import image2 from './img/shalegarden06.jpg'
import image3 from './img/grass-220465_1280.jpg'
import image4 from './img/garden_pond_03.jpg'

import "./Styling/ServicesDesign.css"

class Maintain extends Component {
  render() {
    return (
     

    <div class="wrapper">
        {/* <header class="header">Header</header> */}
        <article class="main">
            <p style={{fontWeight: "bold"}}>Lawn Mowing & Treatment</p>  
            <p style={{ textAlign: "justify"}}>Regular visits during the growing season also seasonal treatments to keep your grass in good condition.</p>  
            <br></br>
            <p style={{fontWeight: "bold"}}>Hedge Trimming</p>  
            <p style={{ textAlign: "justify"}}>Soft shapping and maintenance of hedges to keep them healthy from year to year. Trimming to promote growth in order to create partitions or low natural barriers. We can also give hedges a soft shaping or hard edges to smarten them up (no animals yet)</p>  
            <br></br>
            <p style={{fontWeight: "bold"}}>Planting</p>  
            <p style={{ textAlign: "justify"}}>We are able to source plant required and suggest suitable schemes for your garden.</p>  
            <br></br>
            <p style={{fontWeight: "bold"}}>Prunning</p>  
            <p style={{ textAlign: "justify"}}>Seasonal rose, fruit tree and shrub cutting carried out at the right time, best for the plant.</p>  
            <br></br>
            <p style={{fontWeight: "bold"}}>General Maintenance</p>  
            <p style={{ textAlign: "justify"}}>e can come for regular scheduled visits during the year or one off. Depending on the time of year the tasks may be pruning, feeding and weeding or top dressing and general tidying.
                    We would be happy to discuss your specific garden needs individually.
                    Call or email Hugo to book an appointment.</p>  
        </article>
        <aside style={{fontWeight: "bold", fontSize: "50px", color: "rgb(199, 68, 24)"}} class="aside aside-1">Maintain</aside>
        <aside class="aside aside-2">  
            <img class="img" alt="complex" src={image1} />
            <br></br>
            <img class="img" alt="complex" src={image2} />
            <br></br>
            <img class="img" alt="complex" src={image3} />
            <br></br>
            <img class="img" alt="complex" src={image4} />
        </aside>
        
    </div>


    );
  }
}
export default Maintain;