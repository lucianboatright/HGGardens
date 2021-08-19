import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet'

import about from './Styling/About.module.css'

import RHSlogo from './img/rhs-qualified.svg'
import InstHauto from './img/chart_logo.png'

class About extends Component {

    render(){

        return(
            <>
            <Helmet>
                <title>HB Gardens | About</title>
            </Helmet>
            <div className={about.about_container}>
                <div className={about.about_body}>
                </div>
                <div className={about.motto}><h1>DESIGN / MAINTAIN / INSTALL</h1></div>
                    <br></br>
                <div className={about.about_body}>
                    {/* <h2>We cover all of Gloucestershire and Somerset and areas surrounding </h2> */}
                    <h2> We offer a wide range of services </h2>
                    <h2> Based in Bristol but covering all of Gloucestershire and Somerset.</h2>
                  
                    <br></br>
                    {/* <h3>We have an expereinced team to build and maintian gardens of all types and sizes</h3>
                    <h3>Our Team is expereinces in working on gardens at all times of the year, weather you are looking to redesign your garden in winter, </h3>
                    <h3>plant in spring or maintian throughout the summer.</h3> */}
                    <h3>We focus our work on quality and the enhancement of the garden </h3>
                    <h3>Managing and carry out care for a garden to help it to develop and thrive. </h3>
                    {/* <h3>or more regimented gardens with pools, fountains and patios</h3> */}
                    <h3>All our work is realised with the long-term as well as short-term perspective in mind, producing a high quality finish. </h3>
                    <br></br>
                    {/* <h3>We are fully tooled and have expereince renting and using heavy machinery as well.</h3> */}
                    <h3>Whether you garden is large or small, formal or informal we are always happy to make it a special and loved space.</h3>
                    <br></br>
                    {/* <h3>Working in scheduled sessions we are able to give seasonal and timely care to the garden and plants, keeping it looking it's best.</h3>
                    <h3>Depending on the season that may be pruning, lawn care and top dressing borders with chippings or mulch.</h3>
                    <h3>Other times that it could be weeding, deadheading, grass cutting and hedge cutting.</h3>
                    <h3>The work required varies greatly and we are able to provide a complete service. </h3> */}
                    <br></br>
                    {/* <h2>Based in Bristol but we cover all of Gloucestershire and Somerset and areas surrounding. </h2>
                    <br></br> */}
                </div>
                
                <div className={about.gardenLogos}>
                    <div className={about.RHS_box} id="rhs"><h3>Qualified by the Royal Horticultural Society since 2016</h3>
                        <div className={about.RHS_logo}>
                            <Link to="https://www.horticulture.org.uk/"><img src={RHSlogo} alt="" /></Link>
                        </div>
                    </div>
                    <div className={about.holo_block}>
                        <div></div>
                    </div>
                    
                    <div className={about.RHS_box} id="hort"><h3>Registered Chartered Insititute of Horticulture since 2018</h3>
                        <div className={about.hort_logo}>
                            <Link to="https://www.rhs.org.uk/advice/profile?pid=403"><img src={InstHauto} alt="" /></Link>
                        </div>
                    </div>
                </div>
            </div>
            </>
        
        )
    }
}

export default About;