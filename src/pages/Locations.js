import React from 'react';
import {motion} from 'framer-motion';
import Loc from './../components/Locations/Loc'

function Locations() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
      <Loc/>
    </motion.div>
  )
}

export default Locations