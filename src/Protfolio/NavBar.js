import { useState, React } from 'react'
import "./NavBar.css"
import { motion } from "framer-motion"
import icon from "../assets/Home/icon-close.svg"
import icon1 from "../assets/Home/icon-hamburger.svg"
const navVariants = {
  hidden: {
    y: -250,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 120
    }
  }

}

const NavBar = () => {
  let [open, setOpen] = useState(false)
  return (
    <>
      <nav className="navbar ">
        <motion.div
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center w-full justify-center">
          <div className="z-50 p-5  items-center md:w-auto w-full flex justify-between">
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              <img src={(open) ? icon : icon1} className="md:hidden z-3 pad fixed right-5 cursor-pointer z-20 top-10" />
            </div>
          </div>
          <ul className="md:flex hidden  items-center gap-4 font-[Poppins]">
            <li className='nav-item'>
              <a className="text-white cursor-pointer py-3 px-3 inline-block" href='#home'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className="text-white cursor-pointer py-3 px-3 inline-block" href='#header'>
                AboutMe
              </a>
            </li>
            <li className='nav-item'>
              <a className="text-white cursor-pointer py-3 px-3 inline-block" href='#resume'>
                Resume
              </a>
            </li>
            <li className='nav-item'>
              <a className="text-white cursor-pointer py-3 px-3 inline-block" href='#skill'>
                Skills
              </a>
            </li>
            <li className='nav-item'>
              <a className="text-white cursor-pointer py-3 px-3 inline-block" href='#project'>
                Projects
              </a>
            </li>
            <li className='nav-item'>
              <a className="text-white cursor-pointer py-3 px-3 inline-block" href='#contact'>
                ContactMe
              </a>
            </li>

          </ul>

          {/* Mobile nav */}
          <ul
            className={`
        md:hidden blu fixed w-full top-0 z-40 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
          >
            <li className='nav-items'>
              <a onClick={() => { setOpen(false) }} href="#home" className="py-7 cursor-pointer text-white px-3 inline-block">
                Home
              </a>
            </li>
            <li className='nav-items'>
              <a onClick={() => { setOpen(false) }} className="py-7 text-white px-3 cursor-pointer  inline-block" href='#header'>
                AboutMe
              </a>
            </li>
            <li className='nav-items'>
              <a onClick={() => { setOpen(false) }} className="py-7 text-white px-3 cursor-pointer inline-block" href='#resume'>
                Resume
              </a>
            </li>
            <li className='nav-items'>
              <a onClick={() => { setOpen(false) }} className="py-7 text-white px-3 cursor-pointer inline-block" href='#skill'>
                Skills
              </a>
            </li>
            <li className='nav-items'>
              <a onClick={() => { setOpen(false) }} className="py-7 text-white px-3 cursor-pointer inline-block" href='#project'>
                Projects
              </a>
            </li>
            <li className='nav-items'>
              <a onClick={() => { setOpen(false) }} className="py-7 px-3 cursor-pointer text-white inline-block " href='#contact'>
                ContactMe
              </a>
            </li>
          </ul>
        </motion.div>
      </nav>

    </>
  )
}

export default NavBar ;