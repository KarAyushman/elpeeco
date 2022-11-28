import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './../pages/Home'
import Media from './../pages/Media'
import Service from './../pages/Service'
import Locations from './../pages/Locations'
import Contact from './../pages/Contact'

import { AnimatePresence } from "framer-motion"

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/services' element={<Service/>}/>
                <Route exact path='/media' element={<Media/>}/>
                <Route exact path='/locations' element={<Locations/>}/>
                <Route exact path='/contact-us' element={<Contact/>}/>

            </Routes>
        </AnimatePresence>
  )
}

export default AnimatedRoutes