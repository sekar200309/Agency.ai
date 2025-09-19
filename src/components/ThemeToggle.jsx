import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggle = ({theme, setTheme}) => {
 const ChangeTheme = () =>{
    const newTheme = theme === 'dark'? 'light' : 'dark';
    setTheme(newTheme);
 }

 useEffect(() => {
    const preferDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(theme || (preferDarkMode ? 'dark' : 'light'))
 }, [])

 useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme)
 }, [theme]);

  return (
    <>
        <button onClick={ChangeTheme} className='cursor-pointer max-sm:mr-8' >
            {theme === 'dark'?(
                <img 
                src={assets.sun_icon} 
                className='size-8.5 p-1.5 border border-gray-500 rounded-full'
                />
                ) : (
                <img
                src={assets.moon_icon} 
                className='size-8.5 p-1.5 border border-gray-500 rounded-full' />)}
        </button>
    </>
  )
}

export default ThemeToggle