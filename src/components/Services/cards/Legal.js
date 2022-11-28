import React from 'react'
import legIcon from '../../../icons/legal.png'
import './Legal.css'
import {motion} from 'framer-motion';

function Legal() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    className='legal-card'>
      <div class="listOne">
        <ul>
          <li>Partnering in Business Strategy</li>
          <li>Opinion & Advisory</li>
          <li>Management of Legal Risk</li>
          <li>Management of Reputational Risk</li>
        </ul>
      </div>
      <img src={legIcon} alt="" className='legIcon'/>
      <div class="listTwo">
        <ul>
          <li>Structural Advisory & Documentation</li>
          <li>Communication Management</li>
          <li>Compliance Implementation</li>
        </ul>
      </div>
    </motion.div>
    
  )
}

export default Legal