import React, {Component} from 'react';

import { Helmet, Hemlet } from 'react-helmet'

import home from "./Styling/Home.module.css"

import logo from  './img/HugoLogo.png'

class Home extends Component {

    render(){

        return(
            <div className={home}>
                <Helmet>
                    <title>HB Gardens</title>
                </Helmet>
                <div className={home.text}>
                    <h1 style={{color: 'rgb(28, 70, 54)'}}>Welcome to HB Gardens and Landscapes</h1>
                </div>
                <div className={home.logo}>
                    <img src={logo} alt=""/>
                </div>
                <div style={{ maxWidth: '60rem', color: 'rgb(28, 70, 54)', marginRight: 'auto', marginLeft: 'auto' }} >
                    <br></br>
                        <h1 style={{ textAlign: 'center' }}>We are a Bristol based gardening, landscaping and design company, Managing and carring out care for the garden to help it develop and thrive</h1>
                    <br></br>
                </div>
            </div>
        )
    }
}

export default Home;