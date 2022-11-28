import React from 'react'
import ComIcon from '../../../icons/compliance.png'
import './Compliance.css'
import {motion} from 'framer-motion'

function Compliance() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    className='compliance-card'>
      <div class="listOne">
        <ul>
          <li>Management of Routine Compliance</li>
          <li>Compliance Risk Evaluation and Advisory</li>
          <li>Product Development and Structuring</li>
          <li>Special Regulatory Approvals</li>
        </ul>
      </div>
      <img src={ComIcon} alt="" className='legIcon'/>
      <div class="listTwo">
        <ul>
          <li>Management of Enforcement Procedures</li>
          <li>Designing Processes for Compliance to AML</li>
          <li>Education & Training</li>
          <li>Industry Policy and Innovation</li>
        </ul>
      </div>
    </motion.div>
    
  )
}

export default Compliance