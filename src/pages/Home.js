import React from 'react'
import Landing from './../components/Landing/Landing';
import {motion} from 'framer-motion';

function Home() {
  return (
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}>
        <Landing/>
    </motion.div>
    
  )
}

export default Home