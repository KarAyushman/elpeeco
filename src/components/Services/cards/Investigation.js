import React from 'react'
import invIcon from '../../../icons/investigation.png'
import './Investigation.css'
import {motion} from 'framer-motion'

function Investigation() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    className='investigation-card'>
      <div class="listOne">
        <ul>
          <li>Fraud Risk Management</li>
          <li>Investigation and Forensic</li>
        </ul>
      </div>
      <img src={invIcon} alt="" className='legIcon'/>
      <div class="listTwo">
        <ul>
          <li>Asset Tracking</li>
          <li>Asset Identification</li>
        </ul>
      </div>
    </motion.div>
    
  )
}

export default Investigation