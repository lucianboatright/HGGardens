import React, { Component } from 'react';


import image1 from './img/garden_design_01.jpg'
import image2 from './img/garden_design_2.jpg'
import image3 from './img/garden_design_04.jpg'

import "./Styling/ServicesDesign.css"

class Design2 extends Component {
  render() {
    return (
     

    <div class="wrapper">
        {/* <header class="header">Header</header> */}
        <article class="main">
            <p style={{fontWeight: "bold"}}>Initial Meeting and Prelim Design</p>  
            <p style={{ textAlign: "justify"}}>Involve meeting with the customer to discuss ideas, themes, requirements and budget. This will lead to a preliminary design concept, which will include features, styles & planting.</p>  
            <br></br>
            <p style={{fontWeight: "bold"}}>Design Plans</p>  
            <p style={{ textAlign: "justify"}}>Upon confirmation of the design concept and more detailed plan will be created. Including greater details on dimensions, specific materials and features. (This will include construction drawings and planting plans where appropriate)</p>  
            <br></br>
            <p style={{fontWeight: "bold"}}>Design Handover or Installation</p>  
            <p style={{ textAlign: "justify"}}>Depending whether the project included installation or design. </p>  
            <br></br>
            <p style={{fontWeight: "bold"}}>General Maintenance</p>  
            <p style={{ textAlign: "justify"}}>Follow up maintenance specification to the individual project and plant requirments.</p>  
            <p style={{ textAlign: "justify"}}>We are able to come for scheduled regular visits through out the year, seasonal or one off. </p>  
            <p style={{ textAlign: "justify"}}>Depending on the time of year…..( new line )</p>  
            <p style={{ textAlign: "justify"}}>We would be happy to discuss your specific garden requirements individually. Call or email Hugo to book an appointment. (new line and slight text change)</p>  
            <br></br>
            <p style={{fontWeight: "bold"}}>Hedge Trimming</p>  
            <p style={{ textAlign: "justify"}}>Cutting carried out with well maintained sharp tools, </p>  
            <p style={{ textAlign: "justify"}}>At the best time of year for appearance and to benefit plant health. (not current text from site)</p>  
            <br></br>
            <p style={{fontWeight: "bold"}}>Planting and Pruning</p>  
            <p style={{ textAlign: "justify"}}>We are able to source plants required and suggest suitable schemes for your garden.</p>  
            <p style={{ textAlign: "justify"}}>Out team has experience prunning and cutting as required.</p>  
        </article>
        <aside style={{fontWeight: "bold", fontSize: "50px", color: "rgb(199, 68, 24)"}} class="aside aside-1">Design</aside>
        <aside class="aside aside-2">  
            <img class="img" alt="complex" src={image1} />
            <br></br>
            <img class="img" alt="complex" src={image2} />
            <br></br>
            <img class="img" alt="complex" src={image3} />
        </aside>
        
    </div>


    );
  }
}
export default Design2;