import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet'

import emailLogo from './img/Email_logo_copy.png'
import phoneLogo from './img/Phone_logo_copy.png'
import facebook from './img/Facebook.png'
// import whatsAppLogo from './img/whatsapp.jpg'
import image1 from './img/daffodil-3349706_1920.jpg'

import './Styling/Contact.css'



function openTab() {
    window.open('https://www.facebook.com/HBGDNS')
}

class Contact extends Component {

    render(){

        return(
            <>
            <Helmet>
                <title>HB Gardens | Contacts</title>
            </Helmet>
            <div className="Contact_body_main">
                <div className="contact_main_text">
                    <br></br>
                    <h1>Contact Details</h1>
                    <br></br>
                    <h2>We would love to hear from you, please get in touch</h2>
                    <h2>There are no costs for requests and enquiaries</h2>
                </div>
                <div className="contactinfobody">
                        <div className="emailcontactbody">
                            {/* <Link to="/Contact"><img src={emailLogo} alt=""/></Link>
                            <div className="contactNamebody">Hugo.Boatright@gmail.com</div> */}
                            {/* <Link  to="/Contact"><img src={emailLogo} alt="" /><div className="contactNamebody"> Hugo.Boatright@gmail.com</div></Link> */}
                            
                            <Link className={"contactNamebody"} to="/Contact" ><img src={emailLogo} alt=""/></Link>
                            <div className="contactName">    info@hbgardens.co.uk</div>
                        </div>
                        <br></br>
                        <div className="phonecontactbody">
                            <Link to="/Contact"><img src={phoneLogo} alt=""/></Link>
                            <div className="contactPhonebody">07895785400 - (We may be busy so please leave a message)</div>
                        </div>
                        {/* <div className="whatsappontact">
                            <ul><Link to="/Contact"><img src={whatsAppLogo} alt=""/></Link><div className="whatsappontact">077895785400</div></ul>
                        </div> */}
                        <br></br>
                        <div className="facebookcontactbody">
                            <Link onClick={openTab}><img src={facebook} alt="" /><div> HGBDNS - Facebook </div></Link>
                            
                        </div>
                        <div> 
                            <img src={image1} alt="" style={{padding:'20px', height:"300px", width: 'auto'}}/> 
                        </div>
                    </div>
            </div>
            </>
        )
    }
}

export default Contact;