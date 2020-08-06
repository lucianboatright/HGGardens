import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import about from './Styling/About.module.css'

import RHSlogo from './img/rhs-qualified.svg'
import InstHauto from './img/chart_logo.png'

class About extends Component {

    render(){

        return(
            <>
            <div className={about.about_container}>
                <div className={about.about_body}>
                    <br></br>
                    <h1>Bristol based lans scape gardener</h1>
                    <br></br>
                    <h3>Small team of expereinced and self sufficiant gardeners</h3>
                    <br></br>
                    <h3>Based in Bristol however please feel free to contact as we are open to traveling.</h3>
                    <h3>Feel free to message me and we can discuss the ideas</h3>
                    <br></br>
                </div>
                
                <div className={about.gardenLogos}>
                    <div className={about.RHS_box} id="rhs"><h3>HB Gardens and Landscapes are Qualified by the Royal Horticultural Society since 2017</h3>
                        <div className={about.RHS_logo}>
                            <Link to="https://www.horticulture.org.uk/"><img src={RHSlogo} alt="" /></Link>
                        </div>
                    </div>
                    <div className={about.holo_block}>
                        <div></div>
                    </div>
                    
                    <div className={about.RHS_box} id="hort"><h3>HB Gardens and Landscapes is also registered Chartered Insititute of Horticulture since 2018</h3>
                        <div className="hort_logo">
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