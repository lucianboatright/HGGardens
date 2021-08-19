import React, {Component} from 'react';
import logo from './img/HugoLogo_small.png'
import emailLogo from './img/Email_logo_copy.png'
import phoneLogo from './img/Phone_logo_copy.png'
import navbar from "./Styling/Navbar.module.css"
import grassImage from '../ImageGallery/pngwing.com(1).png'

import {Link} from 'react-router-dom'

class Navbar extends Component {

    state={
        isOpen: false,
    }

    menuClick = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    

    render(){
        return (
            <nav className={navbar.navbar}>
                <div className={navbar.logoBtn}>

                    <div className={navbar.logo}>
                        <Link to="/Home"><img src={logo} alt=""></img></Link>
                    </div>
                    <div className={navbar.contactinfo}>
                        <div className={navbar.flexContainer}>
                            <div className={navbar.flexItem}>
                                <a href="ArchitectureWork.html"><img src={grassImage} width="auto" height="60" alt="" /></a>
                                <Link className={navbar.contactLink} to="/Contact" ><img src={emailLogo} alt="" style={{ paddingRight:'10px', height: '1rem'}} /><div className="contactName">    Info@hbgardens.co.uk</div></Link>
                                {/* <a href="ArchitectureWork.html"><h3 style={{ textAlign: "center" }}>Tekst1</h3></a> */}
                            </div>
                        </div>
                        {/* <div className={navbar.phonecontact}>
                            <Link className={navbar.contactLink} to="/Contact" ><img src={emailLogo} alt="" style={{paddingRight:'10px'}} /><div className="contactName">    Info@hbgardens.co.uk</div></Link>
                            <img className={navbar.zoom} src={grassImage} alt="image" />
                        </div> */}
                        <div className={navbar.phonecontact}>
                            <Link className={navbar.contactLink} to="/Contact" ><img src={phoneLogo} alt=""style={{paddingRight:'10px'}} /><div className="contactPhone">    07895785400 </div></Link>
                        </div>
                    </div>

                    <div className={navbar.btn} onClick={this.menuClick}>
                        <div className={navbar.bar}></div>
                        <div className={navbar.bar}></div>
                        <div className={navbar.bar}></div>
                        <div className={navbar.bar}></div>
                    </div>              
                </div>
                    
                <div className={navbar.motto} style={{ textAlign: 'center'}}><h2>DESIGN / INSTALL / MAINTAIN</h2></div>

                <div className={navbar.page_link}>
                    <ul className={navbar.nav}>
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Pictures">Pictures</Link></li>
                        <li><Link to="/Services">Services</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>
          </nav>
        )
    }
}

export default Navbar;