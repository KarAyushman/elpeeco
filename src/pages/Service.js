import React from 'react';
import {motion} from 'framer-motion';
import Services from '../components/Services/Services';

function Service() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}><Services/></motion.div>
  )
}

export default Service