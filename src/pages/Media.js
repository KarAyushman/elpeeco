import React from 'react'
import {motion} from 'framer-motion';
import Articles from './../components/Articles/Articles'

function Media() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
      <Articles/>      
    </motion.div>
  )
}

export default Media