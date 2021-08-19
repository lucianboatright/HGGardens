import React, {Component} from 'react';
import logo from './img/HugoLogo_small.png'
import emailLogo from './img/Email_logo_copy.png'
import phoneLogo from './img/Phone_logo_copy.png'
import navbar from "./Styling/Navbar.module.css"
import flower from './img/largeYelow.png'


import {Link} from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'Item';
        // // 1. bind your functions in the constructor.
        // this.mouseOver = this.mouseOver.bind(this);
        // this.mouseOut = this.mouseOut.bind(this);
        this.state = {
            hover: false,
            isOpen: false,
        };
    }

    mouseOverEmail = () => {
        this.setState({hover: true});
        console.log();
    }
    mouseOutEmail = () => {
        this.setState({hover: false});
    }
    mouseOverPhone = () => {
        this.setState({hover: true});
        console.log();
    }
    mouseOutPhone = () => {
        this.setState({hover: false});
    }

    menuClick = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    

    render() {
        return (
            <nav className={navbar.navbar}>
                <div className={navbar.logoBtn}>

                    <div className={navbar.logo}>
                        <Link to="/Home"><img src={logo} alt=""></img></Link>
                    </div>
                    <div className={navbar.contactinfo}>
                        <div className={navbar.phonecontact} style={{ paddingBottom: '0.5rem' }}>
                            <Link className={navbar.contactLink} to="/Contact" onMouseOver={this.mouseOverEmail} onMouseOut={this.mouseOutEmail}>
                                {this.state.hover ? (<div><img src={flower} style={{ height: '1rem', display: 'inline' }}/><div style={{ display: 'inline' }} className="contactName">Info@hbgardens.co.uk</div></div>) : <div><img src={emailLogo} alt="" style={{paddingRight:'10px', display: 'inline' }} /><div style={{ display: 'inline' }} className="contactName">Info@hbgardens.co.uk</div></div>} 
                            </Link>
                        </div>
                        <div className={navbar.phonecontact} style={{ paddingBottom: '0.5rem' }}>
                            <Link className={navbar.contactLink} to="/Contact" onMouseOver={this.mouseOverPhone} onMouseOut={this.mouseOutPhone}>
                                {this.state.hover ? (<div><img src={flower} style={{ height: '1rem', display: 'inline' }}/><div style={{ display: 'inline' }} className="contactName">07895785400</div></div>) : <div><img src={phoneLogo} alt="" style={{paddingRight:'10px', display: 'inline' }} /><div style={{ display: 'inline' }} className="contactName">07895785400</div></div>}                             </Link>
                        </div>
                        {/* <div className={navbar.phonecontact}>
                            <Link className={navbar.contactLink} to="/Contact" ><img src={phoneLogo} alt=""style={{paddingRight:'10px'}} /><div className="contactPhone">    07895785400 </div></Link>
                        </div> */}
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