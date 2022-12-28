import React from 'react'
import "./Skill.css"
import { motion } from "framer-motion"
const htmlvariants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "80%",
    transition: {
      delay: 0.2,
      duration: 1,
      type: "spring",
    }
  }
}
const cssvariants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "70%",
    transition: {
      delay: 0.2,
      duration: 1,
      type: "spring",
    }
  }
}
const jsvariants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "60%",
    transition: {
      delay: 0.2,
      duration: 1,
      type: "spring",
    }
  }
}
const reactvariants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "55%",
    transition: {
      delay: 0.2,
      duration: 1,
      type: "spring",
    }
  }
}
const fmvariants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "70%",
    transition: {
      delay: 0.2,
      duration: 1,
      type: "spring",
    }
  }
}

const Skill = () => {
  return (
    <>
      <section className="skill skills_section" id="skill">
        <div className="skills_head">
          <h1>My<span>Skills</span></h1>

        </div>
        <div className="skills_main">
          <div className="skill_bar">
            <div className="info">
              <h4>Html</h4>
              <h4>80%</h4>
            </div>
            <div className="bar">
              <motion.span variants={htmlvariants} initial="hidden" whileInView="visible" className="html"></motion.span>
            </div>
          </div>
          <div className="skill_bar">
            <div className="info">
              <h4>Css</h4>
              <h4>70%</h4>
            </div>
            <div className="bar">
              <motion.span variants={cssvariants} initial="hidden" whileInView="visible" className="css"></motion.span>
            </div>
          </div>

          <div className="skill_bar">
            <div className="info">
              <h4>Java Script</h4>
              <h4>60%</h4>
            </div>
            <div className="bar">
              <motion.span variants={jsvariants} initial="hidden" whileInView="visible" className="js"></motion.span>
            </div>
          </div>
          <div className="skill_bar">
            <div className="info">
              <h4>React Js</h4>
              <h4>55%</h4>
            </div>
            <div className="bar">
              <motion.span variants={reactvariants} initial="hidden" whileInView="visible" className="react"></motion.span>
            </div>
          </div>
          <div className="skill_bar">
            <div className="info">
              <h4>Framer Motion</h4>
              <h4>70%</h4>
            </div>
            <div className="bar">
              <motion.span variants={fmvariants} initial="hidden" whileInView="visible" className="fm"></motion.span>
            </div>
          </div>


        </div>

      </section>
    </>
  )
}

export default Skill ;