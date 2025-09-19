import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggle from './ThemeToggle';
import { motion } from "motion/react"

const Navbar = ({theme, setTheme}) => {

const [sideOpen, setSideOpen] = useState(false);

const handleSideBar = () => {
    setSideOpen((prev) => !prev);
}

  return (
    <motion.div
    
    initial={{opacity:0,y:-50}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.6, ease:'easeInOut'}}
    
    className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>
        
        <img src={theme === 'dark'? assets.logo_dark : assets.logo} alt="" className='w-32 sm:w-40'/>
        
        <div className={`
              text-gray-700 
              dark:text-white 
                sm:text-sm 
                ${sideOpen ? 'max-sm:w-63 max-sm:pl-10 ' : 'max-sm:w-0 overflow-hidden'}
                max-sm:fixed 
                top-0 right-0
                max-sm:min-h-screen 
                max-sm:h-full 
                flex 
                max-sm:flex-col 

                max-sm:bg-primary 
                max-sm:text-white 
                max-sm:pt-20 
                sm:items-center 
                gap-5 
                transition-all`}>

          <img src={theme === 'dark' ? assets.close_icon : assets.close_icon} alt="" 
          className={sideOpen? 'w-5 absolute right-4 top-4 sm:hidden' : 'hidden'} onClick={handleSideBar}/>

         <a href="#" onClick={() => setSideOpen(false)} className='sm:hover:border-b'>Home</a>
            <a href="#services" onClick={() => setSideOpen(false)} className='sm:hover:border-b'>Services</a>
            <a href="#our-work" onClick={() => setSideOpen(false)} className='sm:hover:border-b'>Our Work</a>
            <a href="#Contact-us" onClick={() => setSideOpen(false)} className='sm:hover:border-b'>Contact Us</a>
        </div>

        <div className='flex items-center gap-2 sm:gap-4'>
        <ThemeToggle theme={theme} setTheme={setTheme}/>
          <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt=""   className={sideOpen ? 'hidden' : 'w-5 absolute right-4 top-6 sm:hidden'} onClick={handleSideBar}/>
          <a href="#contact-us" className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>
            Connect <img src={assets.arrow_icon} width={14}/>
          </a>
        </div>
    </motion.div>
  )
}

export default Navbar