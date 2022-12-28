import React from 'react'
import web from "../assets/Home/pic2.svg";
import "./About.css";
import LineGradient from "../LineGradient";
import { motion } from "framer-motion"
const titleVariants = {
  hidden: {
    y: 50,
    opacity: 0
  },

  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 2,
      type: 'spring',
      stiffness: 100
    }
  }
}
const About = () => {
  return (
    <>
      <section id='header' className='d-flex align-items-center justify-around '  >
        <div className=' container-fluid '>
          <div className='row'>
            <div className='col-10 mx-auto high'>
              <div className='row'>
                <div className=' para col-md-6 pt-3 pt-lg-5 order-2 order-lg-1 d-flex flex-column'>
                  <motion.h1
                    className="a-title text-left "
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                  >About <span>Me</span></motion.h1>
                  <LineGradient width='w-1/2' />
                  <motion.h2 className='leading-9 mt-7 text-xl'
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible">
                    Hi there!
                    I'm Syed Tarique Abedin ,
                    I'm a third year B.Tech CSE student of Netaji Subhash Engineering College .
                    Currently I'm a FrontEnd Developer... I have hunger to learn new things to improve my skills . To know more about my skills download my Resume . 
                  </motion.h2>
                  <div className=' mt-3'>
                    <a href="Resume-1.pdf" download="Syed Resume-1.pdf">
                      <button class="btnn btnn-secondary"><i class="bi bi-download"></i> Download Resume</button>
                    </a>
                  </div>
                </div>
                <div className=' col-md-6  pb-5  order-1 order-lg-2 header-img'>
                  <img src={web} alt="about pic" className=" img-fluid  animated" style={{ height: "400px", width: "400px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About