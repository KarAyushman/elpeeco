import React from 'react';
import Contacts from '../components/Contacts/Contacts'
import {motion} from 'framer-motion';

function Contact() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
      <Contacts/>
    </motion.div>
  )
}

export default Contact