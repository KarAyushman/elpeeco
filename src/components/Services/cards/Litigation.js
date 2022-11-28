import React from 'react'
import litIcon from '../../../icons/litigation.png'
import './Litigation.css'

import {motion} from 'framer-motion';

function Litigation() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    className='litigation-card'>
      <div class="listOne">
        <ul>
          <li>Retail Insurance Disputes</li>
          <li>Special Insurance Disputes</li>
        </ul>
      </div>
      <img src={litIcon} alt="" className='legIcon'/>
      <div class="listTwo">
        <ul>
          <li>Management of Liability Claims</li>
          <li>Litigation Reporting</li>
        </ul>
      </div>
    </motion.div>
    
  )
}

export default Litigation