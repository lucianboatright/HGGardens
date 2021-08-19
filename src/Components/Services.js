

import React from 'react'
import Install from './Services_Install'
import Maintaining from './Services_Maintain'
import Design from './Services_Design'
import { Helmet } from 'react-helmet'

import Design2 from './Services_Design_flexgrid'
import Install2 from './Services_Install_flexgrid'
import Maintain2 from './Services_Maintain_flexgrid'
 
const Services = () => {


  return (

   <>
   <Helmet>
     <title>HB Gardens | Services</title>
   </Helmet>
    
    <Design2 />

    <Install2 />

    <Maintain2 />

   {/* <Design className="install_box">
   </Design>

    <Install className="install_box" > 
    </Install>

    <Maintaining className="install_box" > 
    </Maintaining> */}

   
   

    </>
  )
}
export default Services