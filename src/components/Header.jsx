import React from 'react'
import LightModeImg from '../assets/brightness.png'
import DarkModeImg from '../assets/night-mode.png'

const Header = () => {
  return (
    <header className='w-full py-6  bg-slate-100 shadow-md'>
        <nav className='max-w-5xl mx-auto flex'>
            <a href="#" className='text-4xl text-cyan-800 font-semibold transition-all duration-700 hover:scale-105'>Anil Kumar</a>
            <div className='ms-auto flex justify-between items-center gap-12'>
                <ul className='list-none flex gap-8 text-lg font-medium'>
                    <li className='transition-all duration-300 hover:text-cyan-600 hover:translate-x-1 focus:text-cyan-700'><a href="/" className='active:text-cyan-700'>Home</a></li>
                    <li className='transition-all duration-300 hover:text-cyan-600 hover:translate-x-1 focus:text-cyan-700'><a href="#about" className='active:text-cyan-700'>About</a></li>
                    <li className='transition-all duration-300 hover:text-cyan-600 hover:translate-x-1 focus:text-cyan-700'><a href="#skills" className='active:text-cyan-700'>Skills</a></li>
                    <li className='transition-all duration-300 hover:text-cyan-600 hover:translate-x-1 focus:text-cyan-700'><a href="#projects" className='active:text-cyan-700'>Projects</a></li>
                    <li className='transition-all duration-300 hover:text-cyan-600 hover:translate-x-1 focus:text-cyan-700'><a href="#contact" className='active:text-cyan-700'>Contact</a></li>
                </ul>
                <button className=''>
                  <img src={DarkModeImg} alt="" width={32} />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Header