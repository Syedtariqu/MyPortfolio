import React from 'react'
import "./Resume.css"
import { motion } from "framer-motion"
const resumeVariants = {
  hidden: {
    x: -50,
    opacity: 0
  },

  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 2,
      type: 'spring',
      stiffness: 100
    }
  }
}
const Card = (props) => {
  return (
    <>
      <div className="timeline_item" >
        <i class="fa-solid fa-graduation-cap"></i>
        <motion.h2
          className='timeline_title'
          variants={resumeVariants}
          initial="hidden"
          whileInView="visible">{props.name}</motion.h2>
        <motion.p
          className="timeline_text"
          variants={resumeVariants}
          initial="hidden"
          whileInView="visible">{props.degree}</motion.p>
        <motion.span
          className="timeline_date"
          variants={resumeVariants}
          initial="hidden"
          whileInView="visible"
        >{props.year}</motion.span>
      </div>
    </>
  )
}

export default Card;